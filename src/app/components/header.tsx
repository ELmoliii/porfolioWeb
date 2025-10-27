"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, Globe } from "lucide-react"
import { Button } from "./ui/button"
import { useLanguage } from "./language-provider"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation = [
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.education"), href: "#education" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  if (!mounted) return null

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Navbar background con gradiente oscuro */}
      <nav className="flex justify-between items-center px-6 py-4 
        bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 
        text-white shadow-lg">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          AM
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="relative text-white/90 hover:text-white font-medium transition-colors duration-200 group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-4">
          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="hidden sm:flex items-center gap-1 text-white hover:bg-white/20"
          >
            <Globe className="h-4 w-4" />
            {language.toUpperCase()}
          </Button>

          {/* Theme Toggle
           <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-white hover:bg-white/20"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          */}
      

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/90 to-pink-800/95 
              flex flex-col items-center justify-center space-y-8 z-40 text-white"
          >
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-semibold hover:text-yellow-300 transition-colors"
              >
                {item.name}
              </motion.button>
            ))}

            {/* Extra controls in mobile menu */}
            <div className="flex gap-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language === "es" ? "English" : "Español"}
              </Button>

             {/*<Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="border-white text-white hover:bg-white hover:text-black"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button> */} 
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
