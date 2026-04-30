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
