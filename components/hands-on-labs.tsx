import { FlaskConical } from 'lucide-react'
import { labPlatforms, labPrinciples } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function HandsOnLabs() {
  return (
    <section id="labs" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Practice sessions"
          title="Learning by doing, every day."
          description="I pick up new tools by applying them in hands-on labs and real enterprise-level sandbox environments, then bring what works into production."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {labPlatforms.map((lab) => (
            <article key={lab.name} className="flex flex-col rounded-3xl bg-secondary p-7">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-card">
                  <FlaskConical className="size-5 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{lab.name}</h3>
                  <p className="text-xs text-muted-foreground">{lab.focus}</p>
                </div>
              </div>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                {lab.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${lab.name} topics`}>
                {lab.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full bg-card px-3 py-1 text-xs text-secondary-foreground"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <ol className="mt-10 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
          {labPrinciples.map((p, i) => (
            <li key={p.title}>
              <p className="font-mono text-xs text-primary">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
