/**
 * Real content only.
 *
 * Every string below is derived from work that already existed in this
 * repository. Nothing here is invented — where the canonical case-study
 * format (problem / constraints / decision / tradeoffs) asks for framing
 * that the source material does not contain, the field is simply absent
 * rather than filled with plausible-sounding narrative.
 */

export type TerritoryId = "builder" | "research" | "creativity";

/** How a project sits in the terrain. The form encodes what the work *is* —
 *  a relay moves things between systems, a tower watches and predicts. */
export type LandmarkForm = "relay" | "workshop" | "tower" | "signal";

export interface Landmark {
  slug: string;
  /** Displayed name. The metaphor never replaces this. */
  name: string;
  org: string;
  role: string;
  year: string;
  /** One line, plain. Shown on the plate and in the panel header. */
  summary: string;
  /** Longer prose, shown in the opened case study. */
  detail: string;
  /** Verified outcomes carried over verbatim from the source content. */
  outcomes: string[];
  stack: string[];
  form: LandmarkForm;
  /** Position on the territory plate, in plate coordinate space (0–100). */
  x: number;
  y: number;
  publication?: { title: string; url: string };
}

export interface Territory {
  id: TerritoryId;
  /** Roman numeral plate number — marginalia, not decoration: it fixes
   *  reading order on a sheet that is otherwise spatially arranged. */
  plate: string;
  name: string;
  /** Zaynab's statement for this territory, from the canonical brief. */
  statement: string;
  /** What this territory means. Two sentences maximum. */
  blurb: string;
  landmarks: Landmark[];
}

