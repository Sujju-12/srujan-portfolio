import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Check } from 'lucide-react'
import { getProject, projects } from '@/lib/data'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { GithubIcon } from '@/components/brand-icons'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return { title: `${project.title} — Srujan Kumar`, description: project.description }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link href="/#projects" className="flex w-fit items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" aria-hidden="true" />
          All projects
        </Link>

        <p className="mt-10 text-sm font-medium text-primary">{project.category}</p>
        <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight md:text-6xl">{project.title}</h1>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            <GithubIcon className="size-4" />
            View on GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-secondary"
            >
              Live demo
            </a>
          )}
        </div>

        <section className="mt-16" aria-labelledby="workflow">
          <h2 id="workflow" className="text-2xl font-semibold tracking-tight">
            How it works
          </h2>
          <ol className="mt-6 flex flex-col gap-3">
            {project.workflow.map((item, index) => (
              <li key={item.step} className="flex gap-5 rounded-2xl bg-secondary p-5">
                <span className="font-mono text-sm text-primary">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p className="font-semibold">{item.step}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16" aria-labelledby="outcomes">
          <h2 id="outcomes" className="text-2xl font-semibold tracking-tight">
            Highlights
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-2.5 rounded-2xl border border-border p-5 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {outcome}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16" aria-labelledby="stack">
          <h2 id="stack" className="text-2xl font-semibold tracking-tight">
            Tech stack
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
