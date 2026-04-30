import { SectionLabel } from '@/components/ui/SectionLabel'

const channels = [
  {
    kanal: 'Stellenportale',
    sub: 'StepStone, Indeed, Xing',
    was: 'Erreichen die ca. 5 %, die aktiv suchen. Bewerbungen sind selten und passen oft nicht zum Profil.',
    kosten: '300 – 1.500 € pro Anzeige · ohne Erfolgsgarantie',
  },
  {
    kanal: 'Headhunter',
    sub: 'Klassische Personalvermittlung',
    was: 'Lange Vorlaufzeiten, Kandidaten oft nicht steuerspezifisch vorqualifiziert. Erfolg unsicher.',
    kosten: '25 – 30 % des Jahresgehalts · bei Steuerfachkraft 12.000 – 18.000 €',
  },
  {
    kanal: 'Eigene Karriereseite',
    sub: 'Falls vorhanden',
    was: 'Meist eine Unterseite mit textlastigen Stellenanzeigen. Bewerber verlassen sie in 20 Sekunden.',
    kosten: 'Keine direkten Kosten · aber kostet jede Bewerbung, die nicht ankommt',
  },
  {
    kanal: 'Social Media auf eigene Faust',
    sub: 'Instagram, Facebook, LinkedIn',
    was: 'Ohne Strategie, Targeting und kreatives Material verbrennt Werbebudget ohne Bewerbungsstrom.',
    kosten: 'Variable Mediabudgets · meist unter 1 % Conversion',
  },
]

export function WhyFails() {
  return (
    <section className="bg-white px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Kapitel 02" />
        <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
          Es liegt nicht an Ihnen.<br />Es liegt am Kanal.
        </h2>
        <div className="w-full h-px bg-navy/20 mb-8" />
        <p className="text-navy text-lg md:text-xl font-medium max-w-3xl mb-12">
          Die meisten Recruiting-Wege in der Steuerbranche zielen auf die kleine Minderheit,
          die <em>aktiv</em> sucht. Die eigentliche Zielgruppe — wechselbereite, aber nicht aktiv
          suchende Fachkräfte — bleibt unsichtbar.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b border-navy/20">
                <th className="text-left text-xs tracking-widest uppercase text-navy/50 py-3 pr-6">Kanal</th>
                <th className="text-left text-xs tracking-widest uppercase text-navy/50 py-3 pr-6">Was passiert</th>
                <th className="text-left text-xs tracking-widest uppercase text-navy/50 py-3">Was es kostet</th>
              </tr>
            </thead>
            <tbody>
              {channels.map((c, i) => (
                <tr key={i} className="border-b border-navy/10">
                  <td className="py-5 pr-6 align-top">
                    <p className="font-semibold text-navy">{c.kanal}</p>
                    <p className="text-xs text-gray-400">{c.sub}</p>
                  </td>
                  <td className="py-5 pr-6 align-top text-gray-500 text-sm leading-relaxed">{c.was}</td>
                  <td className="py-5 align-top text-gray-500 text-sm leading-relaxed">{c.kosten}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-b border-navy/20 py-8">
          <p className="font-serif text-2xl md:text-3xl text-navy leading-snug">
            70 % der qualifizierten Steuerfachkräfte sind{' '}
            <em className="text-gold">wechselbereit, aber nicht aktiv auf Suche.</em>{' '}
            Sie zu erreichen ist keine Frage des Budgets — es ist eine Frage des richtigen Systems.
          </p>
        </div>
      </div>
    </section>
  )
}
