import { SectionLabel } from '@/components/ui/SectionLabel'

const channels = [
  { kanal: 'Stellenportale', sub: 'StepStone, Indeed, Xing', was: 'Erreichen ~5 % aktiv Suchende. Bewerbungen selten passend.', kosten: '300 – 1.500 € / Anzeige · ohne Garantie' },
  { kanal: 'Headhunter', sub: 'Klassische Personalvermittlung', was: 'Lange Vorlaufzeiten, oft nicht branchenspezifisch vorqualifiziert.', kosten: '25 – 30 % Jahresgehalt · 12.000 – 18.000 €' },
  { kanal: 'Eigene Karriereseite', sub: 'Falls vorhanden', was: 'Textlastige Stellenanzeigen. Bewerber verlassen sie in 20 Sekunden.', kosten: 'Keine direkten Kosten — aber kostet jede Bewerbung, die nicht kommt' },
  { kanal: 'Social Media', sub: 'Instagram, Facebook, LinkedIn', was: 'Ohne Strategie und Targeting verbrennt Budget ohne Ergebnis.', kosten: 'Variable Budgets · meist unter 1 % Conversion' },
]

export function WhyFails() {
  return (
    <section className="bg-white px-6 md:px-20 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Kapitel 02" />
        <h2 className="font-serif text-3xl md:text-5xl text-navy mb-3">
          Es liegt nicht an Ihnen.<br />Es liegt am Kanal.
        </h2>
        <div className="w-12 h-[2px] bg-gold mb-10" />

        <div className="overflow-x-auto mb-12">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-navy/10">
                <th className="text-left text-[10px] tracking-[0.2em] uppercase text-navy/40 py-3 pr-8 font-normal">Kanal</th>
                <th className="text-left text-[10px] tracking-[0.2em] uppercase text-navy/40 py-3 pr-8 font-normal">Was passiert</th>
                <th className="text-left text-[10px] tracking-[0.2em] uppercase text-navy/40 py-3 font-normal">Was es kostet</th>
              </tr>
            </thead>
            <tbody>
              {channels.map((c, i) => (
                <tr key={i} className="border-b border-navy/5">
                  <td className="py-5 pr-8 align-top w-[28%]">
                    <p className="font-sans font-semibold text-navy text-sm">{c.kanal}</p>
                    <p className="text-navy/35 text-xs mt-0.5">{c.sub}</p>
                  </td>
                  <td className="py-5 pr-8 align-top text-navy/55 text-sm leading-relaxed w-[40%]">{c.was}</td>
                  <td className="py-5 align-top text-navy/55 text-sm leading-relaxed">{c.kosten}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-l-4 border-gold pl-6 py-2">
          <p className="font-serif text-xl md:text-2xl text-navy leading-snug">
            70 % der qualifizierten Steuerfachkräfte sind{' '}
            <em className="text-gold">wechselbereit, aber nicht aktiv auf Suche.</em>{' '}
            Sie zu erreichen ist keine Frage des Budgets — es ist eine Frage des richtigen Systems.
          </p>
        </div>
      </div>
    </section>
  )
}
