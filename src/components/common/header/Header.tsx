'use client'
import SunIcon from '@/assets/icons/SunIcon'
import MoonIcon from '@/assets/icons/MoonIcon'
import React, { useState, useEffect } from 'react'
import { useTheme } from '@/providers/ThemeProvider'
import SpeakerIcon from '@/assets/icons/SpeakerIcon'
import SpeakerMuteIcon from '@/assets/icons/SpeakerMuteIcon'
import { usePathname } from 'next/navigation'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()

  const [isMuted, setIsMuted] = useState(true)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [showMessage, setShowMessage] = useState(true)

  useEffect(() => {
    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }

    const audioSrc = pathname === '/' 
      ? '/audio/poke-gym.mp3'
      : '/audio/coconut-mall.mp3'
    
    const audioElement = new Audio(audioSrc)
    audioElement.loop = true
    setAudio(audioElement)

    if (!isMuted) {
      audioElement.play()
    }

    return () => {
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }
    }
  }, [pathname, isMuted])

  const toggleAudio = () => {
    if (!audio) return

    if (isMuted) {
      audio.play()
      setShowMessage(false)
    } else {
      audio.pause()
    }

    setIsMuted(!isMuted)
  }
  
  return (
    <header className="animate-fade-in-left py-[15px] flex justify-between items-center">
        <h1 className="text-[24px] font-black dark:text-white">
            <span className="text-primary">Locked</span>In
        </h1>
        <div className="flex gap-[15]">
            <button onClick={toggleTheme} className="outline-none">
                {theme === 'light' ? (
                    <MoonIcon className="hover:text-primary hover:scale-[1.1] cursor-pointer transition-all duration-500 ease-in-out" />
                ) : (
                    <SunIcon className="text-white hover:text-primary hover:scale-[1.1] cursor-pointer transition-all duration-500 ease-in-out" />
                )}
            </button>
            <button onClick={toggleAudio} className="outline-none">
                {isMuted ? (
                    <div className="relative">
                    <SpeakerMuteIcon className="dark:text-white hover:text-primary hover:scale-[1.1] cursor-pointer transition-all duration-500 ease-in-out"/>
                    {showMessage && (
                        <div className="animate-float z-[1000] absolute top-[35px] mt-2 p-2 max-sm:right-0! max-sm:mr-0! bg-primary rounded-md before:content-[''] before:absolute before:top-[-5px] max-sm:before:right-[5px] max-sm:before:left-auto before:left-[15px] before:-translate-x-1/2 before:border-l-[6px] before:border-l-transparent before:border-r-[6px] before:border-r-transparent before:border-b-[6px] before:border-b-primary">
                            <p className="text-[12px] text-white">You can play music while memorizing!</p>
                        </div>
                    )}
                </div>
                ) : (
                    <SpeakerIcon className="dark:text-white hover:text-primary hover:scale-[1.1] cursor-pointer transition-all duration-500 ease-in-out"/>
                )}
            </button>
        </div>
    </header>
  )
}

export default Header