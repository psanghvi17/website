import {
  Award,
  Calendar,
  Cpu,
  Database,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Server,
  Sparkles,
  Users,
  Zap,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
    users: "550+ Active Users",
    description: "End-to-end recruitment management with payroll and SEPA automation.",
    tech: ["Node.js", "PostgreSQL", "Docker", "Microservices"],
    features: ["Candidate onboarding", "Timesheets", "Payroll & SEPA", "Invoice generation"],
    status: "Live",
  },
  {
    name: "CustomWise",
    type: "Integration Platform",
    description: "Customs broker integration with UK and Ireland government systems.",
    tech: ["SOAP", "XML", "HMRC API", "Revenue Ireland"],
    features: ["Multi-agency integration", "Safety & security module", "Real-time processing"],
    status: "Live",
  },
  {
    name: "Employee Evaluation System",
    type: "Enterprise Tool",
    description: "Performance management suite with analytics-driven reporting.",
    tech: ["Express.js", "App Connect", "PostgreSQL"],
    features: ["Performance tracking", "Report generation", "Admin dashboard"],
    status: "Live",
  },
  {
    name: "Architectural CRM",
    type: "Custom Solution",
    description: "Project management and client portal for architectural firms.",
    tech: ["Node.js", "MongoDB", "Custom Workflow Engine"],
    features: ["Project management", "Client portal", "Attendance tracking"],
    status: "Live",
  },
]

const experience = [
  {
    role: "Co-Founder",
    company: "Cozytech",
    period: "11/2022 - Present",
    location: "Indore, India",
    type: "Startup",
    highlights: ["Led a team of 6 engineers", "10+ successful launches", "Full-stack architecture"],
  },
  {
    role: "Sr. Software Developer",
    company: "Kyndryl Labs",
    period: "09/2021 - 11/2022",
    location: "Indore, India",
    type: "Enterprise",
    highlights: ["Software defined migration", "Cloud modernization", "Enterprise solutions"],
  },
  {
    role: "Software Developer",
    company: "IBM GTS Labs",
    period: "07/2018 - 08/2021",
    location: "Indore, India",
    type: "Enterprise",
    highlights: ["Microservices architecture", "Service automation", "Migration tools"],
  },
]

