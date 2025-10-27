"use client"

import { useLanguage } from "./language-provider"

export function About() {
  const { t } = useLanguage()

  return (
 <section id="about" className="relative py-24 px-6 lg:px-12 overflow-hidden">
  {/* Fondo decorativo con gradiente */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none"></div>

  <div className="max-w-6xl mx-auto relative z-10">
    <div className="animate-slide-up">
      {/* Título */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-foreground mb-12 relative">
        {t("about.title")}
        <span className="block w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></span>
      </h2>

      {/* Contenido */}
      <div className="grid gap-16 items-center">
        {/* Texto */}
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("about.description")}
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("about.passion")}
          </p>

          {/* Lista de skills destacadas */}
          <ul className="grid grid-cols-2 gap-4 mt-8">
            {["UI UX", "Frontend", "Backend", "SQL y NoSQL"].map((skill) => (
              <li
                key={skill}
                className="flex items-center space-x-2 text-foreground font-medium"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        
      </div>
    </div>
  </div>
</section>

  )
}
