import { ArrowDown, Download } from 'lucide-react'
import { profile, stats } from '@/lib/data'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const terminalLines = [
  { prompt: true, text: 'kubectl get deployments -n production' },
  { prompt: false, text: 'NAME            READY   UP-TO-DATE   AVAILABLE' },
  { prompt: false, text: 'api-gateway     6/6     6            6' },
  { prompt: false, text: 'orders-svc      4/4     4            4' },
  { prompt: true, text: 'terraform apply -auto-approve' },
  { prompt: false, text: 'Apply complete! Resources: 24 added, 0 changed.' },
  { prompt: true, text: 'agent diagnose pod/orders-svc-7f9c' },
  { prompt: false, text: 'Root cause: OOMKilled — memory limit 256Mi too low.' },
]

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

      <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border border-border bg-foreground text-left shadow-2xl shadow-foreground/10">
        <div className="flex items-center gap-2 border-b border-background/10 px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
          <span className="size-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
          <span className="size-3 rounded-full bg-[#28c840]" aria-hidden="true" />
          <span className="ml-3 font-mono text-xs text-background/50">srujan@devops ~ zsh</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-background/85 md:text-sm">
          <code>
            {terminalLines.map((line, i) => (
              <span key={i} className="block">
                {line.prompt ? (
                  <>
                    <span className="text-[#5ac8fa]">{'$ '}</span>
                    <span className="text-background">{line.text}</span>
                  </>
                ) : (
                  <span className="text-background/60">{line.text}</span>
                )}
              </span>
            ))}
          </code>
        </pre>
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
