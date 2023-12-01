import { Inter } from 'next/font/google'
import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'

import Header from '@/components/header'
import Footer from '@/components/footer'

import '@/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SWI',
  description: 'Sanguan Wongse Industries.',
}

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />

        {children}

        <Footer />
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout
