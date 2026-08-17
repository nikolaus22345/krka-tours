import type { InquiryPayload } from "@/lib/inquiry-schema";
import { SITE_EMAIL } from "@/lib/site-contact";

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

export async function sendInquiryEmail(data: InquiryPayload) {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS is not configured. Add EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID and EMAILJS_PUBLIC_KEY to your environment variables.",
    );
  }

  const source = data.source?.trim() || "Contact page";
  const subject = `${SITE_NAME} — upit s web stranice (${data.name})`;
  const inquirySummary = buildInquirySummary(data, source);

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
}
