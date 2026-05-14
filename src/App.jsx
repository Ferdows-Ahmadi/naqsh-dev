import { useState } from 'react'
import { motion } from 'framer-motion'
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
  email: {
    label: 'Email',
    value: 'hello@naqsh.dev',
    href: 'mailto:hello@naqsh.dev',
    icon: Mail,
  },
}

const socialLinks = [contact.whatsapp, contact.instagram, contact.email]

const navItems = [
  ['Services', '#services'],
  ['Work', '#work'],
  ['Process', '#process'],
  ['Contact', '#contact'],
]

const services = [
  {
    title: 'Web Design',
    description: 'Elegant, conversion-aware websites designed for trust, clarity, and mobile-first browsing.',
    icon: Layers3,
  },
  {
    title: 'Web Development',
    description: 'Fast static websites and product interfaces built with clean React, Tailwind, and modern tooling.',
    icon: Code2,
  },
  {
    title: 'Branding & Logo Design',
    description: 'Distinct visual identities, marks, and launch-ready brand systems for ambitious teams.',
    icon: PenTool,
  },
  {
    title: 'UI/UX Design',
    description: 'Thoughtful flows, interface systems, and digital product design shaped around real users.',
    icon: Compass,
  },
  {
    title: 'Digital Strategy',
    description: 'Positioning, content structure, and launch direction for brands entering digital markets.',
    icon: Sparkles,
  },
  {
    title: 'Multilingual Websites',
    description: 'English, Dari, and Pashto website experiences planned for Afghan and global audiences.',
    icon: Globe2,
  },
]

const featuredWork = [
  {
    title: 'Kabul Times News',
    category: 'News & Media Website',
    description:
      'A multilingual news platform designed for publishing articles, categories, breaking updates, and media content.',
    visual: 'news',
  },
  {
    title: 'Zhandark Daily',
    category: 'Digital News Brand',
    description:
      'A modern Joan of Arc inspired news identity and website concept with bold editorial direction and distinctive branding.',
    visual: 'editorial',
  },
  {
    title: 'Naqsh Snooker Dashboard',
    category: 'Club Management System',
    description:
      'A dark operational dashboard for bookings, members, tables, payments, reports, and club activity.',
    visual: 'dashboard',
  },
  {
    title: 'TB Detection Prototype',
    category: 'AI Health Project',
    description:
      'A research-mode prototype dashboard for model inference, dataset review, reporting, and clinical workflow exploration.',
    visual: 'health',
  },
  {
    title: 'GOLD Afghanistan',
    category: 'Nonprofit Organization Website',
    description:
      'A national nonprofit website for Great Organization for Learning and Development, communicating education, health, nutrition, and livelihood work in Afghanistan.',
    visual: 'gold',
  },
  {
    title: 'Akhtari Family Daycare',
    category: 'US-Based Daycare Website',
    description:
      'A warm, trustworthy website and management experience for a family daycare center in the United States, focused on care, clarity, and parent confidence.',
    visual: 'daycare',
  },
]

const reasons = [
  ['Mobile-first design', 'Every layout starts from the phone, where most first impressions happen.'],
  ['Clean code', 'Reusable components and readable structure make each website easier to maintain.'],
  ['Fast loading', 'Static builds, optimized assets, and restrained motion keep the experience quick.'],
  ['Cultural elegance', 'A refined visual language with subtle pattern, warmth, and Afghan/Persian design soul.'],
  ['Global-ready websites', 'Premium presentation for local brands, international clients, and growth markets.'],
  ['English, Dari, and Pashto support', 'Content structures that can support multilingual websites from the start.'],
]

