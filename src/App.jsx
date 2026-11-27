import { useEffect, useState } from 'react'
import { ArrowRight, ArrowUpRight, Code2, Layers3, Globe2, Menu, X, Mail, MessageCircle } from 'lucide-react'

const copy = {
  en: {
    nav: ['Products', 'Services', 'Work', 'About', 'Contact'], menu: 'Menu', skip: 'Skip to content', start: 'Start a project', language: 'Switch to Dari',
    eyebrow: 'Independent technology studio · Kabul, Afghanistan',
    hero: ['Engineering what', 'comes next.'], intro: 'We design, build and launch digital products that make businesses work better. Built in Kabul, made for the world.',
    explore: 'Explore our products', partner: 'Work with us', heroNote: 'Design. Engineering. Real-world impact.',
    productLabel: '01 / Our products', productTitle: 'Software for the real world.', productIntro: 'Purpose-built platforms for sports, healthcare commerce and trading.',
    products: [
      ['Futsal', 'Sports & venue management', 'Online reservations, scheduling and venue operations in one platform.', 'Explore Futsal'],
      ['Darmalton', 'Digital pharmacy', 'A digital pharmacy platform connecting customers with pharmaceutical services.', 'Explore Darmalton'],
      ['Tick Jot', 'Trading journal', 'Record trades, review decisions and understand your trading performance.', 'Explore Tick Jot'],
    ],
    serviceLabel: '02 / Our expertise', serviceTitle: 'From idea to infrastructure.', serviceIntro: 'Design and engineering under one roof, from the first conversation to deployment.',
    services: [['Software engineering', 'Custom platforms, APIs, dashboards and business systems.'], ['Web & mobile', 'Responsive websites, mobile applications and progressive web apps.'], ['AI & data', 'Applied machine learning, automation and data-driven workflows.'], ['Design & identity', 'Product interfaces, visual identity and digital experiences.'], ['Multilingual experiences', 'Thoughtful English, Dari and other multilingual experiences.'], ['Deployment & support', 'Reliable releases, hosting and ongoing maintenance.']],
    workLabel: '03 / Selected work', workTitle: 'Built for ambitious ideas.', workIntro: 'A selection of our client and portfolio work.',
    projects: [['Kabul Journal', 'Multilingual publishing and editorial experience.'], ['Akhtari Care', 'Parent-focused digital care experience.'], ['Zhandark Daily', 'Digital publishing and news.'], ['GOLD NGO', 'Digital presence for an Afghan organization.']],
    aboutLabel: '04 / About Naqsh', aboutTitle: 'Small studio. Serious engineering.', aboutText: 'Naqsh Digital Studio is an independent creative technology studio based in Kabul. We combine software engineering, design and product thinking to build useful technology for Afghan businesses and global clients.',
    principles: ['Build for real needs', 'Make complexity feel simple', 'Design for people, not just screens'],
    contactLabel: '05 / Contact', contactTitle: 'Let’s build something useful.', contactText: 'Tell us about your project, request a product demonstration, or discuss a partnership.', email: 'Email us', whatsapp: 'Chat on WhatsApp', demo: 'Request a demo', footer: 'Designed in Kabul. Engineered for the world.', blog: 'Blog', game: 'Code Rush', rights: 'Naqsh Digital Studio.'
  },
  fa: {
    nav: ['محصولات', 'خدمات', 'نمونه‌کارها', 'دربارهٔ ما', 'تماس'], menu: 'فهرست', skip: 'رفتن به محتوای اصلی', start: 'آغاز یک پروژه', language: 'تغییر زبان به انگلیسی',
    eyebrow: 'استودیوی مستقل تکنالوژی · کابل، افغانستان',
    hero: ['مهندسی آینده،', 'از همین امروز.'], intro: 'ما محصولات دیجیتالی را طراحی، توسعه و راه‌اندازی می‌کنیم تا کاروبارها بهتر عمل کنند. ساخته‌شده در کابل، برای جهان.',
    explore: 'دیدن محصولات ما', partner: 'همکاری با ما', heroNote: 'طراحی. مهندسی. تأثیر واقعی.',
    productLabel: '۰۱ / محصولات ما', productTitle: 'نرم‌افزار برای نیازهای واقعی.', productIntro: 'پلتفرم‌های اختصاصی برای ورزش، تجارت دارویی و معاملات مالی.',
    products: [
      ['فوتسال', 'مدیریت جمنازیوم و ورزش', 'رزرو آنلاین، تنظیم اوقات بازی و مدیریت امور جمنازیوم در یک پلتفرم.', 'دیدن فوتسال'],
      ['درملتون', 'درملتون دیجیتالی', 'پلتفرم دیجیتالی برای ارتباط مشتریان با خدمات دارویی.', 'دیدن درملتون'],
      ['Tick Jot', 'ژورنال معاملات', 'معاملات خود را ثبت کنید، تصمیم‌های خود را بررسی کنید و عملکرد معاملاتی خود را بهتر بشناسید.', 'دیدن Tick Jot'],
    ],
    serviceLabel: '۰۲ / تخصص ما', serviceTitle: 'از مفکوره تا زیربنا.', serviceIntro: 'طراحی و مهندسی در یک مجموعه؛ از نخستین گفتگو تا راه‌اندازی.',
    services: [['مهندسی نرم‌افزار', 'پلتفرم‌های اختصاصی، رابط‌های برنامه‌نویسی، داشبوردها و سیستم‌های مدیریتی.'], ['وب و موبایل', 'وب‌سایت‌های سازگار با دستگاه‌ها، اپلیکیشن‌های موبایل و وب‌اپلیکیشن‌ها.'], ['هوش مصنوعی و داده‌ها', 'یادگیری ماشینی، خودکارسازی و راهکارهای مبتنی بر داده.'], ['طراحی و هویت بصری', 'رابط کاربری محصولات، هویت بصری و تجربه‌های دیجیتالی.'], ['تجربه‌های چندزبانه', 'طراحی تجربه‌های کاربری به زبان‌های دری، انگلیسی و دیگر زبان‌ها.'], ['راه‌اندازی و پشتیبانی', 'انتشار مطمئن، میزبانی و پشتیبانی دوامدار.']],
    workLabel: '۰۳ / نمونه‌کارها', workTitle: 'ساخته‌شده برای مفکوره‌های بزرگ.', workIntro: 'گزیده‌ای از پروژه‌ها و نمونه‌کارهای ما.',
    projects: [['کابل ژورنال', 'نشر چندزبانه و تجربهٔ دیجیتالی رسانه‌ای.'], ['Akhtari Care', 'تجربهٔ دیجیتالی خدمات مراقبتی برای والدین.'], ['ژاندارک دیلی', 'نشر دیجیتالی و اخبار.'], ['مؤسسهٔ GOLD', 'حضور دیجیتالی برای یک مؤسسهٔ افغانستان.']],
    aboutLabel: '۰۴ / دربارهٔ نقش', aboutTitle: 'استودیوی کوچک، مهندسی جدی.', aboutText: 'نقش دیجیتال استودیو یک استودیوی مستقل تکنالوژی در کابل است. ما مهندسی نرم‌افزار، طراحی و تفکر محصول را یک‌جا می‌سازیم تا برای کاروبارهای افغانستان و مشتریان جهانی تکنالوژی مفید ایجاد کنیم.',
    principles: ['ساختن برای نیازهای واقعی', 'ساده‌سازی پیچیدگی‌ها', 'طراحی برای انسان‌ها'],
    contactLabel: '۰۵ / تماس', contactTitle: 'با هم چیزی مفید بسازیم.', contactText: 'دربارهٔ پروژهٔ خود بگویید، درخواست نمایش محصول بدهید یا دربارهٔ همکاری با ما گفتگو کنید.', email: 'ارسال ایمیل', whatsapp: 'گفتگو در واتس‌اپ', demo: 'درخواست نمایش محصول', footer: 'طراحی‌شده در کابل، مهندسی‌شده برای جهان.', blog: 'وبلاگ', game: 'Code Rush', rights: 'نقش دیجیتال استودیو.'
  }
}

