const scenes = {
  classroom:
    "linear-gradient(135deg, #d8e5ef 0%, #eef2f7 24%, #27394f 25%, #31465f 46%, #f3f5f9 47%, #d5dde8 100%)",
  council:
    "radial-gradient(circle at 50% 42%, #c5a76b 0 12%, transparent 13%), linear-gradient(135deg, #17263d, #324966 48%, #0f1d31)",
  women:
    "linear-gradient(135deg, #3d5f49, #1e2c43 58%, #dcc7a1), radial-gradient(circle at 30% 30%, #f2f5fa, transparent 16%)",
  city:
    "linear-gradient(135deg, #6e8795, #27384a 40%, #121b2a 100%)",
  flags:
    "linear-gradient(105deg, #c62828 0 17%, #fff 18% 28%, #174578 29% 48%, #d8aa45 49% 52%, #fff 53% 60%, #c62828 61% 100%)",
  rights:
    "radial-gradient(circle at 50% 48%, rgba(183,138,47,.95) 0 10%, transparent 11%), linear-gradient(135deg, #26374f, #eef2f7)",
  economy:
    "linear-gradient(135deg, #e1b75d, #f6efe2 44%, #163153)",
  world:
    "radial-gradient(circle at 55% 50%, #9dd8f4 0 22%, transparent 23%), linear-gradient(135deg, #06162c, #0f355e)",
  investigation:
    "radial-gradient(circle at 52% 44%, rgba(255,255,255,.32) 0 8%, transparent 9%), linear-gradient(135deg, #0e243c, #c9b78d)",
  culture:
    "linear-gradient(135deg, #111827, #b78a2f 55%, #f5efe4)",
  mountain:
    "linear-gradient(135deg, #d0d8df, #6d7f8f 42%, #3a2f25 43%, #8d7051)",
  archive:
    "linear-gradient(135deg, #eef2f7, #c5a76b 45%, #16243b)",
  sports:
    "linear-gradient(135deg, #102a49, #2f6b3b 55%, #d8af5a)",
}

