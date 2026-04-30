import { SectionLabel } from '@/components/ui/SectionLabel'

export function Pricing() {
  return (
    <section className="bg-offwhite px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Kapitel 04" />
        <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">Was kostet das?</h2>
        <div className="w-full h-px bg-navy/20 mb-8" />
        <p className="text-gray-500 mb-12">
          Klare Pakete, klare Preise. Keine Vorabkosten, keine Erfolgshonorare in Höhe eines
          Jahresgehalts. Alle Preise zzgl. gesetzlicher MwSt.
        </p>

        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-serif text-2xl text-navy">Karriereportal</h3>
            <span className="text-navy text-sm">Setup einmalig <strong className="text-gold">1.000 €</strong></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Klein', price: '100 €', period: '/ Monat', stellen: '1 – 2 aktive Stellen', features: 'Hosting, Pflege, Stellen-Updates', highlight: false },
              { label: 'Mittel', price: '150 €', period: '/ Monat', stellen: '3 – 4 aktive Stellen', features: '+ Quartals-Review & priorisierte Anpassungen', highlight: true },
              { label: 'Groß', price: '250 €', period: '/ Monat', stellen: 'ab 5 aktiven Stellen', features: '+ Mehrere Standorte, monatl. Reporting', highlight: false },
            ].map(p => (
              <div key={p.label} className={`p-6 rounded border ${p.highlight ? 'bg-navy border-navy text-white' : 'bg-white border-navy/10'}`}>
                <p className={`text-xs tracking-widest uppercase mb-3 ${p.highlight ? 'text-gold' : 'text-navy/50'}`}>{p.label}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`font-serif text-4xl ${p.highlight ? 'text-white' : 'text-navy'}`}>{p.price}</span>
                  <span className={`text-sm ${p.highlight ? 'text-white/60' : 'text-gray-400'}`}>{p.period}</span>
                </div>
                <p className={`text-sm mb-3 ${p.highlight ? 'text-white/70' : 'text-gray-400'}`}>{p.stellen}</p>
                <div className={`border-t pt-3 ${p.highlight ? 'border-white/20' : 'border-navy/10'}`}>
                  <p className={`text-xs leading-relaxed ${p.highlight ? 'text-white/70' : 'text-gray-400'}`}>{p.features}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="flex justify-between items-baseline mb-4">
            <h3 className="font-serif text-2xl text-navy">Recruiting-Kampagne</h3>
            <span className="text-navy/50 text-xs">pro 4 Wochen · pausierbar · jederzeit reaktivierbar</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Bis 2 Stellen', price: '1.000 €', period: '/ 4 Wochen', sub: 'Agenturleistung', features: 'Setup, Werbemittel, Ausspielung, Optimierung, Bewerber-Vorqualifizierung' },
              { label: 'Bis 4 Stellen', price: '1.500 €', period: '/ 4 Wochen', sub: 'Agenturleistung', features: 'Erweiterter Aufwand für mehrere parallele Kampagnen' },
              { label: 'Ab 5 Stellen', price: '2.000 €', period: '/ 4 Wochen', sub: 'Agenturleistung', features: 'Volumen-Recruiting für Kanzleigruppen & Standortketten' },
            ].map(p => (
              <div key={p.label} className="bg-white p-6 rounded border border-navy/10">
                <p className="text-gold text-xs tracking-widest uppercase mb-3">{p.label}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-serif text-4xl text-navy">{p.price}</span>
                  <span className="text-sm text-gray-400">{p.period}</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">{p.sub}</p>
                <div className="border-t border-navy/10 pt-3">
                  <p className="text-xs text-gray-400 leading-relaxed">{p.features}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded border border-navy/10">
              <p className="text-xs tracking-widest uppercase text-navy/50 mb-2">+ Werbebudget</p>
              <p className="text-gray-600 text-sm">ab <strong>1.400 €</strong> pro 4-Wochen-Zyklus (50 €/Tag) — skaliert je nach Anzahl Stellen und Region.</p>
            </div>
            <div className="bg-white p-5 rounded border border-navy/10">
              <p className="text-xs tracking-widest uppercase text-navy/50 mb-2">Volle Flexibilität</p>
              <p className="text-gray-600 text-sm">Kampagne pausieren, sobald genug Bewerbungen da sind. Bei Bedarf jederzeit reaktivieren — das Karriereportal läuft weiter.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-navy p-6 rounded">
            <p className="text-gold text-xs tracking-widest uppercase mb-3">Employer Branding · Einmalig</p>
            <p className="font-serif text-5xl text-gold mb-3">5.000 €</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Vor-Ort-Drehtag: Imagefilm, Fotoreportage, drei bis fünf Mitarbeiterinterviews.
            </p>
          </div>
          <div className="bg-white p-6 rounded border border-navy/10">
            <p className="text-xs tracking-widest uppercase text-navy/50 mb-3">Vergleich</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Headhunter-Mandat: 25 – 30 % des Jahresgehalts — pro Steuerfachkraft{' '}
              <strong>12.000 – 18.000 €</strong>. Bei mehreren Stellen pro Jahr fünfstelliger Unterschied.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
