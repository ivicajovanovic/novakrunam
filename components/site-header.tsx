"use client"

import * as React from "react"
import Link from "next/link"
import { Activity, Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobileMenu } from "@/contexts/mobile-menu-context"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: "Početna", href: "#hero" },
    { name: "Usluge", href: "#services" },
    { name: "Naš tim", href: "#doctors" },
    { name: "Dijagnostika", href: "#diagnostics" },
    { name: "Galerija", href: "#clinic" },
    { name: "Kontakt", href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white border-b border-transparent",
      )}
    >
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-9 w-9 object-contain"
          />
          <span className="font-bold text-xl tracking-tight text-slate-900">
            Nova <span className="text-teal-700">Kruna-M</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-teal-700 after:transition-all hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 rounded-sm"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Phone */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="tel:+38112327564"
            className="hidden lg:flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-teal-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 rounded-sm"
          >
            <Phone className="h-4 w-4" />
            <span>012 327564</span>
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-teal-700 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
          >
            Zakažite termin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-teal-700 hover:bg-slate-50 rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white md:hidden transition-transform duration-300 ease-in-out pt-20 px-6 overflow-y-auto",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-semibold text-slate-900 hover:text-teal-700 transition-colors border-b border-slate-100 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-6 space-y-4">
            <Link
              href="#contact"
              className="flex w-full h-12 items-center justify-center rounded-lg bg-teal-700 px-6 text-base font-semibold text-white shadow-md transition-colors hover:bg-teal-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Zakažite termin
            </Link>
            <Link
              href="tel:+38112327564"
              className="flex w-full h-12 items-center justify-center rounded-lg border-2 border-slate-200 bg-transparent px-6 text-base font-semibold text-slate-700 transition-colors hover:border-teal-700 hover:text-teal-700"
            >
              <Phone className="h-5 w-5 mr-2" />
              Pozovite 012 327564
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
