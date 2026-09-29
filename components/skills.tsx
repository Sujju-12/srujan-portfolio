import { Cloud, Container, GitBranch, Layers, Activity, ShieldCheck } from 'lucide-react'
import { skills } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

const icons = [Cloud, Container, GitBranch, Layers, Activity, ShieldCheck]

export function Skills() {
  return (
    <section id="skills" className="bg-secondary py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Toolkit"
          title="The full DevOps stack."
          description="Cloud, containers, pipelines, infrastructure as code and observability — end to end."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div key={group.title} className="rounded-3xl bg-card p-7">
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
