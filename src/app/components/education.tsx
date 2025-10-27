"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "./language-provider"
import { GraduationCap, Award, BookOpen, Briefcase as Certificate } from "lucide-react"

const educationData = [
  {
    id: 1,
    type: "degree",
    title: "Máster en Desarrollo con IA",
    titleEn: "Master's Degree in Development with AI",
    institution: "IES Luis Braille",
    period: "2025",
    periodEnd: "",
    description:
      "Desarrollador Fullstack y Experto en IA Generativa. Construyo aplicaciones robustas, escalables y eficientes, integrando la Inteligencia Artificial de vanguardia para potenciar el valor del negocio.",
    descriptionEn:
      "Manage and maintain databases, ensuring integrity, consistency, and accessibility, and create applications that work on different systems and access databases.",
    icon: GraduationCap,
  },
   {
    id: 2,
    type: "degree",
    title: "Desarrollo de Aplicaciones Multiplataforma",
    titleEn: "Multiplatform Application Development",
    institution: "IES Luis Braille",
    period: "2022",
    periodEnd: "2024",
    description:
      "Administrar y mantener bases de datos, asegurando integridad, consistencia y accesibilidad y Crear aplicaciones que funcionen en diferentes sistemas y accedan a bases de datos.",
    descriptionEn:
      "Manage and maintain databases, ensuring integrity, consistency, and accessibility, and create applications that work on different systems and access databases.",
    icon: GraduationCap,
  },
 {
    id: 3,
    type: "degree",
    title: "Sistema microinformaticos y redes",
    titleEn: "Microcomputer systems and networks",
    institution: "IES Palomeras Vallecas",
    period: "2020",
    periodEnd: "2022",
    description: "Certificación profesional en arquitectura de soluciones en la nube con AWS.",
    descriptionEn: "Professional certification in cloud solutions architecture with AWS.",
    icon: Award,
  },
  {
    id: 4,
    type: "course",
    title: "CCNA",
    titleEn: "CCNA",
    institution: "Microforum Cisco",
    period: "2019",
    periodEnd: "2020",
    description: "Curso Preparacion para la  certificación CCNA",
    descriptionEn: "CCNA certification preparation course.",
    icon: BookOpen,
  },

]

export function Education() {
  const { language, t } = useLanguage()
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const educationItems = gridRef.current?.querySelectorAll(".education-item")
    educationItems?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const getTypeColor = (type: string) => {
    switch (type) {
      case "degree":
        return "bg-blue-500/10 text-blue-400 border-blue-400/30"
      case "certification":
        return "bg-green-500/10 text-green-400 border-green-400/30"
      case "course":
        return "bg-purple-500/10 text-purple-400 border-purple-400/30"
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-400/30"
    }
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0c29]">
      <div className="max-w-6xl mx-auto">
        <div className="animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">{t("education.title")}</h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">{t("education.subtitle")}</p>

          <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
            {educationData.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className="education-item opacity-0 translate-y-8 transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-neutral-900 p-6 rounded-xl border border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-violet-600/20 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-violet-400" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-400">
                            {item.period} {item.periodEnd !== item.period && `- ${item.periodEnd}`}
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full border ${getTypeColor(item.type)}`}>
                            {t(`education.${item.type}`)}
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold text-white mb-1">
                          {language === "es" ? item.title : item.titleEn}
                        </h3>

                        <p className="text-violet-400 font-medium mb-3">{item.institution}</p>

                        <p className="text-gray-300 text-sm leading-relaxed">
                          {language === "es" ? item.description : item.descriptionEn}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
