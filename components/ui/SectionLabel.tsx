interface SectionLabelProps {
  text: string
}

export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <p className="text-xs tracking-[0.2em] uppercase mb-4 text-gold">
      {text}
    </p>
  )
}
