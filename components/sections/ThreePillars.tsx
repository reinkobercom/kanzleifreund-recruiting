import { SectionLabel } from '@/components/ui/SectionLabel'

const pillars = [
  {
    num: 'i.',
    title: 'Ein eigenes Karriereportal.',
    text: 'Eine eigenständige Bewerber-Plattform unter Ihrer Domain. Bewerbung in unter 60 Sekunden — ohne Anschreiben, ohne Lebenslauf, bequem vom Smartphone.',
  },
  {
    num: 'ii.',
    title: 'Authentisches Employer Branding.',
    text: 'Mitarbeiterinterviews, Imagefilm und Fotoreportage — echte Stimmen, echte Räume, echte Kultur. Das, was eine Bewerbung am Ende auslöst.',
  },
  {
    num: 'iii.',
    title: 'Gezielte Recruiting-Kampagnen.',
    text: 'Vier-Wochen-Kampagnen auf Instagram, Facebook und LinkedIn. Direkte Ansprache passiver Kandidaten — mit Botschaften, die für Steuerfachkräfte konzipiert sind.',
  },
]

export function ThreePillars() {
  return (
    <section className="bg-offwhite px-6 md:px-20 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Kapitel 03" />
        <h2 className="font-serif text-3xl md:text-5xl text-navy mb-3">
          Drei Säulen. Ein System.
        </h2>
        <div className="w-12 h-[2px] bg-gold mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {pillars.map(p => (
            <div key={p.num} className="bg-white p-8 rounded-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
              <p className="font-serif italic text-gold text-2xl mb-4 pl-4">Säule {p.num}</p>
              <h3 className="font-serif text-xl text-navy mb-3 pl-4 leading-snug">{p.title}</h3>
              <p className="text-navy/50 text-sm leading-relaxed pl-4">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="text-navy/40 text-xs leading-relaxed border-t border-navy/10 pt-5">
          Einzeln buchbar oder im Verbund. Empfehlung: mindestens Säule i + iii — ein Portal ohne Traffic bringt keine Bewerbungen, eine Kampagne ohne Landingpage verbrennt Budget.
        </p>
      </div>
    </section>
  )
}
