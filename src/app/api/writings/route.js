import { NextResponse } from "next/server";

const FEED_URL = "https://thejakeadler.substack.com/feed";

function getTagValue(xml, tag) {
  const cdataRegex = new RegExp(
    `<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\/${tag}>`,
    "i"
  );
  const cdataMatch = xml.match(cdataRegex);
  if (cdataMatch) return cdataMatch[1].trim();

  const plainRegex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\/${tag}>`, "i");
  const plainMatch = xml.match(plainRegex);
  if (plainMatch) return plainMatch[1].trim();

  return "";
}

function stripHtml(html) {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text, maxLen = 160) {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen).replace(/\s+\S*$/, "") + "…";
}

export async function GET() {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`);

    const xml = await res.text();

    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const articles = [];
    let match;

    while ((match = itemRegex.exec(xml)) !== null && articles.length < 6) {
      const item = match[1];

      const title = stripHtml(getTagValue(item, "title"));

      // <link> in RSS 2.0 is a plain text element (no closing tag pattern varies)
      let link = getTagValue(item, "link");
      if (!link) {
        const linkMatch = item.match(/<link>([^<]+)<\/link>/);
        if (linkMatch) link = linkMatch[1].trim();
      }

      const pubDate = getTagValue(item, "pubDate");
      const rawDescription = getTagValue(item, "description");
      const excerpt = truncate(stripHtml(rawDescription));

      // Cover image comes from the <enclosure url="..." type="image/..."/> tag
      const enclosureMatch = item.match(/<enclosure\s+url="([^"]+)"/i);
      const image = enclosureMatch ? enclosureMatch[1] : null;

      const date = pubDate
        ? new Date(pubDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "";

      if (title && link) {
        articles.push({ title, link, date, excerpt, image });
      }
    }

    return NextResponse.json({ articles });
  } catch (err) {
    console.error("Writings API error:", err);
    return NextResponse.json({ articles: [], error: err.message }, { status: 500 });
  }
}
