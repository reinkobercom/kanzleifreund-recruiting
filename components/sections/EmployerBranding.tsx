import { SectionLabel } from '@/components/ui/SectionLabel'

const items = [
  {
    num: '01',
    title: 'Mitarbeiter-Interviews',
    text: 'Authentische Stimmen statt Marketing-Phrasen. Drei bis fünf Mitarbeiterinnen und Mitarbeiter erzählen vor der Kamera, warum sie bei Ihnen arbeiten — ungeschnitten ehrlich, professionell produziert.',
    einsatz: 'Karriereseite, Social-Media-Kampagnen, Bewerbungsgespräche, Mandantenkommunikation.',
  },
  {
    num: '02',
    title: 'Imagefilm',
    text: 'Ein professionell produzierter Kurzfilm (60 – 90 Sekunden), der Ihre Kanzlei in Bewegung zeigt: Räume, Menschen, Atmosphäre, Arbeitsalltag. Mit Drehbuch, Drehtag, Schnitt und Tonbearbeitung.',
    einsatz: 'Hero-Element auf der Karriereseite, Social-Ads, Messen, Onboarding neuer Mitarbeiter.',
  },
  {
    num: '03',
    title: 'Fotoreportage',
    text: 'Hochwertige Fotos Ihrer Kanzlei, des Teams und des Arbeitsalltags durch einen professionellen Fotografen vor Ort. Ein Fotoshooting-Tag, zwischen 50 und 80 finale Bilder in unbegrenzter Nutzungslizenz.',
    einsatz: 'Karriereseite, Stellenanzeigen, Social Media, Pressearbeit, Mandanten-Newsletter.',
  },
]

export function EmployerBranding() {
  return (
    <section className="bg-offwhite px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Säule 02 · Employer Branding" />
        <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
          Wer Sie sind, sieht man —<br />wenn man es zeigt.
        </h2>
        <div className="w-full h-px bg-navy/20 mb-8" />
        <p className="text-navy text-lg font-medium max-w-3xl mb-12">
          Die meisten Steuerkanzleien sehen für Außenstehende identisch aus. Auf Stellenportalen,
          in Anzeigen, auf der Homepage. Dabei ist genau das Gegenteil wahr: jede Kanzlei hat eine
          eigene Kultur, ein eigenes Team, eigene Stärken. Unsere Aufgabe ist, das sichtbar zu machen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {items.map(item => (
            <div key={item.num} className="bg-white p-6 rounded border border-navy/10">
              <p className="font-serif text-5xl text-navy/20 mb-4">{item.num}</p>
              <h3 className="font-serif text-xl text-navy mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.text}</p>
              <div className="border-t border-navy/10 pt-3">
                <p className="text-xs text-gray-400">
                  <span className="font-semibold text-navy">Einsatz:</span> {item.einsatz}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-navy rounded p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-2">Komplettes Branding-Paket · Einmalig</p>
            <p className="text-white text-base leading-relaxed max-w-xl">
              Vor-Ort-Drehtag in Ihrer Kanzlei: Imagefilm, Fotoreportage, drei bis fünf
              Mitarbeiterinterviews — produziert, geschnitten, einsatzbereit.
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="font-serif text-5xl text-gold">5.000 €</p>
            <p className="text-white/50 text-sm">einmalig · zzgl. MwSt.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
