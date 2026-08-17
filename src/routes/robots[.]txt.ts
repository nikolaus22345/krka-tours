import { createFileRoute } from "@tanstack/react-router";
import { SITE_ORIGIN } from "@/lib/site-seo";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () =>
        new Response(
          `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# AI search and citation bots
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: OAI-SearchBot
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap.xml
# LLM content index: ${SITE_ORIGIN}/llms.txt
`,
          {
            headers: {
              "Content-Type": "text/plain; charset=utf-8",
              "Cache-Control": "public, max-age=3600",
            },
          },
        ),
    },
  },
});
