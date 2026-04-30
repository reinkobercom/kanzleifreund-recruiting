interface StatBadgeProps {
  value: string
  label: string
}

export function StatBadge({ value, label }: StatBadgeProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-serif text-4xl md:text-5xl text-gold">{value}</span>
      <span className="text-xs tracking-widest uppercase text-white/70">{label}</span>
    </div>
  )
}