const productMeta = [
  { url: 'https://futsal.naqsh.dev/', color: '#cfff79', type: 'futsal', word: 'FUTSAL', index: '01' },
  { url: 'https://darmalton.com/', color: '#7ee2ca', type: 'pharmacy', word: 'DARMALTON', index: '02' },
  { url: 'https://tickjot.com/', color: '#c2b4ff', type: 'trading', word: 'TICK JOT', index: '03' },
]
const navHrefs = ['#products', '#services', '#work', '#about', '#contact']
const projectUrls = [null, null, 'https://zhandarkdaily.com/', 'https://gold.ngo/']
const serviceIcons = [Code2, Layers3, Code2, Layers3, Globe2, Code2]

function Logo() {
  return <svg className="wordmark" viewBox="0 0 2048 632" role="img" aria-label="Naqsh" dir="ltr">
    <path fill="#fc215a" d="M14 497V312C14 208 100 127 211 127S408 208 408 312V497H328V312C328 254 277 209 211 209S97 254 97 312V497Z"/>
    <g fill="#f1f2f6" fillRule="evenodd">
      <path d="M635 129C531 129 447 211 447 313S531 497 635 497C680 497 716 481 748 455V497H824V313C824 211 739 129 635 129ZM635 209A110 106 0 1 0 635 421A110 106 0 1 0 635 209Z"/>
      <path d="M1055 129A188 184 0 1 0 1055 497A188 184 0 1 0 1055 129ZM1055 209A110 106 0 1 0 1055 421A110 106 0 1 0 1055 209ZM1100 499H1259V616H1186Z"/>
      <path d="M1602 133H1394C1330 133 1294 177 1294 240C1294 292 1325 319 1370 331L1527 358C1559 366 1561 423 1517 423H1306L1285 497H1527C1587 497 1624 453 1624 394C1624 336 1590 303 1550 292L1392 268C1359 263 1359 209 1398 209H1598Z"/>
      <path d="M1667 14H1743V173C1775 144 1806 133 1855 133C1957 133 2033 210 2033 313V497H1949V310C1949 254 1906 215 1848 215S1747 254 1747 313V497H1667Z"/>
    </g>
  </svg>
}

