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
  ['Kabul Journal', 'Editorial website concept with structured stories, categories, and refined article pages.'],
  ['Zhandark Daily', 'A bold digital news identity with a distinctive editorial visual language.'],
  ['Snooker Club Dashboard', 'A clean operational dashboard concept for bookings, members, and daily activity.'],
  ['AI Health Project', 'A product interface concept for health guidance, patient support, and clear next steps.'],
  ['Brand Identity Systems', 'Logo, palette, type, and visual systems for new brands preparing to launch.'],
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
    <div className="min-h-screen bg-[#fbf7ef] text-[#26221e]">
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
    <header className="sticky top-0 z-50 border-b border-[#ddd2c2]/80 bg-[#fbf7ef]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-10">
        <a
          href="#top"
          className="group flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6f8f]"
          aria-label="Naqsh Digital Studio home"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={`${import.meta.env.BASE_URL}naqsh-icon.jpeg`}
            alt="Naqsh Digital Studio blue and red pattern mark"
            className="h-11 w-11 rounded-2xl object-cover shadow-sm ring-1 ring-[#d8cbb8]"
            loading="eager"
          />
          <span className="leading-tight">
            <span className="block text-lg font-semibold text-[#211d19]">Naqsh</span>
            <span className="block text-xs font-medium uppercase text-[#8b7560]">Digital Studio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#6d5f51] md:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-md transition hover:text-[#2f6f8f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6f8f]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#28312d] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#34423d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6f8f]"
          >
            Start a Project
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#ddd2c2] bg-white text-[#26221e] shadow-sm transition hover:bg-[#f4eadb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6f8f] md:hidden"
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
          className="border-t border-[#e5d9c8] bg-[#fbf7ef] px-5 pb-6 pt-3 shadow-xl shadow-[#9a835c]/10 md:hidden"
        >
          <nav className="mx-auto grid max-w-7xl gap-1" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="flex min-h-12 items-center justify-between rounded-2xl px-4 text-base font-semibold text-[#332d27] transition hover:bg-[#f2e7d7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f6f8f]"
                onClick={() => setIsOpen(false)}
              >
                {label}
                <ChevronRight className="h-4 w-4 text-[#a79076]" />
              </a>
            ))}
          </nav>
          <div className="mx-auto mt-5 max-w-7xl rounded-3xl border border-[#e2d5c2] bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-[#8b7560]">Contact Naqsh</p>
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
          <p className="inline-flex rounded-full border border-[#dfd0bd] bg-white/70 px-4 py-2 text-sm font-semibold text-[#7c664f] shadow-sm">
            Kabul-born creative-tech studio
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.03] text-[#211d19] sm:text-6xl lg:text-7xl">
            Designing digital identities with soul and precision.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6d5f51] sm:text-xl">
            Naqsh Digital Studio is a Kabul-born creative-tech studio building websites,
            brands, interfaces, and digital experiences for ambitious people and businesses.
          </p>
          <div className="mt-9 grid gap-3 sm:flex">
            <a
              href="#contact"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#28312d] px-7 text-base font-semibold text-white shadow-lg shadow-[#4f4538]/15 transition hover:bg-[#34423d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6f8f]"
            >
              Start a Project
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#d8c8b3] bg-white/80 px-7 text-base font-semibold text-[#332d27] shadow-sm transition hover:border-[#bda98f] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6f8f]"
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
          <div className="absolute inset-8 rounded-[3rem] bg-[#d5b46a]/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[#e0d1bd] bg-white p-4 shadow-2xl shadow-[#9a835c]/16">
            <div className="relative min-h-[420px] overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,#f7efe1,#ffffff_48%,#e8f0f2)] p-5">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
                className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-[5rem] border border-[#c9a95a]/50"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
                className="absolute left-[18%] top-[12%] h-44 w-44 rounded-[3.5rem] border border-[#6f9bb0]/45"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(47,111,143,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(47,111,143,0.08)_1px,transparent_1px)] bg-[length:28px_28px]" />
              <div className="relative flex h-full min-h-[380px] flex-col justify-between">
                <div className="flex justify-between gap-3">
                  <div className="rounded-3xl border border-[#e0d1bd] bg-white/82 p-4 shadow-sm backdrop-blur">
                    <p className="text-xs font-semibold uppercase text-[#8b7560]">Pattern</p>
                    <p className="mt-2 max-w-32 text-2xl font-semibold leading-tight text-[#2f6f8f]">Design with meaning</p>
                  </div>
                  <div className="h-20 w-20 rounded-[1.75rem] bg-[#2f6f8f]/12 p-3">
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
                    <div key={label} className="rounded-2xl border border-white/80 bg-white/72 px-3 py-4 text-center text-sm font-semibold text-[#5f5247] shadow-sm backdrop-blur">
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
            <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4f5] text-[#2f6f8f]">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-[#211d19]">{service.title}</h3>
            <p className="mt-4 leading-7 text-[#6d5f51]">{service.description}</p>
          </MotionArticle>
        ))}
      </div>
    </Section>
  )
}

