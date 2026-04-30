# Kanzleifreund Recruiting OnePager Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready OnePager website for Kanzleifreund's recruiting service, 1:1 matching the PDF design, with a contact form backed by a Railway API.

**Architecture:** Next.js 15 App Router on Vercel (static frontend), Railway Node/Express API for contact form leads. GitHub repo `reinkobercom/kanzleifreund-recruiting` auto-deploys to Vercel on push to main. Railway API is a separate service in the same GitHub repo under `/api`.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS v4, Playfair Display + Inter fonts, Node.js + Express on Railway

---

## File Map

```
kanzleifreund-recruiting/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Assembles all sections
│   └── globals.css             # Tailwind base + custom CSS vars
├── components/
│   ├── sections/
│   │   ├── Hero.tsx            # Section 1: Navy hero with stats
│   │   ├── Problem.tsx         # Section 2: 3 Beobachtungen + 60% stat
│   │   ├── WhyFails.tsx        # Section 3: Kanal-Tabelle + 70% quote
│   │   ├── ThreePillars.tsx    # Section 4: 3 Säulen cards
│   │   ├── CareerPortal.tsx    # Section 5: Karriereportal detail
│   │   ├── EmployerBranding.tsx # Section 6: Branding detail + price
│   │   ├── Campaigns.tsx       # Section 7: Kampagnen detail
│   │   ├── Pricing.tsx         # Section 8: Alle Preistabellen
│   │   ├── Process.tsx         # Section 9: 6-Step Ablauf
│   │   ├── WhyUs.tsx           # Section 10: 4 Differenzierungs-Cards
│   │   └── FinalCTA.tsx        # Section 11: Navy CTA + Kontaktformular
│   └── ui/
│       ├── StatBadge.tsx       # Reusable stat display (98%, 170+, Ø28)
│       ├── SectionLabel.tsx    # Overline label (KAPITEL 01 etc.)
│       └── ContactForm.tsx     # Controlled form with fetch to Railway
├── api/                        # Railway service (separate deploy)
│   ├── index.js                # Express app entry
│   ├── routes/contact.js       # POST /api/contact handler
│   ├── package.json
│   └── .env.example
├── public/
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Task 1: GitHub Repo + Project Scaffold

**Files:**
- Create: entire project scaffold via CLI

- [ ] **Step 1: Delete old GitHub repo**

```bash
gh repo delete reinkobercom/steuerkanzlei-recruiting-neu --yes
```

- [ ] **Step 2: Create new GitHub repo**

```bash
gh repo create reinkobercom/kanzleifreund-recruiting --public --clone
cd kanzleifreund-recruiting
```

- [ ] **Step 3: Scaffold Next.js app**

```bash
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*" \
  --yes
```

- [ ] **Step 4: Install additional dependencies**

```bash
npm install playfair-display
```

- [ ] **Step 5: Initial commit**

```bash
git add .
git commit -m "chore: scaffold Next.js 15 app"
git push -u origin main
```

---

## Task 2: Design Tokens + Global CSS

**Files:**
- Modify: `app/globals.css`
- Modify: `tailwind.config.ts`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update globals.css with CSS custom properties**

```css
/* app/globals.css */
@import "tailwindcss";

:root {
  --color-navy: #1a2744;
  --color-gold: #c9943a;
  --color-offwhite: #f5f0e8;
  --color-white: #ffffff;
  --color-gray: #6b7280;
}

body {
  font-family: 'Inter', sans-serif;
  color: var(--color-navy);
  background: var(--color-white);
}

h1, h2, h3 {
  font-family: 'Playfair Display', Georgia, serif;
}
```

- [ ] **Step 2: Update tailwind.config.ts**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1a2744',
        gold: '#c9943a',
        offwhite: '#f5f0e8',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}

export default config
```

- [ ] **Step 3: Update layout.tsx with fonts and metadata**

```typescript
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Recruiting für Steuerkanzleien | Kanzleifreund',
  description: 'Spezialisierte Personalgewinnung für Steuerkanzleien. Karriereportal, Employer Branding und gezielte Recruiting-Kampagnen — aus einer Hand.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "chore: add design tokens, fonts, and tailwind config"
```

---

## Task 3: Shared UI Components

**Files:**
- Create: `components/ui/StatBadge.tsx`
- Create: `components/ui/SectionLabel.tsx`
- Create: `components/ui/ContactForm.tsx`

- [ ] **Step 1: Create StatBadge**

```typescript
// components/ui/StatBadge.tsx
interface StatBadgeProps {
  value: string
  label: string
  dark?: boolean
}

export function StatBadge({ value, label, dark = false }: StatBadgeProps) {
  return (
    <div className={`flex flex-col gap-1 ${dark ? 'text-white' : 'text-navy'}`}>
      <span className="font-serif text-4xl md:text-5xl text-gold">{value}</span>
      <span className="text-xs tracking-widest uppercase opacity-70">{label}</span>
    </div>
  )
}
```

- [ ] **Step 2: Create SectionLabel**

```typescript
// components/ui/SectionLabel.tsx
interface SectionLabelProps {
  text: string
  gold?: boolean
}

export function SectionLabel({ text, gold = false }: SectionLabelProps) {
  return (
    <p className={`text-xs tracking-[0.2em] uppercase mb-4 ${gold ? 'text-gold' : 'text-gold'}`}>
      {text}
    </p>
  )
}
```

- [ ] **Step 3: Create ContactForm**