const process = [
  ['Discover', 'We define your audience, goals, content, and the digital presence your brand needs.'],
  ['Design', 'We create the visual direction, user flow, interface system, and key page layouts.'],
  ['Build', 'We implement a fast, responsive, accessible site with clean frontend code.'],
  ['Launch', 'We prepare deployment, SEO essentials, performance checks, and the next improvements.'],
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function App() {
  return (
    <div className="min-h-screen bg-[#fff8f0] text-[#172333]">
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
    </div>
  )
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadcc9]/80 bg-[#fff8f0]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-10">
        <a
          href="#top"
          className="group flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6fa8]"
          aria-label="Naqsh Digital Studio home"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={`${import.meta.env.BASE_URL}naqsh-icon.jpeg`}
            alt="Naqsh Digital Studio blue and red pattern mark"
            className="h-11 w-11 rounded-2xl object-cover shadow-sm ring-1 ring-[#dfcfba]"
            loading="eager"
          />
          <span className="leading-tight">
            <span className="block text-lg font-semibold text-[#172333]">Naqsh</span>
            <span className="block text-xs font-medium uppercase text-[#7b6a5b]">Digital Studio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#645849] md:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-md transition hover:text-[#2f6fa8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6fa8]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#17324b] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#234a6d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6fa8]"
          >
            Start a Project
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#eadcc9] bg-white text-[#172333] shadow-sm transition hover:bg-[#f5eadb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6fa8] md:hidden"
          aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="border-t border-[#eadcc9] bg-[#fff8f0] px-5 pb-6 pt-3 shadow-xl shadow-[#9a835c]/10 md:hidden"
        >
          <nav className="mx-auto grid max-w-7xl gap-1" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="flex min-h-12 items-center justify-between rounded-2xl px-4 text-base font-semibold text-[#172333] transition hover:bg-[#f5eadb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f6fa8]"
                onClick={() => setIsOpen(false)}
              >
                {label}
                <ChevronRight className="h-4 w-4 text-[#ba9a75]" />
              </a>
            ))}
          </nav>
          <div className="mx-auto mt-5 max-w-7xl rounded-3xl border border-[#e4d4bf] bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-[#7b6a5b]">Contact Naqsh</p>
            <div className="mt-3 grid gap-2">
              {socialLinks.map((link) => (
                <SocialLink key={link.label} link={link} compact onClick={() => setIsOpen(false)} />
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-10 sm:px-7 lg:px-10 lg:pb-28 lg:pt-20">
      <PatternField />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="inline-flex rounded-full border border-[#e4d4bf] bg-white/76 px-4 py-2 text-sm font-semibold text-[#c84d5b] shadow-sm">
            Kabul-born studio, building for global audiences
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.03] text-[#172333] sm:text-6xl lg:text-7xl">
            Designing digital identities with soul and precision.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#645849] sm:text-xl">
            Naqsh Digital Studio is a Kabul-born creative-tech studio building websites,
            brands, interfaces, and digital experiences for ambitious people and businesses.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {['News platforms', 'Nonprofit websites', 'Dashboards', 'Daycare systems'].map((item) => (
              <span key={item} className="rounded-full border border-[#e4d4bf] bg-white/72 px-3 py-2 text-sm font-semibold text-[#5c6978] shadow-sm">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-9 grid gap-3 sm:flex">
            <a
              href="#contact"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#17324b] px-7 text-base font-semibold text-white shadow-lg shadow-[#17324b]/18 transition hover:bg-[#234a6d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6fa8]"
            >
              Start a Project
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#d8c8b3] bg-white/80 px-7 text-base font-semibold text-[#172333] shadow-sm transition hover:border-[#c84d5b]/40 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6fa8]"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
          aria-label="Abstract pattern composition inspired by naqsh design"
        >
          <div className="absolute inset-8 rounded-[3rem] bg-[#2f6fa8]/16 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[#e0d1bd] bg-white p-4 shadow-2xl shadow-[#234a6d]/14">
            <div className="relative min-h-[420px] overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,#fff4e6,#ffffff_44%,#e8f1f8)] p-5">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
                className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-[5rem] border border-[#c84d5b]/35"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
                className="absolute left-[18%] top-[12%] h-44 w-44 rounded-[3.5rem] border border-[#2f6fa8]/45"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(47,111,168,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(47,111,168,0.08)_1px,transparent_1px)] bg-[length:28px_28px]" />
              <div className="relative flex h-full min-h-[380px] flex-col justify-between">
                <div className="flex justify-between gap-3">
                  <div className="rounded-3xl border border-[#e0d1bd] bg-white/82 p-4 shadow-sm backdrop-blur">
                    <p className="text-xs font-semibold uppercase text-[#7b6a5b]">Portfolio</p>
                    <p className="mt-2 max-w-36 text-2xl font-semibold leading-tight text-[#2f6fa8]">Real systems, refined presentation</p>
                  </div>
                  <div className="h-20 w-20 rounded-[1.75rem] bg-[#2f6fa8]/12 p-3">
                    <img
                      src={`${import.meta.env.BASE_URL}naqsh-icon.jpeg`}
                      alt="Naqsh Digital Studio brand mark"
                      className="h-full w-full rounded-2xl object-cover"
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {['Brand', 'Web', 'UX'].map((label) => (
                    <div key={label} className="rounded-2xl border border-white/80 bg-white/72 px-3 py-4 text-center text-sm font-semibold text-[#5c6978] shadow-sm backdrop-blur">
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <Section id="services" eyebrow="Services" title="A focused studio for websites, brands, and interfaces." intro="Premium digital work for founders, local businesses, publications, and organizations that need a refined presence.">
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <MotionArticle key={service.title} index={index} className="rounded-[1.75rem] border border-[#e4d7c5] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#9a835c]/12">
            <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f1f8] text-[#2f6fa8]">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-[#172333]">{service.title}</h3>
            <p className="mt-4 leading-7 text-[#645849]">{service.description}</p>
          </MotionArticle>
        ))}
      </div>
    </Section>
  )
}

function FeaturedWork() {
  return (
    <Section
      id="work"
      tone="stone"
      eyebrow="Featured Work"
      title="Real Naqsh projects, presented with honest visual previews."
      intro="These cards are inspired by the actual project directions and related visuals, using abstract previews until final case-study screenshots are ready."
    >
      <div className="mt-10 grid gap-5 lg:grid-cols-6">
        {featuredWork.map((project, index) => (
          <MotionArticle
            key={project.title}
            index={index}
            className="overflow-hidden rounded-[2rem] border border-[#e1d1be] bg-[#fff8f0] shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#17324b]/12 lg:col-span-3"
          >
            <ProjectVisual type={project.visual} />
            <div className="p-6">
              <p className="text-sm font-semibold text-[#2f6fa8]">{project.category}</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#172333]">{project.title}</h3>
              <p className="mt-4 leading-7 text-[#645849]">{project.description}</p>
            </div>
          </MotionArticle>
        ))}
      </div>
    </Section>
  )
}

function ProjectVisual({ type }) {
  const visualMap = {
    news: <NewsVisual />,
    editorial: <EditorialVisual />,
    dashboard: <DashboardVisual />,
    health: <HealthVisual />,
    gold: <GoldVisual />,
    daycare: <DaycareVisual />,
  }

  return (
    <div className="relative min-h-64 overflow-hidden bg-[linear-gradient(135deg,#fff,#f4e7d6_48%,#e8f1f8)] p-4">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(47,111,168,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(47,111,168,0.08)_1px,transparent_1px)] bg-[length:24px_24px]" />
      <div className="relative">{visualMap[type]}</div>
      <p className="relative mt-4 rounded-full bg-white/78 px-4 py-2 text-center text-sm font-semibold text-[#7b6a5b] shadow-sm">
        Project visual coming soon
      </p>
    </div>
  )
}

function NewsVisual() {
  return (
    <div className="rounded-[1.5rem] border border-[#d9e1e8] bg-white shadow-sm">
      <div className="rounded-t-[1.5rem] bg-[#17324b] p-4 text-white">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-xl bg-[#d83f52] px-3 py-2 text-xl font-bold">K</span>
          <div className="h-3 w-24 rounded-full bg-white/70" />
        </div>
        <div className="mt-5 grid grid-cols-4 gap-2">
          {['Home', 'World', 'Sports', 'Dari'].map((item) => (
            <span key={item} className="rounded-full bg-white/12 px-2 py-1 text-center text-[11px]">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="grid gap-3 p-4 sm:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-2">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex gap-2 rounded-xl border border-[#edf0f3] p-2">
              <div className="h-10 w-12 rounded-lg bg-[#2f6fa8]/16" />
              <div className="flex-1 space-y-1.5">
                <div className="h-2 rounded-full bg-[#17324b]/22" />
                <div className="h-2 w-2/3 rounded-full bg-[#17324b]/12" />
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl bg-[linear-gradient(135deg,#315b7c,#15283a)] p-4 text-white">
          <span className="rounded-full bg-[#d83f52] px-3 py-1 text-xs font-semibold">Breaking</span>
          <div className="mt-16 space-y-2">
            <div className="h-4 rounded-full bg-white/85" />
            <div className="h-4 w-4/5 rounded-full bg-white/68" />
            <div className="h-3 w-2/3 rounded-full bg-white/38" />
          </div>
        </div>
      </div>
    </div>
  )
}

function EditorialVisual() {
  return (
    <div className="rounded-[1.5rem] border border-[#eadcc9] bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="h-10 w-36 rounded-full bg-[#17324b]" />
        <div className="rounded-full bg-[#bf9550] px-3 py-2 text-xs font-semibold text-white">Subscribe</div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-[1.3fr_0.7fr]">
        <div className="min-h-36 rounded-2xl bg-[linear-gradient(135deg,#1c3550,#2f6fa8)] p-4 text-white">
          <span className="rounded-full bg-[#bf9550] px-3 py-1 text-xs font-semibold">Top story</span>
          <div className="mt-16 h-4 rounded-full bg-white/82" />
          <div className="mt-2 h-3 w-3/4 rounded-full bg-white/52" />
        </div>
        <div className="grid gap-3">
          <div className="rounded-2xl bg-[#f2eadf] p-3">
            <div className="h-16 rounded-xl bg-[#2f6fa8]/18" />
            <div className="mt-3 h-3 rounded-full bg-[#17324b]/20" />
          </div>
          <div className="rounded-2xl bg-[#f2eadf] p-3">
            <div className="h-16 rounded-xl bg-[#bf9550]/22" />
            <div className="mt-3 h-3 rounded-full bg-[#17324b]/20" />
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardVisual() {
  return (
    <div className="rounded-[1.5rem] bg-[#0d1826] p-4 text-white shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold">naqsh</span>
        <div className="h-9 w-28 rounded-full border border-white/12 bg-white/6" />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {[
          ['Bookings', '12', '#2f6fa8'],
          ['Tables', '6/10', '#3da86a'],
          ['Members', '248', '#6d55d8'],
          ['Revenue', 'AFN', '#d83f52'],
        ].map(([label, value, color]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <div className="h-8 w-8 rounded-xl" style={{ backgroundColor: color }} />
            <p className="mt-3 text-xs text-white/58">{label}</p>
            <p className="text-xl font-semibold">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <div className="flex h-24 items-end gap-2">
          {[34, 58, 42, 76, 52, 66].map((height, index) => (
            <span key={index} className="flex-1 rounded-t-xl bg-[#2f6fa8]" style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function HealthVisual() {
  return (
    <div className="rounded-[1.5rem] border border-[#d9e1e8] bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-[#172333]">TB Detection Prototype</span>
        <span className="rounded-full bg-[#fff0f1] px-3 py-1 text-xs font-semibold text-[#c84d5b]">Research mode</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-[1fr_0.8fr]">
        <div className="relative min-h-40 rounded-2xl bg-[radial-gradient(circle_at_44%_46%,rgba(45,180,126,0.55),transparent_12%),radial-gradient(circle_at_64%_42%,rgba(45,180,126,0.45),transparent_14%),linear-gradient(135deg,#2a323d,#eef2f4)]">
          <div className="absolute left-[28%] top-[18%] h-28 w-16 rounded-full bg-[#3d5fe8]/48 blur-sm" />
          <div className="absolute right-[25%] top-[18%] h-28 w-16 rounded-full bg-[#3d5fe8]/48 blur-sm" />
        </div>
        <div className="rounded-2xl border border-[#edf0f3] bg-[#fbfcfd] p-4">
          <p className="text-sm font-semibold text-[#172333]">Model output</p>
          <div className="mt-4 h-3 rounded-full bg-[#f04b55]" />
          <div className="mt-4 space-y-2">
            <div className="h-2 rounded-full bg-[#172333]/20" />
            <div className="h-2 w-4/5 rounded-full bg-[#172333]/14" />
            <div className="h-2 w-2/3 rounded-full bg-[#172333]/12" />
          </div>
        </div>
      </div>
    </div>
  )
}

function GoldVisual() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-[#dfe6d9] bg-white shadow-sm">
      <div className="bg-[#10221f] p-4 text-white">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-white/12" />
          <div>
            <p className="font-semibold">GOLD</p>
            <p className="text-xs text-white/58">Learning and Development</p>
          </div>
        </div>
      </div>
      <div className="relative min-h-44 bg-[linear-gradient(135deg,#c9d7cf,#edf5f2)] p-4">
        <div className="absolute inset-x-0 bottom-0 h-20 bg-[#10221f]/16" />
        <p className="relative mt-16 max-w-48 text-2xl font-semibold text-[#10221f]">Committed to serve</p>
        <div className="relative mt-4 flex gap-2">
          {['Health', 'Education', 'Nutrition'].map((item) => (
            <span key={item} className="rounded-full bg-white/78 px-3 py-1 text-xs font-semibold text-[#365246]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function DaycareVisual() {
  return (
    <div className="rounded-[1.5rem] border border-[#d9e1e8] bg-[#f7fbff] p-5 shadow-sm">
      <div className="mx-auto max-w-sm rounded-[1.5rem] border border-[#dbe5f0] bg-white p-5 shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#dbe5f0] bg-[#f5f7ff]">
          <div className="h-8 w-8 rounded-full bg-[#6472d9]/22" />
        </div>
        <p className="mt-5 text-center text-xl font-semibold text-[#172333]">Daycare Manager</p>
        <p className="text-center text-sm text-[#5c6978]">US family daycare center</p>
        <div className="mt-5 space-y-3">
          <div className="h-11 rounded-xl border border-[#dbe5f0] bg-white" />
          <div className="h-11 rounded-xl border-2 border-[#172333] bg-white" />
          <div className="h-12 rounded-xl bg-[#6371df]" />
        </div>
      </div>
    </div>
  )
}

function WhyNaqsh() {
  return (
    <Section id="why" eyebrow="Why Naqsh" title="Built for craft, speed, and cultural clarity." intro="A strong digital presence should feel beautiful, work quickly, and speak naturally to the people it serves.">
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(([title, description], index) => (
          <MotionArticle key={title} index={index} className="rounded-[1.5rem] border border-[#e4d7c5] bg-white/72 p-5 shadow-sm">
            <BadgeCheck className="h-6 w-6 text-[#c84d5b]" />
            <h3 className="mt-5 text-xl font-semibold text-[#172333]">{title}</h3>
            <p className="mt-3 leading-7 text-[#645849]">{description}</p>
          </MotionArticle>
        ))}
      </div>
    </Section>
  )
}

function Process() {
  return (
    <Section id="process" tone="stone" eyebrow="Process" title="A simple path from first idea to polished launch." intro="The workflow stays clear so decisions move quickly and every detail has a purpose.">
      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {process.map(([title, description], index) => (
          <MotionArticle key={title} index={index} className="relative rounded-[1.75rem] border border-[#e1d1be] bg-[#fff8f0] p-6 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17324b] text-sm font-semibold text-white">
              {index + 1}
            </span>
            <h3 className="mt-8 text-2xl font-semibold text-[#172333]">{title}</h3>
            <p className="mt-4 leading-7 text-[#645849]">{description}</p>
          </MotionArticle>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-20 sm:px-7 lg:px-10 lg:py-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.58, ease: 'easeOut' }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#17324b] text-white shadow-2xl shadow-[#17324b]/22"
      >
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.82fr] lg:p-12">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-[#f0d193]">
              Contact
            </p>
            <h2 className="mt-7 text-4xl font-semibold leading-tight sm:text-5xl">
              Let's shape your next digital presence.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#e7ded1]">
              Whether you need web design in Kabul, web development in Afghanistan, branding,
              logo design, UI UX design, or multilingual websites in Dari, Pashto, and English,
              Naqsh can help you launch with confidence.
            </p>
          </div>
          <div className="grid gap-3">
            {socialLinks.map((link) => (
              <SocialLink key={link.label} link={link} inverse />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#e0d1bd] bg-[#f5eadb] px-5 py-10 sm:px-7 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xl font-semibold text-[#172333]">Naqsh Digital Studio</p>
          <p className="mt-2 max-w-2xl leading-7 text-[#645849]">
            A digital studio in Kabul for web design, branding, logo design, UI UX design,
            and multilingual websites for Afghan and global audiences.
          </p>
        </div>
        <div className="grid gap-2 sm:flex">
          {socialLinks.map((link) => (
            <SocialLink key={link.label} link={link} compact />
          ))}
        </div>
      </div>
    </footer>
  )
}

function Section({ id, eyebrow, title, intro, children, tone = 'ivory' }) {
  const toneClass = tone === 'stone' ? 'bg-[#f5eadb]' : 'bg-[#fff8f0]'

  return (
    <section id={id} className={`${toneClass} px-5 py-20 sm:px-7 lg:px-10 lg:py-28`}>
      <div className="mx-auto max-w-7xl">
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
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="max-w-3xl"
    >
      <p className="text-sm font-semibold uppercase text-[#2f6fa8]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#172333] sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-[#645849]">{intro}</p>
    </motion.div>
  )
}

function MotionArticle({ children, className, index = 0 }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.52, delay: index * 0.035, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.article>
  )
}

function SocialLink({ link, compact = false, inverse = false, onClick }) {
  const Icon = link.icon
  const external = link.href.startsWith('http')

  return (
    <a
      href={link.href}
      className={`group flex min-h-14 items-center justify-between gap-4 rounded-2xl px-4 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6fa8] ${
        inverse
          ? 'border border-white/12 bg-white/8 text-white hover:bg-white/12'
          : 'border border-[#e1d1be] bg-white text-[#172333] shadow-sm hover:bg-[#fff8f0]'
      } ${compact ? 'min-h-12' : ''}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onClick={onClick}
      aria-label={`${link.label}: ${link.value}`}
    >
      <span className="flex items-center gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${inverse ? 'bg-white/10 text-[#f0d193]' : 'bg-[#e8f1f8] text-[#2f6fa8]'}`}>
          <Icon className="h-5 w-5" />
        </span>
        <span>
          <span className={`block text-xs font-semibold uppercase ${inverse ? 'text-[#f0d193]' : 'text-[#7b6a5b]'}`}>{link.label}</span>
          {!compact ? <span className="mt-1 block font-semibold">{link.value}</span> : null}
        </span>
      </span>
      {!compact ? <ArrowRight className="h-4 w-4 opacity-55 transition group-hover:translate-x-1" /> : null}
    </a>
  )
}

function PatternField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#d5b46a]/18 blur-3xl" />
      <div className="absolute right-[-6rem] top-44 h-72 w-72 rounded-full bg-[#2f6fa8]/18 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_center,rgba(47,111,143,0.07)_1px,transparent_1px)] bg-[length:30px_30px] opacity-60" />
    </div>
  )
}

export default App
