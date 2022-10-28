'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  readonly paths: Array<string>
}
export const Navigation = ({ paths }: Props) => {
  const router = usePathname()

  return (
    <nav
      className={
        'sticky top-14 flex rounded-full bg-white/90 px-3 text-sm font-light text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'
      }
    >
      {paths.map((path, i) => {
        const pathId = path.toLowerCase()
        const active = router.includes(pathId)
        console.log('router:', router)

        return (
          <Link href={pathId} key={i}>
            <div
              className={clsx(
                'relative block px-3 py-2 transition',
                active
                  ? 'font-medium text-teal-500 dark:text-teal-400'
                  : 'hover:text-teal-500 dark:hover:text-teal-400'
              )}
            >
              {path}
            </div>
          </Link>
        )
      })}
    </nav>
  )
}
