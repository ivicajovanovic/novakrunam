import { readFileSync } from "node:fs"

const requiredSitemapUrls = [
  "https://novakruna-m.com/",
  "https://novakruna-m.com/kardiologija",
  "https://novakruna-m.com/ginekologija",
  "https://novakruna-m.com/urologija",
  "https://novakruna-m.com/neurologija",
  "https://novakruna-m.com/ortopedija",
  "https://novakruna-m.com/kontakt",
]

const sitemap = readFileSync("public/sitemap.xml", "utf8")
const layout = readFileSync("app/layout.tsx", "utf8")
const doctors = readFileSync("components/doctors-section.tsx", "utf8")
const footer = readFileSync("components/site-footer.tsx", "utf8")
const page = readFileSync("app/page.tsx", "utf8")

const failures = []

for (const url of requiredSitemapUrls) {
  if (!sitemap.includes(`<loc>${url}</loc>`)) {
    failures.push(`Missing sitemap URL: ${url}`)
  }
}

if (sitemap.includes("/#")) {
  failures.push("Sitemap should not include hash-fragment URLs")
}

if (!layout.includes("metadataBase")) {
  failures.push("Root metadata should define metadataBase for absolute canonical/OpenGraph URLs")
}

if (doctors.includes("Portrait of")) {
  failures.push("Doctor image alt text should be localized and descriptive, not generic English")
}

if (footer.includes("tel:+381110000000")) {
  failures.push("Footer contains placeholder phone href")
}

if (page.includes("<Preloader />")) {
  failures.push("Homepage should not block first paint with the video preloader")
}

if (failures.length > 0) {
  console.error(failures.join("\n"))
  process.exit(1)
}

console.log("SEO smoke checks passed")
