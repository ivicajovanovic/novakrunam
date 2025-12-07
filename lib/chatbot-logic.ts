import { NK_KNOWLEDGE, type KnowledgeItem } from "@/data/chatbot-knowledge"

// Stop reči (nebitne za pretragu)
const STOPWORDS = [
    "je",
    "da",
    "li",
    "u",
    "na",
    "od",
    "do",
    "za",
    "se",
    "su",
    "sam",
    "si",
    "smo",
    "ste",
    "i",
    "ili",
    "koji",
    "koja",
    "koje",
    "sta",
    "što",
    "sto",
    "kako",
    "gde",
    "gdje",
]

// Reči koje ukazuju na medicinsko pitanje (symptomi itd.)
const MEDICAL_RISK_STEMS = [
    "bol", // bol, bolovi
    "temperatur", // temperatura
    "vrtoglav", // vrtoglavica
    "mucnin", // mučnina
    "povrac", // povraćanje
    "proliv", // proliv
    "dijare", // dijareja
    "krvar", // krvarenje
    "otoc", // otok, otoci
    "otezan", // otežano
    "gusenje",
    "lupanj", // lupanje (srca)
    "pritisak",
    "tumor",
    "rak",
    "karcinom",
    "napad", // napad, napadi
    "infarkt",
    "mozdani",
    "paraliz",
    "sta mi je",
    "sto mi je",
    "da li je opasno",
    "da li je ozbiljno",
    "kako da se lecim",
    "koju terapiju",
    "tablete",
    "lekove",
    "lekovi",
    "antibiotik",
]

export function normalize(text: string): string {
    return text
        .toLowerCase()
        .replace(/č/g, "c")
        .replace(/ć/g, "c")
        .replace(/š/g, "s")
        .replace(/ž/g, "z")
        .replace(/đ/g, "dj")
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim()
}

export function tokenize(text: string): string[] {
    const norm = normalize(text)
    return norm.split(" ").filter((t) => t && !STOPWORDS.includes(t))
}

export function containsMedicalRisk(text: string): boolean {
    const norm = normalize(text)
    for (const stem of MEDICAL_RISK_STEMS) {
        if (norm.includes(stem)) return true
    }
    return false
}

function scoreItem(userTokens: string[], item: KnowledgeItem): number {
    const allText = [...(item.questions || []), ...(item.keywords || [])].join(" ")

    const itemTokens = new Set(tokenize(allText))
    let score = 0

    for (const t of userTokens) {
        if (itemTokens.has(t)) score++
    }

    return score
}

export interface ChatbotResponse {
    answer: string
    matched: KnowledgeItem | null
    risk: boolean
}

export function getClinicStatus(): string {
    try {
        const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: "Europe/Belgrade",
            weekday: "short",
            hour: "numeric",
            minute: "numeric",
            hour12: false,
        })

        const parts = formatter.formatToParts(new Date())
        const weekday = parts.find((p) => p.type === "weekday")?.value
        const hourStr = parts.find((p) => p.type === "hour")?.value

        if (!weekday || !hourStr) return "Poliklinika je trenutno zatvorena."

        const hour = parseInt(hourStr, 10)
        const isWeekend = weekday === "Sat" || weekday === "Sun"

        // Radno vreme: 08:00 - 15:00
        const isOpen = !isWeekend && hour >= 8 && hour < 15

        if (isOpen) {
            return "Poliklinika je trenutno otvorena."
        } else {
            return "Poliklinika je trenutno zatvorena. Sve informacije možete dobiti na brojeve telefona svakog radnog dana od 08:00 do 15:00 časova."
        }
    } catch (e) {
        // Fallback if Intl fails
        return "Poliklinika radi radnim danima od 08:00 do 15:00."
    }
}

export function isAskingAboutCurrentStatus(text: string): boolean {
    const norm = normalize(text)

    // Ako pita za vikend ili specifične dane, verovatno nije pitanje "da li radite SADA"
    if (norm.includes("vikend") || norm.includes("subot") || norm.includes("nedelj")) {
        return false
    }

    // Eksplicitno pita za sada/trenutno
    if ((norm.includes("sada") || norm.includes("trenutno")) &&
        (norm.includes("radite") || norm.includes("radi") || norm.includes("otvoreno") || norm.includes("otvoreni"))) {
        return true
    }

    // Fraze koje impliciraju "sada"
    const phrases = [
        "da li radite",
        "radite li",
        "jeste li otvoreni",
        "je li otvoreno",
        "da li je otvoreno",
        "radi li poliklinika",
    ]

    for (const phrase of phrases) {
        if (norm === phrase || norm.startsWith(phrase + " ") || norm.endsWith(" " + phrase)) {
            return true
        }
    }

    return false
}

export function findBestAnswer(question: string): ChatbotResponse {
    const userTokens = tokenize(question)

    // 0) Provera da li pita za trenutni status (radno vreme sada)
    if (isAskingAboutCurrentStatus(question)) {
        return {
            answer: getClinicStatus(),
            matched: null,
            risk: false,
        }
    }

    // 1) Ako deluje kao medicinsko pitanje → bezbedan odgovor
    if (containsMedicalRisk(question)) {
        return {
            answer:
                "Na osnovu vašeg pitanja deluje da se radi o zdravstvenom problemu. Ovaj chat bot ne postavlja dijagnoze i ne daje medicinske savete. Molimo vas da se direktno obratite lekaru ili kontaktirate Polikliniku Nova Kruna M telefonom.",
            matched: null,
            risk: true,
        }
    }

    // 2) Inače tražimo najbolji match u bazi
    let best: KnowledgeItem | null = null
    let bestScore = 0

    for (const item of NK_KNOWLEDGE) {
        const s = scoreItem(userTokens, item)
        if (s > bestScore) {
            bestScore = s
            best = item
        }
    }

    const MIN_SCORE = 1 // Smanjio sam na 1 jer nekad 2 bude previše strogo za kratke upite

    if (!best || bestScore < MIN_SCORE) {
        return {
            answer:
                "Nažalost, ne pronalazim tačan odgovor u zvaničnim informacijama. Ovaj chat bot služi samo za opšte informacije o radu poliklinike i ne može da da precizan odgovor na svako pitanje. Molimo vas da nas pozovete telefonom za tačne informacije.",
            matched: null,
            risk: false,
        }
    }

    return {
        answer: best.answer,
        matched: best,
        risk: false,
    }
}