```typescript
// components/ui/ContactForm.tsx
'use client'
import { useState } from 'react'

interface FormState {
  name: string
  kanzlei: string
  telefon: string
  email: string
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', kanzlei: '', telefon: '', email: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
      setForm({ name: '', kanzlei: '', telefon: '', email: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 rounded focus:outline-none focus:border-gold"

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <p className="text-gold font-serif text-2xl mb-2">Vielen Dank.</p>
        <p className="text-white/70">Wir melden uns innerhalb von 24 Stunden.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text" required placeholder="Ihr Name"
        value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        className={inputClass}
      />
      <input
        type="text" required placeholder="Kanzleiname"
        value={form.kanzlei} onChange={e => setForm(f => ({ ...f, kanzlei: e.target.value }))}
        className={inputClass}
      />
      <input
        type="tel" required placeholder="Telefonnummer"
        value={form.telefon} onChange={e => setForm(f => ({ ...f, telefon: e.target.value }))}
        className={inputClass}
      />
      <input
        type="email" required placeholder="E-Mail-Adresse"
        value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        className={inputClass}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="md:col-span-2 bg-gold text-white font-sans font-semibold py-4 px-8 rounded hover:bg-gold/90 transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? 'Wird gesendet...' : 'Gespräch anfragen'}
      </button>
      {status === 'error' && (
        <p className="md:col-span-2 text-red-400 text-sm text-center">
          Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.
        </p>
      )}
    </form>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: add shared UI components (StatBadge, SectionLabel, ContactForm)"
```

---

## Task 4: Hero Section (Seite 1)

**Files:**
- Create: `components/sections/Hero.tsx`

- [ ] **Step 1: Create Hero.tsx**

```typescript
// components/sections/Hero.tsx
import { StatBadge } from '@/components/ui/StatBadge'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Hero() {
  return (
    <section className="relative bg-navy min-h-screen flex flex-col justify-between px-6 md:px-16 py-16 overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute right-0 top-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/10 translate-x-1/3" />

      <div className="relative z-10 max-w-4xl">
        <SectionLabel text="Für Inhaber und Partner von Steuerkanzleien" />

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-8">
          Die Fachkraft, die Sie suchen,{' '}
          <em className="text-gold not-italic italic">sucht nicht</em>{' '}
          <span className="inline-block w-12 md:w-20 h-0.5 bg-gold align-middle mx-2" />
          <br />noch nicht.
        </h1>

        <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-12">
          Spezialisierte Personalgewinnung für Steuerkanzleien. Karriereportal, Employer Branding
          und gezielte Recruiting-Kampagnen — aus einer Hand, statt aus drei Agenturen.
        </p>

        <a
          href="tel:+49PLACEHOLDER"
          className="inline-block bg-gold text-white font-sans font-semibold text-lg px-10 py-4 rounded hover:bg-gold/90 transition-colors"
        >
          Jetzt anrufen
        </a>
      </div>

      {/* Stats */}
      <div className="relative z-10 border-t border-white/20 pt-8 mt-16">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          <StatBadge value="98 %" label="Besetzungsquote" />
          <StatBadge value="170+" label="Betreute Kanzleien" />
          <StatBadge value="Ø 28" label="Tage bis zur Besetzung" />
        </div>
      </div>

      {/* Footer line */}
      <div className="relative z-10 flex justify-between items-center pt-8 text-white/30 text-xs tracking-widest uppercase">
        <span>Strategiepapier · 11 Seiten</span>
        <span>Kanzleifreund</span>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add to page.tsx and verify dev server**

```typescript
// app/page.tsx
import { Hero } from '@/components/sections/Hero'

export default function Home() {
  return <main><Hero /></main>
}
```

```bash
npm run dev
# Open http://localhost:3000 — verify navy hero with gold headline
```

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "feat: add Hero section"
```

---

## Task 5: Problem + WhyFails Sections (Seiten 2–3)

**Files:**
- Create: `components/sections/Problem.tsx`
- Create: `components/sections/WhyFails.tsx`

- [ ] **Step 1: Create Problem.tsx**

```typescript
// components/sections/Problem.tsx
import { SectionLabel } from '@/components/ui/SectionLabel'

const observations = [
  {
    num: '01',
    title: 'Mandate, die Sie ablehnen müssen.',
    text: 'Während die Arbeit sich stapelt, fehlen die Hände. Jedes abgelehnte Mandat ist nicht nur entgangener Umsatz — es ist ein Mandant, der zur Konkurrenz geht und dort bleibt.',
  },
  {
    num: '02',
    title: 'Stellenanzeigen, die nicht greifen.',
    text: 'Die Ausschreibung läuft seit Wochen. Die wenigen Bewerbungen, die kommen, passen nicht. Dabei wissen Sie: irgendwo da draußen ist die richtige Person — sie schaut nur gerade nicht in Stellenportale.',
  },
  {
    num: '03',
    title: 'Ein Team, das die Lücke trägt.',
    text: 'Ihre besten Mitarbeiterinnen und Mitarbeiter kompensieren die unbesetzten Stellen mit Überstunden und Mehrbelastung. Solange das funktioniert, merkt es niemand. Bis es nicht mehr funktioniert.',
  },
]

export function Problem() {
  return (
    <section className="bg-offwhite px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Kapitel 01" />
        <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
          Sie kennen das wahrscheinlich.
        </h2>
        <div className="w-full h-px bg-navy/20 mb-8" />
        <p className="text-navy text-lg md:text-xl font-medium max-w-3xl mb-12">
          In den meisten Steuerkanzleien Deutschlands läuft gerade dasselbe Bild ab.
          Drei Beobachtungen, die Sie vermutlich aus dem eigenen Alltag kennen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {observations.map(o => (
            <div key={o.num} className="bg-white p-6 rounded border border-navy/10">
              <p className="text-gold text-xs tracking-widest uppercase mb-3">Beobachtung {o.num}</p>
              <h3 className="font-serif text-xl text-navy mb-3">{o.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{o.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-navy rounded p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <span className="font-serif text-7xl md:text-8xl text-gold shrink-0">60 %</span>
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-2">Ausgangslage</p>
            <p className="text-white text-base leading-relaxed">
              der offenen Stellen in deutschen Steuerkanzleien bleiben länger als drei Monate
              unbesetzt. 72 % aller Kanzleien geben an, derzeit keine passenden Mitarbeiter zu finden.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create WhyFails.tsx**

```typescript
// components/sections/WhyFails.tsx
import { SectionLabel } from '@/components/ui/SectionLabel'

