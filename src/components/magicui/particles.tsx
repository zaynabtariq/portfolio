import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  color: string
}

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
  color?: string
}

export function Particles({
  className,
  quantity = 50,
  staticity = 50,
  ease = 50,
  color,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const particles = useRef<Particle[]>([])
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1
  const [, setRender] = useState(0)

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d")
    }
    initCanvas()
    animate()
    window.addEventListener("resize", initCanvas)

    return () => {
      window.removeEventListener("resize", initCanvas)
    }
  }, [])

  useEffect(() => {
    initCanvas()
  }, [quantity])

  const initCanvas = () => {
    resizeCanvas()
    createParticles()
    setRender((prev) => prev + 1)
  }

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      canvasSize.current.w = canvasContainerRef.current.offsetWidth
      canvasSize.current.h = canvasContainerRef.current.offsetHeight
      canvasRef.current.width = canvasSize.current.w * dpr
      canvasRef.current.height = canvasSize.current.h * dpr
      canvasRef.current.style.width = canvasSize.current.w + "px"
      canvasRef.current.style.height = canvasSize.current.h + "px"
      context.current.scale(dpr, dpr)
    }
  }

  const createParticles = () => {
    particles.current = []
    // Vibrant colorful palette
    const defaultColors = [
      "rgba(220, 80, 60, 0.2)",
      "rgba(100, 80, 180, 0.15)",
      "rgba(60, 160, 150, 0.15)",
      "rgba(240, 140, 80, 0.12)",
    ]
    const colors = color ? [color] : defaultColors
    for (let i = 0; i < quantity; i++) {
      particles.current.push({
        x: Math.random() * canvasSize.current.w,
        y: Math.random() * canvasSize.current.h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect()
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }
  }

  const animate = () => {
    if (context.current && canvasRef.current) {
      context.current.clearRect(
        0,
        0,
        canvasSize.current.w,
        canvasSize.current.h
      )
      particles.current.forEach((particle) => {
        // Mouse influence
        const dx = mouse.current.x - particle.x
        const dy = mouse.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          particle.vx -= (dx / distance) * force * 0.02 * (ease / 100)
          particle.vy -= (dy / distance) * force * 0.02 * (ease / 100)
        }

        // Add some randomness
        particle.vx += (Math.random() - 0.5) * 0.01 * (staticity / 100)
        particle.vy += (Math.random() - 0.5) * 0.01 * (staticity / 100)

        // Damping
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around
        if (particle.x < 0) particle.x = canvasSize.current.w
        if (particle.x > canvasSize.current.w) particle.x = 0
        if (particle.y < 0) particle.y = canvasSize.current.h
        if (particle.y > canvasSize.current.h) particle.y = 0

        // Draw
        context.current!.beginPath()
        context.current!.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.current!.fillStyle = particle.color
        context.current!.fill()
      })
    }
    requestAnimationFrame(animate)
  }

  return (
    <div
      ref={canvasContainerRef}
      className={cn("absolute inset-0 overflow-hidden", className)}
      onMouseMove={onMouseMove}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}

