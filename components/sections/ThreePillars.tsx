import { SectionLabel } from '@/components/ui/SectionLabel'

const pillars = [
  {
    num: 'i.',
    title: 'Ein eigenes Karriereportal.',
    text: 'Eine eigenständige, professionell gestaltete Bewerber-Plattform unter Ihrer Domain. Stellenausschreibungen, die nicht wie Stellenausschreibungen aussehen. Bewerbung in unter 60 Sekunden — ohne Anschreiben, ohne Lebenslauf, bequem vom Smartphone.',
  },
  {
    num: 'ii.',
    title: 'Authentisches Employer Branding.',
    text: 'Mitarbeiterinterviews, professioneller Imagefilm und eine Fotoreportage, die Ihre Kanzlei so zeigen, wie sie wirklich ist. Nicht Stockfotos. Nicht Floskeln. Sondern echte Stimmen, echte Räume, echte Kultur — das, was eine Bewerbung am Ende auslöst.',
  },
  {
    num: 'iii.',
    title: 'Gezielte Recruiting-Kampagnen.',
    text: 'Vier-Wochen-Kampagnen pro offener Stelle, ausgespielt auf Instagram, Facebook und LinkedIn. Direkte Ansprache passiver Kandidaten dort, wo sie täglich Zeit verbringen — mit Botschaften, die für Steuerfachkräfte konzipiert sind, nicht für irgendeine Branche.',
  },
]

export function ThreePillars() {
  return (
    <section className="bg-offwhite px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Kapitel 03" />
        <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
          Drei Säulen.<br />Ein System.
        </h2>
        <div className="w-full h-px bg-navy/20 mb-8" />
        <p className="text-navy text-lg md:text-xl font-medium max-w-3xl mb-12">
          Wer in der Steuerbranche zuverlässig Fachkräfte gewinnen will, braucht drei
          Dinge gleichzeitig — und keine davon allein.
        </p>

        <div className="flex flex-col gap-6 mb-10">
          {pillars.map(p => (
            <div key={p.num} className="border-l-4 border-gold pl-6 py-2">
              <p className="font-serif italic text-gold text-lg mb-1">Säule {p.num}</p>
              <h3 className="font-serif text-2xl text-navy mb-3">{p.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-3xl">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-400 border-t border-navy/10 pt-6">
          Sie buchen die Säulen einzeln oder im Verbund. Wir empfehlen mindestens Säule i und iii
          gemeinsam — ein Karriereportal ohne Traffic bringt keine Bewerbungen, eine Kampagne ohne
          Landingpage verbrennt Budget.
        </p>
      </div>
    </section>
  )
}
