import { SectionLabel } from '@/components/ui/SectionLabel'

const steps = [
  { num: '01', title: 'Erstgespräch · kostenlos, 30 Minuten', text: 'Wir verstehen Ihre Kanzlei: offene Stellen, Kultur, Argumente. Am Ende wissen Sie, ob wir passen.' },
  { num: '02', title: 'Konzeptphase', text: 'Konkreter Vorschlag innerhalb einer Woche: Karriereportal-Aufbau, Branding-Bausteine, Kampagnen-Setup.' },
  { num: '03', title: 'Aufbau Karriereportal · 2 – 3 Wochen', text: 'Design, Inhalte, Stellenausschreibungen, Bewerber-Workflow. Preview-Zugang vor Go-live.' },
  { num: '04', title: 'Employer Branding · optional', text: 'Drehtag parallel zum Portal-Aufbau oder zeitversetzt — ein Tag vor Ort.' },
  { num: '05', title: 'Kampagnen-Launch', text: 'Pro Stelle: 4-Wochen-Kampagne. Daten sichtbar ab Tag 1.' },
  { num: '06', title: 'Laufende Betreuung', text: 'Fester Ansprechpartner. Klare Reportings. Keine versteckten Kosten.' },
]

export function Process() {
  return (
    <section className="bg-offwhite px-6 md:px-20 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Kapitel 05" />
        <h2 className="font-serif text-3xl md:text-5xl text-navy mb-3">
          Vom ersten Gespräch zur ersten Einstellung.
        </h2>
        <div className="w-12 h-[2px] bg-gold mb-3" />
        <p className="text-navy/50 text-sm mb-12">Sechs Schritte. Drei bis fünf Wochen vom Start bis zur laufenden Kampagne.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {steps.map((s, i) => (
            <div key={s.num} className={`flex gap-6 py-6 ${i < steps.length - 1 || steps.length % 2 === 0 ? 'border-b border-navy/8' : ''}`}>
              <span className="font-serif italic text-gold text-2xl w-8 shrink-0 mt-0.5">{s.num}</span>
              <div>
                <h3 className="font-serif text-base text-navy mb-1">{s.title}</h3>
                <p className="text-navy/50 text-sm leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
