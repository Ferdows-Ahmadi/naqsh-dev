import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  ChevronRight,
  Code2,
  Compass,
  Globe2,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  PenTool,
  Sparkles,
  X,
} from 'lucide-react'

const contact = {
  whatsapp: {
    label: 'WhatsApp',
    value: '+93 749 290 370',
    href: 'https://wa.me/93749290370',
    icon: MessageCircle,
  },
  instagram: {
    label: 'Instagram',
    value: '@naqshdev',
    href: 'https://www.instagram.com/naqshdev/',
    icon: Camera,
  },
  facebook: {
    label: 'Facebook',
    value: 'Naqsh Digital Studio',
    href: 'https://www.facebook.com/profile.php?id=61589005521585',
    icon: Globe2,
  },
  email: {
    label: 'Email',
    value: 'hello@naqsh.dev',
    href: 'mailto:hello@naqsh.dev',
    icon: Mail,
  },
}

const contactLinks = [contact.whatsapp, contact.instagram, contact.facebook, contact.email]

const founders = [
  ['Ahmad Ferdows Ahmadi', 'ferdowsahmadi@naqsh.dev'],
  ['Ahmad Rishad Haidari', 'rishadhaidari@naqsh.dev'],
]

const navItems = [
  ['Services', '#services'],
  ['Work', '#work'],
  ['Blog', '/blog/'],
  ['Why', '#why'],
  ['Process', '#process'],
  ['Contact', '#contact'],
]

const services = [
  {
    title: 'Web Design',
    description: 'Cinematic, responsive websites with strong hierarchy, rhythm, and emotional clarity.',
    icon: Layers3,
  },
  {
    title: 'Web Development',
    description: 'Fast static builds, clean React components, and production-ready frontend systems.',
    icon: Code2,
  },
  {
    title: 'Branding & Identity',
    description: 'Visual systems, logo direction, typography, and digital identity for memorable brands.',
    icon: PenTool,
  },
  {
    title: 'UI/UX Design',
    description: 'Product flows, interface patterns, and tactile interactions shaped around real users.',
    icon: Compass,
  },
  {
    title: 'Digital Products',
    description: 'Dashboards, MVPs, portals, and interactive tools that feel polished and purposeful.',
    icon: Sparkles,
  },
  {
    title: 'Multilingual Websites',
    description: 'English, Dari, and Pashto experiences designed for Afghan and global audiences.',
    icon: Globe2,
  },
]

const projects = [
  {
    title: 'Kabul Times News',
    category: 'News & Media Platform',
    description: 'A multilingual publishing system with breaking news rhythm, editorial structure, and media-forward layouts.',
    visual: 'kabul',
  },
  {
    title: 'Kabul Journal',
    category: 'Editorial Website',
    description: 'A story-led publishing concept with calm editorial pacing, article collections, and culture-focused presentation.',
    visual: 'journal',
  },
  {
    title: 'Akhtari Family Daycare',
    category: 'Family / Childcare Website',
    description: 'A US-based daycare website direction focused on parent trust, warmth, clarity, and calm digital management.',
    visual: 'daycare',
  },
  {
    title: 'ZhandarkDaily',
    category: 'Editorial / News Brand',
    description: 'A bold editorial identity with Joan of Arc inspired presence, premium news hierarchy, and distinctive brand energy.',
    visual: 'zhandark',
  },
  {
    title: 'Forsat.af',
    category: 'Digital Opportunity Platform',
    description: 'A platform concept for Afghan opportunities, access, growth, discovery, and digital visibility.',
    visual: 'forsat',
  },
  {
    title: 'GOLD NGO',
    category: 'Nonprofit Organization Website',
    description: 'A civic website direction for Great Organization for Learning and Development, focused on education, health, nutrition, and livelihood work in Afghanistan.',
    visual: 'gold',
  },
  {
    title: 'Snooker Club System',
    category: 'Club Management Platform',
    description: 'A management system concept for bookings, tables, members, payments, staff, reports, and daily club operations.',
    visual: 'snooker',
  },
  {
    title: 'Dental Clinic Management',
    category: 'Healthcare Management System',
    description: 'A clinic operations concept for appointments, patients, treatment plans, billing, reminders, and front-desk workflows.',
    visual: 'dental',
  },
]

const why = [
  ['Movement', 'Motion is used to guide attention, create depth, and make the experience feel crafted.'],
  ['Design quality', 'Every surface, transition, and composition is treated as part of the brand story.'],
  ['Mobile-first thinking', 'The experience starts from the phone, with thumb-friendly controls and tactile feedback.'],
  ['Modern web craftsmanship', 'Clean React, static performance, accessibility, and maintainable component patterns.'],
  ['Multilingual support', 'Structures that can support English, Dari, and Pashto digital experiences.'],
  ['Speed and polish', 'Fast loading with lightweight visuals, optimized assets, and purposeful animation.'],
]

const process = [
  ['Discover', 'We map your audience, story, market, content, and the digital feeling your brand needs.'],
  ['Design', 'We shape the visual world, flows, interface system, and motion language.'],
  ['Build', 'We implement responsive React components and tune performance across devices.'],
  ['Launch', 'We deploy, check SEO, polish interactions, and prepare the next iteration.'],
]

