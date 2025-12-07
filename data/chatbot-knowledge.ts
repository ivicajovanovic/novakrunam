export interface KnowledgeItem {
    id: string
    questions: string[]
    keywords: string[]
    answer: string
    category: string
}

export const NK_KNOWLEDGE: KnowledgeItem[] = [
    {
        id: "o_nama",
        questions: [
            "Ko ste vi?",
            "Sta je Poliklinika Nova Kruna M?",
            "Cime se bavite?",
            "Koja je ovo poliklinika?",
        ],
        keywords: ["o nama", "nova kruna m", "poliklinika", "cime se bavite", "sta radite"],
        answer:
            "Poliklinika Nova Kruna M je privatna zdravstvena ustanova u Petrovcu na Mlavi. Pružamo specijalističke preglede, dijagnostiku i savetovanja u više oblasti medicine, u savremenom i prijatnom prostoru.",
        category: "opste",
    },

    {
        id: "lokacija",
        questions: ["Gde se nalazite?", "Koja je adresa?", "Kako da dodjem do vas?", "Da li imate parking?"],
        keywords: ["adresa", "lokacija", "gde ste", "gdje ste", "kako da dodjem", "parking"],
        answer:
            "Nalazimo se u Petrovcu na Mlavi, u ulici Petra Dobrnjca 54. Ispred zgrade postoji prostor za parkiranje. Najlakše nas je naći uz pomoć Google Maps navigacije.",
        category: "opste",
    },

    {
        id: "kontakt",
        questions: ["Koji su kontakt telefoni?", "Kako da vas pozovem?", "Imate li broj telefona?", "Telefon poliklinike"],
        keywords: ["telefon", "kontakt", "broj", "broj telefona", "poziv", "zakazivanje telefonom"],
        answer:
            "Možete nas kontaktirati na brojeve telefona 012 327564 i 066 327564. Na tim brojevima dobijate informacije i zakazujete preglede.",
        category: "kontakt",
    },

    {
        id: "radno_vreme",
        questions: ["Koje je vase radno vreme?", "Kada radite?", "Do koliko sati radite?", "Da li radite vikendom?"],
        keywords: ["radno vreme", "radite", "otvoreni", "vikend", "subota", "nedelja"],
        answer:
            "Radimo radnim danima od 08:00 do 16:00. Ako je u pitanju hitna situacija ili je potreban poseban dogovor, najbolje je da nas prvo pozovete telefonom.",
        category: "organizacija",
    },

    {
        id: "zakazivanje",
        questions: [
            "Kako mogu da zakazem termin?",
            "Kako da se narucim?",
            "Zakazivanje pregleda",
            "Kako da rezervisem pregled?",
        ],
        keywords: ["zakazivanje", "zakazi", "narucivanje", "termin", "rezervacija", "pregled zakazivanje"],
        answer:
            "Pregled se zakazuje telefonom, pozivom na brojeve 012 327564 ili 066 327564. Naši zaposleni će vam pomoći da izaberete odgovarajući termin i specijalistu.",
        category: "organizacija",
    },

    {
        id: "bez_zakazivanja",
        questions: [
            "Da li primate pacijente bez zakazivanja?",
            "Mogu li da dodjem bez termina?",
            "Da li je potreban termin?",
            "Primanje bez najave",
        ],
        keywords: ["bez zakazivanja", "bez termina", "bez najave", "hitno", "hitni slucajevi"],
        answer:
            "Pacijente bez zakazanog termina primamo u skladu sa trenutnom gužvom, ali je uvek bolje da se prethodno javite telefonom. Hitni slučajevi imaju prioritet i primaju se odmah kad god je to izvodljivo.",
        category: "organizacija",
    },

    {
        id: "online_prisustvo",
        questions: [
            "Da li imate drustvene mreze?",
            "Da li ste na instagramu?",
            "Imate li facebook?",
            "Gde mogu da vas pratim online?",
        ],
        keywords: ["facebook", "instagram", "drustvene mreze", "online prisustvo", "profil"],
        answer:
            "Možete nas pratiti na Facebook i Instagram nalozima Nova Kruna M, gde objavljujemo obaveštenja i korisne informacije. Osnovne podatke o uslugama uvek možete naći i na ovom sajtu.",
        category: "opste",
    },

    // OPŠTA MEDICINA
    {
        id: "opsta_medicina",
        questions: [
            "Sta radite u opstoj medicini?",
            "Koje usluge nudi opsta medicina?",
            "Da li imate doktora opste prakse?",
            "Pregledi opste medicine",
        ],
        keywords: ["opsta medicina", "doktor opste prakse", "sistemski pregled", "opsti pregled", "preventiva", "doktor", "lekari", "lekar opste prakse"],
        answer:
            "U oblasti opšte medicine obavljamo sistematske i kontrolne preglede, procenu opšteg zdravstvenog stanja i preventivne preglede. Lekar opšte prakse vas može uputiti na dalje specijalističke preglede kada je potrebno.",
        category: "usluge",
    },

    // INTERNISTA
    {
        id: "internista",
        questions: [
            "Sta radi internista kod vas?",
            "Internisticki pregled",
            "Da li imate internistu?",
            "Bolesti unutrasnjih organa",
        ],
        keywords: ["internista", "interna", "unutrasnji organi", "odrasli", "ultrazvuk unutrasnjih organa", "internisticki pregled", "interna medicina", "ima internista"],
        answer:
            "Internista je specijalista za bolesti unutrašnjih organa. Kod nas internistički pregledi obuhvataju klinički pregled i po potrebi dodatnu dijagnostiku, kao što su ultrazvučni pregledi ili laboratorijske analize, uz dogovor sa lekarom.",
        category: "usluge",
    },

    // ORTOPED
    {
        id: "ortoped",
        questions: ["Da li imate ortopeda?", "Ortopedski pregledi", "Povreda kosti ili zgloba", "Bol u kolenu ortoped"],
        keywords: ["ortoped", "kost", "zglob", "misici", "tetive", "povreda", "sport", "ortopedija", "ortopedski", "koleno", "kuk", "lakat", "ima ortoped"],
        answer:
            "Ortopedski pregledi su namenjeni pacijentima sa tegobama u kostima, zglobovima i mišićima, kao i kod sportskih povreda. Ortoped obavlja pregled, daje mišljenje i po potrebi predlaže dalje korake ili rehabilitaciju.",
        category: "usluge",
    },

    // KARDIOLOG
    {
        id: "kardiolog",
        questions: ["Da li imate kardiologa?", "Kardioloski pregled", "Pregled srca", "EKG i ultrazvuk srca"],
        keywords: ["kardiolog", "srce", "ekg", "ultrazvuk srca", "kardioloski pregled", "kardiologija", "pregled srca", "holter", "ima kardiologa"],
        answer:
            "Kardiološki pregledi obuhvataju razgovor sa pacijentom, klinički pregled i po potrebi dijagnostičke procedure kao što su EKG ili ultrazvučni pregled srca. Kardiolog vam daje mišljenje i predloge za dalje praćenje i lečenje.",
        category: "usluge",
    },

    // GINEKOLOG
    {
        id: "ginekolog",
        questions: ["Da li imate ginekologa?", "Ginekoloski pregled", "Pregled za zene", "Praćenje trudnoce"],
        keywords: ["ginekolog", "ginekoloski", "trudnoca", "preventivni pregled", "zene", "ginekologija", "pregled za zene", "ima ginekologa", "ginekoloski pregled"],
        answer:
            "Ginekološki pregledi uključuju rutinske preventivne preglede i ultrazvučne preglede, kao i praćenje trudnoće i savetovanje. Tačne vrste pregleda i procedura dogovarate direktno sa ginekologom prilikom zakazivanja.",
        category: "usluge",
    },

    // UROLOG
    {
        id: "urolog",
        questions: ["Da li imate urologa?", "Uroloski pregled", "Problemi sa mokrenjem", "Pregled prostate"],
        keywords: ["urolog", "urotrakt", "bubreg", "besika", "prostata", "mokracni putevi", "urologija", "uroloski", "ima urologa", "mokrenje"],
        answer:
            "Urološki pregledi namenjeni su pacijentima koji imaju tegobe sa mokraćnim putevima ili organima urinarnog sistema. Urolog obavlja pregled i po potrebi predlaže dodatnu dijagnostiku, poput ultrazvučnog pregleda urotrakta.",
        category: "usluge",
    },

    // NEUROLOG
    {
        id: "neurolog",
        questions: ["Da li imate neurologa?", "Neuroloski pregled", "Glavobolja neurolog", "Problemi sa nervima"],
        keywords: ["neurolog", "neuroloski", "nervni sistem", "glavobolja", "vrtoglavica", "migrena", "neurologija", "ima neurologa", "neuroloski pregled"],
        answer:
            "Neurolog se bavi bolestima nervnog sistema. U poliklinici vrši neurološke preglede i procenu tegoba, a po potrebi predlaže dodatne pretrage. Za bilo kakve ozbiljne simptome važno je da se što pre javite lekaru uživo.",
        category: "usluge",
    },

    // NEUROPSIHIJATAR
    {
        id: "neuropsihijatar",
        questions: [
            "Da li imate neuropsihijatra?",
            "Neuropsihijatrijski pregled",
            "Problemi sa snom i raspolozenjem",
            "Psihicka podrska",
        ],
        keywords: ["neuropsihijatar", "psihijatrija", "psihicke tegobe", "raspolozenje", "spavanje", "neuropsihijatrija", "ima neuropsihijatra", "psihijatar"],
        answer:
            "Neuropsihijatar se bavi stanjima na granici neurologije i psihijatrije, kao što su poremećaji spavanja ili raspoloženja. Pregled podrazumeva razgovor i procenu stanja, a terapija se uvek planira individualno uz stručni nadzor.",
        category: "usluge",
    },

    // SLEEP APNEA
    {
        id: "sleep_apnea",
        questions: [
            "Da li radite ispitivanje apneje u snu?",
            "Sleep apnea pregled",
            "Apneja u snu",
            "Da li pregledate hrkanje i prestanke disanja u snu?",
        ],
        keywords: ["sleep apnea", "apneja u snu", "prestanci disanja", "hrkanje", "ispitivanje sna"],
        answer:
            "U sklopu poliklinike postoji program za procenu i dijagnostiku apneje u snu. Zakazivanje i izbor odgovarajućeg pregleda obavlja se nakon razgovora sa lekarom, jer je za tačnu procenu neophodan pregled uživo.",
        category: "usluge",
    },

    // ULTRAZVUK SRCA
    {
        id: "ultrazvuk_srca",
        questions: ["Da li radite ultrazvuk srca?", "Sta je ultrazvuk srca?", "Eho srca pregled", "Kardioloski ultrazvuk"],
        keywords: ["ultrazvuk srca", "ehokardiografija", "eho srca", "srce ultrazvuk"],
        answer:
            "Ultrazvuk srca (ehokardiografija) je pregled kojim se ultrazvukom prikazuje rad i građa srca. U našoj poliklinici ovaj pregled obavlja kardiolog, a vrsta i obim pregleda dogovaraju se prilikom zakazivanja.",
        category: "dijagnostika",
    },

    // ULTRAZVUK ABDOMENA
    {
        id: "ultrazvuk_abdomena",
        questions: [
            "Da li radite ultrazvuk stomaka?",
            "Ultrazvuk abdomena",
            "Pregled trbuha ultrazvukom",
            "Ultrazvuk jetre i zucne kese",
        ],
        keywords: ["ultrazvuk stomaka", "ultrazvuk abdomena", "abdomen", "stomak ultrazvuk"],
        answer:
            "Ultrazvuk abdomena je pregled trbušnih organa pomoću ultrazvuka. Tačan opseg pregleda, priprema i tumačenje nalaza uvek se rade u direktnom razgovoru sa lekarom koji obavlja pregled.",
        category: "dijagnostika",
    },

    // ULTRAZVUK UROTTRAKTA
    {
        id: "ultrazvuk_urotrakta",
        questions: [
            "Da li radite ultrazvuk bubrega i besike?",
            "Ultrazvuk urotrakta",
            "Urološki ultrazvuk",
            "Pregled bubrega ultrazvukom",
        ],
        keywords: ["ultrazvuk urotrakta", "bubreg ultrazvuk", "besika ultrazvuk", "urološki ultrazvuk"],
        answer:
            "Ultrazvuk urotrakta obuhvata pregled bubrega, bešike i mokraćnih puteva ultrazvukom. Vrstu pregleda i pripremu precizira lekar u dogovoru sa vama prilikom zakazivanja.",
        category: "dijagnostika",
    },

    // DOPLER KRVNIH SUDOVA
    {
        id: "dopler",
        questions: [
            "Da li radite dopler krvnih sudova?",
            "Dopler arterija i vena",
            "Pregled krvnih sudova doplerom",
            "Venski i arterijski dopler",
        ],
        keywords: ["dopler", "doppler", "krvni sudovi", "arterije", "vene", "dopler nogu", "dopler vrata"],
        answer:
            "Dopler krvnih sudova je ultrazvučna metoda kojom se procenjuje protok krvi kroz arterije i vene. Kod nas se dopler obavlja kod odgovarajućeg specijaliste, a precizan tip pregleda se definiše pri zakazivanju.",
        category: "dijagnostika",
    },

    // MERENJE GUSTINE KOSTIJU
    {
        id: "gustina_kostiju",
        questions: [
            "Da li radite merenje gustine kostiju?",
            "Osteoporoza pregled",
            "Merenje mineralne gustine kostiju",
            "Da li imate aparat za kosti?",
        ],
        keywords: ["gustina kostiju", "osteoporoza", "denzitometrija", "merenje kostiju"],
        answer:
            "U poliklinici je moguće merenje mineralne gustine kostiju na specijalizovanom aparatu. Na osnovu nalaza lekar procenjuje rizik od slabosti kostiju i predlaže dalje korake, ali se odluke o terapiji donose isključivo na pregledu.",
        category: "dijagnostika",
    },

    // EMNG
    {
        id: "emng",
        questions: [
            "Da li radite EMNG?",
            "Sta je EMNG pregled?",
            "Pregled nerava i misica",
            "Ispitivanje provodljivosti nerava",
        ],
        keywords: ["emng", "elektromionevrografija", "provodljivost nerava", "nervi i misici"],
        answer:
            "EMNG (elektromionevrografija) je pregled kojim se ispituje funkcija nerava i mišića pomoću elektroda. Pregled se radi po jasnoj indikaciji lekara i uvek u kontrolisanim uslovima, uz objašnjenje pre i tokom procedure.",
        category: "dijagnostika",
    },

    // PREGLEDI I SAVETOVANJA – OPŠTE
    {
        id: "pregledi_savetovanja",
        questions: ["Kakve preglede nudite?", "Koje usluge imate?", "Koje sve specijaliste imate?", "Da li radite savetovanja?"],
        keywords: ["pregledi", "savetovanja", "usluge", "specijalisti", "lista lekara", "kakve usluge", "koje specijaliste imate", "koje preglede radite", "sta nudite"],
        answer:
            "U poliklinici se obavljaju specijalistički pregledi iz više oblasti (opšta medicina, interna medicina, kardiologija, ginekologija, urologija, ortopedija, neurologija, neuropsihijatrija, pedijatrija i druge), kao i dijagnostički pregledi i savetovanja. Za tačan spisak specijalista i usluga najbolje je da nas kontaktirate telefonom.",
        category: "opste",
    },

    // TIM LEKARA – PRIMER ZA GINEKOLOGA
    {
        id: "tim_ginekolog",
        questions: ["Ko je vas ginekolog?", "Kako se zove ginekolog?", "Ime ginekologa"],
        keywords: ["ginekolog ime", "ko je ginekolog", "dr ginekolog", "ginekolog nova kruna"],
        answer:
            "Ginekološke preglede u poliklinici obavlja specijalista ginekologije naveden u odeljku 'Naš tim' na sajtu. Za aktuelne informacije o tome koji ginekolog radi određene termine najbolje je da nas pozovete.",
        category: "tim",
    },

    // PEDIJATAR
    {
        id: "pedijatar",
        questions: [
            "Da li imate pedijatra?",
            "Pedijatrija pregledi",
            "Pregled za decu",
            "Dečji lekar",
        ],
        keywords: ["pedijatar", "pedijatrija", "deca", "dečji lekar", "pregled za decu", "bebe", "mališani"],
        answer:
            "Poliklinika nudi usluge pedijatrije za zdravstvenu negu dece. Pedijatar obavlja kontrolne i preventivne preglede, procenu razvoja i po potrebi savetovanja. Za zakazivanje termina i tačne informacije o pedijatriji pozovite nas telefonom.",
        category: "usluge",
    },

    // ESTETSKA HIRURGIJA
    {
        id: "estetska_hirurgija",
        questions: [
            "Da li radite estetsku hirurgiju?",
            "Estetski zahvati",
            "Kozmetička hirurgija",
            "Estetske operacije",
        ],
        keywords: ["estetska hirurgija", "estetski zahvati", "kozmetička hirurgija", "estetske procedure"],
        answer:
            "U poliklinici se obavljaju konsultacije i određeni zahvati iz oblasti estetske hirurgije. Za tačan opseg usluga, vrstu zahvata i uslove potrebno je direktno kontaktirati lekara specijaliste telefonom.",
        category: "usluge",
    },

    // DERMATOLOGIJA - NIJE DOSTUPNA
    {
        id: "nema_dermatolog",
        questions: [
            "Da li imate dermatologa?",
            "Dermatološki pregled",
            "Pregled kože",
            "Dermatologija",
        ],
        keywords: ["dermatolog", "dermatologija", "koža", "dermatološki pregled", "kožne bolesti", "akne", "ekcem"],
        answer:
            "Poliklinika Nova Kruna M trenutno ne pruža usluge dermatologije. Ako su vam potrebni dermatološki pregledi ili konsultacije, možemo vam preporučiti da potražite specijalističku ustanovu koja se bavi dermatologijom.",
        category: "usluge_koje_ne_nudimo",
    },

    // ORL - NIJE DOSTUPAN
    {
        id: "nema_orl",
        questions: [
            "Da li imate ORL lekara?",
            "Otorinolaringolog",
            "Pregled grla i nosa",
            "Da li imate lekara za uvo grlo nos?",
        ],
        keywords: ["orl", "otorinolaringolog", "uvo", "grlo", "nos", "sinusi", "otorinolaringologija"],
        answer:
            "Poliklinika Nova Kruna M trenutno ne nudi usluge otorinolaringologije (ORL). Za preglede uva, grla i nosa potrebno je da se obratite specijalizovanoj ustanovi ili ORL ordinaciji.",
        category: "usluge_koje_ne_nudimo",
    },

    // OFTALMOLOGIJA - NIJE DOSTUPNA
    {
        id: "nema_oftalmolog",
        questions: [
            "Da li imate oftalmologa?",
            "Oftalmološki pregled",
            "Pregled očiju",
            "Očni lekar",
        ],
        keywords: ["oftalmolog", "oftalmologija", "oči", "vid", "očni pregled", "naočare", "dioptrija"],
        answer:
            "Poliklinika Nova Kruna M trenutno ne pruža usluge oftalmologije. Za preglede očiju i proveru vida preporučujemo da kontaktirate specijalizovanu oftalmološku ordinaciju ili kliniku.",
        category: "usluge_koje_ne_nudimo",
    },

    // STOMATOLOGIJA - NIJE DOSTUPNA
    {
        id: "nema_stomatolog",
        questions: [
            "Da li imate stomatologa?",
            "Stomatološki pregled",
            "Zubar",
            "Pregled zuba",
        ],
        keywords: ["stomatolog", "stomatologija", "zubar", "zubi", "dentista", "plombe", "karijes"],
        answer:
            "Poliklinika Nova Kruna M ne pruža stomatološke usluge. Za zubne preglede i stomatološke intervencije potrebno je da kontaktirate stomatološku ordinaciju ili kliniku.",
        category: "usluge_koje_ne_nudimo",
    },

    // ENDOKRINOLOGIJA - NIJE DOSTUPNA
    {
        id: "nema_endokrinolog",
        questions: [
            "Da li imate endokrinologa?",
            "Endokrinološki pregled",
            "Pregled štitne žlezde",
            "Hormoni",
        ],
        keywords: ["endokrinolog", "endokrinologija", "stitna zlezda", "hormoni", "dijabetes", "glikemija"],
        answer:
            "Poliklinika Nova Kruna M trenutno ne nudi specijalizovane usluge endokrinologije. Za hormonske probleme i preglede štitne žlezde preporučujemo da se obratite specijalizovanoj endokrinološkoj ordinaciji.",
        category: "usluge_koje_ne_nudimo",
    },

    // PULMOLOGIJA - NIJE DOSTUPNA
    {
        id: "nema_pulmolog",
        questions: [
            "Da li imate pulmologa?",
            "Pulmološki pregled",
            "Pregled pluća",
            "Respiratorni sistem",
        ],
        keywords: ["pulmolog", "pulmologija", "pluca", "respiratorni", "astma", "hronicna opstruktivna", "bronhitis"],
        answer:
            "Poliklinika Nova Kruna M trenutno ne nudi specijalizovane usluge pulmologije. Za preglede pluća i respiratornog sistema potrebno je da se obratite specijalizovanoj pulmološkoj ordinaciji.",
        category: "usluge_koje_ne_nudimo",
    },

    // FIZIKALNA TERAPIJA - NIJE DOSTUPNA
    {
        id: "nema_fizikalna",
        questions: [
            "Da li radite fizikalnu terapiju?",
            "Fizioterapija",
            "Rehabilitacija",
            "Masaža terapeutska",
        ],
        keywords: ["fizikalna terapija", "fizioterapija", "rehabilitacija", "masaza", "fizioterapeut", "vezbe"],
        answer:
            "Poliklinika Nova Kruna M trenutno ne nudi fizikalnu terapiju niti rehabilitacione usluge. Za te potrebe preporučujemo da kontaktirate specijalizovane centre za fizikalnu medicinu i rehabilitaciju.",
        category: "usluge_koje_ne_nudimo",
    },

    // ALERGOLOGIJA - NIJE DOSTUPNA
    {
        id: "nema_alergolog",
        questions: [
            "Da li imate alergologa?",
            "Alergološki pregled",
            "Testiranje na alergije",
            "Alergija",
        ],
        keywords: ["alergolog", "alergologija", "alergije", "alergijski", "testiranje", "prick test"],
        answer:
            "Poliklinika Nova Kruna M trenutno ne pruža specijalizovane usluge alergologije. Za testiranje na alergije i alergološke preglede potrebno je da se obratite specijalizovanoj ustanovi.",
        category: "usluge_koje_ne_nudimo",
    },

    // RTG/CT/MRI - NIJE DOSTUPNO
    {
        id: "nema_rtg_ct_mri",
        questions: [
            "Da li radite rendgen?",
            "Da li imate CT?",
            "Da li radite MRI?",
            "Kompjuterizovana tomografija",
        ],
        keywords: ["rendgen", "rtg", "ct", "mri", "magnetna rezonanca", "snimanje", "kompjuterizovana tomografija"],
        answer:
            "Poliklinika Nova Kruna M ne raspolaže opremom za rendgen, CT ili MRI dijagnostiku. Za te vrste snimanja potrebno je da se obratite ustanovama koje pružaju radiološke usluge.",
        category: "usluge_koje_ne_nudimo",
    },

    // LABORATORIJA - NIJE DOSTUPNA
    {
        id: "nema_laboratorija",
        questions: [
            "Da li radite laboratorijske analize?",
            "Da li radite krvnu sliku?",
            "Analiza krvi",
            "Laboratorija",
        ],
        keywords: ["laboratorija", "analize", "krv", "analiza krvi", "krvna slika", "biohemija", "urin"],
        answer:
            "Poliklinika Nova Kruna M trenutno ne obavlja laboratorijske analize. Za te usluge potrebno je da se obratite specijalizovanim laboratorijama ili kliničkim centrima koji nude laboratorijsku dijagnostiku.",
        category: "usluge_koje_ne_nudimo",
    },

    // VAKCINACIJA - NIJE DOSTUPNA
    {
        id: "nema_vakcinacija",
        questions: [
            "Da li radite vakcinaciju?",
            "Vakcinacija odraslih",
            "Vakcine",
            "Da li možete da me vakcinišete?",
        ],
        keywords: ["vakcinacija", "vakcine", "imunizacija", "cepivo", "vakcinisanje"],
        answer:
            "Poliklinika Nova Kruna M trenutno ne pruža usluge vakcinacije. Za potrebe vakcinacije preporučujemo da se obratite domovima zdravlja ili specijalizovanim vakcinacionim centrima.",
        category: "usluge_koje_ne_nudimo",
    },

    // KUĆNE POSETE - NIJE DOSTUPNO
    {
        id: "nema_kucne_posete",
        questions: [
            "Da li dolazite na kućne posete?",
            "Kućni pregled",
            "Kućna nega",
            "Da li dolazi doktor kući?",
        ],
        keywords: ["kucne posete", "kucni pregled", "doktor na kuci", "dolazak kući", "kucna nega"],
        answer:
            "Poliklinika Nova Kruna M trenutno ne pruža usluge kućnih poseta. Svi pregledi i konsultacije obavljaju se u prostorijama poliklinike.",
        category: "usluge_koje_ne_nudimo",
    },

    // OPŠTI DISKLEJMER
    {
        id: "disklejmer",
        questions: [
            "Da li dajte medicinske savete?",
            "Da li ovaj cet bot moze da mi postavi dijagnozu?",
            "Mozete li da mi kazete sta mi je?",
            "Da li ste vi lekar?",
        ],
        keywords: ["dijagnoza", "medicinski savet", "sta mi je", "da li je opasno", "terapija", "lecenje"],
        answer:
            "Ovaj chat bot služi samo za opšte informacije o uslugama i organizaciji rada Poliklinike Nova Kruna M. Ne postavljamo dijagnoze, ne tumačimo simptome i ne preporučujemo terapiju. Za bilo kakav zdravstveni problem obavezno se obratite lekaru na pregledu.",
        category: "bezbednost",
    },
]
