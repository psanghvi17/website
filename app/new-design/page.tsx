"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ResumePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [funFact, setFunFact] = useState(0)

  const funFacts = [
    "🚀 Built 10+ apps that actually work!",
    "☕ Powered by coffee and curiosity",
    "🎯 99.71% GATE score (not bragging... okay maybe a little)",
    "👥 Leading 6 awesome developers",
    "🏆 Patent holder (fancy, right?)",
    "🐍 Python whisperer since day one",
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFunFact((prev) => (prev + 1) % funFacts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const skills = [
    { name: "Node.js", emoji: "⚡", color: "bg-yellow-200 text-yellow-800", level: 95 },
    { name: "Python", emoji: "🐍", color: "bg-green-200 text-green-800", level: 90 },
    { name: "PostgreSQL", emoji: "🐘", color: "bg-blue-200 text-blue-800", level: 88 },
    { name: "Docker", emoji: "🐳", color: "bg-cyan-200 text-cyan-800", level: 92 },
    { name: "Microservices", emoji: "🔧", color: "bg-purple-200 text-purple-800", level: 90 },
    { name: "MongoDB", emoji: "🍃", color: "bg-emerald-200 text-emerald-800", level: 85 },
    { name: "Web Dev", emoji: "🌐", color: "bg-pink-200 text-pink-800", level: 95 },
    { name: "Cloud", emoji: "☁️", color: "bg-indigo-200 text-indigo-800", level: 87 },
  ]

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
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100 relative overflow-hidden">
      {/* Curved Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path
            d="M0,200 Q300,100 600,200 T1200,150 L1200,0 L0,0 Z"
            fill="rgba(168, 85, 247, 0.1)"
            className="animate-pulse"
          />
          <path
            d="M0,400 Q400,300 800,400 T1200,350 L1200,800 L0,800 Z"
            fill="rgba(236, 72, 153, 0.1)"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <path
            d="M0,600 Q200,500 400,600 T800,550 T1200,600 L1200,800 L0,800 Z"
            fill="rgba(251, 191, 36, 0.1)"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </svg>
      </div>
      {/* ...rest of your provided code... */}
    </div>
  )
} 