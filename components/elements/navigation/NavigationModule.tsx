'use client'

import Link from 'next/link'
import { Navigation } from './Navigation'

type Props = {
  readonly paths: Array<string>
}

export const NavigationModule = ({ paths }: Props) => {
  return (
    <div className="flex flex-1 py-6">
      <Link className="flex flex-1" href={'/'}>
        x
      </Link>
      <Navigation {...{ paths }} />
      <div className="flex flex-1" />
    </div>
  )
}
