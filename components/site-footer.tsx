import { profile } from '@/lib/data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
        <p>
          {'© '}
          {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>{'B.E. Mechanical Engineering · 2015'}</p>
      </div>
    </footer>
  )
}
