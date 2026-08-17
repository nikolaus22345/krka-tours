import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendInquiryViaFormSubmit } from "@/lib/send-inquiry-client";
import { SITE_EMAIL, SITE_PHONE_DISPLAY } from "@/lib/site-contact";

type Props = {
  defaultTour?: string;
  source?: string;
};

export function ContactInquiryForm({ defaultTour = "", source = "Contact page" }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const website = String(formData.get("website") ?? "");

    if (website) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      await sendInquiryViaFormSubmit({
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        tour: String(formData.get("tour") ?? "") || undefined,
        date: String(formData.get("date") ?? "") || undefined,
        guests: formData.get("guests") ? Number(formData.get("guests")) : undefined,
        hotel: String(formData.get("hotel") ?? "") || undefined,
        message: String(formData.get("message") ?? "") || undefined,
        source,
      });

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      const message = error instanceof Error ? error.message : "";
      setErrorMessage(message || `Something went wrong. Please email ${SITE_EMAIL} or call ${SITE_PHONE_DISPLAY}.`);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-border bg-card p-7 sm:p-9 shadow-[var(--shadow-card)] text-center">
        <h2 className="font-display text-2xl font-semibold">Thank you!</h2>
        <p className="mt-3 text-muted-foreground">
          We received your inquiry and will reply within 12 hours — usually much faster.
        </p>
        <Button type="button" variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      className="rounded-3xl border border-border bg-card p-7 sm:p-9 shadow-[var(--shadow-card)] space-y-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required className="mt-1.5" placeholder="Jane Doe" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5"
            placeholder="jane@email.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="tour">Tour or transfer</Label>
          <Input
            id="tour"
            name="tour"
            className="mt-1.5"
            placeholder="e.g. Krka day tour from Split"
            defaultValue={defaultTour}
            key={defaultTour}
          />
        </div>
        <div>
          <Label htmlFor="date">Preferred date</Label>
          <Input id="date" name="date" type="date" className="mt-1.5" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="guests">Guests</Label>
          <Input id="guests" name="guests" type="number" min={1} defaultValue={2} className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="hotel">Pickup hotel (optional)</Label>
          <Input id="hotel" name="hotel" className="mt-1.5" placeholder="e.g. Hotel in Split or Šibenik" />
        </div>
      </div>

      <div>
        <Label htmlFor="msg">Tell us about your trip</Label>
        <Textarea
          id="msg"
          name="message"
          rows={5}
          className="mt-1.5"
          placeholder="Interests, must-sees, dietary preferences…"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive text-center" role="alert">
          {errorMessage}
        </p>
      )}

      <Button type="submit" variant="hero" size="xl" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send inquiry"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        We reply within 12 hours. No payment required to inquire. By submitting you agree to our
        privacy policy.
      </p>
    </form>
  );
}
