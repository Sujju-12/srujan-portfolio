import { experience } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Built for production. Tuned for scale."
        description="From AWS support to enterprise logistics platforms — delivering reliable, secure and automated infrastructure."
      />
      <ol className="mt-14 flex flex-col gap-6">
        {experience.map((job) => (
          <li
            key={job.role + job.company}
            className="rounded-3xl border border-border bg-card p-6 md:p-10"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{job.role}</h3>
                <p className="mt-1 text-muted-foreground">
                  {job.company} <span aria-hidden="true">·</span> {job.client}
                </p>
              </div>
              <p className="shrink-0 font-mono text-sm text-muted-foreground">{job.period}</p>
            </div>
            <ul className="mt-6 grid gap-3 md:grid-cols-2 md:gap-x-10">
              {job.highlights.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
