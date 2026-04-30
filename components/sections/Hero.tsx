import { StatBadge } from '@/components/ui/StatBadge'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Hero() {
  return (
    <section className="relative bg-navy min-h-screen flex flex-col justify-between px-6 md:px-16 py-16 overflow-hidden">
      <div className="absolute right-0 top-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/10 translate-x-1/3" />

      <div className="relative z-10 max-w-4xl">
        <SectionLabel text="Für Inhaber und Partner von Steuerkanzleien" />

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-8">
          Die Fachkraft, die Sie suchen,{' '}
          <em className="text-gold italic">sucht nicht</em>{' '}
          <span className="inline-block w-12 md:w-20 h-0.5 bg-gold align-middle mx-2" />
          <br />noch nicht.
        </h1>

        <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-12">
          Spezialisierte Personalgewinnung für Steuerkanzleien. Karriereportal, Employer Branding
          und gezielte Recruiting-Kampagnen — aus einer Hand, statt aus drei Agenturen.
        </p>

        <a
          href="tel:+49PLACEHOLDER"
          className="inline-block bg-gold text-white font-sans font-semibold text-lg px-10 py-4 rounded hover:bg-gold/90 transition-colors"
        >
          Jetzt anrufen
        </a>
      </div>

      <div className="relative z-10 border-t border-white/20 pt-8 mt-16">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          <StatBadge value="98 %" label="Besetzungsquote" />
          <StatBadge value="170+" label="Betreute Kanzleien" />
          <StatBadge value="Ø 28" label="Tage bis zur Besetzung" />
        </div>
      </div>

      <div className="relative z-10 flex justify-between items-center pt-8 text-white/30 text-xs tracking-widest uppercase">
        <span>Strategiepapier · 11 Seiten</span>
        <span>Kanzleifreund</span>
      </div>
    </section>
  )
}
