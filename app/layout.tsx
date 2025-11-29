import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { SchemaOrg } from "@/components/schema-org"
import { FloatingShare } from "@/components/floating-share"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Poliklinika Nova Kruna M – Petrovac na Mlavi",
  description:
    "Poliklinika Nova Kruna M Petrovac na Mlavi - specijalistički pregledi, ultrazvuk srca i abdomena, kardiolog, ginekolog, urolog, neurolog, ortoped. Zakažite termin 012 327564.",
  keywords: [
    "poliklinika Petrovac na Mlavi",
    "Nova Kruna M",
    "ultrazvuk srca",
    "ultrazvuk abdomena",
    "kardiolog Petrovac",
    "ginekolog Petrovac",
    "urolog Petrovac",
    "neurolog Petrovac",
    "ortoped Petrovac",
    "EMNG",
    "dopler krvnih sudova",
    "gustina kostiju",
    "lekari Petrovac",
    "pregledi Petrovac",
    "zdravstvo Petrovac na Mlavi",
    "medicinski centar Petrovac",
    "privatna klinika Petrovac",
    "nega starijih",
    "gerijatrijska nega",
    "lekarsko uverenje Petrovac",
    "sistematski pregled",
    "holter EKG",
    "holter pritiska",
    "kućne posete lekara",
    "infuzije i injekcije",
    "previjanje rana",
    "skidanje konaca",
    "brzi antigen test",
  ],
  manifest: "/manifest.json",
  authors: [{ name: "Poliklinika Nova Kruna M" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://novakruna-m.com/",
    siteName: "Poliklinika Nova Kruna M",
    title: "Poliklinika Nova Kruna M – Petrovac na Mlavi",
    description:
      "Specijalistički pregledi - kardiolog, ginekolog, urolog, neurolog, ortoped. Ultrazvuk srca i abdomena, EMNG, dopler. Zakažite: 012 327564",
    images: [
      {
        url: "https://novakruna-m.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Poliklinika Nova Kruna M",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poliklinika Nova Kruna M – Petrovac na Mlavi",
    description:
      "Specijalistički pregledi - kardiolog, ginekolog, urolog, neurolog, ortoped. Ultrazvuk srca i abdomena, EMNG, dopler. Zakažite: 012 327564",
    images: ["https://novakruna-m.com/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://novakruna-m.com/",
    languages: {
      "sr": "https://novakruna-m.com/",
      "sr-RS": "https://novakruna-m.com/",
      "x-default": "https://novakruna-m.com/",
    },
  },
  other: {
    "geo.region": "RS-09",
    "geo.placename": "Petrovac na Mlavi",
    "geo.position": "44.290537;21.411442",
    "ICBM": "44.290537, 21.411442",
    "google-site-verification": "DzSv5qkWrBtsdZS__wHBzuWeQeSBFT98RYGkukwP3AY",
  },
  generator: "v0.dev",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr">
      <head>
        <SchemaOrg />
      </head>
      <body className={`font-sans antialiased text-slate-900 bg-white selection:bg-teal-100 selection:text-teal-900`}>
        {children}

        <FloatingShare />
      </body>
    </html>
  )
}
