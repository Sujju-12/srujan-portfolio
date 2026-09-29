export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
