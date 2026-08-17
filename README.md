# Krka Tours

Marketing site for Krka National Park day tours from Split, Dubrovnik, Trogir, Zadar and Šibenik.

Stack: TanStack Start, React 19, Vite, Tailwind CSS, Nitro (Vercel preset).

## Local development

```bash
bun install
bun run dev
```

Open [http://localhost:8080](http://localhost:8080).

## Deploy on Vercel

1. Push this repo to GitHub: [nikolaus22345/krka-tours](https://github.com/nikolaus22345/krka-tours)
2. In [Vercel](https://vercel.com/new), import the repository.
3. Vercel reads `vercel.json` — install: `bun install`, build: `bun run build`.
4. Add environment variables (Production + Preview):

| Variable | Description |
|----------|-------------|
| `EMAILJS_SERVICE_ID` | EmailJS service ID |
| `EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `EMAILJS_PRIVATE_KEY` | EmailJS private key (server-side send) |
| `INQUIRY_TO_EMAIL` | Inbox for contact form (e.g. `zagrebtransfers.hr@gmail.com`) |

5. Connect domain **krka-tours.com** in Vercel → Settings → Domains.

Contact form uses EmailJS server-side; without the env vars above, the form will show a configuration error on submit.

## Build

```bash
bun run build
```