function FeaturedWork() {
  return (
    <Section id="work" tone="stone" eyebrow="Featured Work" title="Selected concepts with honest placeholders for future visuals." intro="These cards reserve space for real screenshots and case studies without pretending the final visuals are already published.">
      <div className="mt-10 grid gap-5 lg:grid-cols-5">
        {featuredWork.map(([title, description], index) => (
          <MotionArticle
            key={title}
            index={index}
            className="overflow-hidden rounded-[2rem] border border-[#dfd0bd] bg-[#fbf7ef] shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#9a835c]/12 lg:col-span-2 lg:[&:nth-child(3)]:col-span-1 lg:[&:nth-child(5)]:col-span-3"
          >
            <div className="relative min-h-52 overflow-hidden bg-[linear-gradient(135deg,#ffffff,#efe2cf_50%,#dcebef)] p-5">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(47,111,143,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(47,111,143,0.08)_1px,transparent_1px)] bg-[length:24px_24px]" />
              <div className="relative rounded-3xl border border-white/80 bg-white/66 p-4 shadow-sm backdrop-blur">
                <div className="mb-4 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#c9a95a]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#8fb3c3]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d9c7ae]" />
                </div>
                <div className="space-y-3">
                  <div className="h-3 rounded-full bg-[#2f6f8f]/18" />
                  <div className="h-3 w-2/3 rounded-full bg-[#2f6f8f]/12" />
                  <div className="grid grid-cols-2 gap-3 pt-3">
                    <div className="h-16 rounded-2xl bg-[#c9a95a]/16" />
                    <div className="h-16 rounded-2xl bg-[#2f6f8f]/12" />
                  </div>
                </div>
              </div>
              <p className="relative mt-4 rounded-full bg-white/72 px-4 py-2 text-center text-sm font-semibold text-[#7c664f] shadow-sm">
                Project visual coming soon
              </p>
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-[#2f6f8f]">Naqsh project</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#211d19]">{title}</h3>
              <p className="mt-4 leading-7 text-[#6d5f51]">{description}</p>
            </div>
          </MotionArticle>
        ))}
      </div>
    </Section>
  )
}

function WhyNaqsh() {
  return (
    <Section id="why" eyebrow="Why Naqsh" title="Built for craft, speed, and cultural clarity." intro="A strong digital presence should feel beautiful, work quickly, and speak naturally to the people it serves.">
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(([title, description], index) => (
          <MotionArticle key={title} index={index} className="rounded-[1.5rem] border border-[#e4d7c5] bg-white/72 p-5 shadow-sm">
            <BadgeCheck className="h-6 w-6 text-[#c0963d]" />
            <h3 className="mt-5 text-xl font-semibold text-[#211d19]">{title}</h3>
            <p className="mt-3 leading-7 text-[#6d5f51]">{description}</p>
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
          <MotionArticle key={title} index={index} className="relative rounded-[1.75rem] border border-[#dfd0bd] bg-[#fbf7ef] p-6 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#28312d] text-sm font-semibold text-white">
              {index + 1}
            </span>
            <h3 className="mt-8 text-2xl font-semibold text-[#211d19]">{title}</h3>
            <p className="mt-4 leading-7 text-[#6d5f51]">{description}</p>
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
        className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#28312d] text-white shadow-2xl shadow-[#6c5a44]/20"
      >
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.82fr] lg:p-12">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-[#ead7ac]">
              Contact
            </p>
            <h2 className="mt-7 text-4xl font-semibold leading-tight sm:text-5xl">
              Let’s shape your next digital presence.
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
    <footer className="border-t border-[#e0d1bd] bg-[#f4eadb] px-5 py-10 sm:px-7 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xl font-semibold text-[#211d19]">Naqsh Digital Studio</p>
          <p className="mt-2 max-w-2xl leading-7 text-[#6d5f51]">
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
  const toneClass = tone === 'stone' ? 'bg-[#f4eadb]' : 'bg-[#fbf7ef]'

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
      <p className="text-sm font-semibold uppercase text-[#2f6f8f]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#211d19] sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-[#6d5f51]">{intro}</p>
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
      className={`group flex min-h-14 items-center justify-between gap-4 rounded-2xl px-4 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6f8f] ${
        inverse
          ? 'border border-white/12 bg-white/8 text-white hover:bg-white/12'
          : 'border border-[#dfd0bd] bg-white text-[#332d27] shadow-sm hover:bg-[#fbf7ef]'
      } ${compact ? 'min-h-12' : ''}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onClick={onClick}
      aria-label={`${link.label}: ${link.value}`}
    >
      <span className="flex items-center gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${inverse ? 'bg-white/10 text-[#ead7ac]' : 'bg-[#eef4f5] text-[#2f6f8f]'}`}>
          <Icon className="h-5 w-5" />
        </span>
        <span>
          <span className={`block text-xs font-semibold uppercase ${inverse ? 'text-[#ead7ac]' : 'text-[#8b7560]'}`}>{link.label}</span>
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
      <div className="absolute right-[-6rem] top-44 h-72 w-72 rounded-full bg-[#8fb3c3]/20 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_center,rgba(47,111,143,0.07)_1px,transparent_1px)] bg-[length:30px_30px] opacity-60" />
    </div>
  )
}

export default App
