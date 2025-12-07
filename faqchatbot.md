Hajde na napravimo jednostavan **FAQ chat bot** koji:

* radi 100% u browseru (nema API-ja),
* koristi samo informacije sa sajta + dodatni fajl,
* **nikad ne daje medicinske savete**, samo info o uslugama i organizaciji rada.

Napisaću ti 3 fajla:

1. `nk-knowledge.js` – baza znanja (pitanja/odgovori).
2. `nk-chat.js` – logika čatbota + UI.
3. `dodatni-odgovori.md` – dodatni tekst koji možeš da menjaš.

Na kraj ću dodati kratko uputstvo kako se ubacuje u sajt.

---

## 1️⃣ `nk-knowledge.js` – baza znanja

Napravi fajl `nk-knowledge.js` i ubaci:

```js
// nk-knowledge.js
// Baza znanja za Polikliniku Nova Kruna M
// Bot NE daje medicinske savete, već samo informacije o uslugama i organizaciji rada.

window.NK_KNOWLEDGE = [
  {
    id: "o_nama",
    questions: [
      "Ko ste vi?",
      "Sta je Poliklinika Nova Kruna M?",
      "Cime se bavite?",
      "Koja je ovo poliklinika?"
    ],
    keywords: [
      "o nama",
      "nova kruna m",
      "poliklinika",
      "cime se bavite",
      "sta radite"
    ],
    answer:
      "Poliklinika Nova Kruna M je privatna zdravstvena ustanova u Petrovcu na Mlavi. Pružamo specijalističke preglede, dijagnostiku i savetovanja u više oblasti medicine, u savremenom i prijatnom prostoru.",
    category: "opste"
  },

  {
    id: "lokacija",
    questions: [
      "Gde se nalazite?",
      "Koja je adresa?",
      "Kako da dodjem do vas?",
      "Da li imate parking?"
    ],
    keywords: [
      "adresa",
      "lokacija",
      "gde ste",
      "gdje ste",
      "kako da dodjem",
      "parking"
    ],
    answer:
      "Nalazimo se u Petrovcu na Mlavi, u ulici Petra Dobrnjca 54. Ispred zgrade postoji prostor za parkiranje. Najlakše nas je naći uz pomoć Google Maps navigacije.",
    category: "opste"
  },

  {
    id: "kontakt",
    questions: [
      "Koji su kontakt telefoni?",
      "Kako da vas pozovem?",
      "Imate li broj telefona?",
      "Telefon poliklinike"
    ],
    keywords: [
      "telefon",
      "kontakt",
      "broj",
      "broj telefona",
      "poziv",
      "zakazivanje telefonom"
    ],
    answer:
      "Možete nas kontaktirati na brojeve telefona 012 327564 i 066 327564. Na tim brojevima dobijate informacije i zakazujete preglede.",
    category: "kontakt"
  },

  {
    id: "radno_vreme",
    questions: [
      "Koje je vase radno vreme?",
      "Kada radite?",
      "Do koliko sati radite?",
      "Da li radite vikendom?"
    ],
    keywords: [
      "radno vreme",
      "radite",
      "otvoreni",
      "vikend",
      "subota",
      "nedelja"
    ],
    answer:
      "Radimo radnim danima od 08:00 do 16:00. Ako je u pitanju hitna situacija ili je potreban poseban dogovor, najbolje je da nas prvo pozovete telefonom.",
    category: "organizacija"
  },

  {
    id: "zakazivanje",
    questions: [
      "Kako mogu da zakazem termin?",
      "Kako da se narucim?",
      "Zakazivanje pregleda",
      "Kako da rezervisem pregled?"
    ],
    keywords: [
      "zakazivanje",
      "zakazi",
      "narucivanje",
      "termin",
      "rezervacija",
      "pregled zakazivanje"
    ],
    answer:
      "Pregled se zakazuje telefonom, pozivom na brojeve 012 327564 ili 066 327564. Naši zaposleni će vam pomoći da izaberete odgovarajući termin i specijalistu.",
    category: "organizacija"
  },

  {
    id: "bez_zakazivanja",
    questions: [
      "Da li primate pacijente bez zakazivanja?",
      "Mogu li da dodjem bez termina?",
      "Da li je potreban termin?",
      "Primanje bez najave"
    ],
    keywords: [
      "bez zakazivanja",
      "bez termina",
      "bez najave",
      "hitno",
      "hitni slucajevi"
    ],
    answer:
      "Pacijente bez zakazanog termina primamo u skladu sa trenutnom gužvom, ali je uvek bolje da se prethodno javite telefonom. Hitni slučajevi imaju prioritet i primaju se odmah kad god je to izvodljivo.",
    category: "organizacija"
  },

  {
    id: "online_prisustvo",
    questions: [
      "Da li imate drustvene mreze?",
      "Da li ste na instagramu?",
      "Imate li facebook?",
      "Gde mogu da vas pratim online?"
    ],
    keywords: [
      "facebook",
      "instagram",
      "drustvene mreze",
      "online prisustvo",
      "profil"
    ],
    answer:
      "Možete nas pratiti na Facebook i Instagram nalozima Nova Kruna M, gde objavljujemo obaveštenja i korisne informacije. Osnovne podatke o uslugama uvek možete naći i na ovom sajtu.",
    category: "opste"
  },

  // OPŠTA MEDICINA
  {
    id: "opsta_medicina",
    questions: [
      "Sta radite u opstoj medicini?",
      "Koje usluge nudi opsta medicina?",
      "Da li imate doktora opste prakse?",
      "Pregledi opste medicine"
    ],
    keywords: [
      "opsta medicina",
      "doktor opste prakse",
      "sistemski pregled",
      "opsti pregled",
      "preventiva"
    ],
    answer:
      "U oblasti opšte medicine obavljamo sistematske i kontrolne preglede, procenu opšteg zdravstvenog stanja i preventivne preglede. Lekar opšte prakse vas može uputiti na dalje specijalističke preglede kada je potrebno.",
    category: "usluge"
  },

  // INTERNISTA
  {
    id: "internista",
    questions: [
      "Sta radi internista kod vas?",
      "Internisticki pregled",
      "Da li imate internistu?",
      "Bolesti unutrasnjih organa"
    ],
    keywords: [
      "internista",
      "interna",
      "unutrasnji organi",
      "odrasli",
      "ultrazvuk unutrasnjih organa"
    ],
    answer:
      "Internista je specijalista za bolesti unutrašnjih organa. Kod nas internistički pregledi obuhvataju klinički pregled i po potrebi dodatnu dijagnostiku, kao što su ultrazvučni pregledi ili laboratorijske analize, uz dogovor sa lekarom.",
    category: "usluge"
  },

  // ORTOPED
  {
    id: "ortoped",
    questions: [
      "Da li imate ortopeda?",
      "Ortopedski pregledi",
      "Povreda kosti ili zgloba",
      "Bol u kolenu ortoped"
    ],
    keywords: [
      "ortoped",
      "kost",
      "zglob",
      "misici",
      "tetive",
      "povreda",
      "sport"
    ],
    answer:
      "Ortopedski pregledi su namenjeni pacijentima sa tegobama u kostima, zglobovima i mišićima, kao i kod sportskih povreda. Ortoped obavlja pregled, daje mišljenje i po potrebi predlaže dalje korake ili rehabilitaciju.",
    category: "usluge"
  },

  // KARDIOLOG
  {
    id: "kardiolog",
    questions: [
      "Da li imate kardiologa?",
      "Kardioloski pregled",
      "Pregled srca",
      "EKG i ultrazvuk srca"
    ],
    keywords: [
      "kardiolog",
      "srce",
      "ekg",
      "ultrazvuk srca",
      "kardioloski pregled"
    ],
    answer:
      "Kardiološki pregledi obuhvataju razgovor sa pacijentom, klinički pregled i po potrebi dijagnostičke procedure kao što su EKG ili ultrazvučni pregled srca. Kardiolog vam daje mišljenje i predloge za dalje praćenje i lečenje.",
    category: "usluge"
  },

  // GINEKOLOG
  {
    id: "ginekolog",
    questions: [
      "Da li imate ginekologa?",
      "Ginekoloski pregled",
      "Pregled za zene",
      "Praćenje trudnoce"
    ],
    keywords: [
      "ginekolog",
      "ginekoloski",
      "trudnoca",
      "preventivni pregled",
      "zene"
    ],
    answer:
      "Ginekološki pregledi uključuju rutinske preventivne preglede i ultrazvučne preglede, kao i praćenje trudnoće i savetovanje. Tačne vrste pregleda i procedura dogovarate direktno sa ginekologom prilikom zakazivanja.",
    category: "usluge"
  },

  // UROLOG
  {
    id: "urolog",
    questions: [
      "Da li imate urologa?",
      "Uroloski pregled",
      "Problemi sa mokrenjem",
      "Pregled prostate"
    ],
    keywords: [
      "urolog",
      "urotrakt",
      "bubreg",
      "besika",
      "prostata",
      "mokracni putevi"
    ],
    answer:
      "Urološki pregledi namenjeni su pacijentima koji imaju tegobe sa mokraćnim putevima ili organima urinarnog sistema. Urolog obavlja pregled i po potrebi predlaže dodatnu dijagnostiku, poput ultrazvučnog pregleda urotrakta.",
    category: "usluge"
  },

  // NEUROLOG
  {
    id: "neurolog",
    questions: [
      "Da li imate neurologa?",
      "Neuroloski pregled",
      "Glavobolja neurolog",
      "Problemi sa nervima"
    ],
    keywords: [
      "neurolog",
      "neuroloski",
      "nervni sistem",
      "glavobolja",
      "vrtoglavica",
      "migrena"
    ],
    answer:
      "Neurolog se bavi bolestima nervnog sistema. U poliklinici vrši neurološke preglede i procenu tegoba, a po potrebi predlaže dodatne pretrage. Za bilo kakve ozbiljne simptome važno je da se što pre javite lekaru uživo.",
    category: "usluge"
  },

  // NEUROPSIHIJATAR
  {
    id: "neuropsihijatar",
    questions: [
      "Da li imate neuropsihijatra?",
      "Neuropsihijatrijski pregled",
      "Problemi sa snom i raspolozenjem",
      "Psihicka podrska"
    ],
    keywords: [
      "neuropsihijatar",
      "psihijatrija",
      "psihicke tegobe",
      "raspolozenje",
      "spavanje"
    ],
    answer:
      "Neuropsihijatar se bavi stanjima na granici neurologije i psihijatrije, kao što su poremećaji spavanja ili raspoloženja. Pregled podrazumeva razgovor i procenu stanja, a terapija se uvek planira individualno uz stručni nadzor.",
    category: "usluge"
  },

  // SLEEP APNEA
  {
    id: "sleep_apnea",
    questions: [
      "Da li radite ispitivanje apneje u snu?",
      "Sleep apnea pregled",
      "Apneja u snu",
      "Da li pregledate hrkanje i prestanke disanja u snu?"
    ],
    keywords: [
      "sleep apnea",
      "apneja u snu",
      "prestanci disanja",
      "hrkanje",
      "ispitivanje sna"
    ],
    answer:
      "U sklopu poliklinike postoji program za procenu i dijagnostiku apneje u snu. Zakazivanje i izbor odgovarajućeg pregleda obavlja se nakon razgovora sa lekarom, jer je za tačnu procenu neophodan pregled uživo.",
    category: "usluge"
  },

  // ULTRAZVUK SRCA
  {
    id: "ultrazvuk_srca",
    questions: [
      "Da li radite ultrazvuk srca?",
      "Sta je ultrazvuk srca?",
      "Eho srca pregled",
      "Kardioloski ultrazvuk"
    ],
    keywords: [
      "ultrazvuk srca",
      "ehokardiografija",
      "eho srca",
      "srce ultrazvuk"
    ],
    answer:
      "Ultrazvuk srca (ehokardiografija) je pregled kojim se ultrazvukom prikazuje rad i građa srca. U našoj poliklinici ovaj pregled obavlja kardiolog, a vrsta i obim pregleda dogovaraju se prilikom zakazivanja.",
    category: "dijagnostika"
  },

  // ULTRAZVUK ABDOMENA
  {
    id: "ultrazvuk_abdomena",
    questions: [
      "Da li radite ultrazvuk stomaka?",
      "Ultrazvuk abdomena",
      "Pregled trbuha ultrazvukom",
      "Ultrazvuk jetre i zucne kese"
    ],
    keywords: [
      "ultrazvuk stomaka",
      "ultrazvuk abdomena",
      "abdomen",
      "stomak ultrazvuk"
    ],
    answer:
      "Ultrazvuk abdomena je pregled trbušnih organa pomoću ultrazvuka. Tačan opseg pregleda, priprema i tumačenje nalaza uvek se rade u direktnom razgovoru sa lekarom koji obavlja pregled.",
    category: "dijagnostika"
  },

  // ULTRAZVUK UROTTRAKTA
  {
    id: "ultrazvuk_urotrakta",
    questions: [
      "Da li radite ultrazvuk bubrega i besike?",
      "Ultrazvuk urotrakta",
      "Urološki ultrazvuk",
      "Pregled bubrega ultrazvukom"
    ],
    keywords: [
      "ultrazvuk urotrakta",
      "bubreg ultrazvuk",
      "besika ultrazvuk",
      "urološki ultrazvuk"
    ],
    answer:
      "Ultrazvuk urotrakta obuhvata pregled bubrega, bešike i mokraćnih puteva ultrazvukom. Vrstu pregleda i pripremu precizira lekar u dogovoru sa vama prilikom zakazivanja.",
    category: "dijagnostika"
  },

  // DOPLER KRVNIH SUDOVA
  {
    id: "dopler",
    questions: [
      "Da li radite dopler krvnih sudova?",
      "Dopler arterija i vena",
      "Pregled krvnih sudova doplerom",
      "Venski i arterijski dopler"
    ],
    keywords: [
      "dopler",
      "doppler",
      "krvni sudovi",
      "arterije",
      "vene",
      "dopler nogu",
      "dopler vrata"
    ],
    answer:
      "Dopler krvnih sudova je ultrazvučna metoda kojom se procenjuje protok krvi kroz arterije i vene. Kod nas se dopler obavlja kod odgovarajućeg specijaliste, a precizan tip pregleda se definiše pri zakazivanju.",
    category: "dijagnostika"
  },

  // MERENJE GUSTINE KOSTIJU
  {
    id: "gustina_kostiju",
    questions: [
      "Da li radite merenje gustine kostiju?",
      "Osteoporoza pregled",
      "Merenje mineralne gustine kostiju",
      "Da li imate aparat za kosti?"
    ],
    keywords: [
      "gustina kostiju",
      "osteoporoza",
      "denzitometrija",
      "merenje kostiju"
    ],
    answer:
      "U poliklinici je moguće merenje mineralne gustine kostiju na specijalizovanom aparatu. Na osnovu nalaza lekar procenjuje rizik od slabosti kostiju i predlaže dalje korake, ali se odluke o terapiji donose isključivo na pregledu.",
    category: "dijagnostika"
  },

  // EMNG
  {
    id: "emng",
    questions: [
      "Da li radite EMNG?",
      "Sta je EMNG pregled?",
      "Pregled nerava i misica",
      "Ispitivanje provodljivosti nerava"
    ],
    keywords: [
      "emng",
      "elektromionevrografija",
      "provodljivost nerava",
      "nervi i misici"
    ],
    answer:
      "EMNG (elektromionevrografija) je pregled kojim se ispituje funkcija nerava i mišića pomoću elektroda. Pregled se radi po jasnoj indikaciji lekara i uvek u kontrolisanim uslovima, uz objašnjenje pre i tokom procedure.",
    category: "dijagnostika"
  },

  // PREGLEDI I SAVETOVANJA – OPŠTE
  {
    id: "pregledi_savetovanja",
    questions: [
      "Kakve preglede nudite?",
      "Koje usluge imate?",
      "Koje sve specijaliste imate?",
      "Da li radite savetovanja?"
    ],
    keywords: [
      "pregledi",
      "savetovanja",
      "usluge",
      "specijalisti",
      "lista lekara"
    ],
    answer:
      "U poliklinici se obavljaju specijalistički pregledi iz više oblasti (opšta medicina, interna medicina, kardiologija, ginekologija, urologija, ortopedija, neurologija, neuropsihijatrija i druge), kao i dijagnostički pregledi i savetovanja. Za tačan spisak specijalista i usluga najbolje je da nas kontaktirate telefonom.",
    category: "opste"
  },

  // TIM LEKARA – PRIMER ZA GINEKOLOGA
  {
    id: "tim_ginekolog",
    questions: [
      "Ko je vas ginekolog?",
      "Kako se zove ginekolog?",
      "Ime ginekologa"
    ],
    keywords: [
      "ginekolog ime",
      "ko je ginekolog",
      "dr ginekolog",
      "ginekolog nova kruna"
    ],
    answer:
      "Ginekološke preglede u poliklinici obavlja specijalista ginekologije naveden u odeljku 'Naš tim' na sajtu. Za aktuelne informacije o tome koji ginekolog radi određene termine najbolje je da nas pozovete.",
    category: "tim"
  },

  // OPŠTI DISKLEJMER
  {
    id: "disklejmer",
    questions: [
      "Da li dajte medicinske savete?",
      "Da li ovaj cet bot moze da mi postavi dijagnozu?",
      "Mozete li da mi kazete sta mi je?",
      "Da li ste vi lekar?"
    ],
    keywords: [
      "dijagnoza",
      "medicinski savet",
      "sta mi je",
      "da li je opasno",
      "terapija",
      "lecenje"
    ],
    answer:
      "Ovaj chat bot služi samo za opšte informacije o uslugama i organizaciji rada Poliklinike Nova Kruna M. Ne postavljamo dijagnoze, ne tumačimo simptome i ne preporučujemo terapiju. Za bilo kakav zdravstveni problem obavezno se obratite lekaru na pregledu.",
    category: "bezbednost"
  }
];
```

