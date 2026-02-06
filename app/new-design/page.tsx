import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Code2, Layers, Mail, Phone, Linkedin, Github, Sparkles } from "lucide-react"

const skills = [
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "Microservices",
  "MongoDB",
  "Cloud Deployment",
  "Systems Design",
  "Observability",
  "API Architecture",
]

const projects = [
  {
    name: "RecruitPro",
    type: "SaaS Platform",
    description: "End-to-end recruitment management with payroll and SEPA automation.",
    users: "550+ Active Users",
    tech: ["Node.js", "PostgreSQL", "Docker", "Microservices"],
    highlights: ["Candidate onboarding", "Timesheets", "Payroll & SEPA", "Invoice generation"],
  },
  {
    name: "Revenue Assistant",
    type: "RAG Chatbot",
    description:
      "Built a revenue.ie knowledge assistant by scraping and cleaning content, then grounding responses in vectorized documents.",
    tech: ["OpenAI API", "Supabase", "Embeddings", "RAG Pipeline"],
    highlights: [
      "Scraped revenue.ie HTML content",
      "Data cleaning + document normalization",
      "Vector store per document in Supabase",
      "Retrieval + prompt orchestration for answers",
    ],
  },
  {
    name: "CustomWise",
    type: "Integration Platform",
    description: "Customs broker integration with UK and Ireland government systems.",
    tech: ["SOAP", "XML", "HMRC API", "Revenue Ireland"],
    highlights: ["Multi-agency integration", "Safety & security module", "Real-time processing"],
  },
  {
    name: "Employee Evaluation System",
    type: "Enterprise Tool",
    description: "Performance management suite with analytics-driven reporting.",
    tech: ["Express.js", "App Connect", "PostgreSQL"],
    highlights: ["Performance tracking", "Report generation", "Admin dashboard"],
  },
  {
    name: "Architectural CRM",
    type: "Custom Solution",
    description: "Project management and client portal for architectural firms.",
    tech: ["Node.js", "MongoDB", "Custom Workflow Engine"],
    highlights: ["Project management", "Client portal", "Attendance tracking"],
  },
]

const metrics = [
  { label: "Products Delivered", value: "10+" },
  { label: "Active Users", value: "550+" },
  { label: "Team Size", value: "6" },
  { label: "Years Building", value: "9+" },
]

const cardBase =
  "border-white/10 bg-[#111216]/95 text-slate-100 backdrop-blur shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
const badgeBase = "bg-white/10 text-slate-200 border-white/10"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-slate-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-400/25 blur-[120px] animate-glow" />
        <div className="pointer-events-none absolute top-10 right-10 h-56 w-56 rounded-full bg-amber-300/20 blur-[100px] animate-float-slow" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
          <section id="top" className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-emerald-200">
              <Sparkles className="h-4 w-4" />
              Portfolio
            </div>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
              <div className="space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-slate-50">
                  Platforms built for clarity, scale, and longevity
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl">
                  From SaaS to enterprise platforms, each engagement focuses on removing friction and accelerating real-world operations.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  {[
                    { label: "Work", href: "#work" },
                    { label: "Capabilities", href: "#capabilities" },
                    { label: "Contact", href: "#contact" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-emerald-200 transition-colors"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <a
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:text-emerald-200 transition-colors"
                    href="mailto:sanghvipranay17@gmail.com"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:text-emerald-200 transition-colors"
                    href="tel:+919127396670"
                    aria-label="Phone"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                  <a
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:text-emerald-200 transition-colors"
                    href="https://www.linkedin.com/in/pranaysanghvi"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:text-emerald-200 transition-colors"
                    href="https://github.com/psanghvi17"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <Card className={cardBase}>
                <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm uppercase tracking-[0.2em] text-emerald-200">Focus</span>
                </div>
                  <p className="text-sm text-slate-300">
                    Building resilient architecture, shipping fast with small teams, and keeping stakeholders aligned.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.slice(0, 6).map((skill) => (
                      <Badge key={skill} className={badgeBase}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in" style={{ animationDelay: "120ms" }}>
            {metrics.map((metric) => (
              <Card key={metric.label} className={cardBase}>
                <CardContent className="p-5">
                  <div className="text-2xl font-semibold text-white">{metric.value}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </section>

          <section id="work" className="space-y-6 animate-fade-in" style={{ animationDelay: "240ms" }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Featured Work</div>
                <h2 className="font-display text-3xl sm:text-4xl text-white">Selected engagements</h2>
              </div>
              <Briefcase className="h-6 w-6 text-emerald-200" />
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {projects.map((project) => (
                <Card key={project.name} className={cardBase}>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-xl font-semibold text-white">{project.name}</div>
                        <div className="text-sm text-emerald-200">{project.type}</div>
                        {project.users && <div className="text-xs text-amber-200 mt-1">{project.users}</div>}
                      </div>
                      <Layers className="h-5 w-5 text-slate-400" />
                    </div>
                    <p className="text-sm text-slate-300">{project.description}</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Tech</div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} className={badgeBase}>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Highlights</div>
                        <ul className="mt-2 space-y-1 text-xs text-slate-300">
                          {project.highlights.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section
            id="capabilities"
            className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] animate-fade-in"
            style={{ animationDelay: "360ms" }}
          >
            <Card className={cardBase}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-emerald-200">
                  <Code2 className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.2em]">Capabilities</span>
                </div>
                <p className="text-sm text-slate-300">
                  I focus on system design, deployment strategy, and delivery velocity. Each project follows a repeatable process
                  for discovery, architecture, and measurable outcomes.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Architecture audits",
                    "Backend platform rebuilds",
                    "High-stakes integrations",
                    "Product reliability sprints",
                  ].map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-[#0f1013]/80 px-4 py-3 text-sm text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={cardBase}>
              <CardContent className="p-6 space-y-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Toolbox</div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} className={badgeBase}>
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-slate-300">
                  The stack is flexible; the priority is always reliability, observability, and maintainability.
                </p>
              </CardContent>
            </Card>
          </section>

          <section
            id="contact"
            className="rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-300/10 via-white/5 to-amber-200/10 p-6 sm:p-8 animate-fade-in"
            style={{ animationDelay: "480ms" }}
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Need a build partner?</div>
                <h3 className="font-display text-2xl sm:text-3xl text-white">Let’s scope the next milestone</h3>
              </div>
              <a
                className="inline-flex items-center gap-2 rounded-full bg-amber-200 px-6 py-3 text-sm font-semibold text-[#0b0b0c] transition hover:bg-amber-100"
                href="mailto:sanghvipranay17@gmail.com"
              >
                Start a conversation
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-300">
              <a className="hover:text-emerald-200 transition-colors" href="mailto:sanghvipranay17@gmail.com">
                sanghvipranay17@gmail.com
              </a>
              <a className="hover:text-emerald-200 transition-colors" href="tel:+919127396670">
                +91 91273 96670
              </a>
              <a
                className="hover:text-emerald-200 transition-colors"
                href="https://www.linkedin.com/in/pranaysanghvi"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/pranaysanghvi
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
