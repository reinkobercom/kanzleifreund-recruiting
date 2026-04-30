import { SectionLabel } from '@/components/ui/SectionLabel'
import { StatBadge } from '@/components/ui/StatBadge'

export function FinalCTA() {
  return (
    <section className="bg-navy px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Bereit, das Problem zu lösen?" />
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
          Lassen Sie uns ein 30-minütiges Gespräch{' '}
          <em className="text-gold">führen.</em>
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mb-12">
          Am Ende des Gesprächs wissen Sie, ob unsere Lösung für Ihre Kanzlei passt —
          und welche Säulen für Sie zuerst sinnvoll sind. Unverbindlich, kostenlos, ohne Verkaufsdruck.
        </p>

        <a
          href="tel:+49PLACEHOLDER"
          className="inline-block bg-gold text-white font-sans font-semibold text-lg px-10 py-4 rounded hover:bg-gold/90 transition-colors"
        >
          Jetzt anrufen
        </a>

        <div className="border-t border-white/20 pt-10 mt-16">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <StatBadge value="98 %" label="Besetzungsquote" />
            <StatBadge value="170+" label="Betreute Kanzleien" />
            <StatBadge value="Ø 28" label="Tage bis zur Besetzung" />
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-6 flex justify-between text-white/20 text-xs tracking-widest uppercase">
          <span>Recruiting für Steuerkanzleien</span>
          <span>Kanzleifreund</span>
        </div>
      </div>
    </section>
  )
}
