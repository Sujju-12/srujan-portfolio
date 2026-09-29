import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { AiLearnings } from '@/components/ai-learnings'
import { Projects } from '@/components/projects'
import { HandsOnLabs } from '@/components/hands-on-labs'
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
        <HandsOnLabs />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
