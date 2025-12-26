import { motion } from "framer-motion"
import { Github, Linkedin, ArrowUp, Heart } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/zaynabtariq", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/zaynabtariq", label: "LinkedIn" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-8 sm:py-10 border-t border-glass-border px-4 sm:px-6 bg-surface-light/50">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Left */}
          <div className="flex items-center gap-2 text-text-secondary text-sm">
            <span className="font-display text-text-primary">Zaynab Tariq</span>
            <span className="text-text-muted">·</span>
            <span className="text-text-muted text-xs">© {new Date().getFullYear()}</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-dark text-text-muted hover:text-primary hover:bg-primary/10 transition-all"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
            
            <div className="w-px h-4 bg-glass-border mx-1" />
            
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-surface-dark text-text-muted hover:text-primary hover:bg-primary/10 transition-all"
              whileHover={{ y: -2 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
