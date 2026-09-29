import { Mail, Phone, Download } from 'lucide-react'
import { profile } from '@/lib/data'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const links = [
  { href: `mailto:${profile.email}`, label: profile.email, Icon: Mail, external: false },
  { href: `tel:${profile.phone.replace(/-/g, '')}`, label: profile.phone, Icon: Phone, external: false },
  { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedinIcon, external: true },
  { href: profile.github, label: 'github.com/Sujju-12', Icon: GithubIcon, external: true },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">
      <p className="text-sm font-medium text-primary">Contact</p>
      <h2 className="mx-auto mt-2 max-w-2xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
        {"Let's build reliable infrastructure together."}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
        Open to DevOps, Cloud and Platform Engineering roles — and conversations about AI-driven operations.
      </p>
      <ul className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
        {links.map(({ href, label, Icon, external }) => (
          <li key={href}>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-left text-sm transition-colors hover:bg-secondary"
            >
              <Icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="truncate">{label}</span>
            </a>
          </li>
        ))}
      </ul>
      <a
        href={profile.resume}
        download
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Download className="size-4" aria-hidden="true" />
        Download full resume
      </a>
    </section>
  )
}
