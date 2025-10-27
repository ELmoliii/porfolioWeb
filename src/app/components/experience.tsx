"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "./language-provider"

const experiences = [
  {
    id: 1,
    title: " Desarrollador Software",
    titleEn: "Software Developer",
    company: "Manservic S.L",
    period: "2024",
    periodEnd: " ",
    description:
      "Diseñé y desarrollé la arquitectura de base de datos en MySQL optimizando la estructura de tablas y relaciones para asegurar la consistencia de la información, la trazabilidad de incidencias y la escalabilidad del sistema.",
    descriptionEn:
      "I designed and developed the MySQL database architecture, optimising the table structure and relationships to ensure consistent data, incident traceability and system scalability.",
  },
  {
    id: 2,
    title: "Tecnico Apple",
    titleEn: "Apple Technician",
    company: "Servicio Oficial Apple",
    period: "2022",
    periodEnd: "2022",
    description:
      "Realicé diagnóstico, reparación y mantenimiento de dispositivos Apple, garantizando la calidad y el cumplimiento de estándares técnicos."
,
    descriptionEn:
      "I carried out diagnostics, repairs and maintenance on Apple devices to ensure quality and compliance with technical standards.",
  },
  {
    id: 3,
    title: "Tecnico Informatico",
    titleEn: "Iformatic Technician",
    company: "Microforun ",
    period: "2019",
    periodEnd: "2020",
    description:
      "Diseñé y desplegué la infraestructura de red y cableado estructurado para las aulas, asegurando la latencia  y escalablilidad.",
    descriptionEn:
      "I designed and set up the network infrastructure and structured cabling in the classrooms to ensure low latency and scalability.",
  },
  
]

export function Experience() {
  const { language, t } = useLanguage()
  const timelineRef = useRef<HTMLDivElement>(null)

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

    const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item")
    timelineItems?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Encabezado */}
        <div className="animate-slide-up text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            {t("experience.title")}
          </h2>
          <p className="text-violet-200 max-w-2xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </div>

        {/* Timeline visual: línea vertical con marcadores (solo visual) */}
        <div className="relative">
          {/* Línea vertical (visible en pantallas md+) */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-violet-700/40"></div>

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="timeline-item relative pl-12 md:pl-16"
              >
                {/* Marcador sobre la línea */}
                <span className="absolute left-2 md:left-6 top-3 w-3 h-3 rounded-full bg-violet-400 ring-4 ring-[#0f0c29] shadow-md"></span>

                {/* Badge (arriba derecha) */}
                <span className="absolute top-0 right-0 px-3 py-1 text-xs rounded-full bg-violet-600/20 text-violet-300 font-medium border border-violet-500/30">
                  {t("experience.work")}
                </span>

                {/* Periodo */}
                <p className="text-sm text-gray-400 mb-2">
                  {exp.period} -{" "}
                  {exp.periodEnd === "present" ? t("experience.present") : exp.periodEnd}
                </p>

                {/* Título */}
                <h3 className="text-2xl font-bold text-white mb-1">
                  {language === "es" ? exp.title : exp.titleEn}
                </h3>

                {/* Empresa */}
                <p className="text-violet-400 font-medium mb-4">{exp.company}</p>

                {/* Descripción */}
                <p className="text-gray-300 leading-relaxed">
                  {language === "es" ? exp.description : exp.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
