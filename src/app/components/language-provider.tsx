"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    // Navigation
    "nav.about": "Acerca",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.education": "Educación",
    "nav.contact": "Contacto",

    // Hero
    "hero.greeting": "Hola, soy",
    "hero.name": "Alejandro Molinero",
    "hero.role": "Desarrollador Software",
    "hero.description":
      "Diseño y desarrollo experiencias web de vanguardia, centradas en la accesibilidad y el rendimiento.",
    "hero.downloadCV": "Descargar CV",
    "hero.viewProjects": "Linkedin",

    // About
    "about.title": "Acerca de mí",
    "about.description":
      "Soy un joven desarrollador aprendo de manera autónoma, me adapto rápido a nuevas herramientas y busco contribuir de forma efectiva en proyectos open source y en los mios propios.",
    "about.passion":
      "Me aseguro de crear código limpio y usar las mejores prácticas me impulsa a crear soluciones escalables y mantenibles.",

    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.filter.all": "Todos",
    "projects.filter.frontend": "Frontend",
    "projects.filter.fullstack": "Full Stack",
    "projects.filter.mobile": "Móvil",
    "projects.viewLive": "Ver Demo",
    "projects.viewCode": "Ver Código",

    // Experience
    "experience.title": "Experiencia Laboral",
    "experience.work": "Trabajo",
    "experience.present": "Presente",

    // Education
    "education.title": "Educación y Certificaciones",
    "education.subtitle":
      "Mi formación académica y certificaciones profesionales que respaldan mi experiencia técnica.",
    "education.degree": "Título",
    "education.certification": "Certificación",
    "education.course": "Curso",

    // Newsletter
    "newsletter.title": "Mantente Actualizado",
    "newsletter.description":
      "Suscríbete a mi newsletter para recibir las últimas noticias sobre desarrollo web, tutoriales y proyectos interesantes.",
    "newsletter.card.title": "Newsletter Semanal",
    "newsletter.card.description": "Contenido exclusivo sobre desarrollo web y tecnología.",
    "newsletter.placeholder": "tu@email.com",
    "newsletter.subscribe": "Suscribirse",
    "newsletter.privacy": "No spam. Puedes cancelar tu suscripción en cualquier momento.",
    "newsletter.success.title": "¡Suscripción Exitosa!",
    "newsletter.success.message": "Gracias por suscribirte. Recibirás contenido exclusivo en tu bandeja de entrada.",

    // Contact
    "contact.title": "Conectemos",
    "contact.subtitle": "¿Tienes un proyecto en mente?",
    "contact.description":
      "Estoy siempre abierto a discutir nuevas oportunidades, proyectos interesantes o simplemente charlar sobre tecnología.",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.email.label": "Enviar email",
    "contact.phone.label": "Llamar",
    "contact.linkedin.label": "Ver perfil",
    "contact.github.label": "Ver repositorios",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.name": "Alejandro Molinero",
    "hero.role": "Software Developer",
    "hero.description":
      "Design and development of cutting-edge web experiences focused on accessibility and performance.",
    "hero.downloadCV": "Download CV",
    "hero.viewProjects": "Linkedin",

    // About
    "about.title": "About me",
    "about.description":
      "I'm a developer passionate about creating intuitive user interfaces and exceptional web experiences. With over 5 years of experience, I specialize in modern technologies like React, Next.js, TypeScript and Node.js.",
    "about.passion":
      "My passion for clean code and best practices drives me to create scalable and maintainable solutions.",

    // Projects
    "projects.title": "Featured Projects",
    "projects.filter.all": "All",
    "projects.filter.frontend": "Frontend",
    "projects.filter.fullstack": "Game",
    "projects.filter.mobile": "Mobile",
    "projects.filter.game": "Game",
    "projects.viewLive": "View Demo",
    "projects.viewCode": "View Code",

    // Experience
    "experience.title": "Work Experience",
    "experience.work": "Work",
    "experience.present": "Present",

    // Education
    "education.title": "Education & Certifications",
    "education.subtitle": "My academic background and professional certifications that support my technical expertise.",
    "education.degree": "Degree",
    "education.certification": "Certification",
    "education.course": "Course",

    // Newsletter
    "newsletter.title": "Stay Updated",
    "newsletter.description":
      "Subscribe to my newsletter to receive the latest news about web development, tutorials and interesting projects.",
    "newsletter.card.title": "Weekly Newsletter",
    "newsletter.card.description": "Exclusive content about web development and technology.",
    "newsletter.placeholder": "your@email.com",
    "newsletter.subscribe": "Subscribe",
    "newsletter.privacy": "No spam. You can unsubscribe at any time.",
    "newsletter.success.title": "Successfully Subscribed!",
    "newsletter.success.message": "Thanks for subscribing. You'll receive exclusive content in your inbox.",

    // Contact
    "contact.title": "Let's Connect",
    "contact.subtitle": "Have a project in mind?",
    "contact.description":
      "I'm always open to discussing new opportunities, interesting projects, or just chatting about technology.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.email.label": "Send email",
    "contact.phone.label": "Call",
    "contact.linkedin.label": "View profile",
    "contact.github.label": "View repositories",

    // Footer
    "footer.rights": "All rights reserved.",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
