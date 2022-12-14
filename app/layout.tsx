import { Inter } from '@next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter()

type Props = {
  readonly children: React.ReactNode
}

//  GET /
const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Christian Matschke</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={'h-screen'}>
        <main className="mx-auto h-screen w-full max-w-3xl bg-white px-2 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 sm:px-6 lg:max-w-7xl lg:px-8">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
