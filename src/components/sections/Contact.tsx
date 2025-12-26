import { motion } from "framer-motion"
import { Mail, MapPin, GraduationCap, Send, ArrowUpRight } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] blob-2 rounded-full blur-[150px] opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Left Column */}
          <div>
            <BlurFade delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-text-primary mb-4 sm:mb-6">
                Let's connect
              </h2>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className="text-text-secondary leading-relaxed mb-8 sm:mb-10 max-w-md text-sm sm:text-base">
                Currently exploring opportunities in AI/ML engineering and full-stack development. 
                Open to research collaborations and interesting projects.
              </p>
            </BlurFade>

            {/* Contact Info Cards */}
            <div className="space-y-3 sm:space-y-4">
              <BlurFade delay={0.25}>
                <a
                  href="mailto:ztariq26@colby.edu"
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface-light border border-glass-border hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-text-muted mb-0.5">Email</p>
                    <p className="text-text-primary group-hover:text-primary transition-colors text-sm sm:text-base truncate font-medium">
                      ztariq26@colby.edu
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-text-muted group-hover:text-primary transition-colors shrink-0" />
                </a>
              </BlurFade>

              <BlurFade delay={0.3}>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-light border border-glass-border">
                  <div className="p-2.5 rounded-lg bg-secondary/10">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">Location</p>
                    <p className="text-text-primary text-sm sm:text-base font-medium">Waterville, ME</p>
                    <p className="text-xs text-accent font-medium mt-0.5">Open to relocation</p>
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={0.35}>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-light border border-glass-border">
                  <div className="p-2.5 rounded-lg bg-accent/10">
                    <GraduationCap className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">Education</p>
                    <p className="text-text-primary text-sm sm:text-base font-medium">Colby College '26</p>
                    <p className="text-xs text-text-muted mt-0.5">Computer Science: AI</p>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <BlurFade delay={0.4}>
              <form className="p-6 sm:p-8 rounded-2xl bg-surface-light border border-glass-border shadow-sm">
                <div className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-text-secondary text-xs font-medium">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-surface-dark border-glass-border focus:border-primary/50 text-text-primary placeholder:text-text-muted/50 text-sm rounded-lg"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-text-secondary text-xs font-medium">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-surface-dark border-glass-border focus:border-primary/50 text-text-primary placeholder:text-text-muted/50 text-sm rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="subject" className="text-text-secondary text-xs font-medium">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="bg-surface-dark border-glass-border focus:border-primary/50 text-text-primary placeholder:text-text-muted/50 text-sm rounded-lg"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-text-secondary text-xs font-medium">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or opportunity..."
                      rows={4}
                      className="bg-surface-dark border-glass-border focus:border-primary/50 text-text-primary placeholder:text-text-muted/50 resize-none text-sm rounded-lg"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-medium shadow-lg shadow-primary/20"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              </form>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