export const BUILDER: Territory = {
  id: "builder",
  plate: "I",
  name: "Builder",
  statement: "I like making things real.",
  blurb:
    "Systems that went into production and stayed there — an AI radiology product owned end to end, payments infrastructure at retail scale, and a research database being rebuilt from the schema up.",
  landmarks: [
    {
      slug: "radpilot",
      name: "RadPilot",
      org: "Early-stage startup",
      role: "Founding Full-Stack Engineer",
      year: "2026 — present",
      summary:
        "Multimodal AI for radiologists: capture what's on screen, ask questions grounded in it, and keep the read in sync across devices.",
      detail:
        "Owns product features end to end at an AI radiology startup — scoping loosely defined requirements directly with founders and in client meetings, then delivering architecture, backend implementation, frontend integration, testing, and production rollout. Built a multimodal AI screen-capture workflow letting radiologists capture on-screen medical imaging and ask natural-language questions grounded in it, owning capture, image ingestion, model inference, and response delivery.",
      outcomes: [
        "Redis-backed live-handoff relay syncing active dictation and report state across devices mid-read, Clerk-authorized and case-scoped",
        "Usage analytics plus model p50/p95 latency and inference-cost pipelines",
        "AI agent execution tracing for observability",
        "Scoped requirements directly with founders and in client meetings",
      ],
      stack: ["TypeScript", "Python", "Redis", "Clerk", "Multimodal inference"],
      form: "workshop",
      x: 22,
      y: 26,
    },
    {
      slug: "llbean-payments",
      name: "Payments Infrastructure",
      org: "L.L.Bean",
      role: "Software Developer, Payments",
      year: "2025 — 2026",
      summary:
        "A production PayPal Treasury event-processing service on GKE, plus the inquiry platform internal teams use to investigate transactions.",
      detail:
        "Designed and deployed a production PayPal Treasury event-processing microservice on GKE, using Workload Identity and Secret Manager for credential-free cloud access, with containerized deployments and Kubernetes health checks. Built a full-stack payment inquiry platform (React, Express, enterprise SSO/JWT) for internal teams to securely investigate transaction activity, and developed backend and persistence infrastructure for an internal LLM prompting platform.",
      outcomes: [
        "Automated data-retention and purge pipeline via Terraform-managed Kubernetes CronJobs with least-privilege CloudSQL access",
        "Investigated production incidents across distributed services using Splunk",
        "Remediated dependency and container base-image vulnerabilities through established CI/CD",
      ],
      stack: ["Node.js", "React", "Express", "GKE", "Terraform", "Splunk"],
      form: "relay",
      x: 62,
      y: 14,
    },
    {
      slug: "cisid",
      name: "CISID Archaeology Database",
      org: "Colby College",
      role: "Research Software Engineer",
      year: "2026 — present",
      summary:
        "Rebuilding a legacy FileMaker seals database as a normalized PostgreSQL schema without losing forty years of identifiers.",
      detail:
        "Redesigning a legacy FileMaker archaeological seals database as a normalized PostgreSQL schema, separating historically conflated entities — artifacts, excavation contexts, sites, publications, images — while preserving legacy identifiers for traceability. Reverse-engineered the legacy data model, authored a comprehensive data dictionary and field-mapping specification, and validated the schema through a pilot migration on real records before full-scale migration.",
      outcomes: [
        "Partners with the principal investigator and 5 researchers to translate research vision into a public-facing platform",
        "Architecting the data layer for image storage and geospatial site queries (PostGIS)",
        "Designing AI-assisted retrieval over the collection",
      ],
      stack: ["PostgreSQL", "PostGIS", "RAG", "Data modeling"],
      form: "signal",
      x: 14,
      y: 68,
    },
    {
      slug: "colby-dining",
      name: "Colby Dining App",
      org: "Colby College",
      role: "Lead Developer",
      year: "2025",
      summary:
        "Occupancy prediction for campus dining, served over REST and used for staffing decisions.",
      detail:
        "Built a full-stack dining analytics platform — Flask/SQLAlchemy backend, React frontend — serving real-time menu updates, occupancy insights, and wait-time estimates to campus dining users. Trained and deployed an LSTM occupancy prediction model served via REST APIs for staffing decisions, and automated the manual menu-entry workflow.",
      outcomes: [
        "LSTM occupancy prediction at 85% accuracy",
        "Automated menu entry, cutting data-entry work 75%",
        "Real-time menu updates and wait-time estimates",
      ],
      stack: ["React", "Flask", "SQLAlchemy", "LSTM"],
      form: "tower",
      x: 80,
      y: 46,
    },
    {
      slug: "packet-loss-concealment",
      name: "AI Packet Loss Concealment",
      org: "Speeqr",
      role: "Software Engineering Intern",
      year: "2023",
      summary:
        "A TensorFlow system that repairs VoIP audio when the network drops packets — plus the simulator to prove it worked.",
      detail:
        "Developed an AI-driven packet loss concealment system using TensorFlow and Python, reducing audio degradation in VoIP calls. Built real-time network simulation tools in C++ and Qt to analyze and mitigate audio transmission issues — packet loss, delay, and jitter — and automated a testing pipeline for the audio processing algorithms.",
      outcomes: [
        "35% reduction in audio degradation",
        "25% decrease in customer support tickets",
        "20% improvement in call quality",
        "95% test coverage, 30% reduction in deployment errors",
      ],
      stack: ["TensorFlow", "Python", "C++", "Qt"],
      form: "relay",
      x: 48,
      y: 84,
    },
  ],
};

/** Defined now so the world composition can render all three territories
 *  truthfully from the start; their interiors are built in later milestones. */
