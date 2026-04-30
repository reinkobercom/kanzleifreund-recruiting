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
    text: "Sie bekommen einen festen Ansprechpartner mit Direktnummer. Keine Ticketsysteme, keine Hotlines, keine wechselnden Account-Manager. Bei einer Frage rufen Sie an. Das war's.",
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