const channels = [
  {
    kanal: 'Stellenportale',
    sub: 'StepStone, Indeed, Xing',
    was: 'Erreichen die ca. 5 %, die aktiv suchen. Bewerbungen sind selten und passen oft nicht zum Profil.',
    kosten: '300 – 1.500 € pro Anzeige · ohne Erfolgsgarantie',
  },
  {
    kanal: 'Headhunter',
    sub: 'Klassische Personalvermittlung',
    was: 'Lange Vorlaufzeiten, Kandidaten oft nicht steuerspezifisch vorqualifiziert. Erfolg unsicher.',
    kosten: '25 – 30 % des Jahresgehalts · bei Steuerfachkraft 12.000 – 18.000 €',
  },
  {
    kanal: 'Eigene Karriereseite',
    sub: 'Falls vorhanden',
    was: 'Meist eine Unterseite mit textlastigen Stellenanzeigen. Bewerber verlassen sie in 20 Sekunden.',
    kosten: 'Keine direkten Kosten · aber kostet jede Bewerbung, die nicht ankommt',
  },
  {
    kanal: 'Social Media auf eigene Faust',
    sub: 'Instagram, Facebook, LinkedIn',
    was: 'Ohne Strategie, Targeting und kreatives Material verbrennt Werbebudget ohne Bewerbungsstrom.',
    kosten: 'Variable Mediabudgets · meist unter 1 % Conversion',
  },
]

