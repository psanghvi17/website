"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Building2, Github, Linkedin, Mail, Phone, Sparkles, Target, Users } from "lucide-react"

const milestones = [
  {
    title: "M.Tech, IIT Guwahati",
    period: "2016 - 2018",
    summary: "Deep focus on AI, information retrieval, and algorithms.",
    highlights: ["GATE CSE 2016 · 99.71 percentile", "Research-led delivery", "Advanced systems focus"],
  },
  {
    title: "IBM GTS Labs",
    period: "2018 - 2021",
    summary: "Built automation tools and microservices for enterprise teams.",
    highlights: ["Python development", "Migration tooling", "Enterprise standards"],
  },
  {
    title: "Kyndryl Labs",
    period: "2021 - 2022",
    summary: "Cloud modernization and software-defined migration efforts.",
    highlights: ["Cloud-native delivery", "Performance optimization", "Systems observability"],
  },
  {
    title: "Cozytech",
    period: "2022 - Present",
    summary: "Co-founded and scaled a boutique software studio delivering 10+ products.",
    highlights: ["Led a team of 6 engineers", "20+ projects delivered", "Founder-led delivery"],
  },
]

const phases = [
  {
    title: "Corporate Foundation",
    description: "Four years shaping delivery discipline, stakeholder alignment, and architectural rigor.",
    outcomes: ["Enterprise-grade delivery", "Migration and automation", "Process-first execution"],
  },
  {
    title: "Solo Builder",
    description: "Delivered projects end-to-end while refining product and client workflows.",
    outcomes: ["Full lifecycle ownership", "Client-facing execution", "Repeatable delivery system"],
  },
  {
    title: "Team Builder",
    description: "Scaled a collaborative engineering team and expanded delivery capacity.",
    outcomes: ["Team leadership", "Multi-project throughput", "Operational maturity"],
  },
]

const stats = [
  { label: "Total Experience", value: "9+ Years" },
  { label: "Products Delivered", value: "10+" },
  { label: "Active Users", value: "550+" },
  { label: "Team Size", value: "6 Engineers" },
]

const cardBase =
  "border-white/10 bg-[#111216]/95 text-slate-100 backdrop-blur shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
const badgeBase = "bg-white/10 text-slate-200 border-white/10"

export default function MyStoryPage() {
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
              My Journey
            </div>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
              <div className="space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-slate-50">
                  From IIT classrooms to founder-led delivery
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl">
                  A path shaped by enterprise rigor, entrepreneurial risk, and a constant focus on high-impact software.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  {[
                    { label: "Milestones", href: "#milestones" },
                    { label: "Growth", href: "#growth" },
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
                    <span className="text-sm uppercase tracking-[0.2em] text-emerald-200">Now</span>
                    <span className="text-xs text-slate-400">Cozytech · Indore</span>
                  </div>
                  <p className="text-sm text-slate-300">
                    Leading delivery for recruitment, logistics, and enterprise modernization platforms.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Founder", "Architect", "Team Lead", "Product Strategy"].map((tag) => (
                      <Badge key={tag} className={badgeBase}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in" style={{ animationDelay: "120ms" }}>
            {stats.map((stat) => (
              <Card key={stat.label} className={cardBase}>
                <CardContent className="p-5">
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </section>

          <section id="milestones" className="space-y-6 animate-fade-in" style={{ animationDelay: "240ms" }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Milestones</div>
                <h2 className="font-display text-3xl sm:text-4xl text-white">A focused progression</h2>
              </div>
              <Target className="h-6 w-6 text-emerald-200" />
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {milestones.map((milestone) => (
                <Card key={milestone.title} className={cardBase}>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-xl font-semibold text-white">{milestone.title}</div>
                        <div className="text-xs text-amber-200 mt-1">{milestone.period}</div>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-slate-400" />
                    </div>
                    <p className="text-sm text-slate-300">{milestone.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {milestone.highlights.map((highlight) => (
                        <Badge key={highlight} className={badgeBase}>
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section
            id="growth"
            className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] animate-fade-in"
            style={{ animationDelay: "360ms" }}
          >
            <Card className={cardBase}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-emerald-200">
                  <Building2 className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.2em]">Corporate Foundation</span>
                </div>
                <p className="text-sm text-slate-300">
                  The first four years grounded me in enterprise-grade delivery, process rigor, and building systems that scale.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Migration tooling",
                    "Automation platforms",
                    "Governance & compliance",
                    "Cross-team collaboration",
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
                <div className="flex items-center gap-2 text-emerald-200">
                  <Users className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.2em]">Entrepreneurial Growth</span>
                </div>
                <div className="space-y-4">
                  {phases.map((phase) => (
                    <div key={phase.title} className="rounded-2xl border border-white/10 bg-[#0f1013]/80 p-4">
                      <div className="text-sm font-semibold text-white">{phase.title}</div>
                      <p className="text-xs text-slate-300 mt-1">{phase.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {phase.outcomes.map((outcome) => (
                          <Badge key={outcome} className={badgeBase}>
                            {outcome}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
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
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Let’s build</div>
                <h3 className="font-display text-2xl sm:text-3xl text-white">Want a partner who’s been through it?</h3>
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
