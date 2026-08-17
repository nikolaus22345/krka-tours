import { createServerFn } from "@tanstack/react-start";
import { inquirySchema } from "@/lib/inquiry-schema";

export const sendInquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) {
      return { success: true as const };
    }

    const { sendInquiryEmail } = await import("@/lib/send-inquiry-email.server");
    await sendInquiryEmail(data);
    return { success: true as const };
  });