export const RESEARCH: Territory = {
  id: "research",
  plate: "II",
  name: "Research",
  statement: "I like understanding why things work.",
  blurb:
    "Questions that needed an experiment rather than an implementation — how a colony of LLM agents remembers, and what actually changes in how people write code when a tool writes it with them.",
  landmarks: [
    {
      slug: "comp-husim",
      name: "Comp-HuSim",
      org: "Davis Institute for AI",
      role: "Research Assistant",
      year: "2024",
      summary:
        "A multi-agent persona simulation running colonies of 60 autonomous LLM agents — and the memory system that lets them stay themselves.",
      detail:
        "Engineered Comp-HuSim with a William & Mary research team: a multi-agent persona simulation platform running colonies of 60 autonomous LLM agents (GPT-4 Turbo, GPT-3.5 Turbo, Mixtral) with persistent personalities in a simulated community. Architected the agents' long-term memory system on FAISS and Postgres, and built an evaluation pipeline benchmarking agent and RAG output quality across models.",
      outcomes: [
        "Stored and retrieved 100,000+ conversation embeddings across 200+ simulation runs",
        "Processed 1,230+ agent interactions and tracked message propagation to analyze information diffusion",
        "Tuned retrieval parameters and prompt templates, cutting system overhead 40%",
        "Co-authored paper published at ACM UMAP 2024",
      ],
      stack: ["Python", "FAISS", "PostgreSQL", "GPT-4", "Mixtral", "RAG"],
      form: "tower",
      x: 24,
      y: 26,
      publication: {
        title: "ACM UMAP 2024",
        url: "https://dl.acm.org/doi/proceedings/10.1145/3631700",
      },
    },
    {
      slug: "copilot-study",
      name: "AI Developer Tool Study",
      org: "Davis Science Center",
      role: "Research Assistant",
      year: "2023 — 2024",
      summary:
        "A controlled evaluation of GitHub Copilot against unassisted coding across 420 participants, measured partly by where their eyes went.",
      detail:
        "Designed and ran a controlled evaluation of an AI developer tool (GitHub Copilot) against unassisted coding across 420 study participants, analyzing completion rates, eye-tracking metrics, debugging behavior, and code quality. Built Python tooling to process the eye-tracking and coding-behavior data.",
      outcomes: [
        "420 study participants across multi-task experiments",
        "Python tooling that saved 200+ research hours",
        "Evaluated 200 beginner code samples: Copilot users wrote 55% more code with 25% fewer style issues",
      ],
      stack: ["Python", "Eye-tracking", "Data analysis"],
      form: "signal",
      x: 74,
      y: 30,
    },
    {
      slug: "digital-twin",
      name: "Digital Twin Platform",
      org: "Allen Island",
      role: "Research Intern",
      year: "2024",
      summary:
        "High-bandwidth weather, wave, and audio sensor data moved off an island and into a VR simulation.",
      detail:
        "Architected a MongoDB database system to process high-bandwidth sensor data — weather, wave, and audio — from multiple collection points across Allen Island. Optimized the ingestion pipeline with strategic indexing for real-time VR simulation updates, and designed a cross-platform integration framework connecting the sensor networks to the OpenTwins platform.",
      outcomes: [
        "High-bandwidth sensor processing across multiple collection points",
        "Optimized query response time for real-time VR updates",
        "50% improvement in research accessibility",
        "Enabled collaboration across 3 research departments",
      ],
      stack: ["MongoDB", "IoT", "VR", "Data pipeline"],
      form: "relay",
      x: 44,
      y: 76,
    },
  ],
};

export const CREATIVITY: Territory = {
  id: "creativity",
  plate: "III",
  name: "Creativity",
  statement: "Most things I build start with “what if…?”",
  blurb:
    "Products that started as a noticed problem rather than a ticket. Both of these began with a question about something ordinary that did not work well.",
  landmarks: [
    {
      slug: "ada",
      name: "Ada",
      org: "Personal project",
      role: "Designer & Engineer",
      year: "2025",
      summary:
        "An intelligent meta-wallet that decides which card to pay with, and explains why.",
      detail:
        "Designed and shipped a full-stack AI financial assistant from zero to working product: live Plaid bank-data integration, a conversational LLM interface for querying balances and spending patterns, and personalized card recommendations. Engineered the agent loop end to end — LLM tool calling, structured outputs, merchant and category normalization — alongside a rules-based rewards engine.",
      outcomes: [
        "Backtested against 10,000+ historical transactions",
        "Improved simulated rewards 20%",
        "Cut unclassified spend 30%",
        "Live Plaid bank-data integration with a conversational LLM interface",
      ],
      stack: ["Next.js", "TypeScript", "FastAPI", "Plaid", "LLM tool calling"],
      form: "workshop",
      x: 26,
      y: 34,
    },
    {
      slug: "rewind",
      name: "Rewind",
      org: "Personal project",
      role: "Designer & Engineer",
      year: "2025",
      summary:
        "Glasses that remember — a searchable visual memory of everything you looked at.",
      detail:
        "A video memory system that processes 24-hour recordings into a searchable memory database. Combines YOLOv8 object detection, CLIP embeddings for semantic search, and Whisper transcription for audio, so that natural-language queries can find objects, events, and conversations from past recordings.",
      outcomes: [
        "Multimodal processing of video frames and audio transcripts",
        "Real-time object detection with YOLOv8",
        "Semantic search using CLIP embeddings and a FAISS vector store",
        "Natural language query interface for video memories",
      ],
      stack: ["Python", "YOLOv8", "CLIP", "Whisper", "FAISS"],
      form: "tower",
      x: 70,
      y: 62,
    },
  ],
};

