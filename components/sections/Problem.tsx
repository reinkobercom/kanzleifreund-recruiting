import { SectionLabel } from '@/components/ui/SectionLabel'

const observations = [
  {
    num: '01',
    title: 'Mandate, die Sie ablehnen müssen.',
    text: 'Während die Arbeit sich stapelt, fehlen die Hände. Jedes abgelehnte Mandat ist ein Mandant, der zur Konkurrenz geht — und dort bleibt.',
  },
  {
    num: '02',
    title: 'Stellenanzeigen, die nicht greifen.',
    text: 'Die Ausschreibung läuft seit Wochen. Die wenigen Bewerbungen passen nicht. Dabei ist die richtige Person da draußen — sie schaut nur nicht in Stellenportale.',
  },
  {
    num: '03',
    title: 'Ein Team, das die Lücke trägt.',
    text: 'Ihre besten Mitarbeiter kompensieren unbesetzte Stellen mit Überstunden. Solange das funktioniert, merkt es niemand. Bis es nicht mehr funktioniert.',
  },
]

export function Problem() {
  return (
    <section className="bg-offwhite px-6 md:px-20 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Kapitel 01" />
        <h2 className="font-serif text-3xl md:text-5xl text-navy mb-3">
          Sie kennen das wahrscheinlich.
        </h2>
        <div className="w-12 h-[2px] bg-gold mb-8" />
        <p className="text-navy/70 text-lg max-w-2xl mb-12">
          In den meisten Steuerkanzleien Deutschlands läuft gerade dasselbe Bild ab.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {observations.map(o => (
            <div key={o.num} className="bg-white p-7 rounded-sm border-t-2 border-gold">
              <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-sans mb-3">Beobachtung {o.num}</p>
              <h3 className="font-serif text-lg text-navy mb-3 leading-snug">{o.title}</h3>
              <p className="text-navy/50 text-sm leading-relaxed">{o.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-navy rounded-sm p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <span className="font-serif text-[5rem] md:text-[6rem] leading-none text-gold shrink-0">60 %</span>
          <div className="h-px md:h-16 w-full md:w-px bg-white/20 shrink-0" />
          <div>
            <p className="text-gold text-[10px] tracking-[0.2em] uppercase mb-2">Ausgangslage</p>
            <p className="text-white/80 text-sm leading-relaxed">
              der offenen Stellen in deutschen Steuerkanzleien bleiben länger als drei Monate unbesetzt.
              72 % aller Kanzleien geben an, derzeit keine passenden Mitarbeiter zu finden.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