const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const storageConsentKey = 'naqsh-storage-consent'
const storageConsentText =
  'Naqsh uses local storage to remember small preferences like game scores and dismissed banners. No tracking cookies, no login.'

function readStoredValue(key, fallback = '') {
  try {
    return localStorage.getItem(key) ?? fallback
  } catch {
    return fallback
  }
}

function writeStoredValue(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Storage can be unavailable in strict browser modes; the UI still works for the session.
  }
}

function App() {
  const [hasStorageConsent, setHasStorageConsent] = useState(
    () => readStoredValue(storageConsentKey) === 'accepted',
  )

  const acceptStorage = () => {
    writeStoredValue(storageConsentKey, 'accepted')
    setHasStorageConsent(true)
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#080a0f] text-white">
      <CursorAura />
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedWork />
        <WhyNaqsh />
        <Process />
        <Contact />
      </main>
      <Footer />
      <BlogBubble />
      <GameBubble />
      <AnimatePresence>
        {!hasStorageConsent ? <StorageConsent onAccept={acceptStorage} /> : null}
      </AnimatePresence>
    </div>
  )
}

function BlogBubble() {
  return (
    <motion.a
      href="/blog/"
      aria-label="Read tech insights from Naqsh"
      title="Read tech insights from Naqsh"
      initial={{ opacity: 0, y: 18, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 190, damping: 18, delay: 0.04 }}
      className="group fixed right-4 bottom-[calc(env(safe-area-inset-bottom)+5.5rem)] z-[65] inline-flex items-center gap-3 rounded-full border border-[#7aa7ff]/30 bg-[#0a1020]/90 px-3 py-2 text-white shadow-[0_18px_60px_rgba(79,140,255,0.18)] backdrop-blur-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7aa7ff] sm:right-6 sm:bottom-[5.5rem]"
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#9bbdff,#8d7cff)] text-sm font-black text-[#070a12] shadow-[0_0_26px_rgba(122,167,255,0.32)] before:absolute before:inset-0 before:rounded-full before:animate-ping before:bg-[#7aa7ff]/15">
        ✦
      </span>
      <span className="leading-tight">
        <span className="block text-xs font-semibold text-white/55">Blog</span>
        <span className="block text-sm font-bold text-white">Latest Insight</span>
      </span>
    </motion.a>
  )
}

function GameBubble() {
  return (
    <motion.a
      href="/code-rush/"
      aria-label="Play Code Rush"
      title="Test your coding speed"
      initial={{ opacity: 0, y: 18, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 190, damping: 18 }}
      className="group fixed right-4 bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-[65] inline-flex items-center gap-3 rounded-full border border-[#00ff88]/30 bg-[#06120f]/90 px-3 py-2 text-white shadow-[0_18px_60px_rgba(0,255,136,0.18)] backdrop-blur-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00ff88] sm:right-6 sm:bottom-6"
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#00ff88] font-mono text-sm font-black text-[#04100b] shadow-[0_0_26px_rgba(0,255,136,0.36)] before:absolute before:inset-0 before:rounded-full before:animate-ping before:bg-[#00ff88]/25">
        &gt;_
      </span>
      <span className="leading-tight">
        <span className="block text-xs font-semibold text-white/55">Play</span>
        <span className="block text-sm font-bold text-white">Code Rush</span>
      </span>
    </motion.a>
  )
}

