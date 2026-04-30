import { SectionLabel } from '@/components/ui/SectionLabel'
import { StatBadge } from '@/components/ui/StatBadge'

export function FinalCTA() {
  return (
    <section className="bg-navy px-6 md:px-20 py-24">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Bereit, das Problem zu lösen?" />
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.08] mb-6">
          Lassen Sie uns ein<br />
          30-minütiges Gespräch{' '}
          <em className="text-gold">führen.</em>
        </h2>
        <p className="text-white/50 text-base max-w-xl mb-12 leading-relaxed">
          Am Ende wissen Sie, ob unsere Lösung passt und welche Säulen zuerst sinnvoll sind.
          Unverbindlich, kostenlos, ohne Verkaufsdruck.
        </p>

        <a
          href="tel:+49PLACEHOLDER"
          className="inline-flex items-center gap-3 bg-gold text-white font-sans font-semibold text-lg px-10 py-5 rounded hover:bg-amber-600 transition-colors mb-20"
        >
          Jetzt anrufen
        </a>

        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-wrap gap-10 md:gap-20">
            <StatBadge value="98 %" label="Besetzungsquote" />
            <StatBadge value="170+" label="Betreute Kanzleien" />
            <StatBadge value="Ø 28" label="Tage bis zur Besetzung" />
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-6 flex justify-between text-white/20 text-[10px] tracking-[0.2em] uppercase">
          <span>Recruiting für Steuerkanzleien</span>
          <span>Kanzleifreund</span>
        </div>
      </div>
    </section>
  )
}
