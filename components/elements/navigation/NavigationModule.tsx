'use client'

import { useRouter } from 'next/navigation'
import { Navigation } from './Navigation'

type Props = {
  readonly paths: Array<string>
}

export const NavigationModule = ({ paths }: Props) => {
  const router = useRouter()

  return (
    <div className="flex flex-1 py-6">
      <div className="flex flex-1" onClick={() => router.push('/')}>
        x
      </div>
      <Navigation {...{ paths }} />
      <div className="flex flex-1" />
    </div>
  )
}
