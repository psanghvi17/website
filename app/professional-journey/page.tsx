"use client"

import { useEffect, useRef } from "react"
import { ChevronDown, Mail, Linkedin, Github, Calendar, MapPin, Building } from "lucide-react"

export default function ProfessionalJourneyPage() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Intersection Observer for fade-in animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    const timelineCards = document.querySelectorAll(".timeline-card")
    timelineCards.forEach((card) => {
      observerRef.current?.observe(card)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const timelineData = [
    {
      id: 1,
      period: "2016 - 2018",
      title: "IIT Guwahati",
      role: "M.Tech Computer Science",
      company: "Graduation",
      icon: "🎓",
      color: "from-blue-500 to-cyan-500",
      side: "left",
      details: [
        "B.Tech in Computer Science, IIT Guwahati",
        "Graduated: 2018",
        "99.71% GATE Score",
        "AI & Algorithms Expertise",
        "Information Retrieval Specialization"
      ]
    },
    {
      id: 2,
      period: "2018 - 2021",
      title: "IBM GTS Labs",
      role: "Junior Python Developer",
      company: "IBM",
      icon: "🏢",
      color: "from-green-500 to-emerald-500",
      side: "right",
      details: [
        "Joined fresh out of college",
        "Learned software development life-cycle, best practices, team processes",
        "Delivered 2+ internal tools and client projects using Python",
        "Python development fundamentals",
        "Enterprise processes & standards",
        "Team collaboration & code reviews"
      ]
    },
    {
      id: 3,
      period: "2021 - 2022",
      title: "Kyndryl Labs",
      role: "Software Developer",
      company: "Kyndryl",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500",
      side: "left",
      details: [
        "Built services in Python and Go",
        "Contributed to microservices project, API design, performance tuning",
        "GoLang programming",
        "Cloud-native development",
        "Modern development tools",
        "Performance optimization"
      ]
    },
    {
      id: 4,
      period: "2022 - 2023",
      title: "Founder & Solo Developer",
      role: "Entrepreneur",
      company: "My Company",
      icon: "🚀",
      color: "from-orange-500 to-red-500",
      side: "right",
      details: [
        "Launched my own software development company",
        "Managed entire SDLC: requirements gathering, architecture, coding, testing, deployment, maintenance",
        "Delivered 5 end-to-end projects single-handedly",
        "Wearing all hats - developer, PM, client manager",
        "Developed efficient processes and client communication",
        "Built reputation and steady client base"
      ]
    },
    {
      id: 5,
      period: "2023 - Present",
      title: "Team Lead & CEO",
      role: "Company Founder",
      company: "Scaling Up",
      icon: "👨‍💼",
      color: "from-indigo-500 to-purple-500",
      side: "left",
      details: [
        "Scaled the team from 1 to 6 developers",
        "Oversaw 25+ full-cycle projects for diverse clients",
        "Implemented Agile workflows, CI/CD pipelines, client-facing demos",
        "750+ active SaaS users",
        "100% client satisfaction",
        "Profitable business model"
      ]
    }
  ]

  const skills = [
    { name: "Python", icon: "🐍", color: "from-blue-500 to-cyan-500" },
    { name: "Go", icon: "🚀", color: "from-cyan-500 to-blue-500" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-500 to-orange-500" },
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-700" },
    { name: "HTML5", icon: "🌐", color: "from-orange-500 to-red-500" },
    { name: "CSS3", icon: "🎨", color: "from-blue-500 to-purple-500" },
    { name: "Git", icon: "📝", color: "from-orange-600 to-red-600" },
    { name: "Docker", icon: "🐳", color: "from-blue-600 to-cyan-600" },
    { name: "AWS", icon: "☁️", color: "from-orange-500 to-yellow-500" },
    { name: "CI/CD", icon: "🔄", color: "from-green-500 to-emerald-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-600 to-green-700" },
    { name: "Django", icon: "🐘", color: "from-green-700 to-green-800" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">6+ Years of Experience</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Pranay Sanghvi
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-200">
            My Professional Journey
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            From junior Python developer at IBM to founder and CEO of a successful software development company
          </p>

          <button
            onClick={scrollToTimeline}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            aria-label="Scroll to timeline"
          >
            <span>Scroll to Timeline</span>
            <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
              Career Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A journey from academic excellence to entrepreneurial success
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 hidden md:block"></div>

            {/* Timeline Cards */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div
                  key={item.id}
                  className={`timeline-card opacity-0 transform translate-y-10 transition-all duration-700 ${
                    item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                  } flex flex-col md:flex-row items-center gap-8`}
                >
                  {/* Card */}
                  <div className={`w-full md:w-5/12 ${item.side === "left" ? "md:text-right" : "md:text-left"}`}>
                    <div
                      className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-3xl">{item.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold">{item.title}</h3>
                          <p className="text-lg opacity-90">{item.role}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-semibold">
                          <Building className="w-4 h-4" />
                          {item.company}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-semibold">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-white/80 mt-1">•</span>
                            <span className="text-white/90 leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-8 h-8 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10"></div>

                  {/* Spacer for mobile */}
                  <div className="md:hidden w-full h-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I've mastered throughout my journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${skill.color} rounded-2xl p-6 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="font-bold text-sm">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              Ready to discuss opportunities or collaborate on exciting projects
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="mailto:sanghvipranay17@gmail.com"
              className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              aria-label="Send email"
            >
              <Mail className="w-5 h-5" />
              <span>sanghvipranay17@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/pranaysanghvi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="tel:+919127396670"
              className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              aria-label="Call phone number"
            >
              <span>📱</span>
              <span>+91 9127396670</span>
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 Pranay Sanghvi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 