const translations = {
  fa: {
    dir: "rtl",
    lang: "fa",
    edition: "نسخه دیجیتال",
    contact: "تماس با ما",
    slogan: "زن ، زندگی ، آزادی",
    newspaper: "روزنامه",
    brandName: "ژاندارک",
    brandSubline: "خبر | تحلیل | واقعیت",
    searchLabel: "جستجوی خبر",
    searchPlaceholder: "جستجوی خبر، موضوع یا شخصیت...",
    menu: "منو",
    breaking: "خبر فوری",
    ticker:
      "گزارش تازه از افزایش بازداشت‌های خودسرانه خبرنگاران و فعالان مدنی در افغانستان منتشر شد.",
    nav: [
      "خبرها",
      "حقوق بشر",
      "زنان",
      "گزارش‌های تحقیقی",
      "تحلیل",
      "دیدگاه و یادداشت",
      "ورزش",
      "اقتصاد و توسعه",
      "جامعه",
      "فرهنگ و هنر",
      "جهان",
    ],
    coverageEyebrow: "پوشش‌های ویژه",
    coverageTitle: "پرونده‌های کلیدی ژاندارک",
    viewMore: "مشاهده بیشتر",
    networkEyebrow: "شبکه گزارشگران",
    networkTitle: "شبکه گزارشگران ما در سراسر افغانستان",
    activeNetwork: "شبکه فعال",
    networkCaption: "پوشش محلی با تمرکز بر دقت، امنیت و مسئولیت‌پذیری خبرنگاران.",
    moreReports: "گزارش‌های بیشتر",
    joinTitle: "به شبکه ما بپیوندید",
    joinCopy: "گزارشگر محلی هستید؟ با ما تماس بگیرید.",
    joinButton: "تماس با ما",
    latestTitle: "آخرین خبرها",
    mostReadTitle: "پرخوانده‌ترین‌ها",
    investigativeEyebrow: "گزارش تحقیقی",
    rightsEyebrow: "زنان و حقوق بشر",
    standardsEyebrow: "اعتماد رسانه‌ای",
    standardsTitle: "استاندارد تحریریه ما",
    teamEyebrow: "تیم تحریریه",
    teamTitle: "تیم کوچک، مسئولیت بزرگ",
    footerTagline: "رسانه‌ای برای خبر، تحلیل و واقعیت",
    legalSafe: "اطلاعات حقوقی و مشخصات نشر پس از ثبت نهایی رسانه تکمیل می‌شود.",
    publisher: "مدیر مسئول / Directeur de la publication: در مرحله ثبت",
    quickLinks: "دسترسی سریع",
    legalTitle: "اطلاعات",
    provider: "میزبانی و ارائه‌دهنده خدمات: در مرحله انتخاب",
    demoNotice: "این صفحه یک نمونه نمایشی برای بررسی طراحی و ساختار رسانه است.",
    noResults: "نتیجه‌ای برای جستجوی شما پیدا نشد.",
    hero: [
      {
        lead: true,
        title:
          "محرومیت بیش از ۱.۴ میلیون دختر از آموزش؛ نسل‌کشی خاموش در افغانستان ادامه دارد",
        category: "گزارش ویژه",
        author: "سارا ایوبی",
        time: "۲۴ ثور ۱۴۰۵ - ۰۹:۳۰ صبح",
        scene: "classroom",
      },
      {
        title: "شورای امنیت تمدید مأموریت یوناما و حمایت از حقوق بشر در افغانستان را تصویب کرد",
        category: "جهان",
        author: "کاظم یوسفی",
        time: "۳ ساعت پیش",
        scene: "council",
      },
      {
        title: "تجمع اعتراضی زنان در کابل؛ «صدای ما خاموش نمی‌ماند»",
        category: "زنان",
        author: "مریم شریفی",
        time: "۵ ساعت پیش",
        scene: "women",
      },
      {
        title: "گزارش: خانواده‌ها در افغانستان زیر خط فقر، بحران معیشت عمیق‌تر می‌شود",
        category: "اقتصاد",
        author: "عبدالواجد بینا",
        time: "۷ ساعت پیش",
        scene: "city",
      },
      {
        title: "چین و امریکا گفت‌وگوهای تعرفه‌ای را به مدت ۹۰ روز تمدید کردند",
        category: "جهان",
        author: "فرهاد فقری",
        time: "امروز",
        scene: "flags",
      },
    ],
    coverage: [
      ["حقوق بشر", "گزارش‌ها و تحلیل‌های اختصاصی از وضعیت حقوق بشر در افغانستان و جهان.", "⚖", "rights"],
      ["زنان", "صدای زنان، روایت‌های واقعی و مبارزات برای برابری و آزادی.", "◐", "women"],
      ["گزارش‌های تحقیقی", "تحقیقات عمیق و مستند درباره فساد، قدرت و حقیقت.", "⌕", "investigation"],
      ["اقتصاد و توسعه", "تحلیل اقتصاد، تجارت، اشتغال و چشم‌انداز توسعه منطقه.", "▥", "economy"],
      ["جهان", "تحولات مهم منطقه‌ای و بین‌المللی با نگاهی دقیق و بی‌طرف.", "◎", "world"],
    ],
    correspondents: [
      ["بلال احمدی", "هرات", "گزارش‌های بیشتر"],
      ["نرگس صافی", "مزار شریف", "گزارش‌های بیشتر"],
      ["عبدالله راغند", "کندهار", "گزارش‌های بیشتر"],
      ["فرشته نوری", "غزنی", "گزارش‌های بیشتر"],
    ],
    latest: [
      ["تازه‌ترین آمار خشکسالی؛ نگرانی از کاهش ذخایر آب در غرب افغانستان", "۳۵ دقیقه پیش", "mountain"],
      ["یونیسف: نیازمندی کودکان در افغانستان نگران‌کننده است", "یک ساعت پیش", "classroom"],
      ["قیمت دالر در بازارهای افغانستان دوباره افزایش یافت", "۲ ساعت پیش", "economy"],
      ["فدراسیون فوتبال افغانستان تعلیق شد", "۳ ساعت پیش", "sports"],
    ],
    mostRead: [
      ["طالبان دستور منع کار زنان در رسانه‌ها را صادر کردند", "۹۸٬۴۵۰ بازدید", "women"],
      ["گزارش تحقیقی: استخراج غیرقانونی معادن در کنار", "۷۴٬۳۱۰ بازدید", "mountain"],
      ["داستان زنی که با چالش‌ها موفقیت آفرید", "۶۱٬۸۷۰ بازدید", "culture"],
      ["مدارس دور دست کابل؛ هدف تازه منع آموزش‌ها", "۵۲٬۴۴۰ بازدید", "classroom"],
    ],
    investigation: {
      title: "معادن خونین؛ پشت پرده تجارت میلیون‌ها دالر در افغانستان",
      copy: "شبکه‌های فساد در گمرکات و قراردادها چگونه میلیاردها افغانی را به چرخه غیرشفاف وارد می‌کنند؟",
      bullets: [
        ["رد پول در قراردادهای استخراج محلی", "mountain"],
        ["اسناد تازه از روندهای غیرشفاف", "archive"],
      ],
    },
    rights: {
      title: "زنان و حقوق بشر",
      copy: "روایت‌های انسانی، گزارش‌های میدانی و تحلیل‌های حقوقی برای فهم عمیق‌تر بحران حقوق بشر.",
      items: [
        "آزار و خشونت علیه زنان؛ آمارها چه می‌گویند؟",
        "دختران فعال؛ روایت‌هایی از امید در گوشه‌های افغانستان",
        "قانون اساسی و حقوق زنان؛ چالش‌ها و راه‌حل‌ها",
      ],
    },
    standards: [
      ["تحقیق دقیق", "بررسی و تحقیق از منابع معتبر", "⌕"],
      ["تأیید پیش از نشر", "تمام مطالب پیش از نشر تأیید می‌شوند", "✓"],
      ["بی‌طرفی و انصاف", "پایبندی به بی‌طرفی و انصاف در گزارش‌ها", "⚖"],
      ["مسئولیت‌پذیری", "پذیرش مسئولیت و اصلاح در صورت خطا", "◇"],
    ],
    team: [
      ["سارا ایوبی", "سردبیر"],
      ["کاظم یوسفی", "معاون سردبیر"],
      ["مریم شریفی", "مدیر بخش زنان و جامعه"],
      ["فرهاد فقری", "دبیر بخش بین‌الملل"],
    ],
    footerQuick: ["خبرها", "گزارش‌های تحقیقی", "زنان", "حقوق بشر"],
    footerLegal: [
      "درباره ما",
      "تماس با ما",
      "اطلاعیه قانونی / Mentions Légales",
      "سیاست حریم خصوصی",
      "خط مشی تحریریه",
      "شرایط استفاده",
    ],
  },
  en: {
    dir: "ltr",
    lang: "en",
    edition: "Digital edition",
    contact: "Contact us",
    slogan: "Woman, Life, Freedom",
    newspaper: "Daily newspaper",
    brandName: "Zhandark",
    brandSubline: "News | Analysis | Reality",
    searchLabel: "Search news",
    searchPlaceholder: "Search news, topics, or people...",
    menu: "Menu",
    breaking: "Breaking News",
    ticker:
      "A new report documents rising arbitrary arrests of journalists and civil society activists in Afghanistan.",
    nav: [
      "News",
      "Human Rights",
      "Women",
      "Investigations",
      "Analysis",
      "Opinion",
      "Sports",
      "Economy & Development",
      "Society",
      "Culture & Arts",
      "World",
    ],
    coverageEyebrow: "Special coverage",
    coverageTitle: "Zhandark’s core editorial files",
    viewMore: "View more",
    networkEyebrow: "Reporting network",
    networkTitle: "Our reporting network across Afghanistan",
    activeNetwork: "Active network",
    networkCaption: "Local coverage built around accuracy, safety, and editorial responsibility.",
    moreReports: "More reports",
    joinTitle: "Join our network",
    joinCopy: "Are you a local reporter? Contact our editorial team.",
    joinButton: "Contact us",
    latestTitle: "Latest News",
    mostReadTitle: "Most Read",
    investigativeEyebrow: "Investigation",
    rightsEyebrow: "Women and Human Rights",
    standardsEyebrow: "Media trust",
    standardsTitle: "Our Editorial Standards",
    teamEyebrow: "Editorial team",
    teamTitle: "A small team with serious responsibility",
    footerTagline: "A media platform for news, analysis, and reality",
    legalSafe: "Legal and publication details will be completed after final registration.",
    publisher: "Director of publication: registration pending",
    quickLinks: "Quick links",
    legalTitle: "Information",
    provider: "Hosting and provider details: to be selected",
    demoNotice: "This page is a design and editorial structure demo.",
    noResults: "No results found for your search.",
    hero: [
      {
        lead: true,
        title:
          "More than 1.4 million girls denied education as Afghanistan’s silent generational crisis continues",
        category: "Special Report",
        author: "Sara Ayoubi",
        time: "May 14, 2026 - 09:30",
        scene: "classroom",
      },
      {
        title: "UN Security Council extends UNAMA mandate and calls for human rights protection",
        category: "World",
        author: "Kazem Yousufi",
        time: "3 hours ago",
        scene: "council",
      },
      {
        title: "Women gather in Kabul: ‘Our voices will not be silenced’",
        category: "Women",
        author: "Maryam Sharifi",
        time: "5 hours ago",
        scene: "women",
      },
      {
        title: "Families below the poverty line face deeper economic pressure",
        category: "Economy",
        author: "Abdul Wajid Bina",
        time: "7 hours ago",
        scene: "city",
      },
      {
        title: "China and the United States extend tariff talks for 90 days",
        category: "World",
        author: "Farhad Faqiri",
        time: "Today",
        scene: "flags",
      },
    ],
    coverage: [
      ["Human Rights", "Dedicated reporting and analysis on rights conditions in Afghanistan and beyond.", "⚖", "rights"],
      ["Women", "Women’s voices, lived stories, and the long struggle for equality and freedom.", "◐", "women"],
      ["Investigations", "Deep documented reporting on corruption, power, and public accountability.", "⌕", "investigation"],
      ["Economy & Development", "Analysis of jobs, trade, markets, and regional development.", "▥", "economy"],
      ["World", "Major regional and international developments with careful context.", "◎", "world"],
    ],
    correspondents: [
      ["Bilal Ahmadi", "Herat", "More reports"],
      ["Nargis Safi", "Mazar-i-Sharif", "More reports"],
      ["Abdullah Raghand", "Kandahar", "More reports"],
      ["Freshta Nouri", "Ghazni", "More reports"],
    ],
    latest: [
      ["New drought data raises concern over water reserves in western Afghanistan", "35 minutes ago", "mountain"],
      ["UNICEF: Children’s needs in Afghanistan remain deeply concerning", "1 hour ago", "classroom"],
      ["Dollar prices rise again in Afghan markets", "2 hours ago", "economy"],
      ["Afghanistan football federation faces suspension", "3 hours ago", "sports"],
    ],
    mostRead: [
      ["Taliban order new restrictions on women working in media", "98,450 views", "women"],
      ["Investigation: illegal mining networks in Kandahar", "74,310 views", "mountain"],
      ["The story of a woman building success through pressure", "61,870 views", "culture"],
      ["Remote Kabul schools face new barriers to education", "52,440 views", "classroom"],
    ],
    investigation: {
      title: "Blood minerals: inside a multi-million-dollar trade in Afghanistan",
      copy: "How opaque customs channels and contracts move public wealth into networks of unaccountable influence.",
      bullets: [
        ["Following the money in local extraction contracts", "mountain"],
        ["New documents reveal opaque procurement patterns", "archive"],
      ],
    },
    rights: {
      title: "Women and Human Rights",
      copy: "Human stories, field reporting, and legal analysis to explain the rights crisis with clarity.",
      items: [
        "Violence against women: what the data shows",
        "Young women activists and stories of persistence",
        "Constitutional protections and the road back to accountability",
      ],
    },
    standards: [
      ["Rigorous research", "Every report starts with careful source review", "⌕"],
      ["Verify before publishing", "Claims are checked before publication", "✓"],
      ["Fairness and impartiality", "Reporting must remain balanced and contextual", "⚖"],
      ["Accountability", "Mistakes are corrected transparently", "◇"],
    ],
    team: [
      ["Sara Ayoubi", "Editor-in-Chief"],
      ["Kazem Yousufi", "Deputy Editor"],
      ["Maryam Sharifi", "Women & Society Editor"],
      ["Farhad Faqiri", "International Desk Editor"],
    ],
    footerQuick: ["News", "Investigations", "Women", "Human Rights"],
    footerLegal: [
      "About us",
      "Contact us",
      "Legal notice / Mentions Légales",
      "Privacy policy",
      "Editorial policy",
      "Terms of use",
    ],
  },
  fr: {
    dir: "ltr",
    lang: "fr",
    edition: "Édition numérique",
    contact: "Contact",
    slogan: "Femme, Vie, Liberté",
    newspaper: "Journal",
    brandName: "Zhandark",
    brandSubline: "Actualité | Analyse | Réalité",
    searchLabel: "Recherche",
    searchPlaceholder: "Rechercher une actualité, un sujet ou une personne...",
    menu: "Menu",
    breaking: "Dernière minute",
    ticker:
      "Un nouveau rapport documente la hausse des arrestations arbitraires de journalistes et d’activistes en Afghanistan.",
    nav: [
      "Actualités",
      "Droits humains",
      "Femmes",
      "Enquêtes",
      "Analyse",
      "Opinions",
      "Sport",
      "Économie et développement",
      "Société",
      "Culture et arts",
      "Monde",
    ],
    coverageEyebrow: "Couverture spéciale",
    coverageTitle: "Les grands dossiers de Zhandark",
    viewMore: "Voir plus",
    networkEyebrow: "Réseau de reporters",
    networkTitle: "Notre réseau de reporters à travers l’Afghanistan",
    activeNetwork: "Réseau actif",
    networkCaption: "Une couverture locale fondée sur la précision, la sécurité et la responsabilité éditoriale.",
    moreReports: "Plus de reportages",
    joinTitle: "Rejoindre notre réseau",
    joinCopy: "Vous êtes reporter local ? Contactez notre rédaction.",
    joinButton: "Nous contacter",
    latestTitle: "Dernières actualités",
    mostReadTitle: "Les plus lus",
    investigativeEyebrow: "Enquête",
    rightsEyebrow: "Femmes et droits humains",
    standardsEyebrow: "Confiance éditoriale",
    standardsTitle: "Nos standards éditoriaux",
    teamEyebrow: "Rédaction",
    teamTitle: "Une petite équipe, une grande responsabilité",
    footerTagline: "Un média pour l’actualité, l’analyse et la réalité",
    legalSafe: "Les informations légales et éditoriales seront complétées après l’enregistrement final.",
    publisher: "Directeur de la publication : en cours d’enregistrement",
    quickLinks: "Accès rapide",
    legalTitle: "Informations",
    provider: "Hébergement et prestataire : à définir",
    demoNotice: "Cette page est une démonstration de design et de structure éditoriale.",
    noResults: "Aucun résultat trouvé pour votre recherche.",
    hero: [
      {
        lead: true,
        title:
          "Plus de 1,4 million de filles privées d’éducation : une crise générationnelle silencieuse en Afghanistan",
        category: "Grand reportage",
        author: "Sara Ayoubi",
        time: "14 mai 2026 - 09:30",
        scene: "classroom",
      },
      {
        title: "Le Conseil de sécurité prolonge le mandat de la MANUA et appelle à protéger les droits humains",
        category: "Monde",
        author: "Kazem Yousufi",
        time: "Il y a 3 heures",
        scene: "council",
      },
      {
        title: "Rassemblement de femmes à Kaboul : « Nos voix ne seront pas réduites au silence »",
        category: "Femmes",
        author: "Maryam Sharifi",
        time: "Il y a 5 heures",
        scene: "women",
      },
      {
        title: "Sous le seuil de pauvreté, les familles afghanes subissent une pression accrue",
        category: "Économie",
        author: "Abdul Wajid Bina",
        time: "Il y a 7 heures",
        scene: "city",
      },
      {
        title: "La Chine et les États-Unis prolongent les discussions tarifaires de 90 jours",
        category: "Monde",
        author: "Farhad Faqiri",
        time: "Aujourd’hui",
        scene: "flags",
      },
    ],
    coverage: [
      ["Droits humains", "Reportages et analyses sur les droits en Afghanistan et dans le monde.", "⚖", "rights"],
      ["Femmes", "Voix de femmes, récits vécus et lutte pour l’égalité et la liberté.", "◐", "women"],
      ["Enquêtes", "Reportages documentés sur la corruption, le pouvoir et la responsabilité publique.", "⌕", "investigation"],
      ["Économie et développement", "Analyse de l’emploi, du commerce, des marchés et du développement régional.", "▥", "economy"],
      ["Monde", "Évolutions régionales et internationales avec un contexte solide.", "◎", "world"],
    ],
    correspondents: [
      ["Bilal Ahmadi", "Hérat", "Plus de reportages"],
      ["Nargis Safi", "Mazar-e-Charif", "Plus de reportages"],
      ["Abdullah Raghand", "Kandahar", "Plus de reportages"],
      ["Freshta Nouri", "Ghazni", "Plus de reportages"],
    ],
    latest: [
      ["Sécheresse : inquiétudes autour des réserves d’eau dans l’ouest afghan", "Il y a 35 min", "mountain"],
      ["UNICEF : les besoins des enfants en Afghanistan restent alarmants", "Il y a 1 h", "classroom"],
      ["Le prix du dollar augmente de nouveau sur les marchés afghans", "Il y a 2 h", "economy"],
      ["La fédération afghane de football fait face à une suspension", "Il y a 3 h", "sports"],
    ],
    mostRead: [
      ["Les Taliban imposent de nouvelles restrictions aux femmes dans les médias", "98 450 vues", "women"],
      ["Enquête : réseaux d’extraction illégale à Kandahar", "74 310 vues", "mountain"],
      ["L’histoire d’une femme qui construit sa réussite malgré la pression", "61 870 vues", "culture"],
      ["Les écoles éloignées de Kaboul face à de nouveaux obstacles", "52 440 vues", "classroom"],
    ],
    investigation: {
      title: "Minerais de sang : les coulisses d’un commerce de plusieurs millions de dollars",
      copy: "Comment des circuits opaques de douane et de contrats déplacent la richesse publique vers des réseaux d’influence.",
      bullets: [
        ["Suivre l’argent dans les contrats d’extraction locaux", "mountain"],
        ["De nouveaux documents révèlent des procédures opaques", "archive"],
      ],
    },
    rights: {
      title: "Femmes et droits humains",
      copy: "Récits humains, reportages de terrain et analyse juridique pour expliquer la crise des droits avec clarté.",
      items: [
        "Violences contre les femmes : ce que montrent les données",
        "Jeunes militantes et récits de persévérance",
        "Protections constitutionnelles et retour à la responsabilité",
      ],
    },
    standards: [
      ["Recherche rigoureuse", "Chaque sujet commence par une vérification des sources", "⌕"],
      ["Vérifier avant publication", "Les affirmations sont contrôlées avant diffusion", "✓"],
      ["Équité et impartialité", "Les reportages restent équilibrés et contextualisés", "⚖"],
      ["Responsabilité", "Les erreurs sont corrigées de manière transparente", "◇"],
    ],
    team: [
      ["Sara Ayoubi", "Rédactrice en chef"],
      ["Kazem Yousufi", "Rédacteur adjoint"],
      ["Maryam Sharifi", "Responsable femmes et société"],
      ["Farhad Faqiri", "Responsable international"],
    ],
    footerQuick: ["Actualités", "Enquêtes", "Femmes", "Droits humains"],
    footerLegal: [
      "À propos",
      "Contact",
      "Mentions légales",
      "Politique de confidentialité",
      "Charte éditoriale",
      "Conditions d’utilisation",
    ],
  },
}

