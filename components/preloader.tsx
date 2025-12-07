"use client"

import { useEffect, useState } from "react"

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true)
    const [opacity, setOpacity] = useState(1)

    useEffect(() => {
        // Postavi timer da počne fade out 2 sekunde pre kraja (nakon 4 sekunde)
        const fadeOutTimer = setTimeout(() => {
            setOpacity(0)
        }, 4000)

        // Postavi timer da sakrije preloader nakon 6 sekundi
        const hideTimer = setTimeout(() => {
            setIsLoading(false)
        }, 6000)

        return () => {
            clearTimeout(fadeOutTimer)
            clearTimeout(hideTimer)
        }
    }, [])

    // Ako je završio loading, ne renderuj ništa
    if (!isLoading) {
        return null
    }

    return (
        <div
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-[2000ms] ease-out"
            style={{ opacity }}
        >
            <video
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
                onEnded={() => {
                    setOpacity(0)
                    setTimeout(() => setIsLoading(false), 2000)
                }}
            >
                <source src="/preloader-video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
