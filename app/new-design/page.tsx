"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function NewDesignPage() {
  const [funFact, setFunFact] = useState(0);
  const funFacts = [
    "🚀 Built 10+ apps that actually work!",
    "☕ Powered by coffee and curiosity",
    "🎯 99.71% GATE score (not bragging... okay maybe a little)",
    "👥 Leading 6 awesome developers",
    "🏆 Patent holder (fancy, right?)",
    "🐍 Python whisperer since day one",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setFunFact((prev) => (prev + 1) % funFacts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: "⏰", value: "8+", label: "Years Coding" },
    { icon: "👥", value: "6", label: "Team Members" },
    { icon: "🎯", value: "10+", label: "Projects Built" },
    { icon: "🎉", value: "550+", label: "Happy Users" },
  ];
  const skills = [
    { name: "Node.js", emoji: "⚡", color: "bg-yellow-100 text-yellow-800", level: 95 },
    { name: "Python", emoji: "🐍", color: "bg-green-100 text-green-800", level: 90 },
    { name: "PostgreSQL", emoji: "🐘", color: "bg-blue-100 text-blue-800", level: 88 },
    { name: "Docker", emoji: "🐳", color: "bg-cyan-100 text-cyan-800", level: 92 },
    { name: "Microservices", emoji: "🔧", color: "bg-purple-100 text-purple-800", level: 90 },
    { name: "MongoDB", emoji: "🍃", color: "bg-emerald-100 text-emerald-800", level: 85 },
    { name: "Web Dev", emoji: "🌐", color: "bg-pink-100 text-pink-800", level: 95 },
    { name: "Cloud", emoji: "☁️", color: "bg-indigo-100 text-indigo-800", level: 87 },
  ];
  const projects = [
    {
      name: "RecruitPro",
      emoji: "🎯",
      description: "SaaS that makes recruitment fun (yes, really!)",
      users: "550+ happy users",
      color: "bg-gradient-to-br from-pink-400 to-red-400",
      features: ["👥 Candidate Magic", "⏰ Time Wizardry", "💰 Money Matters", "📊 Smart Reports"],
    },
    {
      name: "CustomWise",
      emoji: "🚢",
      description: "Making customs brokers' lives easier (you're welcome!)",
      color: "bg-gradient-to-br from-blue-400 to-purple-400",
      features: ["🌍 Multi-agency Fun", "🔒 Security First", "⚡ Real-time Magic"],
    },
    {
      name: "Employee Evaluator",
      emoji: "📈",
      description: "Performance tracking that doesn't suck",
      color: "bg-gradient-to-br from-green-400 to-teal-400",
      features: ["📊 Smart Analytics", "🎯 Goal Tracking", "📝 Easy Reports"],
    },
    {
      name: "Architect CRM",
      emoji: "🏗️",
      description: "Project management for creative minds",
      color: "bg-gradient-to-br from-yellow-400 to-orange-400",
      features: ["🎨 Creative Workflows", "👥 Team Harmony", "📅 Time Mastery"],
    },
  ];
  const timeline = [
    {
      role: "Co-Founder & Chief Code Wizard 🧙‍♂️",
      company: "Cozytech",
      period: "2022 - Present",
      color: "bg-gradient-to-r from-purple-400 to-pink-400",
      description: "Building the future, one line of code at a time!",
    },
    {
      role: "Senior Code Ninja 🥷",
      company: "Kyndryl Labs",
      period: "2021 - 2022",
      color: "bg-gradient-to-r from-blue-400 to-cyan-400",
      description: "Modernizing the world with cloud magic!",
    },
    {
      role: "Software Architect 🏗️",
      company: "IBM GTS Labs",
      period: "2018 - 2021",
      color: "bg-gradient-to-r from-green-400 to-teal-400",
      description: "Automating everything that moves (and some things that don't)!",
    },
  ];
  const education = {
    degree: "M.Tech Computer Science",
    school: "IIT Guwahati 🏛️",
    years: "2016 - 2018",
    tags: [
      { label: "🤖 AI", color: "bg-purple-100 text-purple-800" },
      { label: "🔍 Info Retrieval", color: "bg-blue-100 text-blue-800" },
      { label: "⚡ Algorithms", color: "bg-green-100 text-green-800" },
    ],
  };
  const achievements = [
    { emoji: "📜", title: "Patent Holder!", desc: "Service Management Tools Wizard", color: "from-yellow-200 to-yellow-300" },
    { emoji: "🎯", title: "GATE Champion", desc: "99.71 percentile (not bad, eh?)", color: "from-green-200 to-green-300" },
    { emoji: "🐍", title: "Python Certified", desc: "Data Science Level 2", color: "from-blue-200 to-blue-300" },
  ];
  const contact = [
    { icon: "📧", title: "Email", value: "sanghvipranay17@gmail.com" },
    { icon: "📱", title: "Phone", value: "9127396670" },
    { icon: "📍", title: "Location", value: "Bangalore, India" },
    { icon: "💼", title: "LinkedIn", value: "linkedin.com/in/pranaysanghvi" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <div className="inline-block bg-white/80 rounded-3xl shadow-xl px-10 py-8 border-4 border-purple-200 animate-fade-in">
          <div className="flex flex-col items-center gap-2">
            <span className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Pranay Sanghvi</span>
            <span className="text-lg font-bold text-gray-600">Co-Founder & Senior Developer</span>
            <span className="text-xl font-semibold text-gray-700 mt-2">I turn ☕ into 💻 and ideas into 🚀</span>
            <div className="mt-4 text-lg font-bold text-purple-700 animate-pulse">{funFacts[funFact]}</div>
          </div>
        </div>
      </section>

      {/* Fun Stats */}
      <section className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-2 border-purple-100 hover:scale-105 transition-transform">
            <span className="text-3xl mb-2">{stat.icon}</span>
            <span className="text-2xl font-black text-gray-800">{stat.value}</span>
            <span className="text-sm font-bold text-gray-500">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto mb-12">
        <Card className="bg-white/90 rounded-3xl border-2 border-pink-100 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-black text-purple-700 mb-6 flex items-center gap-2">🛠️ My Superpowers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.emoji}</span>
                    <span className="font-bold text-gray-800">{skill.name}</span>
                    <Badge className={`${skill.color} font-bold ml-auto`}>{skill.level}%</Badge>
                  </div>
                  <div className="w-full bg-gray-200 h-3 rounded-full">
                    <div className="bg-gradient-to-r from-pink-400 to-purple-400 h-3 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto mb-12">
        <Card className="bg-white/90 rounded-3xl border-2 border-green-100 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-black text-green-700 mb-6 flex items-center gap-2">🎨 My Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <div key={i} className={`${project.color} rounded-2xl p-6 text-white shadow-lg hover:scale-105 transition-transform`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{project.emoji}</span>
                    <span className="font-black text-lg">{project.name}</span>
                  </div>
                  <div className="mb-2 font-semibold">{project.description}</div>
                  {project.users && <div className="text-sm mb-2">{project.users}</div>}
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((f, j) => (
                      <Badge key={j} className="bg-white/30 text-white border border-white/50 font-semibold">{f}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto mb-12">
        <Card className="bg-white/90 rounded-3xl border-2 border-blue-100 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-black text-blue-700 mb-6 flex items-center gap-2">🗺️ My Timeline</h2>
            <div className="space-y-6">
              {timeline.map((exp, i) => (
                <div key={i} className={`${exp.color} rounded-xl p-6 text-white shadow-md`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-black text-lg">{exp.role}</span>
                    <span className="bg-white/30 px-3 py-1 rounded-full text-xs font-bold">{exp.period}</span>
                  </div>
                  <div className="font-semibold">{exp.company}</div>
                  <div className="text-sm">{exp.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Education & Achievements */}
      <section className="max-w-4xl mx-auto mb-12 grid md:grid-cols-2 gap-6">
        <Card className="bg-white/90 rounded-3xl border-2 border-yellow-100 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-black text-yellow-700 mb-4 flex items-center gap-2">🎓 Education</h2>
            <div className="font-bold text-lg mb-1">{education.degree}</div>
            <div className="mb-1">{education.school}</div>
            <div className="mb-2 text-sm text-gray-500">{education.years}</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {education.tags.map((tag, i) => (
                <Badge key={i} className={`${tag.color} font-semibold`}>{tag.label}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/90 rounded-3xl border-2 border-pink-100 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-black text-pink-700 mb-4 flex items-center gap-2">🏆 Achievements</h2>
            <div className="space-y-3">
              {achievements.map((ach, i) => (
                <div key={i} className={`bg-gradient-to-r ${ach.color} rounded-xl p-4 flex items-center gap-3`}>
                  <span className="text-2xl">{ach.emoji}</span>
                  <div>
                    <div className="font-black text-gray-800">{ach.title}</div>
                    <div className="text-sm text-gray-700">{ach.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact */}
      <section className="max-w-2xl mx-auto mb-12">
        <Card className="bg-white/90 rounded-3xl border-2 border-cyan-100 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-black text-cyan-700 mb-4 flex items-center gap-2">📬 Contact</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {contact.map((c, i) => (
                <div key={i} className="flex items-center gap-3 bg-cyan-50 rounded-xl p-3 border border-cyan-100">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">{c.title}</div>
                    <div className="text-gray-600 text-sm">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="text-center py-8">
        <div className="inline-block bg-gradient-to-r from-purple-200 to-pink-200 px-8 py-6 rounded-full border-4 border-dashed border-purple-300 shadow-lg">
          <div className="text-2xl mb-2">🚀✨</div>
          <p className="text-xl font-black text-gray-800">Ready to build something amazing together?</p>
          <p className="text-lg font-semibold text-gray-700 mt-2">Let's turn your crazy ideas into reality! 💫</p>
        </div>
      </footer>
    </div>
  );
} 