import type { Metadata } from 'next'
import Link from 'next/link'
import { learnings, formatDate } from '@/lib/learnings'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Learnings — Srujan Kumar',
  description: 'Notes on MCP, RAG, Agentic AI and MLOps from a DevOps engineer applying them in real projects.',
}

export default function LearningsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="text-sm font-medium text-primary">Learnings</p>
        <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          Notes from the future of DevOps.
        </h1>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
          What I&apos;m learning about MCP, RAG, Agentic AI and MLOps — and how I apply it in projects and day-to-day work.
        </p>

        <ul className="mt-14 flex flex-col divide-y divide-border border-y border-border">
          {learnings.map((post) => (
            <li key={post.slug}>
              <Link href={`/learnings/${post.slug}`} className="group block py-8">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 font-medium text-accent-foreground">{post.tag}</span>
                  <time dateTime={post.date} className="text-muted-foreground">
                    {formatDate(post.date)}
                  </time>
                  <span className="text-muted-foreground">{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight group-hover:text-primary">{post.title}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  )
}
