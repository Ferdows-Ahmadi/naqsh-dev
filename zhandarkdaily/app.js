const scenes = {
  classroom: 'url(./images/girls-classroom-2.jpg) center / cover no-repeat',
  schoolgirl: 'url(./images/schoolgirl.jpg) center / cover no-repeat',
  classroom2: 'url(./images/schoolgirl.jpg) center / cover no-repeat',
  women: 'url(./images/women-protest.jpg) center / cover no-repeat',
  rights: 'url(./images/woman-rights.jpg) center / cover no-repeat',
  protest: 'url(./images/free-afghan-women.jpg) center / cover no-repeat',
  economy: 'url(./images/road-workers.jpg) center / cover no-repeat',
  development: 'url(./images/road-workers.jpg) center / cover no-repeat',
  investigation: 'url(./images/road-workers.jpg) center / cover no-repeat',
  culture: 'url(./images/afghan-culture.jpg) center / cover no-repeat',
  world: 'url(./images/free-afghan-women.jpg) center / cover no-repeat',
  society: 'url(./images/girls-classroom-2.jpg) center / cover no-repeat',
  archive: 'url(./images/woman-rights.jpg) center / cover no-repeat',
  sports: 'url(./images/afghan-culture.jpg) center / cover no-repeat',
}

const brandMap = {
  fa: {
    kicker: "روزنامه",
    title: "ژاندارک",
    fullTitle: "روزنامه ژاندارک",
    slogan: "زن | زندگی | آزادی",
    label: "روزنامه ژاندارک - زن، زندگی، آزادی",
  },
  en: {
    kicker: "NEWSPAPER",
    title: "ZHANDARK",
    fullTitle: "NEWSPAPER ZHANDARK",
    slogan: "WOMAN | LIFE | FREEDOM",
    label: "Newspaper Zhandark - Woman, Life, Freedom",
  },
  fr: {
    kicker: "JOURNAL",
    title: "ZHANDARK",
    fullTitle: "JOURNAL ZHANDARK",
    slogan: "FEMME | VIE | LIBERTÉ",
    label: "Journal Zhandark - Femme, Vie, Liberté",
  },
}

const profileImages = [
  "./images/profile-1.jpg",
  "./images/profile-2.jpg",
  "./images/profile-3.jpg",
  "./images/profile-4.jpg",
  "./images/profile-5.jpg",
  "./images/profile-6.jpg",
  "./images/profile-7.jpg",
  "./images/profile-8.jpg",
]

