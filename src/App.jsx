import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Code2,
  Globe2,
  Layers3,
  LayoutTemplate,
  Mail,
  MessageCircle,
  Palette,
  PenTool,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react'

const navItems = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Work', '#work'],
  ['Contact', '#contact'],
]

const services = [
  {
    title: 'Web Design',
    description: 'Premium interfaces with polished layouts, responsive systems, and clear visual direction.',
    icon: LayoutTemplate,
  },
  {
    title: 'Web Development',
    description: 'Fast, maintainable websites built with modern frontend tooling and clean implementation.',
    icon: Code2,
  },
  {
    title: 'UI/UX Design',
    description: 'Product flows, wireframes, and user experiences shaped for clarity and conversion.',
    icon: Layers3,
  },
  {
    title: 'Branding & Logo Design',
    description: 'Identity systems, launch-ready logos, and brand visuals that feel distinct and credible.',
    icon: PenTool,
  },
  {
    title: 'Digital Products',
    description: 'Dashboards, MVPs, internal tools, and interactive experiences for growing teams.',
    icon: Blocks,
  },
  {
    title: 'Business Websites',
    description: 'Sharp company sites for founders, services, venues, and local businesses ready to scale.',
    icon: Globe2,
  },
]

const selectedWork = [
  ['Kabul Journal', 'Editorial platform for culture, stories, and city reporting.'],
  ['Media Website Concept', 'A refined publishing experience with strong hierarchy and speed.'],
  ['Snooker Club Dashboard', 'Operations dashboard for bookings, members, and daily activity.'],
  ['AI Health Project', 'Product concept for health guidance, triage, and patient support.'],
  ['Brand Identity Concepts', 'Logo systems and visual directions for ambitious new companies.'],
]

const strengths = [
  ['Modern design', Sparkles],
  ['Fast websites', Zap],
  ['Clean code', Code2],
  ['Mobile-first experience', Smartphone],
  ['English, Dari, and Pashto support', BadgeCheck],
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-slate-100">
      <Header />
      <Hero />
      <About />
      <Services />
      <SelectedWork />
      <WhyNaqsh />
      <Contact />
      <Footer />
    </main>
  )
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070d]/78 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Naqsh Digital Studio home">
          <img
            src={`${import.meta.env.BASE_URL}naqsh-icon.jpeg`}
            alt=""
            className="h-10 w-10 rounded-md object-cover ring-1 ring-white/15"
          />
          <span className="text-sm font-semibold uppercase text-white">
            Naqsh
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} className="transition hover:text-cyan-200" href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex h-10 items-center justify-center rounded-md border border-cyan-300/25 bg-cyan-300/10 px-4 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/16"
        >
          Start
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen px-5 pt-32 sm:px-8 lg:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(34,211,238,0.12),transparent_32%,rgba(212,175,55,0.08)_66%,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[length:34px_34px] opacity-30" />
      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-14 py-12 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium uppercase text-cyan-100">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            Kabul based, globally minded
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Naqsh Digital Studio
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            We design and build digital experiences that feel premium, fast, and meaningful.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cyan-300 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.08]"
            >
              View Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto flex w-full max-w-[520px] items-center justify-center lg:max-w-none"
        >
          <div className="absolute inset-6 bg-cyan-300/10 blur-3xl" />
          <div className="relative aspect-square w-full max-w-[500px] rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(255,255,255,0.025))] p-8 shadow-2xl shadow-cyan-950/40">
            <div className="flex h-full items-center justify-center rounded-md border border-white/10 bg-[#080b13]/80">
              <img
                src={`${import.meta.env.BASE_URL}naqsh-icon.jpeg`}
                alt="Naqsh Digital Studio brand mark"
                className="w-4/5 max-w-[360px] rounded-md object-cover"
              />
            </div>
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2 text-xs text-slate-300">
              {['Design', 'Code', 'Identity'].map((item) => (
                <span key={item} className="rounded-md border border-white/10 bg-black/35 px-3 py-2 text-center">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <SectionHeading
          eyebrow="About"
          title="A Kabul studio building for the next market."
        />
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="text-xl leading-9 text-slate-300"
        >
          Naqsh is a Kabul-based digital studio with global ambition. We combine design,
          technology, and storytelling to help founders, teams, and businesses launch
          websites, brands, and digital products with international polish and local insight.
        </motion.p>
      </div>
    </Section>
  )
}

function Services() {
  return (
    <Section id="services" className="bg-white/[0.025]">
      <SectionHeading
        eyebrow="Services"
        title="Focused creative-tech work for serious launches."
        description="From a first business website to a full product interface, every engagement is designed to be clear, fast, and easy to evolve."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </Section>
  )
}

function ServiceCard({ service, index }) {
  const Icon = service.icon

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: 'easeOut' }}
      className="group rounded-lg border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.055]"
    >
      <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-4 leading-7 text-slate-400">{service.description}</p>
    </motion.article>
  )
}

