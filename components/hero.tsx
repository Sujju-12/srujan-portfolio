import { ArrowDown, Download } from 'lucide-react'
import { profile, stats } from '@/lib/data'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center md:pt-28">
      <p className="text-sm font-medium text-primary">
        {'AWS · Kubernetes · Terraform · CI/CD · Agentic AI'}
      </p>
      <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
        {profile.name}.
        <span className="block text-muted-foreground">Infrastructure that ships itself.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
        DevOps Engineer with 3.6 years building production-grade AWS platforms, zero-downtime
        Kubernetes delivery and secure, cost-aware cloud — now applying RAG and Agentic AI to
        infrastructure operations.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={profile.resume}
          download
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download className="size-4" aria-hidden="true" />
          Download resume
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          <LinkedinIcon className="size-4" />
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          <GithubIcon className="size-4" />
          GitHub
        </a>
      </div>

      <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-y-10 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse gap-1 px-2">
            <dt className="text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="text-4xl font-semibold tracking-tight">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <a
        href="#experience"
        className="mt-16 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        Explore my work
        <ArrowDown className="size-4" aria-hidden="true" />
      </a>
    </section>
  )
}