const translations = {
  fa: {
    dir: "rtl",
    lang: "fa",
    edition: "نسخه دیجیتال",
    contact: "تماس با ما",
    slogan: "زن ، زندگی ، آزادی",
    newspaper: "روزنامه",
    brandName: "ژاندارک",
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
    footerTagline: "رسانه‌ای مستقل برای روایت‌های معتبر و مسئولانه",
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
        scene: "world",
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
        scene: "economy",
      },
      {
        title: "چین و امریکا گفت‌وگوهای تعرفه‌ای را به مدت ۹۰ روز تمدید کردند",
        category: "جهان",
        author: "فرهاد فقری",
        time: "امروز",
        scene: "world",
      },
    ],
    coverage: [
      ["حقوق بشر", "گزارش‌ها و تحلیل‌های اختصاصی از وضعیت حقوق بشر در افغانستان و جهان.", "⚖", "rights"],
      ["زنان", "صدای زنان، روایت‌های واقعی و مبارزات برای برابری و آزادی.", "◐", "women"],
      ["گزارش‌های تحقیقی", "تحقیقات عمیق و مستند درباره فساد، قدرت و حقیقت.", "⌕", "investigation"],
      ["اقتصاد و توسعه", "تحلیل اقتصاد، تجارت، اشتغال و چشم‌انداز توسعه منطقه.", "▥", "development"],
      ["جهان", "تحولات مهم منطقه‌ای و بین‌المللی با نگاهی دقیق و بی‌طرف.", "◎", "world"],
    ],
    correspondents: [
      ["بلال احمدی", "هرات", "گزارشگر ولایتی", "گزارش‌های بیشتر"],
      ["نرگس صافی", "مزار شریف", "خبرنگار جامعه و فرهنگ", "گزارش‌های بیشتر"],
      ["عبدالله راغند", "کندهار", "گزارشگر میدانی", "گزارش‌های بیشتر"],
      ["فرشته نوری", "غزنی", "خبرنگار حقوق بشر", "گزارش‌های بیشتر"],
    ],
    latest: [
      ["تازه‌ترین آمار خشکسالی؛ نگرانی از کاهش ذخایر آب در غرب افغانستان", "۳۵ دقیقه پیش", "جامعه", "development"],
      ["یونیسف: نیازمندی کودکان در افغانستان نگران‌کننده است", "یک ساعت پیش", "حقوق بشر", "classroom"],
      ["قیمت دالر در بازارهای افغانستان دوباره افزایش یافت", "۲ ساعت پیش", "اقتصاد", "economy"],
      ["فدراسیون فوتبال افغانستان تعلیق شد", "۳ ساعت پیش", "ورزش", "sports"],
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
        ["رد پول در قراردادهای استخراج محلی", "investigation"],
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
      ["سارا ایوبی", "سردبیر", "مسئول هماهنگی نشر، صحت‌سنجی و اولویت‌های خبری روزانه."],
      ["کاظم یوسفی", "معاون سردبیر", "تمرکز بر تحلیل سیاسی، گزارش‌های تحقیقی و استانداردهای تحریریه."],
      ["مریم شریفی", "مدیر بخش زنان و جامعه", "پیگیری روایت‌های زنان، جامعه مدنی و حقوق بشر."],
      ["فرهاد فقری", "دبیر بخش بین‌الملل", "پوشش تحولات منطقه‌ای، روابط خارجی و سیاست جهان."],
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
    footerTagline: "Independent media for verified, responsible reporting",
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
        scene: "world",
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
        scene: "economy",
      },
      {
        title: "China and the United States extend tariff talks for 90 days",
        category: "World",
        author: "Farhad Faqiri",
        time: "Today",
        scene: "world",
      },
    ],
    coverage: [
      ["Human Rights", "Dedicated reporting and analysis on rights conditions in Afghanistan and beyond.", "⚖", "rights"],
      ["Women", "Women’s voices, lived stories, and the long struggle for equality and freedom.", "◐", "women"],
      ["Investigations", "Deep documented reporting on corruption, power, and public accountability.", "⌕", "investigation"],
      ["Economy & Development", "Analysis of jobs, trade, markets, and regional development.", "▥", "development"],
      ["World", "Major regional and international developments with careful context.", "◎", "world"],
    ],
    correspondents: [
      ["Bilal Ahmadi", "Herat", "Provincial correspondent", "More reports"],
      ["Nargis Safi", "Mazar-i-Sharif", "Society and culture reporter", "More reports"],
      ["Abdullah Raghand", "Kandahar", "Field reporter", "More reports"],
      ["Freshta Nouri", "Ghazni", "Human rights reporter", "More reports"],
    ],
    latest: [
      ["New drought data raises concern over water reserves in western Afghanistan", "35 minutes ago", "Society", "development"],
      ["UNICEF: Children’s needs in Afghanistan remain deeply concerning", "1 hour ago", "Human Rights", "classroom"],
      ["Dollar prices rise again in Afghan markets", "2 hours ago", "Economy", "economy"],
      ["Afghanistan football federation faces suspension", "3 hours ago", "Sports", "sports"],
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
        ["Following the money in local extraction contracts", "investigation"],
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
      ["Sara Ayoubi", "Editor-in-Chief", "Leads daily publishing, verification, and editorial priorities."],
      ["Kazem Yousufi", "Deputy Editor", "Focuses on political analysis, investigations, and editorial standards."],
      ["Maryam Sharifi", "Women & Society Editor", "Covers women’s stories, civil society, and human rights."],
      ["Farhad Faqiri", "International Desk Editor", "Tracks regional developments, foreign affairs, and world politics."],
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
    footerTagline: "Un média indépendant pour une information vérifiée et responsable",
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
        scene: "world",
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
        scene: "economy",
      },
      {
        title: "La Chine et les États-Unis prolongent les discussions tarifaires de 90 jours",
        category: "Monde",
        author: "Farhad Faqiri",
        time: "Aujourd’hui",
        scene: "world",
      },
    ],
    coverage: [
      ["Droits humains", "Reportages et analyses sur les droits en Afghanistan et dans le monde.", "⚖", "rights"],
      ["Femmes", "Voix de femmes, récits vécus et lutte pour l’égalité et la liberté.", "◐", "women"],
      ["Enquêtes", "Reportages documentés sur la corruption, le pouvoir et la responsabilité publique.", "⌕", "investigation"],
      ["Économie et développement", "Analyse de l’emploi, du commerce, des marchés et du développement régional.", "▥", "development"],
      ["Monde", "Évolutions régionales et internationales avec un contexte solide.", "◎", "world"],
    ],
    correspondents: [
      ["Bilal Ahmadi", "Hérat", "Correspondant provincial", "Plus de reportages"],
      ["Nargis Safi", "Mazar-e-Charif", "Reporter société et culture", "Plus de reportages"],
      ["Abdullah Raghand", "Kandahar", "Reporter de terrain", "Plus de reportages"],
      ["Freshta Nouri", "Ghazni", "Reporter droits humains", "Plus de reportages"],
    ],
    latest: [
      ["Sécheresse : inquiétudes autour des réserves d’eau dans l’ouest afghan", "Il y a 35 min", "Société", "development"],
      ["UNICEF : les besoins des enfants en Afghanistan restent alarmants", "Il y a 1 h", "Droits humains", "classroom"],
      ["Le prix du dollar augmente de nouveau sur les marchés afghans", "Il y a 2 h", "Économie", "economy"],
      ["La fédération afghane de football fait face à une suspension", "Il y a 3 h", "Sport", "sports"],
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
        ["Suivre l’argent dans les contrats d’extraction locaux", "investigation"],
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
      ["Sara Ayoubi", "Rédactrice en chef", "Coordonne la publication, la vérification et les priorités éditoriales."],
      ["Kazem Yousufi", "Rédacteur adjoint", "Suit l’analyse politique, les enquêtes et les standards de rédaction."],
      ["Maryam Sharifi", "Responsable femmes et société", "Couvre les récits de femmes, la société civile et les droits humains."],
      ["Farhad Faqiri", "Responsable international", "Suit les dynamiques régionales, diplomatiques et mondiales."],
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
let activeHeroIndex = 0
let heroTimer = null
let heroTouchStartX = 0
let heroTouchStartY = 0

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => Array.from(document.querySelectorAll(selector))
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

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

  const brand = brandMap[activeLang]
  const brandLockup = $(".brand-lockup")
  if (brandLockup) brandLockup.setAttribute("aria-label", brand.label)
  $("#brandKicker").textContent = brand.kicker
  $("#brandTitle").textContent = brand.title
  $("#brandSlogan").textContent = brand.slogan
  $("#footerBrandTitle").textContent = brand.fullTitle
  $("#footerBrandSlogan").textContent = brand.slogan

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

function articleCard(story, options = {}) {
  const isLead = Boolean(options.lead)
  const heading = isLead ? "h2" : "h3"
  const cardClasses = ["news-card", isLead ? "lead" : "", options.clickable ? "story-select" : "", "searchable"]
    .filter(Boolean)
    .join(" ")
  const attrs = [
    options.index !== undefined ? `data-hero-index="${options.index}"` : "",
    options.clickable ? 'role="button" tabindex="0"' : "",
  ]
    .filter(Boolean)
    .join(" ")
  return `
    <article class="${cardClasses}" ${attrs} data-search="${story.title} ${story.category} ${story.author}">
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
  if (activeHeroIndex >= stories.length) activeHeroIndex = 0
  const leadStory = stories[activeHeroIndex]
  const sideStories = stories.filter((_, index) => index !== activeHeroIndex)
  $("#heroGrid").innerHTML = `
    <div class="hero-stage">
      ${articleCard(leadStory, { lead: true, index: activeHeroIndex })}
      <div class="hero-controls" aria-label="Featured story controls">
        <button type="button" class="hero-arrow" data-hero-prev aria-label="Previous featured story">‹</button>
        <div class="hero-dots">
          ${stories
            .map(
              (_, index) =>
                `<button type="button" class="hero-dot ${index === activeHeroIndex ? "active" : ""}" data-hero-index="${index}" aria-label="Show story ${index + 1}"></button>`,
            )
            .join("")}
        </div>
        <button type="button" class="hero-arrow" data-hero-next aria-label="Next featured story">›</button>
      </div>
    </div>
    <div class="hero-side">
      ${sideStories.map((story) => articleCard(story, { clickable: true, index: stories.indexOf(story) })).join("")}
    </div>
  `
}

function setHeroIndex(index, manual = false) {
  const stories = translations[activeLang].hero
  activeHeroIndex = (index + stories.length) % stories.length
  renderHero()
  applySearch()
  if (manual) startHeroRotation()
}

function startHeroRotation() {
  window.clearInterval(heroTimer)
  if (prefersReducedMotion) return
  heroTimer = window.setInterval(() => {
    setHeroIndex(activeHeroIndex + 1)
  }, 6500)
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
  $("#correspondents").innerHTML = translations[activeLang].correspondents
    .map(([name, province, role, link], index) => {
      return `
        <article class="correspondent-card searchable" data-search="${name} ${province}">
          <img class="profile-avatar" src="${profileImages[index]}" alt="${name}" loading="lazy" />
          <h3>${name}</h3>
          <p>${province}</p>
          <p class="role">${role}</p>
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
      ([title, time, category, scene]) => `
      <article class="compact-news searchable" data-search="${title}">
        <div class="thumb" style="${sceneStyle(scene)}" role="img" aria-label=""></div>
        <div>
          <span class="compact-category">${category}</span>
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
  $("#teamGrid").innerHTML = translations[activeLang].team
    .map(([name, role, bio], index) => {
      return `
        <article class="team-card searchable" data-search="${name} ${role}">
          <img class="profile-avatar" src="${profileImages[index + 4]}" alt="${name}" loading="lazy" />
          <h3>${name}</h3>
          <p>${role}</p>
          <p class="team-bio">${bio}</p>
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
  startHeroRotation()
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

$("#heroGrid").addEventListener("click", (event) => {
  const prev = event.target.closest("[data-hero-prev]")
  const next = event.target.closest("[data-hero-next]")
  const selector = event.target.closest("[data-hero-index]")

  if (prev) {
    setHeroIndex(activeHeroIndex - 1, true)
    return
  }

  if (next) {
    setHeroIndex(activeHeroIndex + 1, true)
    return
  }

  if (selector && !selector.classList.contains("lead")) {
    setHeroIndex(Number(selector.dataset.heroIndex), true)
  }
})

$("#heroGrid").addEventListener("keydown", (event) => {
  if (!["Enter", " "].includes(event.key)) return
  const selector = event.target.closest(".story-select[data-hero-index], .hero-dot[data-hero-index], [data-hero-prev], [data-hero-next]")
  if (!selector) return
  event.preventDefault()
  selector.click()
})

$("#heroGrid").addEventListener(
  "touchstart",
  (event) => {
    const touch = event.changedTouches[0]
    heroTouchStartX = touch.clientX
    heroTouchStartY = touch.clientY
  },
  { passive: true },
)

$("#heroGrid").addEventListener(
  "touchend",
  (event) => {
    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - heroTouchStartX
    const deltaY = touch.clientY - heroTouchStartY

    if (Math.abs(deltaX) < 45 || Math.abs(deltaY) > 60) return
    const direction = document.documentElement.dir === "rtl" ? -1 : 1
    setHeroIndex(activeHeroIndex + (deltaX < 0 ? direction : -direction), true)
  },
  { passive: true },
)

renderAll()
updateDateTime()
setInterval(updateDateTime, 30000)