function StorageConsent({ onAccept }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -14, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -14, filter: 'blur(8px)' }}
      transition={{ type: 'spring', stiffness: 170, damping: 22 }}
      className="fixed inset-x-3 top-24 z-[80] mx-auto max-w-2xl rounded-[1.35rem] border border-white/10 bg-[#0b1017]/92 p-4 shadow-[0_22px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-white/68">{storageConsentText}</p>
        <button
          type="button"
          onClick={onAccept}
          className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#080a0f] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00ff88]"
        >
          Accept
        </button>
      </div>
    </motion.div>
  )
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080a0f]/72 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-10">
        <motion.a
          href="#top"
          aria-label="Naqsh Digital Studio home"
          className="group flex items-center gap-3 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f8cff]"
          whileTap={{ scale: 0.96 }}
          onClick={() => setIsOpen(false)}
        >
          <span className="relative">
            <img
              src={`${import.meta.env.BASE_URL}naqsh-icon.jpeg`}
              alt="Naqsh Digital Studio blue and red brand mark"
              className="h-12 w-12 rounded-2xl object-cover ring-1 ring-white/15"
              loading="eager"
            />
            <motion.span
              className="absolute left-1.5 top-1.5 h-3.5 w-3.5 rounded-full bg-[#ff1f4f] shadow-[0_0_22px_rgba(255,31,79,0.8)]"
              animate={{ scale: [1, 1.3, 1], opacity: [0.75, 1, 0.75] }}
              whileHover={{ scale: 1.55 }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-semibold">Naqsh</span>
            <span className="block text-xs font-medium uppercase text-white/48">Digital Studio</span>
          </span>
        </motion.a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-white/62 md:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-lg transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f8cff]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <MagneticLink
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#0b0d14] shadow-[0_14px_40px_rgba(79,140,255,0.16)] transition hover:bg-[#eef4ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f8cff]"
          >
            Start a Project
          </MagneticLink>
        </div>

        <motion.button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white shadow-lg shadow-black/20 backdrop-blur-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f8cff] md:hidden"
          aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          whileTap={{ scale: 0.92 }}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -14, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ type: 'spring', stiffness: 160, damping: 22 }}
          className="border-t border-white/10 bg-[#080a0f]/96 px-5 pb-6 pt-4 backdrop-blur-2xl md:hidden"
        >
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <motion.a
                key={href}
                href={href}
                className="flex min-h-14 items-center justify-between rounded-3xl border border-white/10 bg-white/[0.055] px-4 text-base font-semibold text-white shadow-sm"
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(false)}
              >
                {label}
                <ChevronRight className="h-4 w-4 text-white/46" />
              </motion.a>
            ))}
          </nav>
          <div className="mx-auto mt-5 max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(79,140,255,0.16),rgba(255,31,79,0.1))] p-4">
            <p className="text-sm font-semibold text-white/60">Contact Naqsh</p>
            <div className="mt-3 grid gap-2">
              {contactLinks.map((link) => (
                <ContactLink key={link.label} link={link} compact onClick={() => setIsOpen(false)} />
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </header>
  )
}

function Hero() {
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 70, damping: 24, mass: 0.4 })
  const springY = useSpring(pointerY, { stiffness: 70, damping: 24, mass: 0.4 })
  const textX = useTransform(springX, [-1, 1], reduceMotion ? [0, 0] : [-8, 8])
  const textY = useTransform(springY, [-1, 1], reduceMotion ? [0, 0] : [-5, 5])
  const visualX = useTransform(springX, [-1, 1], reduceMotion ? [0, 0] : [22, -22])
  const visualY = useTransform(springY, [-1, 1], reduceMotion ? [0, 0] : [18, -18])
  const deepX = useTransform(springX, [-1, 1], reduceMotion ? [0, 0] : [-34, 34])
  const deepY = useTransform(springY, [-1, 1], reduceMotion ? [0, 0] : [-24, 24])

  const handlePointerMove = (event) => {
    if (event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2)
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2)
  }

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden px-4 pb-14 pt-24 sm:px-7 sm:pt-28 lg:px-10"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <CinematicField deepX={deepX} deepY={deepY} visualX={visualX} visualY={visualY} />
      <motion.div
        aria-hidden="true"
        style={{ x: visualX, y: visualY }}
        className="absolute left-[8%] top-[22%] h-36 w-36 rounded-full border border-white/[0.08] bg-white/[0.025] blur-[0.2px] sm:h-48 sm:w-48 lg:left-[58%] lg:top-[20%]"
      />
      <motion.div
        aria-hidden="true"
        style={{ x: deepX, y: deepY }}
        className="absolute bottom-[14%] right-[8%] hidden h-56 w-56 rounded-[5rem] border border-[#4f8cff]/12 bg-[#4f8cff]/[0.025] lg:block"
      />
      <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-7xl items-center">
        <motion.div style={{ x: textX, y: textY }} className="relative z-10 min-w-0 max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.08 }}
            className="inline-flex max-w-full rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold text-[#9bbdff] shadow-lg shadow-black/20 backdrop-blur-xl sm:text-sm"
          >
            Naqsh Digital Studio
          </motion.p>
          <h1 className="mt-6 max-w-[78rem] text-[clamp(3.2rem,15vw,7.6rem)] font-semibold leading-[0.88] text-white sm:mt-8 lg:text-[clamp(6.2rem,8.7vw,9.5rem)]">
            <HeroLine delay={0.16}>Designing</HeroLine>
            <HeroLine delay={0.24}>digital</HeroLine>
            <HeroLine delay={0.32}>
              <span className="text-white/92">experiences</span>
            </HeroLine>
            <HeroLine delay={0.4}>
              <span className="bg-[linear-gradient(90deg,#ffffff,#9bbdff_52%,#ff6b8b)] bg-clip-text text-transparent">
                with soul.
              </span>
            </HeroLine>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 72, damping: 20, delay: 0.32 }}
            className="mt-7 max-w-3xl text-base leading-7 text-white/68 sm:mt-9 sm:text-xl sm:leading-8"
          >
            Kabul-born creative-tech studio crafting immersive websites, brands, interfaces,
            and digital products for ambitious businesses and modern ideas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.42 }}
            className="mt-8 grid gap-3 sm:mt-10 sm:flex"
          >
            <MagneticLink
              href="#contact"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-[#080a0f] shadow-[0_24px_70px_rgba(79,140,255,0.24)] transition hover:bg-[#eef4ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f8cff] sm:w-auto"
            >
              Start a Project
              <ArrowRight className="h-5 w-5" />
            </MagneticLink>
            <MagneticLink
              href="#work"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-white/14 bg-white/[0.055] px-7 text-base font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-xl transition hover:border-white/28 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f8cff] sm:w-auto"
            >
              Explore Our Work
            </MagneticLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function HeroLine({ children, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 42, filter: 'blur(14px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ type: 'spring', stiffness: 62, damping: 18, delay }}
      className="block"
    >
      {children}
    </motion.span>
  )
}

