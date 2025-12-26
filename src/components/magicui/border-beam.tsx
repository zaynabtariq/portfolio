import { cn } from "@/lib/utils"

interface BorderBeamProps {
  className?: string
  size?: number
  duration?: number
  delay?: number
  colorFrom?: string
  colorTo?: string
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  delay = 0,
  colorFrom = "oklch(0.7 0.18 250)",
  colorTo = "oklch(0.75 0.15 180)",
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className
      )}
      style={{
        ["--border-beam-size" as string]: `${size}px`,
        ["--border-beam-duration" as string]: `${duration}s`,
        ["--border-beam-delay" as string]: `${delay}s`,
        ["--border-beam-color-from" as string]: colorFrom,
        ["--border-beam-color-to" as string]: colorTo,
      }}
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      <div
        className="absolute h-full animate-[border-beam_var(--border-beam-duration)_linear_infinite]"
        style={{
          width: "var(--border-beam-size)",
          background: `linear-gradient(90deg, transparent, ${colorFrom}, ${colorTo}, transparent)`,
          animationDelay: "var(--border-beam-delay)",
          top: 0,
          left: "-100%",
        }}
      />
    </div>
  )
}

