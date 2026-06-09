import { StatBadge } from '@/components/ui/StatBadge'

export function Hero() {
  return (
    <section className="relative bg-navy min-h-svh flex flex-col px-6 md:px-20 py-10 overflow-hidden">
      {/* Decorative circle — top right like PDF */}
      <div className="absolute right-[-6rem] top-[8%] w-[26rem] h-[26rem] rounded-full border border-white/10 pointer-events-none" />

      {/* Top bar — like PDF header */}
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center mb-16 relative z-10">
        <p className="text-white/65 text-[10px] tracking-[0.2em] uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
          Recruiting für Steuerkanzleien
        </p>
        <p className="text-white/45 text-[10px] tracking-[0.2em] uppercase">Vertraulich · 2026</p>
      </div>

      {/* Main content — grows to fill space */}
      <div className="max-w-5xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        <p className="text-gold text-[10px] tracking-[0.22em] uppercase mb-8">
          Für Inhaber und Partner von Steuerkanzleien
        </p>

        <h1 className="font-serif text-[2.6rem] md:text-[3.8rem] lg:text-[4.8rem] text-white leading-[1.1] tracking-tight mb-8">
          Die Fachkraft, die Sie suchen,<br />
          <em className="text-gold italic">sucht nicht</em>
          <span className="inline-block w-10 md:w-14 h-[2px] bg-gold align-middle mx-3 translate-y-[-4px]" />
          <br />
          noch nicht.
        </h1>

        <p className="text-white/75 text-base md:text-lg max-w-lg leading-relaxed">
          Spezialisierte Personalgewinnung für Steuerkanzleien.
          Karriereportal, Employer Branding und gezielte
          Recruiting-Kampagnen — aus einer Hand, statt aus drei Agenturen.
        </p>
      </div>

      {/* Stats bottom — separated by line like PDF */}
      <div className="max-w-5xl mx-auto w-full relative z-10 border-t border-white/15 pt-8 mt-16">
        <div className="flex flex-wrap gap-12 md:gap-20">
          <StatBadge value="98 %" label="Besetzungsquote" />
          <StatBadge value="170+" label="Betreute Kanzleien" />
          <StatBadge value="Ø 28" label="Tage bis zur Besetzung" />
        </div>
      </div>
    </section>
  )
}
