import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ShimmerButtonProps {
  children: ReactNode
  className?: string
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  onClick?: () => void
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "rgba(255, 255, 255, 0.2)",
  shimmerSize = "0.1em",
  borderRadius = "0.75rem",
  shimmerDuration = "2s",
  background = "linear-gradient(135deg, oklch(0.65 0.14 45), oklch(0.55 0.12 60))",
  onClick,
}: ShimmerButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden whitespace-nowrap px-8 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
      style={{
        borderRadius,
        background,
      }}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius }}
      >
        <div
          className="absolute inset-0 animate-shimmer"
          style={{
            background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
            backgroundSize: "200% 100%",
            animationDuration: shimmerDuration,
          }}
        />
      </div>
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{
          borderRadius,
          boxShadow: `inset 0 0 ${shimmerSize} ${shimmerColor}`,
        }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  )
}