> Info u odgovorima je zasnovana na sadržaju sa početne strane sajta (adresa, telefoni, radno vreme, usluge, FAQ i tim lekara).([novakruna-m.com][1])

---

## 2️⃣ `nk-chat.js` – logika čat bota + UI

Napravi fajl `nk-chat.js`:

```js
// nk-chat.js
// Jednostavan FAQ chat bot za Polikliniku Nova Kruna M
// Radi u browseru, bez API-ja. Koristi window.NK_KNOWLEDGE iz nk-knowledge.js

(function () {
  if (!window.NK_KNOWLEDGE) {
    console.error("NK_KNOWLEDGE nije definisan. Učitaj prvo nk-knowledge.js.");
    return;
  }

  // Stop reči (nebitne za pretragu)
  const STOPWORDS = [
    "je", "da", "li", "u", "na", "od", "do", "za", "se", "su",
    "sam", "si", "smo", "ste", "i", "ili", "koji", "koja", "koje",
    "sta", "što", "sto", "kako", "gde", "gdje"
  ];

  // Reči koje ukazuju na medicinsko pitanje (symptomi itd.)
  const MEDICAL_RISK_STEMS = [
    "bol",         // bol, bolovi
    "temperatur",  // temperatura
    "vrtoglav",    // vrtoglavica
    "mucnin",      // mučnina
    "povrac",      // povraćanje
    "proliv",      // proliv
    "dijare",      // dijareja
    "krvar",       // krvarenje
    "otoc",        // otok, otoci
    "otezan",      // otežano
    "gusenje",
    "lupanj",      // lupanje (srca)
    "pritisak",
    "tumor",
    "rak",
    "karcinom",
    "napad",       // napad, napadi
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
    "antibiotik"
  ];

  function normalize(text) {
    return text
      .toLowerCase()
      .replace(/č/g, "c")
      .replace(/ć/g, "c")
      .replace(/š/g, "s")
      .replace(/ž/g, "z")
      .replace(/đ/g, "dj")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function tokenize(text) {
    const norm = normalize(text);
    return norm
      .split(" ")
      .filter((t) => t && !STOPWORDS.includes(t));
  }

  function containsMedicalRisk(text) {
    const norm = normalize(text);
    for (const stem of MEDICAL_RISK_STEMS) {
      if (norm.includes(stem)) return true;
    }
    return false;
  }

  function scoreItem(userTokens, item) {
    const allText = [
      ...(item.questions || []),
      ...(item.keywords || [])
    ].join(" ");

    const itemTokens = new Set(tokenize(allText));
    let score = 0;

    for (const t of userTokens) {
      if (itemTokens.has(t)) score++;
    }

    return score;
  }

  function findBestAnswer(question) {
    const userTokens = tokenize(question);

    // 1) Ako deluje kao medicinsko pitanje → bezbedan odgovor
    if (containsMedicalRisk(question)) {
      return {
        answer:
          "Na osnovu vašeg pitanja deluje da se radi o zdravstvenom problemu. " +
          "Ovaj chat bot ne postavlja dijagnoze i ne daje medicinske savete. " +
          "Molimo vas da se direktno obratite lekaru ili kontaktirate Polikliniku Nova Kruna M telefonom.",
        matched: null,
        risk: true
      };
    }

    // 2) Inače tražimo najbolji match u bazi
    let best = null;
    let bestScore = 0;

    for (const item of window.NK_KNOWLEDGE) {
      const s = scoreItem(userTokens, item);
      if (s > bestScore) {
        bestScore = s;
        best = item;
      }
    }

    const MIN_SCORE = 2;

    if (!best || bestScore < MIN_SCORE) {
      return {
        answer:
          "Nažalost, ne pronalazim tačan odgovor u zvaničnim informacijama. " +
          "Ovaj chat bot služi samo za opšte informacije o radu poliklinike i ne može da da precizan odgovor na svako pitanje. " +
          "Molimo vas da nas pozovete telefonom za tačne informacije.",
        matched: null,
        risk: false
      };
    }

    return {
      answer: best.answer,
      matched: best,
      risk: false
    };
  }

  // UI

  function createStyles() {
    const css = `
