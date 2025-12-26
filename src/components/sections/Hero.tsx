import { motion } from "framer-motion"
import { ArrowDown, Download, Mail } from "lucide-react"
import { Particles } from "@/components/magicui/particles"
import { BlurFade } from "@/components/magicui/blur-fade"
import { TypingAnimation } from "@/components/magicui/typing-animation"
import { Button } from "@/components/ui/button"

const skills = [
  "Python",
  "React",
  "TypeScript",
  "Node.js",
  "TensorFlow",
  "GCP",
  "Docker",
  "PostgreSQL",
]

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Colorful Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] blob-1 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] blob-2 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px]" />
      </div>
      
      {/* Subtle Particles */}
      <Particles className="opacity-30" quantity={25} />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <BlurFade delay={0.1}>
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium">
                CS & AI @ Colby College
              </span>
            </div>
          </BlurFade>

          {/* Main Heading */}
          <BlurFade delay={0.2}>
            <h1 className="mb-4 sm:mb-6">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-normal text-text-primary">
                Zaynab Tariq
              </span>
            </h1>
          </BlurFade>

          {/* Subtitle with gradient */}
          <BlurFade delay={0.3}>
            <div className="mb-8 sm:mb-10">
              <div className="text-lg sm:text-xl md:text-2xl font-medium h-8 sm:h-10">
                <TypingAnimation
                  text="Software Engineer & AI Researcher"
                  duration={50}
                  delay={600}
                  className="text-gradient"
                />
              </div>
            </div>
          </BlurFade>

          {/* Skills as colorful pills */}
          <BlurFade delay={0.4}>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 px-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-surface-light border border-glass-border text-text-secondary hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </BlurFade>

          {/* CTA Buttons */}
          <BlurFade delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto min-w-[160px] sm:min-w-[180px] bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-medium shadow-lg shadow-primary/20"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-w-[160px] sm:min-w-[180px] border-text-muted/30 hover:border-primary/50 hover:bg-primary/5 text-text-primary"
              >
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </div>
          </BlurFade>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.a
              href="#projects"
              className="flex flex-col items-center gap-3 text-text-muted hover:text-primary transition-colors"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
