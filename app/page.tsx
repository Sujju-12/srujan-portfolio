import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { AiLearnings } from '@/components/ai-learnings'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { profile } from '@/lib/data'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <AiLearnings />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            {'© '}
            {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>{'B.E. Mechanical Engineering · 2015'}</p>
        </div>
      </footer>
    </>
  )
}
