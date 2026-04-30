import { SectionLabel } from '@/components/ui/SectionLabel'

const items = [
  {
    num: '01',
    title: 'Mitarbeiter-Interviews',
    text: 'Authentische Stimmen statt Marketing-Phrasen. 3 – 5 Mitarbeiter erzählen vor der Kamera, warum sie bei Ihnen arbeiten — ehrlich, professionell produziert.',
    einsatz: 'Karriereseite · Social-Media-Kampagnen · Bewerbungsgespräche',
  },
  {
    num: '02',
    title: 'Imagefilm',
    text: 'Professioneller Kurzfilm (60 – 90 Sek.) — Räume, Menschen, Atmosphäre, Arbeitsalltag. Drehbuch, Drehtag, Schnitt, Tonbearbeitung.',
    einsatz: 'Hero-Element Karriereseite · Social-Ads · Messen · Onboarding',
  },
  {
    num: '03',
    title: 'Fotoreportage',
    text: '50 – 80 finale Bilder in unbegrenzter Nutzungslizenz. Kanzlei, Team, Arbeitsalltag — ein Fotoshooting-Tag vor Ort.',
    einsatz: 'Karriereseite · Stellenanzeigen · Social Media · Presse',
  },
]

export function EmployerBranding() {
  return (
    <section className="bg-offwhite px-6 md:px-20 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Säule 02 · Employer Branding" />
        <h2 className="font-serif text-3xl md:text-5xl text-navy mb-3">
          Wer Sie sind, sieht man —<br />wenn man es zeigt.
        </h2>
        <div className="w-12 h-[2px] bg-gold mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {items.map(item => (
            <div key={item.num} className="bg-white p-7 rounded-sm">
              <p className="font-serif text-[3.5rem] leading-none text-navy/8 mb-4 select-none">{item.num}</p>
              <h3 className="font-serif text-lg text-navy mb-3 leading-snug">{item.title}</h3>
              <p className="text-navy/50 text-sm leading-relaxed mb-4">{item.text}</p>
              <div className="pt-3 border-t border-navy/8">
                <p className="text-[10px] text-navy/35 leading-relaxed">{item.einsatz}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-navy rounded-sm p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-2">Komplettes Branding-Paket · Einmalig</p>
            <p className="text-white/70 text-sm max-w-md">
              Vor-Ort-Drehtag: Imagefilm, Fotoreportage, 3 – 5 Mitarbeiterinterviews — produziert, geschnitten, einsatzbereit.
            </p>
          </div>
          <div className="shrink-0">
            <p className="font-serif text-5xl text-gold leading-none">5.000 €</p>
            <p className="text-white/35 text-xs mt-1">einmalig · zzgl. MwSt.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
