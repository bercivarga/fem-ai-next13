import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ReactNode } from "react";

import './globals.css'
import {ClerkProvider} from "@clerk/nextjs";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'MOOD',
  description: 'Your daily mood tracking app',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </ClerkProvider>
  )
}
