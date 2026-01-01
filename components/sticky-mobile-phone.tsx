"use client"

import Link from "next/link"
import { Phone } from "lucide-react"

export function StickyMobilePhone() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden w-full max-w-full overflow-hidden">
            <Link
                href="tel:+38166327564"
                className="flex h-14 items-center justify-center gap-2 bg-teal-700 text-white font-semibold text-base uppercase tracking-wide shadow-lg transition-all hover:bg-teal-800 active:bg-teal-900"
                aria-label="Pozovi da rezervišeš termin"
            >
                <Phone className="h-5 w-5" />
                <span>ZAKAŽITE TERMIN</span>
            </Link>
        </div>
    )
}
