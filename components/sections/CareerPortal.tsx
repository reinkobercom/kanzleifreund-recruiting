import { SectionLabel } from '@/components/ui/SectionLabel'

const features = [
  'Eigenständiges Design im Stil Ihrer Kanzlei',
  'Bewerbung in unter 60 Sekunden — ohne Lebenslauf, ohne Anschreiben',
  'Rubrik „Wofür wir stehen" — Werte, Benefits, Team',
  'Mobile First — 70 %+ der Bewerbungen kommen vom Smartphone',
  'DSGVO-konformer Bewerbungs-Workflow',
  'FAQs für die häufigsten Bewerberfragen',
  'Individuelle Subdomain inkl. Hosting',
]

export function CareerPortal() {
  return (
    <section className="bg-white px-6 md:px-20 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Säule 01 · Karriereportal" />
        <h2 className="font-serif text-3xl md:text-5xl text-navy mb-3">
          Ihre eigene Karriereseite.<br />
          <span className="text-navy/50">Nicht ein Profil auf einem Portal.</span>
        </h2>
        <div className="w-12 h-[2px] bg-gold mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-5">
            <p className="text-navy text-base leading-relaxed font-medium">
              Bewerber entscheiden in unter 30 Sekunden ob sich eine Stelle lohnt. In dieser Zeit muss klar werden: Was bieten Sie? Wer sind Sie?
            </p>
            <p className="text-navy/55 text-sm leading-relaxed">
              Wir bauen ein eigenständiges Karriereportal — vollständig auf das Erscheinungsbild Ihrer Kanzlei abgestimmt, mobiloptimiert, Bewerbung in einem Klick.
            </p>
            <p className="text-navy/55 text-sm leading-relaxed">
              Laufende Pflege, Hosting und Anpassungen über einen monatlichen Service-Retainer — Sie müssen sich um nichts kümmern.
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-navy/40 mb-5">Was enthalten ist</p>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold text-sm mt-0.5 shrink-0 font-bold">—</span>
                  <span className="text-navy/65 text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-navy/8 rounded-sm overflow-hidden">
          {[
            { label: 'Setup', text: 'Einmalige Einrichtung in 2 – 3 Wochen ab Briefing.' },
            { label: 'Laufender Betrieb', text: 'Hosting, Pflege, Updates — alles im Retainer.' },
            { label: 'Skalierbar', text: 'Von 1 Stelle bis 10+ Ausschreibungen an mehreren Standorten.' },
          ].map((b, i) => (
            <div key={b.label} className={`p-6 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-navy/8' : ''}`}>
              <p className="text-[10px] tracking-[0.2em] uppercase text-navy/40 mb-2">{b.label}</p>
              <p className="text-navy/65 text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
