'use client'

import { NavigationModule } from '~elements/index'

type Props = { children: React.ReactNode }

export default function Template({ children }: Props) {
  return (
    <>
      <NavigationModule paths={['About', 'Articles']} />
      {children}
    </>
  )
}
