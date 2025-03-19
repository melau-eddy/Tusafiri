'use client'

import { Progress } from '@/components/ui/progress'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState, useTransition } from 'react'

export default function Loading() {
  const pathName = usePathname()
  const [, startTransition] = useTransition()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let progressInterval: ReturnType<typeof setInterval>

    const updateProgress = () => {
      setProgress((prev) => {
        const newProgress = prev + 10
        if (newProgress >= 100) {
          clearInterval(progressInterval)
          return 100
        }

        return newProgress
      })
    }

    startTransition(() => {
      setProgress(0)
      progressInterval = setInterval(updateProgress, 100)
    })

    return () => {
      if (progressInterval !== null) {
        clearInterval(progressInterval)
      }
    }
  }, [pathName, startTransition])

  return (
    <div>
      <Progress value={progress} />
    </div>
  )
}
