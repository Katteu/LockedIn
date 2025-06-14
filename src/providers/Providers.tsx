'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from './ThemeProvider'
import { TextProvider } from './TextProvider'

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <TextProvider>
        {children}
      </TextProvider>
    </ThemeProvider>
  )
} 