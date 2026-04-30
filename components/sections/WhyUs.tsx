import { SectionLabel } from '@/components/ui/SectionLabel'

const reasons = [
  {
    num: '01',
    title: 'Spezialisierung auf die Steuerbranche.',
    text: 'Wir kennen DATEV-Kompetenz, Homeoffice-Regelungen, Aufstiegspfade. Eine generische Agentur arbeitet mit Klempnern und Apothekern. Wir nicht.',
  },
  {
    num: '02',
    title: 'Aus einer Hand — nicht aus drei.',
    text: 'Karriereportal, Branding und Kampagnen: ein System, ein Vertrag, eine Ansprechperson.',
  },
  {
    num: '03',
    title: 'Klare Pakete, klare Preise.',
    text: 'Sie wissen vorab, was es kostet. Keine Erfolgshonorare. Keine versteckten Kosten.',
  },
  {
    num: '04',
    title: 'Persönliche Betreuung.',
    text: 'Fester Ansprechpartner mit Direktnummer. Keine Ticketsysteme, keine Hotlines.',
  },
]

export function WhyUs() {
  return (
    <section className="bg-white px-6 md:px-20 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Kapitel 06" />
        <h2 className="font-serif text-3xl md:text-5xl text-navy mb-3">
          Was uns von einer Standard-Agentur unterscheidet.
        </h2>
        <div className="w-12 h-[2px] bg-gold mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {reasons.map(r => (
            <div key={r.num} className="p-8 border border-navy/8 rounded-sm hover:border-gold/40 transition-colors">
              <p className="font-serif text-[3rem] leading-none text-navy/6 mb-4 select-none">{r.num}</p>
              <h3 className="font-serif text-lg text-navy mb-2 leading-snug">{r.title}</h3>
              <p className="text-navy/50 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-gold pl-6 py-1">
          <p className="font-serif text-xl md:text-2xl text-navy leading-snug">
            Recruiting in der Steuerbranche ist{' '}
            <em className="text-gold">kein Marketing-Thema</em> — es ist eine handwerkliche
            Disziplin, die nur funktioniert, wenn jemand Ihre Branche wirklich kennt.
          </p>
        </div>
      </div>
    </section>
  )
}