let activeLang = "fa"

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => Array.from(document.querySelectorAll(selector))

function initials(name) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
}

function sceneStyle(scene) {
  return `--scene: ${scenes[scene] || scenes.archive}`
}

function renderText() {
  const t = translations[activeLang]
  document.documentElement.lang = t.lang
  document.documentElement.dir = t.dir

  $$("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n
    if (t[key]) node.textContent = t[key]
  })

  $$("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder
    if (t[key]) node.setAttribute("placeholder", t[key])
  })

  $("#breakingLabel").textContent = t.breaking
  $("#tickerText").textContent = t.ticker
}

function renderNav() {
  $("#navList").innerHTML = translations[activeLang].nav
    .map((item) => `<a class="nav-link" href="#main">${item}</a>`)
    .join("")
}

function articleCard(story) {
  const heading = story.lead ? "h2" : "h3"
  return `
    <article class="news-card ${story.lead ? "lead" : ""} searchable" data-search="${story.title} ${story.category} ${story.author}">
      <div class="image-scene" style="${sceneStyle(story.scene)}" role="img" aria-label="${story.category} visual"></div>
      <div class="card-content">
        <span class="category-badge">${story.category}</span>
        <${heading}>${story.title}</${heading}>
        <div class="byline">
          <span class="avatar" aria-hidden="true">${initials(story.author)}</span>
          <span>${story.author}</span>
          <span>${story.time}</span>
        </div>
      </div>
    </article>
  `.trim()
}

