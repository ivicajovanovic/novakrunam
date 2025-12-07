"use client"

import * as React from "react"
import { Share2, X, Facebook, Twitter, Link2, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FloatingShare() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [copied, setCopied] = React.useState(false)

    const toggleOpen = () => setIsOpen(!isOpen)

    const shareUrl = typeof window !== "undefined" ? window.location.href : ""
    const shareTitle = typeof window !== "undefined" ? document.title : "Poliklinika Nova Kruna M"

    const handleShare = (platform: string) => {
        let url = ""
        switch (platform) {
            case "facebook":
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
                break
            case "twitter":
                url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`
                break
            case "whatsapp":
                url = `https://wa.me/?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`
                break
            case "copy":
                navigator.clipboard.writeText(shareUrl).then(() => {
                    setCopied(true)
                    setTimeout(() => setCopied(false), 2000)
                })
                return
        }

        if (url) {
            window.open(url, "_blank", "width=600,height=400")
        }
        setIsOpen(false)
    }

    return (
        <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 hidden md:flex flex-col items-start gap-2">
            <div
                className={cn(
                    "flex flex-col gap-2 transition-all duration-300 ease-in-out origin-bottom",
                    isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
                )}
            >
                <Button
                    variant="secondary"
                    size="icon"
                    className="h-11 w-11 rounded-full shadow-lg bg-[#1877F2] hover:bg-[#1877F2]/90 text-white border-none"
                    onClick={() => handleShare("facebook")}
                    aria-label="Share on Facebook"
                >
                    <Facebook className="h-4 w-4" />
                </Button>
                <Button
                    variant="secondary"
                    size="icon"
                    className="h-11 w-11 rounded-full shadow-lg bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white border-none"
                    onClick={() => handleShare("twitter")}
                    aria-label="Share on Twitter"
                >
                    <Twitter className="h-4 w-4" />
                </Button>
                <Button
                    variant="secondary"
                    size="icon"
                    className="h-11 w-11 rounded-full shadow-lg bg-[#25D366] hover:bg-[#25D366]/90 text-white border-none"
                    onClick={() => handleShare("whatsapp")}
                    aria-label="Share on WhatsApp"
                >
                    <Phone className="h-4 w-4" />
                </Button>
                <Button
                    variant="secondary"
                    size="icon"
                    className="h-11 w-11 rounded-full shadow-lg bg-slate-700 hover:bg-slate-800 text-white border-none"
                    onClick={() => handleShare("copy")}
                    aria-label="Copy Link"
                >
                    {copied ? <span className="font-bold text-xs">OK</span> : <Link2 className="h-4 w-4" />}
                </Button>
            </div>

            <Button
                onClick={toggleOpen}
                size="icon"
                className={cn(
                    "h-14 w-14 rounded-full shadow-xl transition-all duration-300",
                    isOpen ? "bg-slate-900 hover:bg-slate-800 rotate-90" : "bg-teal-600 hover:bg-teal-700 hover:scale-105"
                )}
                aria-label="Toggle share menu"
            >
                {isOpen ? <X className="h-6 w-6 text-white" /> : <Share2 className="h-6 w-6 text-white" />}
            </Button>
        </div>
    )
}
