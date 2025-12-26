import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface Sparkle {
  id: string
  x: string
  y: string
  size: number
  delay: number
  duration: number
}

interface SparklesProps {
  className?: string
  sparklesCount?: number
}

function generateSparkle(): Sparkle {
  return {
    id: Math.random().toString(36).substring(7),
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: Math.random() * 8 + 4,
    delay: Math.random() * 2,
    duration: Math.random() * 2 + 1,
  }
}

export function Sparkles({ className, sparklesCount = 10 }: SparklesProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const initialSparkles = Array.from({ length: sparklesCount }, generateSparkle)
    setSparkles(initialSparkles)

    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev.map((sparkle, index) => {
          if (Math.random() < 0.1) {
            return generateSparkle()
          }
          return { ...sparkle, id: `${sparkle.id}-${index}` }
        })
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [sparklesCount])

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 3 + 2,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full text-accent"
          >
            <path
              d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