export const TERRITORIES: Territory[] = [BUILDER, RESEARCH, CREATIVITY];

/** The recruiter-scan view. Deliberately conventional — the brief asks for a
 *  traditional presentation here rather than more storytelling. */
export interface Role {
  org: string;
  title: string;
  dates: string;
  location: string;
  points: string[];
}

export const EXPERIENCE: Role[] = [
  {
    org: "RadPilot",
    title: "Founding Full-Stack Engineer",
    dates: "Jun 2026 — Present",
    location: "Remote",
    points: [
      "Owns product features end to end at an AI radiology startup, from scoping requirements with founders through architecture, implementation, testing, and production rollout.",
      "Built a multimodal AI screen-capture workflow letting radiologists ask natural-language questions grounded in on-screen medical imaging.",
      "Engineered a Redis-backed live-handoff relay syncing dictation and report state across devices mid-read, plus usage analytics, latency and inference-cost pipelines, and agent execution tracing.",
    ],
  },
  {
    org: "CISID Archaeology Database, Colby College",
    title: "Research Software Engineer",
    dates: "Jun 2026 — Present",
    location: "Remote",
    points: [
      "Redesigning a legacy FileMaker archaeological seals database as a normalized PostgreSQL schema, separating historically conflated entities while preserving legacy identifiers.",
      "Reverse-engineered the legacy data model, authored a data dictionary and field-mapping specification, and validated it through a pilot migration on real records.",
      "Partners with the principal investigator and 5 researchers, architecting the data layer for image storage, PostGIS geospatial queries, and AI-assisted search.",
    ],
  },
  {
    org: "L.L.Bean",
    title: "Software Developer, Payments",
    dates: "Jun 2025 — Jun 2026",
    location: "Freeport, ME",
    points: [
      "Designed and deployed a production PayPal Treasury event-processing microservice on GKE with Workload Identity and Secret Manager for credential-free cloud access.",
      "Built a full-stack payment inquiry platform (React, Express, enterprise SSO/JWT) and backend infrastructure for an internal LLM prompting platform.",
      "Architected a Terraform-managed data-retention pipeline, investigated production incidents via Splunk, and remediated dependency and container vulnerabilities through CI/CD.",
    ],
  },
  {
    org: "Davis Institute of Artificial Intelligence, Colby College",
    title: "Research Assistant",
    dates: "Jan 2024 — Dec 2024",
    location: "Waterville, ME",
    points: [
      "Engineered Comp-HuSim with a William & Mary team: a multi-agent persona simulation running colonies of 60 autonomous LLM agents with persistent personalities.",
      "Architected the agents' long-term memory on FAISS and Postgres, handling 100,000+ conversation embeddings across 200+ simulation runs.",
      "Built an evaluation pipeline benchmarking agent and RAG output quality across GPT-4, Claude, and LLaMA; co-authored a paper published at ACM UMAP 2024.",
    ],
  },
  {
    org: "Davis Science Center, Colby College",
    title: "Research Assistant",
    dates: "Feb 2023 — Jun 2024",
    location: "Waterville, ME",
    points: [
      "Designed and ran a controlled evaluation of GitHub Copilot against unassisted coding across 420 study participants.",
      "Built Python tooling to process eye-tracking and coding-behavior data, saving 200+ research hours.",
    ],
  },
];

export const PROFILE = {
  name: "Zaynab Tariq",
  school: "Colby College",
  gradYear: "'26",
  study: "Computer Science: Artificial Intelligence",
  location: "Waterville, ME",
  email: "ztariq26@colby.edu",
  github: "https://github.com/zaynabtariq",
  linkedin: "https://linkedin.com/in/zaynabtariq",
} as const;
