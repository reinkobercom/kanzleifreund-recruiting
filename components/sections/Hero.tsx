import { SectionLabel } from '@/components/ui/SectionLabel'
import { StatBadge } from '@/components/ui/StatBadge'

export function Hero() {
  return (
    <section className="relative bg-navy min-h-svh flex flex-col justify-between px-6 md:px-20 py-14 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute right-[-8rem] top-[10%] w-[28rem] h-[28rem] rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute right-[-4rem] top-[20%] w-[18rem] h-[18rem] rounded-full border border-white/5 pointer-events-none" />

      {/* Top label */}
      <div>
        <SectionLabel text="Für Inhaber und Partner von Steuerkanzleien" />
      </div>

      {/* Main headline */}
      <div className="relative z-10 max-w-4xl mt-8">
        <h1 className="font-serif text-[2.75rem] md:text-[4.5rem] lg:text-[5.5rem] text-white leading-[1.08] tracking-tight mb-8">
          Die Fachkraft,<br />
          die Sie suchen,<br />
          <em className="text-gold not-italic italic">sucht nicht</em>
          <span className="inline-block w-10 md:w-16 h-[2px] bg-gold align-middle mx-3 mb-2" />
          <br className="hidden md:block" />
          noch nicht.
        </h1>

        <p className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed mb-10">
          Spezialisierte Personalgewinnung für Steuerkanzleien. Karriereportal,
          Employer Branding und Recruiting-Kampagnen — aus einer Hand.
        </p>

        <a
          href="tel:+49PLACEHOLDER"
          className="inline-flex items-center gap-2 bg-gold text-white font-sans font-semibold text-base px-8 py-4 rounded hover:bg-amber-600 transition-colors"
        >
          Jetzt anrufen
        </a>
      </div>

      {/* Stats */}
      <div className="relative z-10 border-t border-white/15 pt-8 mt-16">
        <div className="flex flex-wrap gap-10 md:gap-20">
          <StatBadge value="98 %" label="Besetzungsquote" />
          <StatBadge value="170+" label="Betreute Kanzleien" />
          <StatBadge value="Ø 28" label="Tage bis zur Besetzung" />
        </div>
      </div>
    </section>
  )
}
