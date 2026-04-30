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
