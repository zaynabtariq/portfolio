import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight, X, Award } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  fullDescription?: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  role?: string
  highlights?: string[]
  year?: string
  research?: boolean
  publication?: {
    title: string
    url: string
  }
}

const projects: Project[] = [
  {
    id: 1,
    title: "Rewind: Video Memory System",
    description:
      "Multimodal AI system that processes 24-hour video recordings to create a searchable memory database using computer vision and audio transcription.",
    fullDescription:
      "Built a Video Memory System that processes 24-hour video recordings to create a searchable memory database. Combines YOLOv8 object detection, CLIP embeddings for semantic search, and Whisper transcription for audio. Enables natural language queries to find objects, events, and conversations from past recordings. Features dual query types (object queries with images, memory queries with text) and conversational AI responses using open-source LLMs.",
    tags: ["Python", "YOLOv8", "CLIP", "Whisper", "FAISS", "Multimodal AI"],
    role: "Personal Project",
    year: "2025",
    research: false,
    highlights: [
      "Multimodal processing of video frames and audio transcripts",
      "Real-time object detection with YOLOv8",
      "Semantic search using CLIP embeddings and FAISS vector store",
      "Natural language query interface for video memories",
    ],
  },
  {
    id: 2,
    title: "Ada - Intelligent Meta-Wallet",
    description:
      "AI-powered meta-wallet that recommends optimal credit cards for purchases, learns from spending patterns, and maximizes rewards through intelligent card selection.",
    fullDescription:
      "AI-powered meta-wallet that maximizes credit card rewards through intelligent recommendations. Features Ada, a chat assistant that recommends optimal cards, suggests new cards and signup bonuses. Hybrid ML + rule-based system learns from spending patterns, considering rewards multipliers, fees, and bonuses. Plaid integration enables real-time sync across checking, savings, and credit accounts. Budget management with category limits, custom routing rules, and spending simulation. ML-based spending prediction forecasts transactions up to 14 days ahead. Built with Next.js 14, React, TypeScript, Python ML (gradient boosting), OpenAI, and Appwrite.",
    tags: ["Next.js", "React", "TypeScript", "Python", "Machine Learning", "Plaid", "OpenAI", "Appwrite"],
    role: "Personal Project",
    year: "2025",
    research: false,
    highlights: [
      "AI-powered card recommendations with hybrid ML + rule-based system with real-time bank account integration via Plaid with transaction sync",
      "ML-based spending prediction forecasting up to 14 days ahead",
      "Proactive notifications and budget management with category tracking",
    ],
  },
  {
    id: 3,
    title: "PayPal Transaction Service",
    description:
      "Secure Node.js microservice on GKE for real-time transaction retrieval.",
    fullDescription:
      "Developed and deployed a Node.js microservice on GCP (GKE) using Workload Identity and Secret Manager for secure service auth, powering real-time PayPal transaction retrieval for internal finance tools.",
    tags: ["Node.js", "GCP", "GKE", "Docker"],
    role: "SWE Intern @ L.L.Bean",
    year: "2025",
    highlights: [
      "Deployed on Google Kubernetes Engine",
      "Implemented Workload Identity for secure auth",
      "Real-time transaction processing",
    ],
  },
  {
    id: 4,
    title: "Treasury Operations Tool",
    description:
      "Modern full-stack inquiry tool replacing legacy systems with JWT-based SSO.",
    fullDescription:
      "Built a full-stack inquiry tool using React, Express, and JWT-based SSO, replacing legacy systems and improving data visibility for Treasury operations. Implemented CI/CD pipelines with Harness.",
    tags: ["React", "Express", "JWT", "Harness"],
    role: "SWE Intern @ L.L.Bean",
    year: "2025",
    highlights: [
      "Replaced legacy systems with modern stack",
      "JWT-based SSO authentication",
      "Automated CI/CD pipelines",
    ],
  },
  {
    id: 5,
    title: "Multi-Agent Memory System",
    description:
      "Large-scale memory architecture for AI agents using vector databases and LLM-based RAG.",
    fullDescription:
      "Architected a large-scale multi-agent memory system using FAISS vector database and PostgreSQL to store and retrieve 100,000+ conversation embeddings, enabling long-term contextual retrieval and reducing overhead by 40% while maintaining 95% consistency in agent responses. Built an LLM-based Retrieval-Augmented Generation (RAG) stack (GPT-4, Claude, LLaMA) with embedding search and prompt templates, enabling 3× faster deployment of contextual conversations across 200+ simulations.",
    tags: ["Python", "FAISS", "PostgreSQL", "GPT-4", "LLaMA", "RAG"],
    role: "Research Assistant @ Davis AI Institute",
    year: "2024",
    research: true,
    highlights: [
      "100,000+ conversation embeddings stored and retrieved",
      "40% reduction in overhead with 95% consistency in responses",
      "3× faster deployment across 200+ simulations",
      "First-author publication at ACM UMAP 2024",
    ],
    publication: {
      title: "ACM UMAP 2024 Publication",
      url: "https://dl.acm.org/doi/proceedings/10.1145/3631700",
    },
  },
  {
    id: 6,
    title: "Dining Analytics Platform",
    description:
      "Full-stack platform with LSTM predictions for dining hall occupancy and food waste reduction.",
    fullDescription:
      "Engineered a full-stack dining analytics platform using Flask/SQLAlchemy backend and React frontend, featuring real-time menu updates and wait time estimates for 2000+ potential users. Achieved 98% test coverage with comprehensive unit and integration testing, reducing bugs in production by 70%. Trained and deployed an LSTM model to predict dining hall occupancy with 85% accuracy, helping reduce food waste by 25% while serving real-time predictions to 500+ active users.",
    tags: ["React", "Flask", "LSTM", "SQLAlchemy"],
    githubUrl: "https://github.com",
    role: "Lead Developer",
    year: "2024",
    highlights: [
      "98% test coverage, 70% reduction in production bugs",
      "85% accuracy in occupancy prediction",
      "25% reduction in food waste",
      "500+ active users with real-time predictions",
    ],
  },
  {
    id: 7,
    title: "Digital Twin Platform",
    description:
      "MongoDB architecture for high-bandwidth IoT sensor data processing.",
    fullDescription:
      "Architected MongoDB database system to process high-bandwidth sensor data (weather, wave, audio) from multiple collection points across Allen Island. Optimized data ingestion pipeline with strategic indexing, reducing query response time for real-time VR simulation updates. Designed cross-platform integration framework connecting sensor networks to OpenTwins platform, enabling collaboration between 3 research departments and improving research accessibility by 50%.",
    tags: ["MongoDB", "IoT", "VR", "Data Pipeline"],
    role: "Research Intern @ Allen Island",
    year: "2024",
    research: false, 
    highlights: [
      "High-bandwidth sensor data processing (weather, wave, audio)",
      "Optimized query response time for real-time VR updates",
      "50% improvement in research accessibility",
      "Enabled 3 department collaboration",
    ],
  },
  {
    id: 8,
    title: "GitHub Copilot Impact Study",
    description:
      "Research study analyzing GitHub Copilot's impact on coding efficiency using eye-tracking metrics and code analysis.",
    fullDescription:
      "Led research study analyzing GitHub Copilot's impact on coding efficiency, developing Python GUI tools that reduced data processing time by 40% and saved 200+ research hours analyzing eye movements of 420 participants. Designed and executed multi-task experiments comparing Copilot vs web-based coding, utilizing eye-tracking metrics, completion rates, and user feedback to quantify improvements in code comprehension and debugging efficiency. Evaluated 200 code samples from beginner programmers, demonstrating Copilot users produced 55% more code with 25% fewer style errors, leading to 40% faster onboarding for new developers.",
    tags: ["Python", "Research", "Eye-Tracking", "Data Analysis", "GUI"],
    role: "Research Intern @ Davis Science Center",
    year: "2023-2024",
    research: true,
    highlights: [
      "Analyzed eye movements of 420 participants",
      "40% reduction in data processing time with Python GUI tools",
      "55% more code produced with 25% fewer style errors",
      "40% faster onboarding for new developers",
    ],
  },
  {
    id: 9,
    title: "AI Packet Loss Concealment",
    description:
      "TensorFlow-based system reducing VoIP audio degradation by 35%.",
    fullDescription:
      "Developed AI-driven packet loss concealment system using TensorFlow and Python, reducing audio degradation by 35% in VoIP calls and decreasing customer support tickets by 25%. Built real-time network simulation tools in C++ and Qt to analyze and mitigate audio transmission issues (packet loss, delay, jitter), improving call quality by 20%. Automated testing pipeline for audio processing algorithms, achieving 95% test coverage and reducing deployment errors by 30%.",
    tags: ["TensorFlow", "Python", "C++", "VoIP"],
    role: "SWE Intern @ Speeqr",
    year: "2023",
    highlights: [
      "35% reduction in audio degradation",
      "25% decrease in customer support tickets",
      "20% improvement in call quality",
      "95% test coverage, 30% reduction in deployment errors",
    ],
  },
]

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-text-primary/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        className="relative w-full max-w-lg bg-surface-light rounded-2xl p-6 sm:p-8 shadow-2xl border border-glass-border overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-surface-dark hover:bg-primary/10 text-text-muted hover:text-primary transition-all"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              {project.role}
            </span>
            {project.year && (
              <span className="text-xs text-text-muted">{project.year}</span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-display text-text-primary">
            {project.title}
          </h3>

          <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
            {project.fullDescription || project.description}
          </p>

          {project.highlights && (
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-text-secondary text-sm">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-text-muted px-2.5 py-1 rounded-full bg-surface-dark border border-glass-border"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Publication Link - Inside Modal */}
          {project.publication && (
            <a
              href={project.publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 hover:border-primary/40 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
                  {project.publication.title}
                </p>
                <p className="text-xs text-text-muted">View published research</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-text-muted group-hover:text-primary transition-colors" />
            </a>
          )}

          {(project.githubUrl || project.liveUrl) && (
            <div className="flex gap-3 pt-2">
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild className="border-text-muted/30">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button size="sm" asChild className="bg-gradient-to-r from-primary to-secondary">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project
  index: number
  onClick: () => void
}) {
  return (
    <BlurFade delay={0.1 + index * 0.05}>
      <motion.article
        className="group cursor-pointer h-full p-5 sm:p-6 rounded-2xl bg-surface-light border border-glass-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col"
        onClick={onClick}
        whileHover={{ y: -4 }}
      >
        {/* Header with role/year */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-medium">
              {project.role}
            </span>
            {project.year && (
              <span className="text-[10px] sm:text-xs text-text-muted">{project.year}</span>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {project.research && (
              <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-medium">
                Research
              </span>
            )}
            {project.publication && (
              <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-[10px] font-medium">
                Published
              </span>
            )}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-base sm:text-lg font-display text-text-primary group-hover:text-primary transition-colors duration-300 mb-2">
          {project.title}
        </h3>
        
        {/* Description - fixed height */}
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tags and Arrow */}
        <div className="flex items-end justify-between gap-3 mt-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-xs text-text-muted px-2 py-0.5 rounded-full bg-surface-dark"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-[10px] sm:text-xs text-text-muted px-2 py-0.5">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
          <div className="shrink-0 p-2 rounded-full bg-surface-dark group-hover:bg-primary/10 transition-colors">
            <ArrowUpRight className="h-4 w-4 text-text-muted group-hover:text-primary transition-colors" />
          </div>
        </div>
      </motion.article>
    </BlurFade>
  )
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative py-20 sm:py-32 px-4 sm:px-6">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] blob-1 rounded-full blur-[150px] opacity-50" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 text-center sm:text-left">
          <BlurFade delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-text-primary">
              Projects
            </h2>
          </BlurFade>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