function renderHero() {
  const stories = translations[activeLang].hero
  $("#heroGrid").innerHTML = `
    ${articleCard(stories[0], 0)}
    <div class="hero-side">
      ${stories.slice(1).map(articleCard).join("")}
    </div>
  `
}

function renderCoverage() {
  const t = translations[activeLang]
  $("#coverageGrid").innerHTML = t.coverage
    .map(
      ([title, copy, icon, scene]) => `
        <article class="coverage-card searchable" data-search="${title} ${copy}">
          <div class="coverage-visual" style="${sceneStyle(scene)}" role="img" aria-label="${title}">
            <span aria-hidden="true">${icon}</span>
          </div>
          <div class="coverage-card-content">
            <h3>${title}</h3>
            <p>${copy}</p>
            <a class="text-link" href="#main">${t.viewMore}</a>
          </div>
        </article>
      `,
    )
    .join("")
}

function renderNetwork() {
  const tones = [
    ["#c7d2e2", "#7b8798"],
    ["#efe1ca", "#8d7051"],
    ["#dce9f5", "#245179"],
    ["#f0d9d9", "#8f3d45"],
  ]
  $("#correspondents").innerHTML = translations[activeLang].correspondents
    .map(([name, province, link], index) => {
      const [toneA, toneB] = tones[index]
      return `
        <article class="correspondent-card searchable" data-search="${name} ${province}">
          <div class="profile-avatar" style="--tone-a:${toneA};--tone-b:${toneB}" aria-hidden="true"></div>
          <h3>${name}</h3>
          <p>${province}</p>
          <p>${link}</p>
        </article>
      `
    })
    .join("")
}

