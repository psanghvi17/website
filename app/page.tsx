"use client"

import { useState, useEffect } from "react"
import { Calendar, Award, Code, Users, Terminal, Zap, Database, Server, GitBranch, Cpu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ResumePage() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Senior Software Developer & Co-Founder"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  const skills = [
    { name: "Node.js", icon: "⚡", level: 95 },
    { name: "Python", icon: "🐍", level: 90 },
    { name: "PostgreSQL", icon: "🐘", level: 88 },
    { name: "Docker", icon: "🐳", level: 92 },
    { name: "Microservices", icon: "🔧", level: 90 },
    { name: "MongoDB", icon: "🍃", level: 85 },
    { name: "Web Development", icon: "🌐", level: 95 },
    { name: "Cloud Deployment", icon: "☁️", level: 87 },
  ]

  const projects = [
    {
      name: "RecruitPro",
      type: "SaaS Platform",
      users: "550+ Active Users",
      description: "End-to-End recruitment management platform",
      tech: ["Node.js", "PostgreSQL", "Docker", "Microservices"],
      features: ["Candidate Onboarding", "Timesheet Management", "Payroll & SEPA", "Invoice Generation"],
      status: "🟢 Production",
    },
    {
      name: "CustomWise",
      type: "Integration Platform",
      description: "Customs broker interaction with government agencies",
      tech: ["SOAP", "XML", "HMRC API", "Revenue Ireland"],
      features: ["Multi-agency Integration", "Safety & Security Module", "Real-time Processing"],
      status: "🟢 Production",
    },
    {
      name: "Employee Evaluation System",
      type: "Enterprise Tool",
      description: "Performance management and reporting system",
      tech: ["Express.js", "App Connect", "PostgreSQL"],
      features: ["Performance Tracking", "Report Generation", "Admin Dashboard"],
      status: "🟢 Production",
    },
    {
      name: "Architectural CRM",
      type: "Custom Solution",
      description: "Complete project management for architectural firms",
      tech: ["Node.js", "MongoDB", "Custom Workflow Engine"],
      features: ["Project Management", "Client Portal", "Attendance Tracking"],
      status: "🟢 Production",
    },
  ]

  const experience = [
    {
      role: "Co-Founder",
      company: "Cozytech",
      period: "11/2022 - Present",
      location: "Indore",
      type: "Startup",
      highlights: ["Leading team of 6 developers", "10+ successful projects", "Full-stack architecture"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      role: "Sr. Software Developer",
      company: "Kyndryl Labs",
      period: "09/2021 - 11/2022",
      location: "Bangalore",
      type: "Enterprise",
      highlights: ["Software Defined Migration", "Cloud Modernization", "Enterprise Solutions"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      role: "Software Developer",
      company: "IBM GTS Labs",
      period: "07/2018 - 08/2021",
      location: "Bangalore",
      type: "Enterprise",
      highlights: ["Microservices Architecture", "Service Automation", "Migration Tools"],
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%239C92AC%22 fillOpacity%3D%220.1%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 sm:space-y-6 py-8 sm:py-12 relative">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500">
            <div className="bg-gray-900 rounded-full px-4 sm:px-8 py-3 sm:py-4">
              <div className="flex items-center gap-2 sm:gap-3 text-emerald-400 font-mono text-xs sm:text-sm">
                <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">~/pranay-sanghvi $</span>
                <span className="sm:hidden">~$</span>
                <span className="text-white">whoami</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Pranay Sanghvi
          </h1>

          <div className="h-6 sm:h-8 flex justify-center items-center">
            <span className="text-lg sm:text-xl md:text-2xl text-gray-300 font-mono">
              {typedText}
              <span className="animate-pulse text-emerald-400">|</span>
            </span>
          </div>

          {/* Contact Info as Code */}
          <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg p-4 sm:p-6 font-mono text-xs sm:text-sm max-w-2xl mx-auto">
            <div className="text-emerald-400 mb-2">// Contact Information</div>
            <div className="space-y-1 text-gray-300">
              <div className="break-all">
                <span className="text-cyan-400">const</span> <span className="text-yellow-400">email</span> ={" "}
                <span className="text-green-400">"sanghvipranay17@gmail.com"</span>;
              </div>
              <div>
                <span className="text-cyan-400">const</span> <span className="text-yellow-400">phone</span> ={" "}
                <span className="text-green-400">"9127396670"</span>;
              </div>
              <div>
                <span className="text-cyan-400">const</span> <span className="text-yellow-400">location</span> ={" "}
                <span className="text-green-400">"Bangalore, India"</span>;
              </div>
              <div className="break-all">
                <span className="text-cyan-400">const</span> <span className="text-yellow-400">linkedin</span> ={" "}
                <span className="text-green-400">"linkedin.com/in/pranaysanghvi"</span>;
              </div>
            </div>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {[
            { label: "Years Experience", value: "9+", icon: Calendar },
            { label: "Team Size", value: "6", icon: Users },
            { label: "Projects Delivered", value: "10+", icon: Code },
            { label: "Active Users", value: "550+", icon: Zap },
          ].map((stat, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-emerald-500 transition-all duration-300"
            >
              <CardContent className="p-3 sm:p-4 text-center">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Section as Terminal */}
        <Card className="bg-gray-900/80 border-gray-700 shadow-2xl">
          <CardContent className="p-0">
            <div className="bg-gray-800 px-3 sm:px-4 py-2 border-b border-gray-700 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-xs sm:text-sm font-mono ml-2 sm:ml-4">about.sh</span>
            </div>
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
              <div className="text-emerald-400 mb-2">$ cat about.txt</div>
              <div className="text-gray-300 leading-relaxed">
                With <span className="text-emerald-400 font-bold">9+ years</span> of experience in the tech industry as a dedicated software
                engineer and founder, I've evolved from a junior python developer to{" "}
                <span className="text-cyan-400 font-bold">co-founding and leading</span> a bespoke software company.
                I've spearheaded the design and deployment of impactful solutions across
                <span className="text-yellow-400 font-bold"> Node.js, PostgreSQL, Docker, and cloud deployment</span>,
                delivering tailored, scalable, and client-centric products while leading a team of
                <span className="text-emerald-400 font-bold">6 developers</span>.
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Matrix */}
        <Card className="bg-gray-900/80 border-gray-700 shadow-2xl">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl">{skill.icon}</span>
                      <span className="text-white font-semibold text-sm sm:text-base">{skill.name}</span>
                    </div>
                    <span className="text-emerald-400 font-mono text-xs sm:text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience Timeline */}
        <Card className="bg-gray-900/80 border-gray-700 shadow-2xl">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <GitBranch className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Career Journey
              </span>
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                    <div className="flex-1">
                      <Card className="bg-gray-800/50 border-gray-700 hover:border-emerald-500 transition-all duration-300">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                            <div>
                              <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                              <p className="text-emerald-400 font-semibold text-sm sm:text-base">{exp.company}</p>
                              <Badge variant="outline" className="mt-2 border-gray-600 text-gray-300 text-xs">
                                {exp.type}
                              </Badge>
                            </div>
                            <div className="text-left lg:text-right mt-2 lg:mt-0">
                              <div className="text-gray-400 font-mono text-xs sm:text-sm">{exp.period}</div>
                              <div className="text-gray-500 text-xs sm:text-sm">{exp.location}</div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.highlights.map((highlight, idx) => (
                              <Badge key={idx} className="bg-emerald-900/30 text-emerald-300 border-emerald-700 text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  {index < experience.length - 1 && <div className="w-px h-4 sm:h-6 bg-gray-700 ml-1.5 sm:ml-2 mt-2"></div>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <Card className="bg-gray-900/80 border-gray-700 shadow-2xl">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <Server className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-gray-700 hover:border-emerald-500 transition-all duration-300 group"
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-emerald-400 text-xs sm:text-sm">{project.type}</p>
                        {project.users && <p className="text-yellow-400 text-xs sm:text-sm font-mono">{project.users}</p>}
                      </div>
                      <span className="text-xs">{project.status}</span>
                    </div>

                    <p className="text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>

                    <div className="space-y-3">
                      <div>
                        <div className="text-cyan-400 text-xs sm:text-sm font-mono mb-2">// Tech Stack</div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-cyan-400 text-xs sm:text-sm font-mono mb-2">// Key Features</div>
                        <ul className="text-gray-400 text-xs sm:text-sm space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="text-emerald-400">▸</span>
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
          </CardContent>
        </Card>

        {/* Education & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Card className="bg-gray-900/80 border-gray-700 shadow-2xl">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                <span className="text-white">Education</span>
              </h2>
              <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6 border border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-emerald-400">M.Tech Computer Science</h3>
                <p className="text-white font-semibold text-sm sm:text-base">Indian Institute of Technology, Guwahati</p>
                <p className="text-gray-400 font-mono text-xs sm:text-sm">2016 - 2018</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge className="bg-purple-900/30 text-purple-300 border-purple-700 text-xs">AI</Badge>
                  <Badge className="bg-blue-900/30 text-blue-300 border-blue-700 text-xs">Information Retrieval</Badge>
                  <Badge className="bg-green-900/30 text-green-300 border-green-700 text-xs">Algorithms</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/80 border-gray-700 shadow-2xl">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                <span className="text-white">Achievements</span>
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-gradient-to-r from-yellow-900/20 to-yellow-800/20 border border-yellow-700 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl sm:text-2xl">🏆</span>
                    <h3 className="font-bold text-yellow-400 text-sm sm:text-base">Patent Holder</h3>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm">Application Driven Configuration of Service Management Tools</p>
                </div>

                <div className="bg-gradient-to-r from-green-900/20 to-emerald-800/20 border border-green-700 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl sm:text-2xl">🎯</span>
                    <h3 className="font-bold text-green-400 text-sm sm:text-base">GATE CSE 2016</h3>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm">99.71 percentile</p>
                </div>

                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-800/20 border border-blue-700 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl sm:text-2xl">📜</span>
                    <h3 className="font-bold text-blue-400 text-sm sm:text-base">Certified</h3>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm">Applied Data Science with Python - Level 2</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center py-6 sm:py-8">
          <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg p-4 sm:p-6 font-mono">
            <div className="text-emerald-400 mb-2 text-xs sm:text-sm">// Ready to collaborate?</div>
            <div className="text-gray-300 text-xs sm:text-sm">
              <span className="text-cyan-400">console.log</span>(
              <span className="text-green-400">"Let's build something amazing together!"</span>);
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
