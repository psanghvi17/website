"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, BookOpen, X, Menu } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: Home,
    },
    {
      href: "/new-design",
      label: "Portfolio",
      icon: User,
    },
    {
      href: "/my-story",
      label: "My Journey",
      icon: BookOpen,
    },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Desktop Top Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-[#0b0b0c]/95 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center space-x-2 text-xl font-bold text-slate-100 hover:text-emerald-200 transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
                  <span className="text-emerald-200 font-bold text-sm">P</span>
                </div>
                <span>Pranay</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-emerald-400/15 text-emerald-200 border border-emerald-300/30 shadow-lg"
                        : "text-slate-300 hover:bg-white/5 hover:text-emerald-200"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation */}
      <nav
        className={`md:hidden fixed top-0 left-0 h-full z-50 bg-[#0b0b0c]/95 backdrop-blur-md border-r border-white/10 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        
        <div className="flex flex-col h-full w-64">
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-bold text-slate-100 hover:text-emerald-200 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
                <span className="text-emerald-200 font-bold text-sm">P</span>
              </div>
              <span>Pranay</span>
            </Link>
            
            {/* Mobile Close Button */}
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg text-slate-300 hover:bg-white/5 hover:text-emerald-200 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-emerald-400/15 text-emerald-200 border border-emerald-300/30 shadow-lg"
                        : "text-slate-300 hover:bg-white/5 hover:text-emerald-200"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg bg-[#0b0b0c]/90 backdrop-blur-md border border-white/10 shadow-lg text-slate-200 hover:bg-white/5 hover:text-emerald-200 transition-colors duration-200"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </>
  )
} 
