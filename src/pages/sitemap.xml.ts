import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("wydanie");
  const origin = "https://www.6th.pl";
  const urls = [
    "/",
    "/wydanie/",
    "/redakcja/",
    "/poczta/",
    "/prywatnosc/",
    ...posts.map((post) => `/wydanie/${post.slug}/`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${origin}${url}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