function Services() {
  return (
    <MotionSection
      id="services"
      eyebrow="Services"
      title="Digital systems with rhythm, surface, and structure."
      intro="A focused studio offer for brands that need more than pages. We design the feeling, then build the system that carries it."
    >
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <KineticCard key={service.title} index={index} className="group relative min-h-64 overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.035] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.14)] backdrop-blur-2xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_12%,rgba(79,140,255,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_58%)] opacity-70 transition group-hover:opacity-100" />
            <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(79,140,255,0.2),rgba(255,43,93,0.1))] text-[#b9d0ff] shadow-lg shadow-[#4f8cff]/10">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="relative text-2xl font-semibold">{service.title}</h3>
            <p className="relative mt-4 leading-7 text-white/62">{service.description}</p>
            <div className="relative mt-8 h-px bg-[linear-gradient(90deg,rgba(79,140,255,0.78),transparent)] opacity-0 transition group-hover:opacity-100" />
          </KineticCard>
        ))}
      </div>
    </MotionSection>
  )
}

function FeaturedWork() {
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleProjects = isExpanded ? projects : projects.slice(0, 3)
  const remainingProjects = projects.length - 3

  return (
    <MotionSection
      id="work"
      tone="deep"
      eyebrow="Featured Work"
      title="Project worlds, not static thumbnails."
      intro="Each preview is a designed interface composition: honest, stylized, animated, and ready to evolve into a full case study."
    >
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence initial={false}>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </AnimatePresence>
      </div>
      {remainingProjects > 0 && (
        <div className="relative mt-8 flex justify-center">
          {!isExpanded && (
            <div className="pointer-events-none absolute -top-20 h-20 w-full bg-[linear-gradient(180deg,transparent,rgba(8,10,15,0.82))]" />
          )}
          <motion.button
            type="button"
            aria-expanded={isExpanded}
            aria-controls="work"
            onClick={() => setIsExpanded((current) => !current)}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 360, damping: 22 }}
            className="group relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-full border border-white/12 bg-white/[0.09] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_58px_rgba(0,0,0,0.32)] outline-none backdrop-blur-xl transition focus-visible:ring-2 focus-visible:ring-[#9bbdff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080a0f] sm:px-7"
          >
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,140,255,0.42),transparent_44%),linear-gradient(90deg,rgba(255,43,93,0.12),rgba(255,255,255,0.07),rgba(79,140,255,0.12))] opacity-70 transition group-hover:opacity-100" />
            <span className="relative">{isExpanded ? 'Show fewer projects' : 'Show more projects'}</span>
            <motion.span
              animate={{ rotate: isExpanded ? -90 : 90 }}
              transition={{ type: 'spring', stiffness: 360, damping: 24 }}
              className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/10"
            >
              <ChevronRight className="h-4 w-4" />
            </motion.span>
          </motion.button>
        </div>
      )}
    </MotionSection>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 36, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ type: 'spring', stiffness: 92, damping: 20, delay: index * 0.04 }}
      whileHover={{ y: -8, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101621] shadow-[0_18px_60px_rgba(0,0,0,0.24)]"
    >
      <ProjectVisual type={project.visual} />
      <div className="p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase text-[#9bbdff]">{project.category}</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/58">{project.description}</p>
      </div>
    </motion.article>
  )
}