function SelectedWork() {
  return (
    <Section id="work">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Selected Work"
          title="Placeholder concepts ready to become real case studies."
          description="The first portfolio entries can be replaced as projects launch. The layout already supports a premium work archive."
        />
        <a
          href="#contact"
          className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-md border border-white/15 px-4 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-100"
        >
          Discuss a project
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="mt-12 grid gap-4 lg:grid-cols-5">
        {selectedWork.map(([title, description], index) => (
          <motion.article
            key={title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
            className="min-h-64 rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))] p-5 transition hover:-translate-y-1 hover:border-cyan-300/35 lg:[&:nth-child(1)]:col-span-2 lg:[&:nth-child(4)]:col-span-2"
          >
            <div className="mb-12 h-1 w-14 rounded-full bg-cyan-300" />
            <p className="text-xs font-medium uppercase text-slate-500">
              Concept {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-4 leading-7 text-slate-400">{description}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

function WhyNaqsh() {
  return (
    <Section id="why" className="bg-white/[0.025]">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="Why Naqsh"
          title="Built for clients who care about craft and momentum."
          description="Naqsh keeps the work direct: thoughtful design, modern delivery, and communication that respects both local context and global expectations."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {strengths.map(([label, Icon], index) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.04, ease: 'easeOut' }}
              className="flex min-h-20 items-center gap-4 rounded-lg border border-white/10 bg-[#080b13] px-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#d4af37]/12 text-[#f4d26b]">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-medium text-slate-100">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="rounded-lg border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.13),rgba(255,255,255,0.04)_48%,rgba(212,175,55,0.1))] p-6 sm:p-10 lg:p-14"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase text-cyan-100">Contact</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Launch a sharper website, brand, or digital product.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Tell us what you are building. We will help shape the right first version and the path after launch.
            </p>
          </div>
          <div className="grid gap-3">
            <ContactLink icon={MessageCircle} label="WhatsApp" value="+93 749 290 370" href="https://wa.me/93749290370" />
            <ContactLink icon={Palette} label="Instagram" value="@naqshdev" href="https://instagram.com/naqshdev" />
            <ContactLink icon={Mail} label="Email" value="hello@naqsh.dev" href="mailto:hello@naqsh.dev" />
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

function ContactLink({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      className="flex items-center justify-between gap-4 rounded-md border border-white/10 bg-black/25 p-4 transition hover:border-cyan-300/40 hover:bg-black/35"
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
    >
      <span className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-200">
          <Icon className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs uppercase text-slate-500">{label}</span>
          <span className="mt-1 block font-semibold text-white">{value}</span>
        </span>
      </span>
      <ArrowRight className="h-4 w-4 text-slate-500" />
    </a>
  )
}

function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative px-5 py-24 sm:px-8 lg:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="max-w-3xl"
    >
      <p className="text-sm font-medium uppercase text-cyan-200">{eyebrow}</p>
      <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-slate-400">{description}</p> : null}
    </motion.div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-sm text-slate-500 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>Naqsh Digital Studio</p>
        <p>Kabul, Afghanistan. Serving local and global clients.</p>
      </div>
    </footer>
  )
}

export default App
