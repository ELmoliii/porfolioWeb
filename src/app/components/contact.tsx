"use client"

import { Mail, Linkedin, Github, Phone } from "lucide-react"
import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { useState, useCallback } from "react"

export function Contact() {
  const { t } = useLanguage()

  const contactMethods = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "alejandromolinero72@gmail.com",
      href: "mailto:alejandromolinero72@gmail.com",
      description: t("contact.email.label"),
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+34 601 30 55 97",
      href: "tel:+34601305597",
      description: t("contact.phone.label"),
    },
    {
      icon: Linkedin,
      label: t("contact.linkedin"),
      value: "linkedin.com/in/alex-moli/",
      href: "https://www.linkedin.com/in/alex-moli/",
      description: t("contact.linkedin.label"),
    },
    {
      icon: Github,
      label: t("contact.github"),
      value: "github.com/ELmoliii/ELmoliii",
      href: "https://github.com/ELmoliii/ELmoliii",
      description: t("contact.github.label"),
    },
  ]
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        // Fallback
        const textarea = document.createElement("textarea")
        textarea.value = text
        textarea.style.position = "fixed"
        textarea.style.opacity = "0"
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        document.execCommand("copy")
        document.body.removeChild(textarea)
      }

      setCopied(text)
      // limpiar feedback después de 2s
      setTimeout(() => setCopied((cur) => (cur === text ? null : cur)), 2000)
    } catch (err) {
      console.error("Copy failed", err)
    }
  }, [])
  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/90 via-purple-900/40 to-black/90 overflow-hidden"
    >
      {/* Fondos decorativos */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-800/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-purple-200 mb-4">{t("contact.subtitle")}</p>
          <p className="text-lg text-purple-300 max-w-2xl mx-auto leading-relaxed">
            {t("contact.description")}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            const isCopyable = method.href?.startsWith("mailto:") || method.href?.startsWith("tel:")

            return (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href={method.href}
                  onClick={
                    isCopyable
                      ? (e) => {
                          e.preventDefault()
                          copyToClipboard(method.value)
                        }
                      : undefined
                  }
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={
                    "group block h-full p-8 rounded-2xl bg-purple-900/20 border border-purple-700 backdrop-blur-md hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-2 " +
                    (isCopyable ? "cursor-pointer" : "")
                  }
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-purple-400 group-hover:text-purple-200 group-hover:scale-110 transition-all duration-300" />
                    </div>

                    {/* Text */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">{method.label}</h3>
                      <p className="text-sm text-purple-200 break-all flex items-center justify-center gap-2">
                        <span>{method.value}</span>
                        {copied === method.value && (
                          <span className="text-xs text-green-300 font-medium">Copiado</span>
                        )}
                      </p>
                      <p className="text-xs text-pink-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
