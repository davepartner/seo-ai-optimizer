# Submissions — where to submit, step by step

Do these once, then verify. Offer the admin a checklist with links (the skill builds this into the admin
page). Provider UIs change — verify current steps before shipping.

## Google Search Console (GSC)

1. Go to **https://search.google.com/search-console** → **Add property**.
   - **Domain** property (covers all subdomains/protocols, DNS TXT verification) — recommended.
   - or **URL prefix** (HTML file / meta tag / GA / GTM verification).
2. **Verify** ownership.
3. **Sitemaps** → submit `https://your.app/sitemap.xml`.
4. **Pages / Coverage** → fix errors (404s, noindex, blocked).
5. **URL Inspection** → request indexing for key pages.
6. **Performance** → note the baseline (see `ranking-tracking.md`).

## Bing Webmaster Tools + IndexNow

1. **https://www.bing.com/webmasters** → add/import the site (can import from GSC).
2. Verify; submit the sitemap.
3. **IndexNow**: generate a key, host it at `https://your.app/<key>.txt`, then POST:

```bash
curl -X POST https://api.indexnow.org/indexnow \
  -H 'Content-Type: application/json' \
  -d '{"host":"your.app","key":"<key>","keyLocation":"https://your.app/<key>.txt","urlList":["https://your.app/page"]}'
```

Bing/Yandex consume IndexNow; ping it on publish/update.

## Google Business Profile (local businesses)

1. **https://business.google.com/** → create/claim the profile.
2. Verify; add hours, categories, photos, services, and respond to reviews.
3. Keep NAP (name, address, phone) consistent with the site.

## ChatGPT Apps (the "ChatGPT app store")

The developer path is the **Apps SDK** (an MCP server that brings actions into ChatGPT):

1. Build an **MCP server** exposing your tools/actions (`learn.chatgpt.com/apps-sdk`).
2. Implement **OAuth** and **domain verification** as required.
3. Meet the **app guidelines** (safety, privacy, functionality); prepare assets + legal links.
4. Submit through the **plugin/app submission portal**; pass review; the app appears in the in-product
   app directory.
5. Keep the MCP server healthy and monitored.

> The older **GPT Store** was for no-code custom GPTs; the **Apps SDK** is the current developer path for
> apps with real actions. Confirm the latest requirements before submitting.

## MCP directory / registry

Publish your MCP server metadata (name, description, tools, auth) and list it in MCP registries. Link it
from your docs.

## Apple App Store / Google Play (if mobile)

Complete the store listing (title, subtitle, keywords, screenshots, privacy), follow review guidelines.

## Validate

- **Rich Results Test** — structured data.
- **PageSpeed Insights / CrUX** — performance.
- **Schema Markup Validator** — JSON-LD.

## Checklist

- [ ] GSC verified + sitemap submitted + baseline captured
- [ ] Bing verified + sitemap submitted
- [ ] IndexNow key hosted + ping on publish
- [ ] Google Business Profile (if local)
- [ ] ChatGPT App submitted (if applicable)
- [ ] MCP directory listing (if applicable)
- [ ] App store listings (if mobile)