function renderLists() {
  const t = translations[activeLang]
  $("#latestList").innerHTML = t.latest
    .map(
      ([title, time, scene]) => `
      <article class="compact-news searchable" data-search="${title}">
        <div class="thumb" style="${sceneStyle(scene)}" role="img" aria-label=""></div>
        <div>
          <h3>${title}</h3>
          <span>${time}</span>
        </div>
      </article>
    `,
    )
    .join("")

  $("#mostReadList").innerHTML = t.mostRead
    .map(
      ([title, views, scene], index) => `
      <article class="compact-news ranked searchable" data-search="${title}">
        <strong class="rank">${index + 1}</strong>
        <div class="thumb" style="${sceneStyle(scene)}" role="img" aria-label=""></div>
        <div>
          <h3>${title}</h3>
          <span>${views}</span>
        </div>
      </article>
    `,
    )
    .join("")

  $("#investigativeTitle").textContent = t.investigation.title
  $("#investigativeCopy").textContent = t.investigation.copy
  $("#investigativeBullets").innerHTML = t.investigation.bullets
    .map(
      ([title, scene]) => `
      <article class="mini-item searchable" data-search="${title}">
        <div class="thumb" style="${sceneStyle(scene)}" role="img" aria-label=""></div>
        <strong>${title}</strong>
      </article>
    `,
    )
    .join("")
}

