import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-12 bg-secondary py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Hands-on, production-style builds."
          description="From AI agents to DevSecOps pipelines — each project applies automation, security and observability to real workloads."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`group flex flex-col rounded-3xl bg-card p-7 transition-shadow hover:shadow-xl hover:shadow-foreground/5 md:p-9 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-primary">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
                </div>
                <ArrowUpRight
                  className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{project.description}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                    {tech}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