const cardBase = "border-white/10 bg-[#111216]/95 text-slate-100 backdrop-blur shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
const cardSoft = "border-white/10 bg-[#0f1013]/85 text-slate-100 backdrop-blur"
const badgeBase = "bg-white/10 text-slate-200 border-white/10"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-slate-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-400/25 blur-[120px] animate-glow" />
        <div className="pointer-events-none absolute top-10 right-10 h-56 w-56 rounded-full bg-amber-300/20 blur-[100px] animate-float-slow" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
          <section id="top" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-emerald-200">
                <Sparkles className="h-4 w-4" />
                Senior Software Developer
              </div>

              <div className="space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-slate-50">
                  Pranay Sanghvi
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 max-w-xl">
                  Co-founder building resilient, high-performance platforms for hiring, logistics, and enterprise transformation.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-[#0b0b0c] transition hover:bg-emerald-300"
                  href="mailto:sanghvipranay17@gmail.com"
                >
                  <Mail className="h-4 w-4" />
                  Reach out
                </a>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm text-slate-200">
                  <MapPin className="h-4 w-4 text-emerald-200" />
                  Indore, India
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-emerald-200 transition-colors"
                  href="#projects"
                >
                  Featured Work
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-emerald-200 transition-colors"
                  href="#journey"
                >
                  Career Journey
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-emerald-200 transition-colors"
                  href="#education"
                >
                  Education
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-emerald-200 transition-colors"
                  href="#contact"
                >
                  Contact
                </a>
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

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Years of Experience", value: "9+", icon: Calendar },
                  { label: "Team Leadership", value: "6 Engineers", icon: Users },
                  { label: "Products Delivered", value: "10+", icon: Cpu },
                  { label: "Active Users", value: "550+", icon: Zap },
                ].map((stat) => (
                  <Card key={stat.label} className={cardSoft}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-semibold text-white">{stat.value}</div>
                          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
                        </div>
                        <stat.icon className="h-6 w-6 text-emerald-200" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className={cardBase}>
              <CardContent className="p-6 space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  I lead product architecture from zero-to-one and scale existing platforms with a focus on performance,
                  reliability, and delightful UX. Known for blending engineering rigor with founder-level ownership.
                </p>
                <div className="rounded-2xl border border-white/10 bg-[#0f1013]/80 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Focus Areas</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Architecture", "Cloud", "Product Strategy", "Hiring Systems", "Integrations"].map((tag) => (
                      <Badge key={tag} className={badgeBase}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section
            id="journey"
            className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] animate-fade-in"
            style={{ animationDelay: "120ms" }}
          >
            <Card className={cardBase}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-emerald-200">
                  <GitBranch className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.2em]">Career Journey</span>
                </div>
                <div className="space-y-4">
                  {experience.map((exp) => (
                    <div key={exp.company} className="border-l border-white/10 pl-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-lg font-semibold text-white">{exp.role}</div>
                          <div className="text-sm text-emerald-200">{exp.company}</div>
                        </div>
                        <span className="text-xs uppercase text-slate-400">{exp.type}</span>
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {exp.period} · {exp.location}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.highlights.map((highlight) => (
                          <Badge key={highlight} className={badgeBase}>
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={cardBase}>
              <CardContent className="p-6 space-y-5">
                <div className="flex items-center gap-2 text-amber-200">
                  <Cpu className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.2em]">Toolbox</span>
                </div>
                <p className="text-sm text-slate-300">
                  Comfortably moving from backend systems to product strategy with a strong bias for clarity and clean
                  interfaces.
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} className={badgeBase}>
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "System design reviews",
                    "Scalable API development",
                    "Cloud-native deployments",
                    "Workflow automation",
                  ].map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-[#0f1013]/80 px-4 py-3 text-sm text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="projects" className="space-y-6 animate-fade-in" style={{ animationDelay: "240ms" }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Selected Work</div>
                <h2 className="font-display text-3xl sm:text-4xl text-white">Platforms that power real operations</h2>
              </div>
              <Server className="h-7 w-7 text-emerald-200" />
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
                      <span className="rounded-full border border-emerald-300/40 px-3 py-1 text-xs text-emerald-200">
                        {project.status}
                      </span>
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
                          {project.features.map((feature) => (
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
            id="education"
            className="grid gap-6 lg:grid-cols-2 animate-fade-in"
            style={{ animationDelay: "360ms" }}
          >
            <Card className={cardBase}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-emerald-200">
                  <Database className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.2em]">Education</span>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-[#0f1013]/80 p-5">
                    <div className="text-lg font-semibold text-white">M.Tech Computer Science</div>
                    <div className="text-sm text-emerald-200">Indian Institute of Technology, Guwahati</div>
                    <div className="text-xs text-slate-400 mt-1">2016 - 2018</div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["AI", "Information Retrieval", "Algorithms"].map((tag) => (
                        <Badge key={tag} className={badgeBase}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[#0f1013]/80 p-5">
                    <div className="text-lg font-semibold text-white">Bachelor of Engineering in Information Technology</div>
                    <div className="text-sm text-emerald-200">IET-DAVV</div>
                    <div className="text-xs text-slate-400 mt-1">2011 - 2015</div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Algorithms", "DBMS", "Operating Systems"].map((tag) => (
                        <Badge key={tag} className={badgeBase}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={cardBase}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-amber-200">
                  <Award className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.2em]">Recognition</span>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      title: "Patent Holder",
                      detail: "Application Driven Configuration of Service Management Tools",
                    },
                    { title: "GATE CSE 2016", detail: "99.71 percentile" },
                    { title: "Certified", detail: "Applied Data Science with Python - Level 2" },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-[#0f1013]/80 p-4">
                      {item.title === "Patent Holder" ? (
                        <a
                          className="text-sm font-semibold text-white hover:text-emerald-200 transition-colors"
                          href="https://www.credly.com/badges/2a3071e0-f3d2-4470-90cc-98eba8a3dcf8/linked_in_profile"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <div className="text-sm font-semibold text-white">{item.title}</div>
                      )}
                      <div className="text-xs text-slate-300 mt-1">{item.detail}</div>
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
                <h3 className="font-display text-2xl sm:text-3xl text-white">
                  Ready to design your next product milestone
                </h3>
              </div>
              <a
                className="inline-flex items-center gap-2 rounded-full bg-amber-200 px-6 py-3 text-sm font-semibold text-[#0b0b0c] transition hover:bg-amber-100"
                href="mailto:sanghvipranay17@gmail.com"
              >
                Start a conversation
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
