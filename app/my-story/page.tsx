"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Building, GraduationCap } from "lucide-react"

export default function MyStoryPage() {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % 4)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const journey = [
    {
      phase: "College Graduate",
      icon: "🎓",
      title: "IIT Guwahati",
      period: "2016-2018",
      description: "M.Tech Computer Science - Ready to change the world!",
      color: "from-blue-500 to-cyan-500",
      achievements: ["🏆 99.71% GATE Score", "🤖 AI & Algorithms Expertise", "🔍 Information Retrieval"],
    },
    {
      phase: "Corporate Learning",
      icon: "🏢",
      title: "IBM & Kyndryl",
      period: "2018-2022",
      description: "4 years of enterprise experience - Learning the ropes",
      color: "from-green-500 to-emerald-500",
      achievements: ["🐍 Python Mastery", "🔄 Software Lifecycle", "⚙️ Enterprise Processes", "🚀 GoLang Skills"],
    },
    {
      phase: "Solo Entrepreneur",
      icon: "🚀",
      title: "Going Solo",
      period: "2022-2023",
      description: "Taking the leap - Building projects single-handedly",
      color: "from-purple-500 to-pink-500",
      achievements: ["💼 5 Solo Projects", "🎯 End-to-End Ownership", "👨‍💼 Project Management", "🤝 Client Relations"],
    },
    {
      phase: "Team Builder",
      icon: "👥",
      title: "Scaling Up",
      period: "2023-Present",
      description: "Building a team and delivering at scale",
      color: "from-orange-500 to-red-500",
      achievements: [
        "👨‍💻 6-Member Team",
        "📈 20+ Projects Delivered",
        "🏆 750+ Active Users",
        "💰 Profitable Business",
      ],
    },
  ]

  const corporateExperience = [
    {
      company: "IBM GTS Labs",
      role: "Junior Python Developer",
      period: "2018-2021",
      duration: "3 Years",
      description: "Fresh out of IIT, eager to learn and contribute",
      learnings: [
        "🐍 Python development fundamentals",
        "🔄 Software development lifecycle",
        "📋 Enterprise processes & standards",
        "🤝 Team collaboration & code reviews",
        "🏗️ System architecture basics",
        "📊 Project delivery methodologies",
      ],
      projects: "Developed multiple internal automation tools and microservices",
      color: "from-blue-600 to-blue-700",
    },
    {
      company: "Kyndryl Labs",
      role: "Software Developer",
      period: "2021-2022",
      duration: "1 Year",
      description: "Expanding skills with new technologies",
      learnings: [
        "🚀 GoLang programming",
        "☁️ Cloud-native development",
        "🔧 Modern development tools",
        "📈 Performance optimization",
        "🔒 Security best practices",
      ],
      projects: "Worked on cloud migration and modernization projects",
      color: "from-green-600 to-green-700",
    },
  ]

  const entrepreneurialJourney = [
    {
      phase: "The Leap",
      period: "Late 2022",
      description: "Left corporate job to start my own software company",
      challenge: "No team, no clients, just skills and determination",
      solution: "Started taking on small projects as a solo developer",
      outcome: "Successfully delivered 5 projects end-to-end",
      color: "from-purple-500 to-pink-500",
    },
    {
      phase: "Solo Success",
      period: "2022-2023",
      description: "Wearing all hats - developer, PM, client manager",
      challenge: "Managing entire project lifecycle alone",
      solution: "Developed efficient processes and client communication",
      outcome: "Built reputation and steady client base",
      color: "from-cyan-500 to-blue-500",
    },
    {
      phase: "Team Building",
      period: "2023-Present",
      description: "Gradually hiring and building a development team",
      challenge: "Scaling operations while maintaining quality",
      solution: "Hired 6 skilled developers and established workflows",
      outcome: "Delivered 20+ projects with growing team",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const currentStats = [
    { label: "Total Experience", value: "6+ Years", icon: "⏰", color: "from-blue-500 to-cyan-500" },
    { label: "Corporate Years", value: "4 Years", icon: "🏢", color: "from-green-500 to-emerald-500" },
    { label: "Entrepreneur Years", value: "2+ Years", icon: "🚀", color: "from-purple-500 to-pink-500" },
    { label: "Team Size", value: "6 Developers", icon: "👥", color: "from-orange-500 to-red-500" },
    { label: "Projects Delivered", value: "25+", icon: "📊", color: "from-indigo-500 to-purple-500" },
    { label: "Active Users", value: "750+", icon: "👤", color: "from-pink-500 to-rose-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto p-6 space-y-12">
        {/* Hero Section */}
        <div
          className={`text-center py-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-8 py-4 mb-6">
              <GraduationCap className="w-8 h-8" />
              <span className="text-2xl font-bold">From IIT Graduate to Tech Entrepreneur</span>
            </div>
          </div>

          <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Professional Journey
          </h1>

          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            From a <span className="text-cyan-400 font-bold">fresh IIT graduate</span> to a
            <span className="text-purple-400 font-bold"> successful entrepreneur</span> leading a team of{" "}
            <span className="text-pink-400 font-bold">6 developers</span>. Here's how I evolved from
            <span className="text-yellow-400 font-bold"> junior developer</span> to
            <span className="text-green-400 font-bold"> company founder</span>.
          </p>

          {/* Current Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {currentStats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.color} rounded-3xl p-4 transform hover:scale-105 transition-all duration-300`}
                style={{ borderRadius: "25px 8px 25px 8px" }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-xl font-black text-white">{stat.value}</div>
                <div className="text-xs font-semibold text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <Card
          className="bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-purple-500/30 shadow-2xl"
          style={{ borderRadius: "40px 20px 40px 20px" }}
        >
          <CardContent className="p-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Evolution Timeline
              </h2>
              <p className="text-xl text-gray-300">Four distinct phases of my professional growth</p>
            </div>

            <div className="relative">
              {/* Timeline Flow */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {journey.map((phase, index) => (
                  <div
                    key={index}
                    className={`relative transition-all duration-500 ${
                      currentPhase === index ? "scale-110 z-10" : "scale-100"
                    }`}
                  >
                    <div
                      className={`bg-gradient-to-br ${phase.color} rounded-3xl p-6 border-4 ${
                        currentPhase === index ? "border-white shadow-2xl" : "border-transparent"
                      } transition-all duration-500 min-w-[280px]`}
                      style={{ borderRadius: "30px 10px 30px 10px" }}
                    >
                      <div className="text-4xl mb-3 text-center">{phase.icon}</div>
                      <div className="text-sm font-bold text-white/80 text-center mb-1">{phase.phase}</div>
                      <div className="text-xl font-black text-white text-center mb-2">{phase.title}</div>
                      <div className="text-sm text-white/90 text-center mb-3">{phase.period}</div>
                      <div className="text-sm text-white/90 text-center mb-4">{phase.description}</div>
                      <div className="space-y-1">
                        {phase.achievements.map((achievement, idx) => (
                          <div key={idx} className="text-xs text-white/80 text-center">
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                    {index < journey.length - 1 && (
                      <ArrowRight className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-purple-400 w-6 h-6 hidden lg:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Corporate Experience */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Corporate Foundation
            </h2>
            <p className="text-xl text-gray-300">4 years of enterprise experience that shaped my skills</p>
          </div>

          {corporateExperience.map((exp, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${exp.color} border-4 border-white/20 shadow-2xl hover:scale-[1.02] transition-all duration-300`}
              style={{ borderRadius: index % 2 === 0 ? "50px 20px 50px 20px" : "20px 50px 20px 50px" }}
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <Building className="w-8 h-8 text-white" />
                      <div>
                        <h3 className="text-3xl font-black text-white">{exp.company}</h3>
                        <p className="text-xl text-white/90">{exp.role}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 mb-4">
                      <div className="bg-white/20 rounded-full px-4 py-2">
                        <span className="text-white font-bold">{exp.period}</span>
                      </div>
                      <div className="bg-white/20 rounded-full px-4 py-2">
                        <span className="text-white font-bold">{exp.duration}</span>
                      </div>
                    </div>

                    <p className="text-lg text-white/90 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="bg-white/10 rounded-2xl p-4">
                      <div className="text-white font-bold mb-2">🚀 Key Projects:</div>
                      <div className="text-white/90">{exp.projects}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-white font-bold mb-4 text-lg">📚 What I Learned:</div>
                    {exp.learnings.map((learning, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-white/10 rounded-xl p-3"
                        style={{ borderRadius: "20px 8px 20px 8px" }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                        <span className="text-white/90">{learning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Entrepreneurial Journey */}
        <Card
          className="bg-gradient-to-r from-purple-900 to-pink-900 border-2 border-yellow-500/30 shadow-2xl"
          style={{ borderRadius: "60px 25px 60px 25px" }}
        >
          <CardContent className="p-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                The Entrepreneurial Leap
              </h2>
              <p className="text-xl text-gray-300">From employee to employer - building my own company</p>
            </div>

            <div className="space-y-8">
              {entrepreneurialJourney.map((phase, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${phase.color} rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300`}
                  style={{ borderRadius: "40px 15px 40px 15px" }}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-black text-white mb-2">{phase.phase}</h3>
                      <div className="text-white/80 font-semibold mb-4">{phase.period}</div>
                      <p className="text-lg text-white/90 mb-6">{phase.description}</p>

                      <div className="bg-white/10 rounded-2xl p-4">
                        <div className="text-white font-bold mb-2">🎯 Outcome:</div>
                        <div className="text-white/90">{phase.outcome}</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-2xl p-4">
                        <div className="text-white font-bold mb-2">⚡ Challenge:</div>
                        <div className="text-white/90">{phase.challenge}</div>
                      </div>

                      <div className="bg-white/10 rounded-2xl p-4">
                        <div className="text-white font-bold mb-2">💡 Solution:</div>
                        <div className="text-white/90">{phase.solution}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Current Success */}
        <Card
          className="bg-gradient-to-r from-green-900 to-emerald-900 border-2 border-green-500/30 shadow-2xl"
          style={{ borderRadius: "45px 20px 45px 20px" }}
        >
          <CardContent className="p-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Where I Stand Today
              </h2>
              <p className="text-xl text-gray-300">Leading a successful software development company</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "👨‍💼",
                  title: "Company Founder",
                  description: "Built and leading a profitable software development company",
                  metrics: ["6-member development team", "25+ projects delivered", "Multiple ongoing clients"],
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: "🎯",
                  title: "Full-Stack Leader",
                  description: "End-to-end project ownership from conception to maintenance",
                  metrics: ["Requirements analysis", "Architecture design", "Team management"],
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: "📈",
                  title: "Proven Track Record",
                  description: "Consistent delivery of successful projects with real impact",
                  metrics: ["750+ active SaaS users", "100% client satisfaction", "Growing business"],
                  color: "from-green-500 to-emerald-500",
                },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${achievement.color} rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300`}
                  style={{ borderRadius: "30px 15px 30px 15px" }}
                >
                  <div className="text-5xl mb-4">{achievement.icon}</div>
                  <h3 className="text-2xl font-black text-white mb-4">{achievement.title}</h3>
                  <p className="text-white/90 leading-relaxed mb-6">{achievement.description}</p>
                  <div className="space-y-2">
                    {achievement.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-white/20 rounded-full px-3 py-1 text-sm font-semibold text-white">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center py-16">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full px-12 py-8 inline-block shadow-2xl hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-black text-white mb-4">Ready to Add Value to Your Team?</h3>
            <p className="text-xl text-white/90 mb-6">Bringing 6+ years of experience and entrepreneurial mindset</p>
            <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold text-white">
              <span>📧 sanghvipranay17@gmail.com</span>
              <span>📱 9127396670</span>
              <span>💼 linkedin.com/in/pranaysanghvi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 