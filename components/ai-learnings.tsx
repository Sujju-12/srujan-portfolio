import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { aiLearnings, handshake } from '@/lib/data'
import { learnings, formatDate } from '@/lib/learnings'
import { SectionHeading } from '@/components/section-heading'

export function AiLearnings() {
  const latest = learnings.slice(0, 3)

  return (
    <section id="ai" className="mx-auto max-w-5xl scroll-mt-12 px-6 py-24">
      <SectionHeading
        eyebrow="AI Learnings"
        title="Where DevOps meets intelligence."
        description="Learning MCP, RAG, Agentic AI and MLOps — and applying them in projects and my day-to-day work."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2">
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

      <article className="mt-4 flex flex-col gap-8 rounded-3xl bg-foreground p-8 text-background md:flex-row md:p-10">
        <div className="md:w-1/2">
          <span className="w-fit rounded-full bg-background/10 px-3 py-1 text-xs font-medium">Handshake AI</span>
          <h3 className="mt-5 text-balance text-2xl font-semibold tracking-tight">{handshake.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-background/70">{handshake.description}</p>
        </div>
        <ul className="flex flex-col justify-center gap-3 md:w-1/2">
          {handshake.points.map((point) => (
            <li key={point} className="flex gap-2.5 text-sm text-background/90">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </article>

      <div className="mt-20 flex items-end justify-between gap-4">
        <h3 className="text-2xl font-semibold tracking-tight">Latest notes</h3>
        <Link href="/learnings" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          View all
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-6 flex flex-col divide-y divide-border border-y border-border">
        {latest.map((post) => (
          <Link
            key={post.slug}
            href={`/learnings/${post.slug}`}
            className="group flex flex-col gap-1 py-5 md:flex-row md:items-center md:gap-6"
          >
            <span className="w-28 shrink-0 text-xs font-medium text-primary">{post.tag}</span>
            <span className="flex-1 font-medium tracking-tight group-hover:text-primary">{post.title}</span>
            <time dateTime={post.date} className="text-xs text-muted-foreground">
              {formatDate(post.date)}
            </time>
          </Link>
        ))}
      </div>
    </section>
  )
}
