"use client"

import * as React from "react"

interface MobileMenuContextType {
    isMobileMenuOpen: boolean
    setIsMobileMenuOpen: (open: boolean) => void
}

const MobileMenuContext = React.createContext<MobileMenuContextType | undefined>(undefined)

export function MobileMenuProvider({ children }: { children: React.ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    return (
        <MobileMenuContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
            {children}
        </MobileMenuContext.Provider>
    )
}

export function useMobileMenu() {
    const context = React.useContext(MobileMenuContext)
    if (context === undefined) {
        throw new Error("useMobileMenu must be used within a MobileMenuProvider")
    }
    return context
}
