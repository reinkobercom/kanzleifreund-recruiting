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
