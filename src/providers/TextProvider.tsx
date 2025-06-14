'use client'

import { createContext, useContext, useState } from 'react'

type TextContextType = {
  text: string
  setText: (text: string) => void
  wordsRemaining: number
  setWordsRemaining: (wordsRemaining: number) => void
}

const TextContext = createContext<TextContextType | undefined>(undefined)

export function TextProvider({ children }: { children: React.ReactNode }) {
  const [text, setText] = useState<string>('')
  const [wordsRemaining, setWordsRemaining] = useState<number>(1000)

  return (
    <TextContext.Provider value={{ text, setText, wordsRemaining, setWordsRemaining }}>
      {children}
    </TextContext.Provider>
  )
}

export function useText() {
  const context = useContext(TextContext)
  if (context === undefined) {
    throw new Error('useText must be used within a TextProvider')
  }
  return context
}