import { SectionLabel } from '@/components/ui/SectionLabel'

export function Pricing() {
  return (
    <section className="bg-offwhite px-6 md:px-20 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Kapitel 04" />
        <h2 className="font-serif text-3xl md:text-5xl text-navy mb-3">Was kostet das?</h2>
        <div className="w-12 h-[2px] bg-gold mb-3" />
        <p className="text-navy/50 text-sm mb-12">Klare Pakete, klare Preise. Keine Erfolgshonorare. Alle Preise zzgl. MwSt.</p>

        {/* Karriereportal */}
        <div className="mb-10">
          <div className="flex items-baseline justify-between mb-4">
            <h3 className="font-serif text-2xl text-navy">Karriereportal</h3>
            <span className="text-sm text-navy/50">Setup einmalig <span className="text-gold font-semibold">1.000 €</span></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { label: 'Klein', price: '100', stellen: '1 – 2 aktive Stellen', features: 'Hosting · Pflege · Stellen-Updates', highlight: false },
              { label: 'Mittel', price: '150', stellen: '3 – 4 aktive Stellen', features: '+ Quartals-Review & priorisierte Anpassungen', highlight: true },
              { label: 'Groß', price: '250', stellen: 'ab 5 aktiven Stellen', features: '+ Mehrere Standorte · monatl. Reporting', highlight: false },
            ].map(p => (
              <div key={p.label} className={`p-6 rounded-sm ${p.highlight ? 'bg-navy' : 'bg-white border border-navy/8'}`}>
                <p className={`text-[10px] tracking-[0.2em] uppercase mb-3 ${p.highlight ? 'text-gold' : 'text-navy/40'}`}>{p.label}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`font-serif text-4xl ${p.highlight ? 'text-white' : 'text-navy'}`}>{p.price} €</span>
                  <span className={`text-xs ${p.highlight ? 'text-white/40' : 'text-navy/30'}`}>/ Monat</span>
                </div>
                <p className={`text-xs mb-4 ${p.highlight ? 'text-white/50' : 'text-navy/40'}`}>{p.stellen}</p>
                <div className={`border-t pt-3 ${p.highlight ? 'border-white/15' : 'border-navy/8'}`}>
                  <p className={`text-xs leading-relaxed ${p.highlight ? 'text-white/50' : 'text-navy/40'}`}>{p.features}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recruiting-Kampagne */}
        <div className="mb-10">
          <div className="flex items-baseline justify-between mb-4">
            <h3 className="font-serif text-2xl text-navy">Recruiting-Kampagne</h3>
            <span className="text-[10px] text-navy/40 tracking-wide">pro 4 Wochen · pausierbar · reaktivierbar</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            {[
              { label: 'Bis 2 Stellen', price: '1.000', features: 'Setup · Werbemittel · Ausspielung · Optimierung · Vorqualifizierung' },
              { label: 'Bis 4 Stellen', price: '1.500', features: 'Erweiterter Aufwand für mehrere parallele Kampagnen' },
              { label: 'Ab 5 Stellen', price: '2.000', features: 'Volumen-Recruiting für Kanzleigruppen & Standortketten' },
            ].map(p => (
              <div key={p.label} className="bg-white p-6 rounded-sm border border-navy/8">
                <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-3">{p.label}</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-serif text-4xl text-navy">{p.price} €</span>
                  <span className="text-xs text-navy/30">/ 4 Wo.</span>
                </div>
                <div className="border-t border-navy/8 pt-3">
                  <p className="text-xs text-navy/40 leading-relaxed">{p.features}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-navy/40 pl-1">+ Werbebudget ab <strong className="text-navy/60">1.400 €</strong> / 4-Wochen-Zyklus (50 €/Tag) — skaliert nach Stellen und Region.</p>
        </div>

        {/* Employer Branding + Vergleich */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-navy p-7 rounded-sm">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-3">Employer Branding · Einmalig</p>
            <p className="font-serif text-5xl text-gold mb-3">5.000 €</p>
            <p className="text-white/50 text-sm">Vor-Ort-Drehtag: Imagefilm, Fotoreportage, 3 – 5 Mitarbeiterinterviews.</p>
          </div>
          <div className="bg-white p-7 rounded-sm border border-navy/8">
            <p className="text-[10px] tracking-[0.2em] uppercase text-navy/40 mb-3">Vergleich Headhunter</p>
            <p className="font-serif text-2xl text-navy mb-3">12.000 – 18.000 €</p>
            <p className="text-navy/50 text-sm">25 – 30 % des Jahresgehalts — pro Steuerfachkraft. Bei mehreren Stellen pro Jahr fünfstelliger Unterschied.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
