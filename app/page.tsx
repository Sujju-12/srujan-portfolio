import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { AiLearnings } from '@/components/ai-learnings'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <AiLearnings />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
