"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { findBestAnswer } from "@/lib/chatbot-logic"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { useMobileMenu } from "@/contexts/mobile-menu-context"

interface Message {
    id: string
    text: string
    isUser: boolean
}

export function FaqChatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [inputValue, setInputValue] = useState("")
    const [isInitialized, setIsInitialized] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const { isMobileMenuOpen } = useMobileMenu()

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        if (scrollRef.current) {
            const scrollContainer = scrollRef.current.querySelector("[data-radix-scroll-area-viewport]")
            if (scrollContainer) {
                scrollContainer.scrollTop = scrollContainer.scrollHeight
            }
        }
    }, [messages, isOpen])

    // Initialize welcome message when opened for the first time
    useEffect(() => {
        if (isOpen && !isInitialized) {
            setMessages([
                {
                    id: "welcome",
                    text: "Dobro došli u chat Poliklinike Nova Kruna M. Postavite pitanje o našim uslugama, radnom vremenu ili zakazivanju. Za medicinske savete obratite se direktno lekaru.",
                    isUser: false,
                },
            ])
            setIsInitialized(true)
        }
    }, [isOpen, isInitialized])

    // Focus input when opened
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                inputRef.current?.focus()
            }, 100)
        }
    }, [isOpen])

    const handleSend = () => {
        if (!inputValue.trim()) return

        const userText = inputValue.trim()
        const newMessage: Message = {
            id: Date.now().toString(),
            text: userText,
            isUser: true,
        }

        setMessages((prev) => [...prev, newMessage])
        setInputValue("")

        // Process answer
        setTimeout(() => {
            const response = findBestAnswer(userText)
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: response.answer,
                isUser: false,
            }
            setMessages((prev) => [...prev, botMessage])
        }, 400)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault()
            handleSend()
        }
    }

    // Hide chatbot when mobile menu is open
    if (isMobileMenuOpen) {
        return null
    }

    if (!isOpen) {
        return (
            <Button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-16 left-4 right-4 md:bottom-5 md:left-auto md:right-5 md:w-auto z-50 rounded-full shadow-lg h-12 px-4 bg-blue-600 hover:bg-blue-700 text-white gap-2 max-w-[calc(100vw-2rem)] mx-auto md:mx-0"
            >
                <MessageCircle className="h-5 w-5" />
                <span>Chat – pitanja o poliklinici</span>
            </Button>
        )
    }

    return (
        <div className="fixed bottom-16 left-4 right-4 md:bottom-5 md:left-auto md:right-5 md:w-[320px] z-50 flex flex-col bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 max-w-full">
            {/* Header */}
            <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
                <div className="font-semibold text-sm">Chat – Nova Kruna M</div>
                <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded transition-colors">
                    <X className="h-4 w-4" />
                </button>
            </div>

            {/* Messages */}
            <ScrollArea className="h-[320px] bg-slate-50 p-3" ref={scrollRef}>
                <div className="flex flex-col gap-2 pb-2">
                    {messages.map((msg) => (
                        <div key={msg.id} className={cn("flex flex-col max-w-[90%]", msg.isUser ? "self-end items-end" : "self-start items-start")}>
                            <div
                                className={cn(
                                    "px-3 py-2 rounded-lg text-sm",
                                    msg.isUser
                                        ? "bg-blue-600 text-white rounded-br-none"
                                        : "bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm",
                                )}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>

            {/* Disclaimer */}
            <div className="bg-slate-50 px-3 pb-2 text-[10px] text-slate-500 leading-tight text-center border-t border-slate-100 pt-2">
                Chat bot daje isključivo opšte informacije. Ne postavlja dijagnoze i ne daje medicinske savete.
            </div>

            {/* Input */}
            <div className="p-2 bg-white border-t border-slate-200 flex gap-2">
                <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Postavite pitanje..."
                    className="flex-1 text-sm h-9"
                />
                <Button onClick={handleSend} size="sm" className="h-9 w-9 p-0 bg-blue-600 hover:bg-blue-700">
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Pošalji</span>
                </Button>
            </div>
        </div>
    )
}
