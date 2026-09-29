import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { getLearning, learnings, formatDate } from '@/lib/learnings'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export function generateStaticParams() {
  return learnings.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getLearning(slug)
  if (!post) return {}
  return { title: `${post.title} — Srujan Kumar`, description: post.excerpt }
}

export default async function LearningPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getLearning(slug)
  if (!post) notFound()

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <Link href="/learnings" className="flex w-fit items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" aria-hidden="true" />
          All learnings
        </Link>
        <article className="mt-10">
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-full bg-accent px-2.5 py-0.5 font-medium text-accent-foreground">{post.tag}</span>
            <time dateTime={post.date} className="text-muted-foreground">
              {formatDate(post.date)}
            </time>
            <span className="text-muted-foreground">{post.readTime}</span>
          </div>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">{post.title}</h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

          <div className="mt-12 flex flex-col gap-10 border-t border-border pt-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-relaxed text-foreground/85">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 leading-relaxed text-foreground/85 marker:text-primary">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