function ProductArt({ product }) {
  return <div className={'product-art '+product.type} aria-hidden="true" style={{'--accent': product.color}}>
    <span className="art-index">NQ / {product.index}</span>
    <svg viewBox="0 0 320 160" fill="none" className="art-svg">
      {product.type === 'futsal' ? <g stroke="currentColor" strokeWidth="1.4"><rect x="27" y="17" width="266" height="126" rx="8"/><path d="M160 17V143M27 48H65V112H27M293 48H255V112H293"/><circle cx="160" cy="80" r="27"/><path d="M65 55Q105 80 65 105M255 55Q215 80 255 105"/><circle cx="160" cy="80" r="3" fill="currentColor"/></g> : product.type === 'pharmacy' ? <g stroke="currentColor" strokeWidth="1.5"><path d="M139 24H181V59H216V101H181V136H139V101H104V59H139Z"/><circle cx="160" cy="80" r="72" strokeDasharray="2 7" opacity=".5"/><path d="M51 80H83M237 80H269M160 3V14M160 146V157"/></g> : <g stroke="currentColor" strokeWidth="1.5"><path d="M30 28V136H294M30 104H294M30 72H294M30 40H294" opacity=".25"/><path d="M40 115L75 92L105 102L141 59L175 77L211 37L244 52L285 20" strokeWidth="2.5"/><path d="M40 115L75 92L105 102L141 59L175 77L211 37L244 52L285 20V136H40Z" fill="currentColor" opacity=".08"/><circle cx="285" cy="20" r="4" fill="currentColor"/></g>}
    </svg><span className="art-word">{product.word}</span>
  </div>
}