#nk-chatbot-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 320px;
  max-width: 90vw;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  z-index: 9999;
}

#nk-chatbot-toggle {
  background: #0066cc;
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 10px 16px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

#nk-chatbot-toggle:hover {
  opacity: 0.9;
}

#nk-chatbot-window {
  display: none;
  flex-direction: column;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.18);
  margin-bottom: 10px;
  overflow: hidden;
}

#nk-chatbot-header {
  background: #0066cc;
  color: #ffffff;
  padding: 10px 12px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nk-chatbot-header-title {
  font-weight: 600;
}

#nk-chatbot-header-close {
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
}

#nk-chatbot-messages {
  max-height: 360px;
  overflow-y: auto;
  padding: 10px;
  background: #f7f7f9;
  font-size: 14px;
}

.nk-chatbot-msg {
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
}

.nk-chatbot-msg-user {
  align-items: flex-end;
}

.nk-chatbot-bubble {
  display: inline-block;
  padding: 8px 10px;
  border-radius: 10px;
  max-width: 95%;
}

.nk-chatbot-bubble-user {
  background: #0066cc;
  color: #ffffff;
  border-bottom-right-radius: 2px;
}

.nk-chatbot-bubble-bot {
  background: #ffffff;
  color: #222222;
  border: 1px solid #e0e0e0;
  border-bottom-left-radius: 2px;
}

