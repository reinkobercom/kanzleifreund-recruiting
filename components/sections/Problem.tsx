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
