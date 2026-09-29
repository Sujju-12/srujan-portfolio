import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function Projects() {
  return (
    <section id="projects" className="bg-secondary py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Hands-on, production-style builds."
          description="Independent projects applying observability, networking and AI to real Kubernetes workloads."
        />
        <div className="mt-14 flex flex-col gap-4">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-card p-7 transition-shadow hover:shadow-xl hover:shadow-foreground/5 md:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                <ArrowUpRight
                  className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{project.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                    {tech}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