#nk-chatbot-input-row {
  display: flex;
  padding: 8px;
  gap: 6px;
  border-top: 1px solid #e5e5e5;
  background: #ffffff;
}

#nk-chatbot-input {
  flex: 1;
  padding: 7px 9px;
  border-radius: 8px;
  border: 1px solid #cccccc;
  font-size: 14px;
}

#nk-chatbot-input:focus {
  outline: none;
  border-color: #0066cc;
}

#nk-chatbot-send {
  padding: 7px 10px;
  border-radius: 8px;
  border: none;
  background: #0066cc;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
}

#nk-chatbot-send:hover {
  background: #0055aa;
}

#nk-chatbot-disclaimer {
  font-size: 11px;
  color: #555;
  padding: 6px 10px 10px;
  background: #f7f7f9;
}
`;
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  }

  function appendMessage(container, text, fromUser) {
    const msg = document.createElement("div");
    msg.className = "nk-chatbot-msg" + (fromUser ? " nk-chatbot-msg-user" : "");

    const bubble = document.createElement("div");
    bubble.className =
      "nk-chatbot-bubble " +
      (fromUser ? "nk-chatbot-bubble-user" : "nk-chatbot-bubble-bot");
    bubble.textContent = text;

    msg.appendChild(bubble);
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
  }

  function initChatbot() {
    const host = document.getElementById("nk-chatbot");
    if (!host) return;

    createStyles();

    const container = document.createElement("div");
    container.id = "nk-chatbot-container";

    container.innerHTML = `
      <div id="nk-chatbot-window">
        <div id="nk-chatbot-header">
          <div id="nk-chatbot-header-title">Chat – Nova Kruna M</div>
          <div id="nk-chatbot-header-close" aria-label="Zatvori chat">&times;</div>
        </div>
        <div id="nk-chatbot-messages"></div>
        <div id="nk-chatbot-disclaimer">
          Chat bot daje isključivo opšte informacije o uslugama i radu Poliklinike Nova Kruna M. Ne postavlja dijagnoze i ne daje medicinske savete.
        </div>
        <div id="nk-chatbot-input-row">
          <input id="nk-chatbot-input" type="text" placeholder="Postavite pitanje..." />
          <button id="nk-chatbot-send">Pošalji</button>
        </div>
      </div>
      <button id="nk-chatbot-toggle">
        💬 Chat – pitanja o poliklinici
      </button>
    `;

    host.appendChild(container);

    const windowEl = container.querySelector("#nk-chatbot-window");
    const toggleBtn = container.querySelector("#nk-chatbot-toggle");
    const closeBtn = container.querySelector("#nk-chatbot-header-close");
    const messagesEl = container.querySelector("#nk-chatbot-messages");
    const inputEl = container.querySelector("#nk-chatbot-input");
    const sendBtn = container.querySelector("#nk-chatbot-send");

    function openWindow() {
      windowEl.style.display = "flex";
      toggleBtn.style.display = "none";
      if (!messagesEl.dataset.initialized) {
        appendMessage(
          messagesEl,
          "Dobro došli u chat Poliklinike Nova Kruna M. Postavite pitanje o našim uslugama, radnom vremenu ili zakazivanju. Za medicinske savete obratite se direktno lekaru.",
          false
        );
        messagesEl.dataset.initialized = "1";
      }
      inputEl.focus();
    }

    function closeWindow() {
      windowEl.style.display = "none";
      toggleBtn.style.display = "flex";
    }

    toggleBtn.addEventListener("click", openWindow);
    closeBtn.addEventListener("click", closeWindow);

    function handleSend() {
      const text = inputEl.value.trim();
      if (!text) return;

      appendMessage(messagesEl, text, true);
      inputEl.value = "";

      const result = findBestAnswer(text);
      appendMessage(messagesEl, result.answer, false);
    }

    sendBtn.addEventListener("click", handleSend);
    inputEl.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSend();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initChatbot);
  } else {
    initChatbot();
  }
})();
```