function renderRights() {
  const t = translations[activeLang]
  $("#rightsTitle").textContent = t.rights.title
  $("#rightsCopy").textContent = t.rights.copy
  $("#rightsList").innerHTML = t.rights.items
    .map((item) => `<article class="rights-item searchable" data-search="${item}">${item}</article>`)
    .join("")
}

function renderStandards() {
  $("#standardsGrid").innerHTML = translations[activeLang].standards
    .map(
      ([title, copy, icon]) => `
      <article class="standards-card">
        <div class="standard-icon" aria-hidden="true">${icon}</div>
        <h3>${title}</h3>
        <p>${copy}</p>
      </article>
    `,
    )
    .join("")
}

function renderTeam() {
  const tones = [
    ["#d8e3ef", "#7389a3"],
    ["#e5d5bd", "#2f3b4d"],
    ["#d9e6f6", "#365b82"],
    ["#edf1f6", "#875c5c"],
  ]
  $("#teamGrid").innerHTML = translations[activeLang].team
    .map(([name, role], index) => {
      const [toneA, toneB] = tones[index]
      return `
        <article class="team-card searchable" data-search="${name} ${role}">
          <div class="profile-avatar" style="--tone-a:${toneA};--tone-b:${toneB}" aria-hidden="true"></div>
          <h3>${name}</h3>
          <p>${role}</p>
        </article>
      `
    })
    .join("")
}

