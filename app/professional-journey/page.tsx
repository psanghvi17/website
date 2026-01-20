"use client"

import { useEffect, useRef } from "react"
import { ChevronDown, Mail, Linkedin, Calendar, Building } from "lucide-react"

export default function ProfessionalJourneyPage() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
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
        "Delivered 5+ projects as a solo developer",
        "Managed end-to-end project lifecycle",
        "Built client relationships and business processes",
        "Established company foundation and reputation"
      ]
    },
    {
      id: 5,
      period: "2023 - Present",
      title: "Co-Founder & Team Leader",
      role: "Company Co-Founder",
      company: "Cozytech",
      icon: "👥",
      color: "from-indigo-500 to-purple-500",
      side: "left",
      details: [
        "Leading a team of 6 developers",
        "Delivered 20+ successful projects",
        "Managing multiple client relationships",
        "Scaling business operations",
        "Mentoring junior developers",
        "Architecting scalable solutions"
      ]
    }
  ]

  const skills = [
    { name: "Python", icon: "🐍", color: "from-green-500 to-emerald-500" },
    { name: "Node.js", icon: "⚡", color: "from-yellow-500 to-orange-500" },
    { name: "Go", icon: "🔵", color: "from-blue-500 to-cyan-500" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-indigo-600" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-emerald-600" },
    { name: "Docker", icon: "🐳", color: "from-blue-500 to-cyan-500" },
    { name: "AWS", icon: "☁️", color: "from-orange-500 to-red-500" },
    { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { name: "Microservices", icon: "🔧", color: "from-purple-500 to-pink-500" },
    { name: "CI/CD", icon: "🔄", color: "from-green-500 to-teal-500" },
    { name: "Git", icon: "📝", color: "from-orange-500 to-red-500" },
    { name: "Agile", icon: "🎯", color: "from-blue-500 to-indigo-500" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.05%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-pulse"></div>
        
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text text-transparent">
              My Professional Journey
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From a fresh IIT graduate to a successful entrepreneur leading a team of developers. 
              Here's my evolution through the tech industry.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <span className="text-lg sm:text-xl">🎓</span>
              <span className="text-sm sm:text-base font-semibold">IIT Guwahati Graduate</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <span className="text-lg sm:text-xl">🏢</span>
              <span className="text-sm sm:text-base font-semibold">4 Years Corporate</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <span className="text-lg sm:text-xl">🚀</span>
              <span className="text-sm sm:text-base font-semibold">2+ Years Entrepreneur</span>
            </div>
          </div>

          <button
            onClick={scrollToTimeline}
            className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center gap-2 sm:gap-3">
              <span>Explore My Journey</span>
              <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
            </span>
          </button>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Career Timeline
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              A chronological journey through my professional growth and achievements
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>

            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
              {timelineData.map((item, index) => (
                <div
                  key={item.id}
                  className={`timeline-card opacity-0 transform translate-y-10 transition-all duration-1000 ${
                    item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                  } flex flex-col md:flex-row items-center gap-6 sm:gap-8`}
                >
                  <div className={`w-full md:w-5/12 ${item.side === "left" ? "md:text-right" : "md:text-left"}`}>
                    <div
                      className={`bg-gradient-to-br ${item.color} rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="text-2xl sm:text-3xl">{item.icon}</div>
                        <div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{item.title}</h3>
                          <p className="text-sm sm:text-base lg:text-lg opacity-90">{item.role}</p>
                        </div>
                      </div>
                      
                      <div className="mb-3 sm:mb-4">
                        <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold">
                          <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                          {item.company}
                        </div>
                      </div>

                      <div className="mb-4 sm:mb-6">
                        <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          {item.period}
                        </div>
                      </div>

                      <ul className="space-y-1 sm:space-y-2">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                            <span className="text-white/80 mt-1">•</span>
                            <span className="text-white/90 leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="hidden md:flex w-6 h-6 sm:w-8 sm:h-8 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10"></div>

                  <div className="md:hidden w-full h-6 sm:h-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I've mastered throughout my journey
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${skill.color} rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{skill.icon}</div>
                <h3 className="font-bold text-xs sm:text-sm">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
              Ready to discuss opportunities or collaborate on exciting projects
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <a
              href="mailto:sanghvipranay17@gmail.com"
              className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              aria-label="Send email"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="break-all">sanghvipranay17@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/pranaysanghvi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="tel:+919127396670"
              className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              aria-label="Call phone number"
            >
              <span>📱</span>
              <span>+91 9127396670</span>
            </a>
          </div>

          <div className="border-t border-gray-700 pt-6 sm:pt-8">
            <p className="text-gray-400 text-sm sm:text-base">
              © 2024 Pranay Sanghvi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 