import { Check } from 'lucide-react'
import { aiLearnings } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function AiLearnings() {
  return (
    <section id="ai" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading
        eyebrow="AI Learnings"
        title="Where DevOps meets intelligence."
        description="Exploring how RAG and Agentic AI can make infrastructure self-diagnosing — and helping train the models that will run it."
      />
      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {aiLearnings.map((item) => (
          <article
            key={item.tag}
            className="flex flex-col rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-xl hover:shadow-foreground/5"
          >
            <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              {item.tag}
            </span>
            <h3 className="mt-5 text-xl font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            <ul className="mt-6 flex flex-col gap-2.5 border-t border-border pt-6">
              {item.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm text-foreground/80">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