export function WhyFails() {
  return (
    <section className="bg-white px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Kapitel 02" />
        <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
          Es liegt nicht an Ihnen.<br />Es liegt am Kanal.
        </h2>
        <div className="w-full h-px bg-navy/20 mb-8" />
        <p className="text-navy text-lg md:text-xl font-medium max-w-3xl mb-12">
          Die meisten Recruiting-Wege in der Steuerbranche zielen auf die kleine Minderheit,
          die <em>aktiv</em> sucht. Die eigentliche Zielgruppe — wechselbereite, aber nicht aktiv
          suchende Fachkräfte — bleibt unsichtbar.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b border-navy/20">
                <th className="text-left text-xs tracking-widest uppercase text-navy/50 py-3 pr-6">Kanal</th>
                <th className="text-left text-xs tracking-widest uppercase text-navy/50 py-3 pr-6">Was passiert</th>
                <th className="text-left text-xs tracking-widest uppercase text-navy/50 py-3">Was es kostet</th>
              </tr>
            </thead>
            <tbody>
              {channels.map((c, i) => (
                <tr key={i} className="border-b border-navy/10">
                  <td className="py-5 pr-6 align-top">
                    <p className="font-semibold text-navy">{c.kanal}</p>
                    <p className="text-xs text-gray-400">{c.sub}</p>
                  </td>
                  <td className="py-5 pr-6 align-top text-gray-500 text-sm leading-relaxed">{c.was}</td>
                  <td className="py-5 align-top text-gray-500 text-sm leading-relaxed">{c.kosten}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-b border-navy/20 py-8">
          <p className="font-serif text-2xl md:text-3xl text-navy leading-snug">
            70 % der qualifizierten Steuerfachkräfte sind{' '}
            <em className="text-gold">wechselbereit, aber nicht aktiv auf Suche.</em>{' '}
            Sie zu erreichen ist keine Frage des Budgets — es ist eine Frage des richtigen Systems.
          </p>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Add to page.tsx**

```typescript
// app/page.tsx
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { WhyFails } from '@/components/sections/WhyFails'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <WhyFails />
    </main>
  )
}
```

- [ ] **Step 4: Verify dev server, commit**

```bash
# Verify sections render correctly at http://localhost:3000
git add .
git commit -m "feat: add Problem and WhyFails sections"
```

---

## Task 6: Three Pillars + Detail Sections (Seiten 4–7)

**Files:**
- Create: `components/sections/ThreePillars.tsx`
- Create: `components/sections/CareerPortal.tsx`
- Create: `components/sections/EmployerBranding.tsx`
- Create: `components/sections/Campaigns.tsx`

- [ ] **Step 1: Create ThreePillars.tsx**

```typescript
// components/sections/ThreePillars.tsx
import { SectionLabel } from '@/components/ui/SectionLabel'

const pillars = [
  {
    num: 'i.',
    title: 'Ein eigenes Karriereportal.',
    text: 'Eine eigenständige, professionell gestaltete Bewerber-Plattform unter Ihrer Domain. Stellenausschreibungen, die nicht wie Stellenausschreibungen aussehen. Bewerbung in unter 60 Sekunden — ohne Anschreiben, ohne Lebenslauf, bequem vom Smartphone.',
  },
  {
    num: 'ii.',
    title: 'Authentisches Employer Branding.',
    text: 'Mitarbeiterinterviews, professioneller Imagefilm und eine Fotoreportage, die Ihre Kanzlei so zeigen, wie sie wirklich ist. Nicht Stockfotos. Nicht Floskeln. Sondern echte Stimmen, echte Räume, echte Kultur — das, was eine Bewerbung am Ende auslöst.',
  },
  {
    num: 'iii.',
    title: 'Gezielte Recruiting-Kampagnen.',
    text: 'Vier-Wochen-Kampagnen pro offener Stelle, ausgespielt auf Instagram, Facebook und LinkedIn. Direkte Ansprache passiver Kandidaten dort, wo sie täglich Zeit verbringen — mit Botschaften, die für Steuerfachkräfte konzipiert sind, nicht für irgendeine Branche.',
  },
]

export function ThreePillars() {
  return (
    <section className="bg-offwhite px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Kapitel 03" />
        <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
          Drei Säulen.<br />Ein System.
        </h2>
        <div className="w-full h-px bg-navy/20 mb-8" />
        <p className="text-navy text-lg md:text-xl font-medium max-w-3xl mb-12">
          Wer in der Steuerbranche zuverlässig Fachkräfte gewinnen will, braucht drei
          Dinge gleichzeitig — und keine davon allein.
        </p>

        <div className="flex flex-col gap-6 mb-10">
          {pillars.map(p => (
            <div key={p.num} className="border-l-4 border-gold pl-6 py-2">
              <p className="font-serif italic text-gold text-lg mb-1">Säule {p.num}</p>
              <h3 className="font-serif text-2xl text-navy mb-3">{p.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-3xl">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-400 border-t border-navy/10 pt-6">
          Sie buchen die Säulen einzeln oder im Verbund. Wir empfehlen mindestens Säule i und iii
          gemeinsam — ein Karriereportal ohne Traffic bringt keine Bewerbungen, eine Kampagne ohne
          Landingpage verbrennt Budget.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create CareerPortal.tsx**

```typescript
// components/sections/CareerPortal.tsx
import { SectionLabel } from '@/components/ui/SectionLabel'

const features = [
  'Eigenständiges Design im Stil Ihrer Kanzlei',
  'Mehrere Stellenausschreibungen mit klarem Bewerbungsweg',
  'Bewerbung in unter 60 Sekunden — ohne Lebenslauf, ohne Anschreiben',
  'Rubrik „Wofür wir stehen" — Werte, Benefits, Team',
  'FAQs für die häufigsten Bewerberfragen',
  'Mobile First — über 70 % der Bewerbungen kommen vom Smartphone',
  'DSGVO-konformer Bewerbungs-Workflow',
  'Individuelle Subdomain inkl. Hosting',
]

export function CareerPortal() {
  return (
    <section className="bg-white px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Säule 01 · Karriereportal" />
        <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
          Ihre eigene Karriereseite.<br />Nicht ein Profil auf einem Portal.
        </h2>
        <div className="w-full h-px bg-navy/20 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <p className="text-navy text-lg font-medium leading-relaxed mb-4">
              Bewerber entscheiden in unter 30 Sekunden, ob sich eine Stelle für sie lohnt.
              In dieser Zeit muss klar werden: Was bieten Sie? Wer sind Sie? Wie passt das
              zum Leben des Bewerbers?
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Wir bauen Ihnen ein eigenständiges Karriereportal — gehostet auf Ihrer Domain
              oder unter einer Subdomain Ihrer Wahl, vollständig auf das Erscheinungsbild Ihrer
              Kanzlei abgestimmt, mobiloptimiert und so konzipiert, dass die Bewerbung ein Klick
              ist, kein Hindernislauf.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Stellen, die Sie heute schalten, brauchen morgen ein neues Update. Deshalb
              übernehmen wir laufende Pflege, Hosting und kleinere Anpassungen über einen
              monatlichen Service-Retainer.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-navy/50 mb-4">Was enthalten ist</p>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="text-gold mt-0.5 shrink-0">—</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-navy/10 pt-8">
          {[
            { label: 'Setup', text: 'Einmalige Einrichtung von Design, Inhalten, Stellen und Bewerber-Workflow. Dauer in der Regel 2 – 3 Wochen ab Briefing.' },
            { label: 'Laufender Betrieb', text: 'Hosting, technische Pflege, Aktualisierung von Stellen und Inhalten, kleine Anpassungen — alles über den monatlichen Retainer.' },
            { label: 'Skalierbar', text: 'Vom Karriereportal mit einer Stelle bis zur Kanzleigruppe mit mehreren Standorten und 10+ Ausschreibungen — ein System, drei Größen.' },
          ].map(b => (
            <div key={b.label}>
              <p className="text-xs tracking-widest uppercase text-navy/50 mb-2">{b.label}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create EmployerBranding.tsx**

```typescript
// components/sections/EmployerBranding.tsx
import { SectionLabel } from '@/components/ui/SectionLabel'

const items = [
  {
    num: '01',
    title: 'Mitarbeiter-Interviews',
    text: 'Authentische Stimmen statt Marketing-Phrasen. Drei bis fünf Mitarbeiterinnen und Mitarbeiter erzählen vor der Kamera, warum sie bei Ihnen arbeiten — ungeschnitten ehrlich, professionell produziert.',
    einsatz: 'Karriereseite, Social-Media-Kampagnen, Bewerbungsgespräche, Mandantenkommunikation.',
  },
  {
    num: '02',
    title: 'Imagefilm',
    text: 'Ein professionell produzierter Kurzfilm (60 – 90 Sekunden), der Ihre Kanzlei in Bewegung zeigt: Räume, Menschen, Atmosphäre, Arbeitsalltag. Mit Drehbuch, Drehtag, Schnitt und Tonbearbeitung.',
    einsatz: 'Hero-Element auf der Karriereseite, Social-Ads, Messen, Onboarding neuer Mitarbeiter.',
  },
  {
    num: '03',
    title: 'Fotoreportage',
    text: 'Hochwertige Fotos Ihrer Kanzlei, des Teams und des Arbeitsalltags durch einen professionellen Fotografen vor Ort. Ein Fotoshooting-Tag, zwischen 50 und 80 finale Bilder in unbegrenzter Nutzungslizenz.',
    einsatz: 'Karriereseite, Stellenanzeigen, Social Media, Pressearbeit, Mandanten-Newsletter.',
  },
]

export function EmployerBranding() {
  return (
    <section className="bg-offwhite px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Säule 02 · Employer Branding" />
        <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
          Wer Sie sind, sieht man —<br />wenn man es zeigt.
        </h2>
        <div className="w-full h-px bg-navy/20 mb-8" />
        <p className="text-navy text-lg font-medium max-w-3xl mb-12">
          Die meisten Steuerkanzleien sehen für Außenstehende identisch aus. Auf Stellenportalen,
          in Anzeigen, auf der Homepage. Dabei ist genau das Gegenteil wahr: jede Kanzlei hat eine
          eigene Kultur, ein eigenes Team, eigene Stärken. Unsere Aufgabe ist, das sichtbar zu machen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {items.map(item => (
            <div key={item.num} className="bg-white p-6 rounded border border-navy/10">
              <p className="font-serif text-5xl text-navy/20 mb-4">{item.num}</p>
              <h3 className="font-serif text-xl text-navy mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.text}</p>
              <div className="border-t border-navy/10 pt-3">
                <p className="text-xs text-gray-400">
                  <span className="font-semibold text-navy">Einsatz:</span> {item.einsatz}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-navy rounded p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-2">Komplettes Branding-Paket · Einmalig</p>
            <p className="text-white text-base leading-relaxed max-w-xl">
              Vor-Ort-Drehtag in Ihrer Kanzlei: Imagefilm, Fotoreportage, drei bis fünf
              Mitarbeiterinterviews — produziert, geschnitten, einsatzbereit.
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="font-serif text-5xl text-gold">5.000 €</p>
            <p className="text-white/50 text-sm">einmalig · zzgl. MwSt.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Create Campaigns.tsx**

```typescript
// components/sections/Campaigns.tsx
import { SectionLabel } from '@/components/ui/SectionLabel'

const steps = [
  {
    num: 'i.',
    title: 'Briefing & Kampagnen-Setup',
    text: 'Wir definieren mit Ihnen Zielgruppe, Region und Argumente. Erstellung der Werbemittel: Bild, Video, Text. Auswahl der Kanäle und Targeting-Kriterien.',
    period: 'Woche 1',
  },
  {
    num: 'ii.',
    title: 'Ausspielung & Optimierung',
    text: 'Die Kampagne läuft über drei Wochen. Wir optimieren laufend Bilder, Texte und Targeting auf Basis der Daten. Sie sehen jederzeit, was passiert.',
    period: 'Woche 2 – 4',
  },
  {
    num: 'iii.',
    title: 'Bewerber-Vorqualifizierung',
    text: 'Eingehende Bewerbungen werden direkt vorqualifiziert. Sie erhalten nur Kandidaten, die fachlich und kulturell zu Ihrer Kanzlei passen — kein Wühlen durch Massenbewerbungen.',
    period: 'Laufend',
  },
]

export function Campaigns() {
  return (
    <section className="bg-white px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Säule 03 · Recruiting-Kampagnen" />
        <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
          Da, wo die Fachkräfte sind.<br />Nicht da, wo sie suchen.
        </h2>
        <div className="w-full h-px bg-navy/20 mb-8" />
        <p className="text-navy text-lg font-medium max-w-3xl mb-12">
          Über 70 % der qualifizierten Steuerfachkräfte sind nicht aktiv auf Jobsuche —
          aber wechselbereit. Sie erreichen sie nicht über StepStone. Sie erreichen sie über
          Instagram, Facebook und LinkedIn — wenn die Botschaft stimmt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="font-serif text-xl text-navy mb-6">Wie eine Kampagne abläuft</p>
            <div className="flex flex-col gap-0">
              {steps.map((s, i) => (
                <div key={s.num} className={`flex gap-6 py-6 ${i < steps.length - 1 ? 'border-b border-navy/10' : ''}`}>
                  <span className="font-serif italic text-gold text-2xl w-8 shrink-0">{s.num}</span>
                  <div>
                    <h3 className="font-serif text-lg text-navy mb-1">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-1">{s.text}</p>
                    <p className="text-xs text-gray-400 italic">· {s.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-navy rounded p-8">
              <p className="text-gold text-xs tracking-widest uppercase mb-4">Ergebnis pro Kampagne</p>
              <p className="font-serif text-7xl text-white mb-3">8–15</p>
              <p className="text-white/70 text-sm leading-relaxed">
                qualifizierte Bewerbungen pro offener Stelle nach 4 Wochen Laufzeit —
                basierend auf Vergleichsdaten aus Recruiting-Kampagnen für Steuerkanzleien.
              </p>
            </div>
            <div className="bg-navy/5 rounded p-8">
              <p className="text-gold text-xs tracking-widest uppercase mb-4">Unsere Bilanz</p>
              <p className="font-serif text-7xl text-navy mb-3">98 %</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Besetzungsquote über <strong>170+ betreute Steuerkanzleien</strong> —
                vom Einzelmandat bis zur Kanzleigruppe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Add to page.tsx, verify, commit**

```typescript
// app/page.tsx — add imports and components
import { ThreePillars } from '@/components/sections/ThreePillars'
import { CareerPortal } from '@/components/sections/CareerPortal'
import { EmployerBranding } from '@/components/sections/EmployerBranding'
import { Campaigns } from '@/components/sections/Campaigns'
// add after WhyFails: <ThreePillars /><CareerPortal /><EmployerBranding /><Campaigns />
```

```bash
git add .
git commit -m "feat: add ThreePillars, CareerPortal, EmployerBranding, Campaigns sections"
```

---

## Task 7: Pricing + Process + WhyUs Sections (Seiten 8–10)

**Files:**
- Create: `components/sections/Pricing.tsx`
- Create: `components/sections/Process.tsx`
- Create: `components/sections/WhyUs.tsx`

- [ ] **Step 1: Create Pricing.tsx**

```typescript
// components/sections/Pricing.tsx
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Pricing() {
  return (
    <section className="bg-offwhite px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Kapitel 04" />
        <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">Was kostet das?</h2>
        <div className="w-full h-px bg-navy/20 mb-8" />
        <p className="text-gray-500 mb-12">
          Klare Pakete, klare Preise. Keine Vorabkosten, keine Erfolgshonorare in Höhe eines
          Jahresgehalts. Alle Preise zzgl. gesetzlicher MwSt.
        </p>

        {/* Karriereportal */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-serif text-2xl text-navy">Karriereportal</h3>
            <span className="text-navy text-sm">Setup einmalig <strong className="text-gold">1.000 €</strong></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Klein', price: '100 €', period: '/ Monat', stellen: '1 – 2 aktive Stellen', features: 'Hosting, Pflege, Stellen-Updates', highlight: false },
              { label: 'Mittel', price: '150 €', period: '/ Monat', stellen: '3 – 4 aktive Stellen', features: '+ Quartals-Review & priorisierte Anpassungen', highlight: true },
              { label: 'Groß', price: '250 €', period: '/ Monat', stellen: 'ab 5 aktiven Stellen', features: '+ Mehrere Standorte, monatl. Reporting', highlight: false },
            ].map(p => (
              <div key={p.label} className={`p-6 rounded border ${p.highlight ? 'bg-navy border-navy text-white' : 'bg-white border-navy/10'}`}>
                <p className={`text-xs tracking-widest uppercase mb-3 ${p.highlight ? 'text-gold' : 'text-navy/50'}`}>{p.label}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`font-serif text-4xl ${p.highlight ? 'text-white' : 'text-navy'}`}>{p.price}</span>
                  <span className={`text-sm ${p.highlight ? 'text-white/60' : 'text-gray-400'}`}>{p.period}</span>
                </div>
                <p className={`text-sm mb-3 ${p.highlight ? 'text-white/70' : 'text-gray-400'}`}>{p.stellen}</p>
                <div className={`border-t pt-3 ${p.highlight ? 'border-white/20' : 'border-navy/10'}`}>
                  <p className={`text-xs leading-relaxed ${p.highlight ? 'text-white/70' : 'text-gray-400'}`}>{p.features}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recruiting-Kampagne */}
        <div className="mb-12">
          <div className="flex justify-between items-baseline mb-4">
            <h3 className="font-serif text-2xl text-navy">Recruiting-Kampagne</h3>
            <span className="text-navy/50 text-xs">pro 4 Wochen · pausierbar · jederzeit reaktivierbar</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Bis 2 Stellen', price: '1.000 €', period: '/ 4 Wochen', sub: 'Agenturleistung', features: 'Setup, Werbemittel, Ausspielung, Optimierung, Bewerber-Vorqualifizierung' },
              { label: 'Bis 4 Stellen', price: '1.500 €', period: '/ 4 Wochen', sub: 'Agenturleistung', features: 'Erweiterter Aufwand für mehrere parallele Kampagnen' },
              { label: 'Ab 5 Stellen', price: '2.000 €', period: '/ 4 Wochen', sub: 'Agenturleistung', features: 'Volumen-Recruiting für Kanzleigruppen & Standortketten' },
            ].map(p => (
              <div key={p.label} className="bg-white p-6 rounded border border-navy/10">
                <p className="text-gold text-xs tracking-widest uppercase mb-3">{p.label}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-serif text-4xl text-navy">{p.price}</span>
                  <span className="text-sm text-gray-400">{p.period}</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">{p.sub}</p>
                <div className="border-t border-navy/10 pt-3">
                  <p className="text-xs text-gray-400 leading-relaxed">{p.features}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded border border-navy/10">
              <p className="text-xs tracking-widest uppercase text-navy/50 mb-2">+ Werbebudget</p>
              <p className="text-gray-600 text-sm">ab <strong>1.400 €</strong> pro 4-Wochen-Zyklus (50 €/Tag) — skaliert je nach Anzahl Stellen und Region.</p>
            </div>
            <div className="bg-white p-5 rounded border border-navy/10">
              <p className="text-xs tracking-widest uppercase text-navy/50 mb-2">Volle Flexibilität</p>
              <p className="text-gray-600 text-sm">Kampagne pausieren, sobald genug Bewerbungen da sind. Bei Bedarf jederzeit reaktivieren — das Karriereportal läuft weiter.</p>
            </div>
          </div>
        </div>

        {/* Employer Branding + Vergleich */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-navy p-6 rounded">
            <p className="text-gold text-xs tracking-widest uppercase mb-3">Employer Branding · Einmalig</p>
            <p className="font-serif text-5xl text-gold mb-3">5.000 €</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Vor-Ort-Drehtag: Imagefilm, Fotoreportage, drei bis fünf Mitarbeiterinterviews.
            </p>
          </div>
          <div className="bg-white p-6 rounded border border-navy/10">
            <p className="text-xs tracking-widest uppercase text-navy/50 mb-3">Vergleich</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Headhunter-Mandat: 25 – 30 % des Jahresgehalts — pro Steuerfachkraft{' '}
              <strong>12.000 – 18.000 €</strong>. Bei mehreren Stellen pro Jahr fünfstelliger Unterschied.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create Process.tsx**

```typescript
// components/sections/Process.tsx
import { SectionLabel } from '@/components/ui/SectionLabel'

const steps = [
  { num: '01', title: 'Erstgespräch · kostenlos, 30 Minuten', text: 'Wir verstehen Ihre Kanzlei: welche Stellen Sie besetzen wollen, welche Kultur Ihr Haus prägt, welche Argumente bei Ihnen wirklich ziehen. Am Ende des Gesprächs wissen Sie, ob wir der richtige Partner sind.' },
  { num: '02', title: 'Konzeptphase', text: 'Sie erhalten innerhalb einer Woche einen konkreten Vorschlag: Aufbau Ihres Karriereportals, optionale Branding-Bausteine, Kampagnen-Setup für Ihre Stellen.' },
  { num: '03', title: 'Aufbau Karriereportal · 2 – 3 Wochen', text: 'Design, Inhalte, Stellenausschreibungen, Bewerber-Workflow. Sie erhalten einen Preview-Zugang und können Feedback geben, bevor live geschaltet wird.' },
  { num: '04', title: 'Employer Branding · optional', text: 'Mitarbeiterinterviews, Fotoshooting und Imagefilm finden parallel zum Portal-Aufbau statt — oder zeitversetzt, falls gewünscht. Drehtag in der Regel ein Tag vor Ort.' },
  { num: '05', title: 'Kampagnen-Launch', text: 'Pro offener Stelle starten wir eine 4-Wochen-Kampagne auf den relevanten Plattformen. Sie sehen ab Tag 1 die laufenden Daten.' },
  { num: '06', title: 'Laufende Betreuung', text: 'Ihr Karriereportal läuft, neue Stellen schalten Sie über uns auf. Persönliche Ansprechperson, klare Reportings, keine versteckten Kosten.' },
]

export function Process() {
  return (
    <section className="bg-white px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Kapitel 05" />
        <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
          Vom ersten Gespräch zur ersten Einstellung.
        </h2>
        <div className="w-full h-px bg-navy/20 mb-8" />
        <p className="text-navy text-lg font-medium mb-12">
          Sechs Schritte. Drei bis fünf Wochen vom Start bis zur ersten laufenden Kampagne.
        </p>

        <div className="flex flex-col">
          {steps.map((s, i) => (
            <div key={s.num} className={`flex gap-8 py-8 ${i < steps.length - 1 ? 'border-b border-navy/10' : ''}`}>
              <span className="font-serif italic text-gold text-3xl w-10 shrink-0 pt-1">{s.num}</span>
              <div>
                <h3 className="font-serif text-xl text-navy mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create WhyUs.tsx**

```typescript
// components/sections/WhyUs.tsx
import { SectionLabel } from '@/components/ui/SectionLabel'

const reasons = [
  {
    num: '01',
    title: 'Spezialisierung auf die Steuerbranche.',
    text: 'Wir verstehen, was eine Steuerfachkraft, eine Bilanzbuchhalterin, ein Steuerassistent suchen. Wir wissen, welche Argumente in der Branche ziehen — DATEV-Kompetenz, Homeoffice-Regelungen, Aufstiegspfade. Eine generische Recruiting-Agentur arbeitet mit Klempnern und Apothekern gleichzeitig. Wir nicht.',
  },
  {
    num: '02',
    title: 'Aus einer Hand — nicht aus drei.',
    text: 'Karriereportal, Branding und Kampagnen kommen normalerweise aus drei verschiedenen Agenturen, mit drei Verträgen, drei Ansprechpartnern und ohne Abstimmung untereinander. Bei uns: ein System, ein Vertrag, eine Person, die Ihren Fall kennt.',
  },
  {
    num: '03',
    title: 'Klare Pakete, klare Preise.',
    text: 'Sie wissen vorab, was es kostet. Keine Erfolgshonorare in Höhe eines Jahresgehalts. Keine versteckten Kosten. Wenn etwas individuell ist, sagen wir es vor dem Auftrag — nicht in der Rechnung.',
  },
  {
    num: '04',
    title: 'Persönliche Betreuung.',
    text: 'Sie bekommen einen festen Ansprechpartner mit Direktnummer. Keine Ticketsysteme, keine Hotlines, keine wechselnden Account-Manager. Bei einer Frage rufen Sie an. Das war\'s.',
  },
]

export function WhyUs() {
  return (
    <section className="bg-offwhite px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Kapitel 06" />
        <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
          Was uns von einer Standard-Agentur unterscheidet.
        </h2>
        <div className="w-full h-px bg-navy/20 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reasons.map(r => (
            <div key={r.num} className="bg-white p-8 rounded border border-navy/10">
              <p className="font-serif text-5xl text-navy/10 mb-4">{r.num}</p>
              <h3 className="font-serif text-xl text-navy mb-3">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-navy/20 pt-8">
          <p className="font-serif text-2xl md:text-3xl text-navy leading-snug">
            Recruiting in der Steuerbranche ist{' '}
            <em className="text-gold">kein Marketing-Thema</em> — es ist eine handwerkliche
            Disziplin, die nur funktioniert, wenn jemand Ihre Branche wirklich kennt.
          </p>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Add to page.tsx, verify, commit**

```bash
git add .
git commit -m "feat: add Pricing, Process, WhyUs sections"
```

---

## Task 8: Final CTA Section (Seite 11)

**Files:**
- Create: `components/sections/FinalCTA.tsx`
- Modify: `app/page.tsx` (complete assembly)

- [ ] **Step 1: Create FinalCTA.tsx**

```typescript
// components/sections/FinalCTA.tsx
import { SectionLabel } from '@/components/ui/SectionLabel'
import { StatBadge } from '@/components/ui/StatBadge'
import { ContactForm } from '@/components/ui/ContactForm'

export function FinalCTA() {
  return (
    <section className="bg-navy px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Bereit, das Problem zu lösen?" />
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
          Lassen Sie uns ein 30-minütiges Gespräch{' '}
          <em className="text-gold">führen.</em>
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mb-12">
          Am Ende des Gesprächs wissen Sie, ob unsere Lösung für Ihre Kanzlei passt —
          und welche Säulen für Sie zuerst sinnvoll sind. Unverbindlich, kostenlos, ohne Verkaufsdruck.
        </p>

        <a
          href="tel:+49PLACEHOLDER"
          className="inline-block bg-gold text-white font-sans font-semibold text-lg px-10 py-4 rounded hover:bg-gold/90 transition-colors mb-16"
        >
          Jetzt anrufen
        </a>

        <div className="border-t border-white/20 pt-10 mb-16">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <StatBadge value="98 %" label="Besetzungsquote" />
            <StatBadge value="170+" label="Betreute Kanzleien" />
            <StatBadge value="Ø 28" label="Tage bis zur Besetzung" />
          </div>
        </div>

        <div className="border-t border-white/20 pt-10">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-8">Oder schreiben Sie uns</p>
          <ContactForm />
        </div>

        <div className="border-t border-white/10 mt-16 pt-6 flex justify-between text-white/20 text-xs tracking-widest uppercase">
          <span>Recruiting für Steuerkanzleien</span>
          <span>Kanzleifreund</span>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Assemble complete page.tsx**

```typescript
// app/page.tsx
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { WhyFails } from '@/components/sections/WhyFails'
import { ThreePillars } from '@/components/sections/ThreePillars'
import { CareerPortal } from '@/components/sections/CareerPortal'
import { EmployerBranding } from '@/components/sections/EmployerBranding'
import { Campaigns } from '@/components/sections/Campaigns'
import { Pricing } from '@/components/sections/Pricing'
import { Process } from '@/components/sections/Process'
import { WhyUs } from '@/components/sections/WhyUs'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <WhyFails />
      <ThreePillars />
      <CareerPortal />
      <EmployerBranding />
      <Campaigns />
      <Pricing />
      <Process />
      <WhyUs />
      <FinalCTA />
    </main>
  )
}
```

- [ ] **Step 3: Add NEXT_PUBLIC_API_URL to .env.local**

```bash
echo "NEXT_PUBLIC_API_URL=http://localhost:3001" >> .env.local
echo ".env.local" >> .gitignore
```

- [ ] **Step 4: Verify full page renders at http://localhost:3000**

```bash
npm run dev
# Scroll through all 11 sections, check mobile at 375px
```

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: add FinalCTA section and assemble complete OnePager"
```

---

## Task 9: Railway API (Contact Form Backend)

**Files:**
- Create: `api/index.js`
- Create: `api/routes/contact.js`
- Create: `api/package.json`
- Create: `api/.env.example`
- Create: `api/.gitignore`

- [ ] **Step 1: Create api/package.json**

```json
{
  "name": "kanzleifreund-api",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.19.2"
  }
}
```

- [ ] **Step 2: Install dependencies**

```bash
cd api && npm install && cd ..
```

- [ ] **Step 3: Create api/routes/contact.js**

```javascript
// api/routes/contact.js
const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()

const LEADS_FILE = path.join(__dirname, '..', 'leads.json')

function readLeads() {
  if (!fs.existsSync(LEADS_FILE)) return []
  return JSON.parse(fs.readFileSync(LEADS_FILE, 'utf8'))
}

function writeLead(lead) {
  const leads = readLeads()
  leads.push(lead)
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2))
}

router.post('/', (req, res) => {
  const { name, kanzlei, telefon, email } = req.body

  if (!name || !kanzlei || !telefon || !email) {
    return res.status(400).json({ error: 'Alle Felder sind erforderlich.' })
  }

  const lead = {
    id: Date.now(),
    name,
    kanzlei,
    telefon,
    email,
    createdAt: new Date().toISOString(),
  }

  writeLead(lead)
  console.log('New lead:', lead)

  res.status(200).json({ success: true })
})

module.exports = router
```

- [ ] **Step 4: Create api/index.js**

```javascript
// api/index.js
const express = require('express')
const cors = require('cors')
const contactRoute = require('./routes/contact')

const app = express()
const PORT = process.env.PORT || 3001

const allowedOrigins = [
  'http://localhost:3000',
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
  process.env.FRONTEND_URL || null,
].filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true)
    callback(new Error('Not allowed by CORS'))
  },
}))

app.use(express.json())

app.get('/health', (req, res) => res.json({ status: 'ok' }))
app.use('/api/contact', contactRoute)

app.listen(PORT, () => console.log(`API running on port ${PORT}`))
```

- [ ] **Step 5: Create api/.env.example**

```bash
# api/.env.example
PORT=3001
FRONTEND_URL=https://your-vercel-url.vercel.app
```

- [ ] **Step 6: Create api/.gitignore**

```
node_modules/
leads.json
.env
```

- [ ] **Step 7: Test API locally**

```bash
cd api && npm start &
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","kanzlei":"Musterkanzlei","telefon":"0123456789","email":"test@test.de"}'
# Expected: {"success":true}
```

- [ ] **Step 8: Commit**

```bash
git add api/
git commit -m "feat: add Railway API for contact form lead capture"
```

---

## Task 10: Vercel + Railway Deployment

**Files:**
- Create: `.env.local` (local only, not committed)

- [ ] **Step 1: Push all to GitHub**

```bash
git push origin main
```

- [ ] **Step 2: Connect repo to Vercel**

```bash
npx vercel --yes
# Follow prompts: link to reinkobercom account, project name kanzleifreund-recruiting
# Framework: Next.js (auto-detected)
```

- [ ] **Step 3: Deploy Railway API**

Go to railway.app → New Project → Deploy from GitHub repo → select `reinkobercom/kanzleifreund-recruiting` → set Root Directory to `api` → set Start Command to `npm start`

Add env var in Railway dashboard:
```
FRONTEND_URL=https://<your-vercel-preview-url>.vercel.app
```

- [ ] **Step 4: Get Railway public URL**

In Railway dashboard: Settings → Networking → Generate Domain
Copy the URL (e.g. `https://kanzleifreund-api-production.up.railway.app`)

- [ ] **Step 5: Set Vercel env var**

```bash
npx vercel env add NEXT_PUBLIC_API_URL production
# Value: https://kanzleifreund-api-production.up.railway.app
npx vercel env add NEXT_PUBLIC_API_URL preview
# Same value
```

- [ ] **Step 6: Redeploy Vercel with env var**

```bash
npx vercel --prod
```

- [ ] **Step 7: Test contact form on live URL**

Open Vercel preview URL → scroll to bottom → fill form → submit → check Railway logs for "New lead:" output

- [ ] **Step 8: Final commit**

```bash
git add .
git commit -m "chore: deployment config and env setup"
git push origin main
```
