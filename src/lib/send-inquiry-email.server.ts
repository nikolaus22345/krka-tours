import type { InquiryPayload } from "@/lib/inquiry-schema";
import { SITE_EMAIL } from "@/lib/site-contact";
import { SITE_ORIGIN } from "@/lib/site-seo";

const SITE_NAME = "Krka Tours";
const EMAILJS_SEND_URL = "https://api.emailjs.com/api/v1.0/email/send";

function formatField(label: string, value: string | number | undefined) {
  if (value === undefined || value === "") return "";
  return `${label}: ${value}`;
}

function buildInquirySummary(data: InquiryPayload, source: string) {
  const rows: Array<[string, string | number | undefined]> = [
    ["Page / source", source],
    ["Full name", data.name],
    ["Email", data.email],
    ["Tour or transfer", data.tour],
    ["Preferred date", data.date],
    ["Guests", data.guests],
    ["Pickup hotel", data.hotel],
  ];

  return [
    `New inquiry from the ${SITE_NAME} website`,
    "",
    ...rows
      .filter(([, value]) => value !== undefined && value !== "")
      .map(([label, value]) => formatField(label, value)),
    data.message ? ["", "Message:", data.message].join("\n") : "",
  ]
    .filter(Boolean)
    .join("\n");
}

async function sendViaEmailJs(data: InquiryPayload, source: string, subject: string, inquirySummary: string) {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return false;
  }

  const response = await fetch(EMAILJS_SEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      ...(privateKey ? { accessToken: privateKey } : {}),
      template_params: {
        subject,
        from_name: SITE_NAME,
        to_email: process.env.INQUIRY_TO_EMAIL ?? SITE_EMAIL,
        reply_to: data.email,
        name: data.name,
        email: data.email,
        tour: data.tour ?? "—",
        date: data.date ?? "—",
        guests: data.guests?.toString() ?? "—",
        hotel: data.hotel ?? "—",
        message: data.message ?? "—",
        source,
        inquiry_summary: inquirySummary,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "EmailJS failed to send the inquiry email.");
  }

  return true;
}

async function sendViaFormSubmit(data: InquiryPayload, source: string, subject: string, inquirySummary: string) {
  const to = process.env.INQUIRY_TO_EMAIL ?? SITE_EMAIL;
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: SITE_ORIGIN,
      Referer: `${SITE_ORIGIN}/contact`,
    },
    body: JSON.stringify({
      _subject: subject,
      _template: "table",
      _captcha: "false",
      _replyto: data.email,
      name: data.name,
      email: data.email,
      tour: data.tour ?? "—",
      date: data.date ?? "—",
      guests: data.guests?.toString() ?? "—",
      hotel: data.hotel ?? "—",
      message: data.message ?? "—",
      source,
      inquiry_summary: inquirySummary,
    }),
  });

  const payload = (await response.json().catch(() => null)) as
    | { success?: string | boolean; message?: string }
    | null;

  const ok =
    response.ok &&
    (payload?.success === true ||
      payload?.success === "true" ||
      String(payload?.message ?? "")
        .toLowerCase()
        .includes("sent"));

  if (!ok) {
    const message = payload?.message?.trim();
    if (message && /confirm|activate|check your email/i.test(message)) {
      throw new Error(
        `FormSubmit needs a one-time activation. Check ${to} for the confirmation email, click the link, then try again.`,
      );
    }
    throw new Error(message || "Failed to send the inquiry email. Please try again.");
  }
}

export async function sendInquiryEmail(data: InquiryPayload) {
  const source = data.source?.trim() || "Contact page";
  const subject = `${SITE_NAME} — upit s web stranice (${data.name})`;
  const inquirySummary = buildInquirySummary(data, source);

  const sentWithEmailJs = await sendViaEmailJs(data, source, subject, inquirySummary);
  if (sentWithEmailJs) return;

  await sendViaFormSubmit(data, source, subject, inquirySummary);
}
