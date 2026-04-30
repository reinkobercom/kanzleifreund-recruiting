import { SectionLabel } from '@/components/ui/SectionLabel'

const steps = [
  { num: 'i.', title: 'Briefing & Setup', text: 'Zielgruppe, Region, Argumente. Werbemittel: Bild, Video, Text. Kanal- und Targeting-Auswahl.', period: 'Woche 1' },
  { num: 'ii.', title: 'Ausspielung & Optimierung', text: 'Laufende Optimierung von Bilder, Texten und Targeting. Sie sehen jederzeit die Daten.', period: 'Woche 2 – 4' },
  { num: 'iii.', title: 'Bewerber-Vorqualifizierung', text: 'Nur fachlich und kulturell passende Kandidaten. Kein Wühlen durch Massenbewerbungen.', period: 'Laufend' },
]

export function Campaigns() {
  return (
    <section className="bg-white px-6 md:px-20 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Säule 03 · Recruiting-Kampagnen" />
        <h2 className="font-serif text-3xl md:text-5xl text-navy mb-3">
          Da, wo die Fachkräfte sind.<br />
          <span className="text-navy/50">Nicht da, wo sie suchen.</span>
        </h2>
        <div className="w-12 h-[2px] bg-gold mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-navy/40 text-xs tracking-[0.15em] uppercase mb-6">Wie eine Kampagne abläuft</p>
            {steps.map((s, i) => (
              <div key={s.num} className={`flex gap-5 py-5 ${i < steps.length - 1 ? 'border-b border-navy/8' : ''}`}>
                <span className="font-serif italic text-gold text-xl w-7 shrink-0 mt-0.5">{s.num}</span>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-serif text-base text-navy">{s.title}</h3>
                    <span className="text-[10px] text-navy/30 italic">· {s.period}</span>
                  </div>
                  <p className="text-navy/50 text-sm leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-navy rounded-sm p-8 flex-1">
              <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-3">Ergebnis pro Kampagne</p>
              <p className="font-serif text-[5rem] leading-none text-white mb-3">8–15</p>
              <p className="text-white/55 text-sm leading-relaxed">
                qualifizierte Bewerbungen pro Stelle · 4 Wochen Laufzeit
              </p>
            </div>
            <div className="bg-offwhite rounded-sm p-8 flex-1">
              <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-3">Unsere Bilanz</p>
              <p className="font-serif text-[5rem] leading-none text-navy mb-3">98 %</p>
              <p className="text-navy/55 text-sm leading-relaxed">
                Besetzungsquote · <strong className="text-navy">170+</strong> betreute Steuerkanzleien
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
