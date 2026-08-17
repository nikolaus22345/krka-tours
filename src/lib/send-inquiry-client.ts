import type { InquiryPayload } from "@/lib/inquiry-schema";
import { SITE_EMAIL } from "@/lib/site-contact";

const SITE_NAME = "Krka Tours";

type FormSubmitResponse = {
  success?: string | boolean;
  message?: string;
};

function parseFormSubmitResponse(payload: FormSubmitResponse | null) {
  const success = payload?.success === true || payload?.success === "true";
  const message = payload?.message?.trim() ?? "";

  if (success) {
    return { ok: true as const, message };
  }

  if (/activat|confirm your email|check your email/i.test(message)) {
    return {
      ok: false as const,
      message: `FormSubmit needs a one-time activation. Check ${SITE_EMAIL} for the confirmation email, click the link, then try again.`,
    };
  }

  if (/web server|html files/i.test(message)) {
    return {
      ok: false as const,
      message: "Could not send from this page. Please email us directly or try again in a moment.",
    };
  }

  return {
    ok: false as const,
    message: message || "Failed to send the inquiry email. Please try again.",
  };
}

export async function sendInquiryViaFormSubmit(data: InquiryPayload) {
  const source = data.source?.trim() || "Contact page";
  const subject = `${SITE_NAME} — upit s web stranice (${data.name})`;

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(SITE_EMAIL)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
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
    }),
  });

  const payload = (await response.json().catch(() => null)) as FormSubmitResponse | null;
  const result = parseFormSubmitResponse(payload);

  if (!result.ok) {
    throw new Error(result.message);
  }
}
