"use client"

import { useEffect, useState } from "react"

export default function TypewriterComponent() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const words = ["Paundra", "a Developer", "a Designer"]
  const currentWordIndex = loopNum % words.length
  const currentWord = words[currentWordIndex]

  useEffect(() => {
    const timer = setTimeout(() => {
      // Handle typing effect
      if (!isDeleting && text === currentWord) {
        // Pause at the end of word
        setTypingSpeed(2000)
        setIsDeleting(true)
      } else if (isDeleting && text === "") {
        // Move to next word
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(150)
      } else {
        // Type or delete characters
        setText((prev) => {
          if (isDeleting) {
            setTypingSpeed(75)
            return prev.substring(0, prev.length - 1)
          } else {
            setTypingSpeed(150)
            return currentWord.substring(0, prev.length + 1)
          }
        })
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, currentWord, typingSpeed])

  return (
    <span className="text-emerald-500">
      {text}
      <span className="animate-blink">|</span>
    </span>
  )
}