function App() {
  const [lang, setLang] = useState(() => new URLSearchParams(window.location.search).get('lang') === 'fa' ? 'fa' : 'en')
  const [menu, setMenu] = useState(false)
  const t = copy[lang]
  const rtl = lang === 'fa'
  useEffect(() => {
    document.documentElement.lang = rtl ? 'fa-AF' : 'en'
    document.documentElement.dir = rtl ? 'rtl' : 'ltr'
    document.title = rtl ? 'نقش دیجیتال استودیو | مهندسی و محصولات دیجیتالی' : 'Naqsh Digital Studio | Software engineering & digital products'
  }, [rtl])
  function switchLanguage() {
    const next = rtl ? 'en' : 'fa'
    const url = new URL(window.location.href)
    if (next === 'fa') url.searchParams.set('lang', 'fa'); else url.searchParams.delete('lang')
    window.history.replaceState(null, '', url)
    setLang(next); setMenu(false)
  }
  return <div className="site" dir={rtl ? 'rtl' : 'ltr'}>
    <a className="skip" href="#main">{t.skip}</a>
    <header className="header"><div className="shell nav">
      <a href="#top" className="brand" aria-label="Naqsh Digital Studio"><Logo/></a>
      <nav className={'navlinks '+(menu?'open':'')} aria-label={t.menu}>{t.nav.map((label,i)=><a key={navHrefs[i]} href={navHrefs[i]} onClick={()=>setMenu(false)}>{label}</a>)}</nav>
      <div className="nav-actions"><button className="language" type="button" aria-label={t.language} onClick={switchLanguage}><Globe2 size={15}/><span>{rtl?'EN':'دری'}</span></button><a href="#contact" className="btn small nav-cta">{t.start}<ArrowUpRight size={15}/></a><button className="menu-btn" type="button" aria-label={t.menu} aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div>
    </div></header>
    <main id="main">
      <section id="top" className="hero"><div className="shell hero-inner">
        <div className="hero-content"><p className="eyebrow"><span className="status-dot"/>{t.eyebrow}</p><h1>{t.hero[0]}<br/><span>{t.hero[1]}</span></h1><p className="lead">{t.intro}</p><div className="actions"><a className="btn primary" href="#products">{t.explore}<ArrowRight size={18} className="directional"/></a><a className="btn secondary" href="#contact">{t.partner}<ArrowUpRight size={17}/></a></div></div>
        <div className="hero-visual" aria-hidden="true"><svg viewBox="0 0 440 440" fill="none"><defs><radialGradient id="halo"><stop stopColor="#fc215a" stopOpacity=".18"/><stop offset="1" stopColor="#fc215a" stopOpacity="0"/></radialGradient><linearGradient id="line"><stop stopColor="#4e5c94"/><stop offset="1" stopColor="#fc215a"/></linearGradient></defs><circle cx="220" cy="220" r="220" fill="url(#halo)"/><g stroke="#303446" strokeWidth="1"><circle cx="220" cy="220" r="172"/><circle cx="220" cy="220" r="135"/><circle cx="220" cy="220" r="100" strokeDasharray="3 7"/><path d="M48 220H392M220 48V392M98 98L342 342M98 342L342 98"/></g><g stroke="url(#line)" strokeWidth="1.5"><path d="M220 74L350 149V291L220 366L90 291V149Z M90 149L220 224L350 149M220 224V366M220 74V224"/><path d="M145 183L275 108M145 183V325M145 183L275 258M275 258L350 215M275 258V334" opacity=".45"/></g><circle cx="350" cy="149" r="5" fill="#fc215a"/><circle cx="90" cy="291" r="4" fill="#a6aee0"/><circle cx="220" cy="224" r="5" fill="#f3f4f6"/></svg><span className="visual-code">NQ / 01 — SYSTEMS IN MOTION</span></div>
        <p className="hero-note">{t.heroNote}</p>
      </div></section>
      <section id="products" className="shell section"><p className="section-label">{t.productLabel}</p><h2>{t.productTitle}</h2><p className="section-intro">{t.productIntro}</p><div className="product-grid">{t.products.map(([name,category,desc,cta],i)=><article className="product-card" key={productMeta[i].type}><ProductArt product={productMeta[i]}/><div className="product-content"><p className="category">{category}</p><h3>{name}</h3><p>{desc}</p><a className="product-link" href={productMeta[i].url}>{cta}<ArrowUpRight size={17}/></a></div></article>)}</div></section>
      <section id="services" className="shell section"><p className="section-label">{t.serviceLabel}</p><h2>{t.serviceTitle}</h2><p className="section-intro">{t.serviceIntro}</p><div className="service-grid">{t.services.map(([name,desc],i)=>{const Icon=serviceIcons[i];return <article className="service" key={i}><Icon size={23} strokeWidth={1.5}/><h3>{name}</h3><p>{desc}</p></article>})}</div></section>
      <section id="work" className="shell section"><p className="section-label">{t.workLabel}</p><h2>{t.workTitle}</h2><p className="section-intro">{t.workIntro}</p><div className="work-grid">{t.projects.map(([name,desc],i)=><article className="work-item" key={i}><span className="work-number">0{i+1}</span><div><h3>{name}</h3><p>{desc}</p></div>{projectUrls[i]&&<a aria-label={name} href={projectUrls[i]}><ArrowUpRight size={22}/></a>}</article>)}</div></section>
      <section id="about" className="shell section about"><div><p className="section-label">{t.aboutLabel}</p><h2>{t.aboutTitle}</h2><p className="section-intro">{t.aboutText}</p></div><div className="principles">{t.principles.map((p,i)=><div key={i}><span>0{i+1}</span>{p}</div>)}</div></section>
      <section id="contact" className="shell section"><div className="contact"><p className="section-label">{t.contactLabel}</p><h2>{t.contactTitle}</h2><p className="section-intro">{t.contactText}</p><div className="actions"><a className="btn primary" href="mailto:hello@naqsh.dev"><Mail size={17}/>{t.email}</a><a className="btn secondary" href="https://wa.me/93749290370"><MessageCircle size={17}/>{t.whatsapp}</a><a className="btn secondary" href={'mailto:hello@naqsh.dev?subject='+encodeURIComponent(rtl?'درخواست نمایش محصول':'Product demonstration request')}>{t.demo}<ArrowUpRight size={17}/></a></div></div></section>
    </main>
    <footer className="shell footer"><div><a href="#top" className="brand"><Logo/></a><p>{t.footer}</p></div><div className="footer-links"><a href="/blog/">{t.blog}</a><a href="/code-rush/">{t.game}</a><a href="https://www.instagram.com/naqshdev/">Instagram</a><a href="https://www.facebook.com/profile.php?id=61589005521585">Facebook</a><a href="mailto:hello@naqsh.dev">hello@naqsh.dev</a></div><small>© {new Date().getFullYear()} {t.rights}</small></footer>
  </div>
}

export default App