function ProjectVisual({ type }) {
  const map = {
    kabul: <KabulTimesVisual />,
    journal: <JournalVisual />,
    daycare: <DaycareVisual />,
    zhandark: <ZhandarkVisual />,
    forsat: <ForsatVisual />,
    gold: <GoldVisual />,
    snooker: <SnookerVisual />,
    dental: <DentalVisual />,
  }

  return (
    <div className="relative min-h-60 overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(79,140,255,0.28),transparent_32%),radial-gradient(circle_at_86%_16%,rgba(255,43,93,0.18),transparent_28%),linear-gradient(135deg,#111927,#080a0f)] p-3 sm:p-4">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:28px_28px]" />
      <motion.div
        aria-hidden="true"
        animate={{ x: ['-30%', '36%', '-30%'], opacity: [0.25, 0.65, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-y-0 left-0 w-2/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]"
      />
      <div className="relative">{map[type]}</div>
    </div>
  )
}

function KabulTimesVisual() {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.075] p-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <div className="rounded-[1.25rem] bg-[#15253a] p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-xl bg-[#ff2857] px-3 py-2 text-2xl font-bold">K</span>
          <div className="h-10 w-32 rounded-full bg-white/10" />
        </div>
        <div className="mt-5 grid grid-cols-4 gap-2">
          {['Home', 'World', 'Dari', 'Search'].map((item) => (
            <span key={item} className="rounded-full bg-white/10 px-2 py-2 text-center text-[11px] text-white/68">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-[0.78fr_1.22fr]">
        <div className="space-y-2">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              animate={{ x: [0, item % 2 ? 4 : -4, 0] }}
              transition={{ duration: 4 + item, repeat: Infinity, ease: 'easeInOut' }}
              className="flex gap-2 rounded-2xl bg-white/[0.08] p-2"
            >
              <div className="h-12 w-14 rounded-xl bg-[#4f8cff]/24" />
              <div className="flex-1 space-y-2 py-1">
                <div className="h-2.5 rounded-full bg-white/28" />
                <div className="h-2 w-2/3 rounded-full bg-white/14" />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="rounded-[1.35rem] bg-[linear-gradient(135deg,#456b92,#09111f)] p-4 text-white">
          <span className="rounded-full bg-[#ff2857] px-3 py-1 text-xs font-semibold">Breaking</span>
          <div className="mt-20 space-y-2">
            <motion.div
              animate={{ width: ['78%', '100%', '78%'] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              className="h-4 rounded-full bg-white/86"
            />
            <div className="h-4 w-4/5 rounded-full bg-white/56" />
            <div className="h-3 w-2/3 rounded-full bg-white/28" />
          </div>
        </div>
      </div>
    </div>
  )
}

function DaycareVisual() {
  return (
    <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(238,244,255,0.72))] p-5 text-[#132033] shadow-2xl shadow-black/20">
      <div className="mx-auto max-w-sm rounded-[1.5rem] border border-[#dae4f2] bg-white p-5 shadow-xl shadow-[#4f8cff]/10">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.35rem] bg-[#eef2ff]"
        >
          <span className="h-9 w-9 rounded-full bg-[#6572e8]/22" />
        </motion.div>
        <p className="mt-5 text-center text-2xl font-semibold">Akhtari Care</p>
        <p className="text-center text-sm text-[#647187]">Parent confidence, simplified</p>
        <div className="mt-6 space-y-3">
          <div className="h-12 rounded-2xl border border-[#dae4f2] bg-[#f7faff]" />
          <div className="h-12 rounded-2xl border-2 border-[#132033] bg-white" />
          <motion.div
            animate={{ boxShadow: ['0 12px 30px rgba(101,114,232,0.2)', '0 22px 46px rgba(101,114,232,0.34)', '0 12px 30px rgba(101,114,232,0.2)'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="h-13 rounded-2xl bg-[#6572e8]"
          />
        </div>
      </div>
    </div>
  )
}

function ZhandarkVisual() {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-[#f7f4ef] p-4 text-[#111927] shadow-2xl shadow-black/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, -2, 2, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-14 w-14 rounded-2xl bg-[linear-gradient(135deg,#1d2c42,#d0a14f)]"
          />
          <div>
            <p className="text-2xl font-semibold">zhandark</p>
            <p className="text-xs text-[#6c614f]">Editorial signal</p>
          </div>
        </div>
        <span className="rounded-full bg-[#c49a4b] px-3 py-2 text-xs font-semibold text-white">Subscribe</span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-[1.25fr_0.75fr]">
        <div className="min-h-44 rounded-[1.4rem] bg-[linear-gradient(135deg,#18253a,#315f95)] p-4 text-white">
          <span className="rounded-full bg-[#c49a4b] px-3 py-1 text-xs font-semibold">Top Story</span>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-20 h-4 rounded-full bg-white/86"
          />
          <div className="mt-2 h-3 w-3/4 rounded-full bg-white/50" />
        </div>
        <div className="grid gap-3">
          <div className="rounded-[1.2rem] bg-[#ebe3d5] p-3">
            <div className="h-16 rounded-xl bg-[#315f95]/18" />
            <div className="mt-3 h-3 rounded-full bg-[#111927]/18" />
          </div>
          <div className="rounded-[1.2rem] bg-[#ebe3d5] p-3">
            <div className="h-16 rounded-xl bg-[#c49a4b]/24" />
            <div className="mt-3 h-3 rounded-full bg-[#111927]/18" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ForsatVisual() {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,#0f1726,#172b43)] p-4 text-white shadow-2xl shadow-black/20">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">Forsat.af</p>
        <span className="rounded-full bg-[#4f8cff]/22 px-3 py-2 text-xs font-semibold text-[#b9d0ff]">Opportunities</span>
      </div>
      <div className="mt-6 grid gap-3">
        {['Scholarships', 'Jobs', 'Programs'].map((item, index) => (
          <motion.div
            key={item}
            animate={{ x: [0, index % 2 ? 6 : -6, 0] }}
            transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-[1.25rem] border border-white/10 bg-white/[0.07] p-4"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">{item}</span>
              <span className="h-8 w-8 rounded-full bg-[#ff2b5d]/20" />
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/12">
              <motion.div
                animate={{ width: [`${42 + index * 12}%`, `${72 + index * 6}%`, `${42 + index * 12}%`] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full rounded-full bg-[#4f8cff]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function JournalVisual() {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,#f4efe8,#dce7f7)] p-4 text-[#121926] shadow-2xl shadow-black/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-2xl font-semibold">Kabul Journal</p>
          <p className="text-xs text-[#5f6877]">Stories, culture, perspective</p>
        </div>
        <motion.span
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-11 w-11 rounded-full bg-[radial-gradient(circle,#ff375f_0_34%,#315f95_36%_62%,transparent_64%)]"
        />
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[1.25rem] border border-[#c8d2df] bg-white/70 p-3">
          <div className="h-28 rounded-[1rem] bg-[linear-gradient(135deg,#172235,#6d7c91)]" />
          <div className="mt-4 space-y-2">
            <div className="h-3 rounded-full bg-[#121926]/26" />
            <div className="h-3 w-2/3 rounded-full bg-[#121926]/16" />
          </div>
        </div>
        <div className="space-y-3">
          {['Feature Essay', 'Photo Story', 'City Notes'].map((item, index) => (
            <motion.div
              key={item}
              animate={{ x: [0, index % 2 ? 5 : -5, 0] }}
              transition={{ duration: 4.8 + index, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-[1.15rem] border border-[#c8d2df] bg-white/58 p-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#315f95]">{item}</span>
                <span className="h-2 w-2 rounded-full bg-[#ff375f]" />
              </div>
              <div className="mt-3 h-2 rounded-full bg-[#121926]/18" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function GoldVisual() {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,#09221e,#153e36_48%,#1f4c68)] p-4 text-white shadow-2xl shadow-black/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-2xl font-semibold">GOLD</p>
          <p className="mt-1 text-xs text-white/58">Learning and development</p>
        </div>
        <motion.div
          animate={{ y: [0, -5, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative h-14 w-14 rounded-2xl border border-white/16 bg-white/10"
        >
          <span className="absolute left-1/2 top-3 h-8 w-1 -translate-x-1/2 rounded-full bg-[#b8d94f]" />
          <span className="absolute bottom-3 left-3 h-5 w-8 rounded-full border border-[#79b7ff]" />
        </motion.div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        {[
          ['Health', '72%'],
          ['Education', '58%'],
          ['Nutrition', '64%'],
          ['Livelihoods', '49%'],
        ].map(([label, width], index) => (
          <motion.div
            key={label}
            animate={{ y: [0, index % 2 ? 4 : -4, 0] }}
            transition={{ duration: 5 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-[1.2rem] border border-white/10 bg-white/[0.075] p-3"
          >
            <span className="text-sm font-semibold">{label}</span>
            <div className="mt-4 h-2 rounded-full bg-white/12">
              <motion.div
                animate={{ width: ['36%', width, '36%'] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full rounded-full bg-[linear-gradient(90deg,#b8d94f,#79b7ff)]"
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-3 rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-3">
        <div className="h-3 w-3/4 rounded-full bg-white/28" />
        <div className="mt-2 h-2 w-1/2 rounded-full bg-white/14" />
      </div>
    </div>
  )
}

function SnookerVisual() {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,#07111e,#0b1a2d)] p-4 text-white shadow-2xl shadow-black/20">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">Club OS</p>
        <span className="rounded-full bg-[#2fcf6f]/16 px-3 py-2 text-xs font-semibold text-[#85f0ad]">Live tables</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {['Bookings', 'Members', 'Revenue'].map((item, index) => (
          <motion.div
            key={item}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4 + index * 0.45, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-[1.05rem] border border-white/10 bg-white/[0.065] p-3"
          >
            <div className={`h-8 w-8 rounded-xl ${index === 0 ? 'bg-[#4f8cff]' : index === 1 ? 'bg-[#2fcf6f]' : 'bg-[#ffb13b]'}`} />
            <div className="mt-3 h-2 rounded-full bg-white/28" />
            <div className="mt-2 h-2 w-1/2 rounded-full bg-white/12" />
          </motion.div>
        ))}
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.055] p-4">
          <motion.div
            animate={{ scaleX: [0.72, 1, 0.72] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-24 origin-left rounded-2xl bg-[linear-gradient(135deg,#174d35,#2fcf6f)]"
          />
          <div className="mt-3 h-2 rounded-full bg-[#4f8cff]/55" />
        </div>
        <div className="space-y-2">
          {['Table 1', 'Table 2', 'Table 3'].map((item, index) => (
            <div key={item} className="flex items-center justify-between rounded-2xl bg-white/[0.07] px-3 py-2 text-xs">
              <span>{item}</span>
              <span className={index === 2 ? 'text-[#ff6b8b]' : 'text-[#85f0ad]'}>{index === 2 ? 'Booked' : 'Open'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DentalVisual() {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,#edf7ff,#ffffff)] p-4 text-[#102033] shadow-2xl shadow-black/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-2xl font-semibold">Dental Clinic</p>
          <p className="text-xs text-[#627289]">Appointments and care flows</p>
        </div>
        <motion.div
          animate={{ boxShadow: ['0 0 0 rgba(79,140,255,0)', '0 0 32px rgba(79,140,255,0.28)', '0 0 0 rgba(79,140,255,0)'] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e4f0ff]"
        >
          <span className="h-8 w-6 rounded-b-2xl rounded-t-xl border-2 border-[#4f8cff] bg-white" />
        </motion.div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[1.25rem] border border-[#d5e3f3] bg-white p-3 shadow-lg shadow-[#4f8cff]/10">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f8cff]">Today</span>
          <div className="mt-4 space-y-3">
            {['10:00', '11:30', '02:15'].map((time, index) => (
              <motion.div
                key={time}
                animate={{ x: [0, index % 2 ? 4 : -4, 0] }}
                transition={{ duration: 4.4 + index, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-2xl bg-[#f2f7fd] p-3"
              >
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span>{time}</span>
                  <span className="text-[#35a66a]">Confirmed</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.25rem] border border-[#d5e3f3] bg-[#102033] p-4 text-white">
          <p className="text-sm font-semibold text-[#9bbdff]">Treatment pipeline</p>
          <div className="mt-5 space-y-3">
            {['Checkup', 'X-ray', 'Billing'].map((item, index) => (
              <div key={item}>
                <div className="mb-2 flex justify-between text-xs text-white/64">
                  <span>{item}</span>
                  <span>{58 + index * 14}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/12">
                  <motion.div
                    animate={{ width: [`${42 + index * 10}%`, `${58 + index * 14}%`, `${42 + index * 10}%`] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-full rounded-full bg-[linear-gradient(90deg,#4f8cff,#73e2ff)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function WhyNaqsh() {
  return (
    <MotionSection
      id="why"
      eyebrow="Why Naqsh"
      title="A studio language built from motion, taste, and precision."
      intro="We use movement to create hierarchy, not noise. Every interaction should feel useful, memorable, and alive."
    >
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {why.map(([title, description], index) => (
          <KineticCard key={title} index={index} className="group relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.032] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.14)] backdrop-blur-2xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(255,43,93,0.11),transparent_32%),radial-gradient(circle_at_90%_80%,rgba(79,140,255,0.1),transparent_34%)] opacity-70 transition group-hover:opacity-100" />
            <BadgeCheck className="relative h-6 w-6 text-[#ff6b8b]" />
            <h3 className="relative mt-6 text-xl font-semibold">{title}</h3>
            <p className="relative mt-3 leading-7 text-white/62">{description}</p>
          </KineticCard>
        ))}
      </div>
    </MotionSection>
  )
}

function Process() {
  return (
    <MotionSection
      id="process"
      tone="deep"
      eyebrow="Process"
      title="Four movements from idea to launch."
      intro="The workflow is direct, but the output is layered: strategy, design, build, and launch moving in rhythm."
    >
      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {process.map(([title, description], index) => (
          <KineticCard key={title} index={index} className="relative min-h-72 rounded-[2rem] border border-white/10 bg-[#101621] p-6 shadow-2xl shadow-black/20">
            <motion.span
              animate={{ boxShadow: ['0 0 0 rgba(79,140,255,0)', '0 0 34px rgba(79,140,255,0.34)', '0 0 0 rgba(79,140,255,0)'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4f8cff] text-sm font-bold text-white"
            >
              {index + 1}
            </motion.span>
            <h3 className="mt-10 text-2xl font-semibold">{title}</h3>
            <p className="mt-4 leading-7 text-white/56">{description}</p>
          </KineticCard>
        ))}
      </div>
    </MotionSection>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-20 sm:px-7 lg:px-10 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(79,140,255,0.24),transparent_34%),radial-gradient(circle_at_80%_30%,rgba(255,43,93,0.16),transparent_28%)]" />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.26 }}
        transition={{ type: 'spring', stiffness: 82, damping: 20 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.045))] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-7 lg:p-10"
      >
        <div className="grid gap-9 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-semibold text-[#9bbdff]">
              Contact / Invitation
            </p>
            <h2 className="mt-7 text-5xl font-semibold leading-tight sm:text-6xl">
              Let&apos;s shape something unforgettable.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/62">
              Tell us what you want to build. We will help turn the idea into a digital
              presence with movement, identity, and a sense of craft.
            </p>
          </div>
          <div className="grid gap-3">
            {contactLinks.map((link) => (
              <ContactLink key={link.label} link={link} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080a0f] px-5 py-14 sm:px-7 lg:px-10 lg:py-18">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(79,140,255,0.16),transparent_34%),radial-gradient(circle_at_84%_0%,rgba(255,43,93,0.1),transparent_28%),linear-gradient(180deg,#0d111a,#080a0f)]" />
      <motion.div
        aria-hidden="true"
        animate={{ x: ['-18%', '18%', '-18%'], opacity: [0.16, 0.34, 0.16] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-0 top-0 h-px w-full bg-[linear-gradient(90deg,transparent,#4f8cff,#ff2b5d,transparent)]"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1fr_0.86fr] lg:items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.34 }}
            transition={{ type: 'spring', stiffness: 82, damping: 20 }}
          >
            <p className="text-2xl font-semibold">Naqsh Digital Studio</p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/58">
              Kabul-born creative-tech studio crafting immersive websites, brands,
              interfaces, and multilingual digital experiences.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.34 }}
            transition={{ type: 'spring', stiffness: 82, damping: 20, delay: 0.06 }}
            className="rounded-[2rem] border border-white/[0.09] bg-white/[0.04] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/44">Designed & Developed By</p>
            <div className="mt-5 grid gap-3">
              {founders.map(([name, email]) => (
                <motion.a
                  key={email}
                  href={`mailto:${email}`}
                  className="group flex min-h-16 items-center justify-between gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.045] px-4 transition hover:border-[#4f8cff]/34 hover:bg-white/[0.075] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f8cff]"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <span>
                    <span className="block font-semibold text-white">{name}</span>
                    <span className="mt-1 block text-sm text-white/52">{email}</span>
                  </span>
                  <Mail className="h-5 w-5 text-[#9bbdff] transition group-hover:translate-x-1" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-sm text-white/44 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Naqsh Digital Studio. All rights reserved.</p>
          <nav className="flex flex-wrap gap-4" aria-label="Footer links">
            <a href="#contact" className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f8cff]">
              Contact
            </a>
            <a href="/privacy.html" className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f8cff]">
              Privacy
            </a>
            <a href="/terms.html" className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f8cff]">
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

function MotionSection({ id, eyebrow, title, intro, children, tone = 'base' }) {
  const toneClass = tone === 'deep' ? 'bg-[#0d111a]' : 'bg-[#080a0f]'

  return (
    <section id={id} className={`relative overflow-hidden ${toneClass} px-5 py-20 sm:px-7 lg:px-10 lg:py-28`}>
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ type: 'spring', stiffness: 92, damping: 22 }}
        className="absolute left-5 right-5 top-0 h-px origin-left bg-[linear-gradient(90deg,transparent,#4f8cff,#ff2b5d,transparent)] sm:left-7 sm:right-7 lg:left-10 lg:right-10"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(79,140,255,0.08),transparent_30%),radial-gradient(circle_at_86%_22%,rgba(255,43,93,0.07),transparent_26%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        {children}
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.34 }}
      transition={{ type: 'spring', stiffness: 82, damping: 20 }}
      className="max-w-4xl"
    >
      <p className="text-sm font-semibold uppercase text-[#9bbdff]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">{title}</h2>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-white/58">{intro}</p>
    </motion.div>
  )
}

function KineticCard({ children, className, index = 0 }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 150, damping: 20, delay: index * 0.025 }}
      className={className}
    >
      {children}
    </motion.article>
  )
}

function ContactLink({ link, compact = false, onClick }) {
  const Icon = link.icon
  const external = link.href.startsWith('http')

  return (
    <motion.a
      href={link.href}
      className={`group flex min-h-14 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-white shadow-sm backdrop-blur-xl transition hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f8cff] ${compact ? 'min-h-12' : ''}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      aria-label={`${link.label}: ${link.value}`}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <span className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4f8cff]/16 text-[#b9d0ff]">
          <Icon className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs font-semibold uppercase text-white/42">{link.label}</span>
          {!compact ? <span className="mt-1 block font-semibold">{link.value}</span> : null}
        </span>
      </span>
      {!compact ? <ArrowRight className="h-4 w-4 text-white/36 transition group-hover:translate-x-1" /> : null}
    </motion.a>
  )
}

function MagneticLink({ href, className, children }) {
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 240, damping: 18, mass: 0.35 })
  const springY = useSpring(y, { stiffness: 240, damping: 18, mass: 0.35 })

  const handleMove = (event) => {
    if (reduceMotion || event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.12)
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.16)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      href={href}
      className={className}
      style={{ x: springX, y: springY }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      {children}
    </motion.a>
  )
}

function CinematicField({ deepX, deepY, visualX, visualY }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(79,140,255,0.24),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(255,43,93,0.14),transparent_26%),linear-gradient(180deg,#080a0f,#0d111a_58%,#080a0f)]" />
      <motion.div
        style={{ x: deepX, y: deepY }}
        className="absolute -left-32 top-24 h-[26rem] w-[26rem] rounded-full bg-[#4f8cff]/18 blur-3xl"
      />
      <motion.div
        style={{ x: visualX, y: visualY }}
        className="absolute -right-20 top-40 h-[28rem] w-[28rem] rounded-full bg-[#ff2b5d]/12 blur-3xl"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[length:34px_34px] opacity-80" />
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(0deg,rgba(79,140,255,0.12),transparent)]"
      />
    </div>
  )
}

function CursorAura() {
  const [enabled, setEnabled] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(pointer: fine)').matches : false,
  )
  const x = useMotionValue(-220)
  const y = useMotionValue(-220)
  const springX = useSpring(x, { stiffness: 92, damping: 24, mass: 0.3 })
  const springY = useSpring(y, { stiffness: 92, damping: 24, mass: 0.3 })

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine)')
    const handlePointerChange = (event) => setEnabled(event.matches)
    const handleMove = (event) => {
      x.set(event.clientX - 170)
      y.set(event.clientY - 170)
    }

    pointerQuery.addEventListener('change', handlePointerChange)
    window.addEventListener('pointermove', handleMove)

    return () => {
      pointerQuery.removeEventListener('change', handlePointerChange)
      window.removeEventListener('pointermove', handleMove)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.16),rgba(255,43,93,0.09)_38%,transparent_68%)] mix-blend-screen blur-xl md:block"
      style={{ x: springX, y: springY }}
    />
  )
}

export default App