---

## 3️⃣ `dodatni-odgovori.md` – dodatni tekst (za tebe da menjaš)

Ovo je **opcionalni** fajl koji služi kao “podsetnik” i mesto gde držiš dodatne FAQ-ove koje *nemaš* na sajtu, a hoćeš da ručno ubaciš u `NK_KNOWLEDGE` kasnije.

Napravi npr. `dodatni-odgovori.md`:

```md
# DODATNI ODGOVORI – POLIKLINIKA NOVA KRUNA M

Ovaj fajl služi kao radna verzija tekstova koje možeš da prebaciš u `nk-knowledge.js`.

## 1. Opšti disklejmer (bez medicinskih saveta)

**Pitanje:**  
Da li ovaj chat bot može da mi postavi dijagnozu ili kaže šta da radim?

**Odgovor (predlog):**  
Ovaj chat bot služi samo za opšte informacije o uslugama i organizaciji rada Poliklinike Nova Kruna M. Ne postavlja dijagnoze, ne tumači simptome i ne preporučuje terapiju.  
Za bilo kakav zdravstveni problem potrebno je da obavite pregled kod lekara.

---

## 2. Priprema za pregled (popuni prema svojim pravilima)

**Pitanje:**  
Šta treba da ponesem na pregled?

**Odgovor (primer – prilagodi!):**  
Preporuka je da ponesete svu raniju medicinsku dokumentaciju koju imate (nalaze, izveštaje, spiskove terapije), kao i lični dokument. Ako postoji posebna priprema za određenu vrstu pregleda (na primer za neke ultrazvučne preglede), o tome ćete dobiti informaciju prilikom zakazivanja.

*(Ovaj tekst je opšti, ali ga možeš dodatno prilagoditi ako poliklinika ima posebne upute.)*

---

## 3. Odlaganje ili otkazivanje termina

**Pitanje:**  
Šta ako ne mogu da dođem na zakazani termin?

**Odgovor (primer – prilagodi po pravilima poliklinike):**  
Ako ne možete da dođete u zakazano vreme, molimo vas da nas obavestite telefonom što je ranije moguće. Na taj način možemo taj termin da ustupimo nekom drugom pacijentu i da vam ponudimo novi.

---

## 4. Plaćanje (popuni prema realnim informacijama)

**Pitanje:**  
Kako se vrši plaćanje pregleda?

**Odgovor (ostavi kao šablon dok ne uneseš tačne podatke):**  
Plaćanje se vrši [unesite: gotovina / kartice / kombinacija] na prijemu poliklinike nakon završenog pregleda.  
Molimo vas da ovaj odgovor proverite i prilagodite prema stvarnoj proceduri u poliklinici.

---

## 5. Podaci i privatnost

**Pitanje:**  
Kako čuvate moje lične i medicinske podatke?

**Odgovor (primer):**  
Podaci koje ostavite u poliklinici koriste se isključivo u medicinske i administrativne svrhe, u skladu sa važećim propisima o zaštiti podataka. Chat bot ne prikuplja i ne čuva medicinske podatke već služi samo za opšte informativne odgovore.

---

## 6. Kada da se ipak obratim lekaru odmah?

**Pitanje:**  
Kada je bolje da odmah zovem lekara, umesto da tražim odgovor na internetu?

**Odgovor (opšti, bez dijagnoze):**  
Ako imate ozbiljne ili naglo nastale tegobe (izražen bol, otežano disanje, naglu slabost, poremećaj svesti ili bilo šta što vam deluje zabrinjavajuće), nemojte se oslanjati na informacije sa interneta. U takvim situacijama je najbezbednije da se odmah obratite lekaru ili službi hitne pomoći.

---

Ove odgovore možeš po potrebi da prebaciš u `NK_KNOWLEDGE` kao nove stavke
(id, questions, keywords, answer) ili da menjaš postojeće.
```

---

## 4️⃣ Kako da sve ubaciš na sajt

1. Stavi fajlove u projekat (npr. u `/assets/js/` ili slično):

   * `nk-knowledge.js`
   * `nk-chat.js`

2. U HTML (šablon) dodaj negde blizu kraja `<body>`:

```html
<div id="nk-chatbot"></div>

<script src="/putanja/do/nk-knowledge.js"></script>
<script src="/putanja/do/nk-chat.js"></script>
```