function renderFooter() {
  const t = translations[activeLang]
  $("#footerQuick").innerHTML = t.footerQuick.map((item) => `<li>${item}</li>`).join("")
  $("#footerLegal").innerHTML = t.footerLegal.map((item) => `<li>${item}</li>`).join("")
}

function applySearch() {
  const value = $("#siteSearch").value.trim().toLowerCase()
  $$(".searchable").forEach((node) => {
    const haystack = node.dataset.search.toLowerCase()
    node.hidden = value.length > 0 && !haystack.includes(value)
  })
}

function renderAll() {
  renderText()
  renderNav()
  renderHero()
  renderCoverage()
  renderNetwork()
  renderLists()
  renderRights()
  renderStandards()
  renderTeam()
  renderFooter()
  applySearch()
}

function updateDateTime() {
  const t = translations[activeLang]
  const locale = activeLang === "fa" ? "fa-AF" : activeLang === "fr" ? "fr-FR" : "en-GB"
  const formatted = new Intl.DateTimeFormat(locale, {
    timeZone: "Asia/Kabul",
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date())
  $("#dateTime").textContent = formatted
  document.documentElement.lang = t.lang
}

function setLanguage(lang) {
  if (!translations[lang]) return
  activeLang = lang
  $$(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang)
  })
  renderAll()
  updateDateTime()
}

$$(".lang-button[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang))
})

$(".search-form").addEventListener("submit", (event) => {
  event.preventDefault()
  applySearch()
})

$("#siteSearch").addEventListener("input", applySearch)

$(".menu-toggle").addEventListener("click", () => {
  const next = !document.body.classList.contains("menu-open")
  document.body.classList.toggle("menu-open", next)
  $(".menu-toggle").setAttribute("aria-expanded", String(next))
})

$("#mainNav").addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    document.body.classList.remove("menu-open")
    $(".menu-toggle").setAttribute("aria-expanded", "false")
  }
})

renderAll()
updateDateTime()
setInterval(updateDateTime, 30000)
