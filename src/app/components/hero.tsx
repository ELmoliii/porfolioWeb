"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Download, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import { useLanguage } from "./language-provider"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

 const scrollToProjects = () => {
  // Busca el elemento con el id "projects" en la página.
  const projectsSection = document.getElementById("experience");

  // Si el elemento existe, se desplaza suavemente hacia él.
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};

  const downloadCV = () => {
    window.open("https://tu-link-directo-al-cv.pdf", "_blank");
  }

  if (!mounted) return null

  const linktoLinkedIn= () => {
    window.open("https://www.linkedin.com/in/alex-moli/", "_blank");
  }

  return (
 <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
  {/* Fondo con gradiente suave adaptable */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-indigo-100 dark:from-purple-900 dark:via-black dark:to-indigo-900 transition-colors duration-500"></div>

  {/* Elementos decorativos */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/30 dark:bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
  <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-400/30 dark:bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>

  <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
    {/* Imagen    <img
        src="/person.png"
        alt="Alejandro Molinero"
        className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-purple-500 shadow-xl hover:scale-105 transition-transform duration-300"
      /> */}
    <div className="mb-8">
     
    </div>

    {/* Greeting */}
    <p className="text-xl md:text-2xl text-purple-600 dark:text-purple-400 font-light mb-4 tracking-widest animate-fade-in-up">
      {t("hero.greeting")}
    </p>

    {/* Nombre */}
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight drop-shadow-lg animate-fade-in-up">
      {t("hero.name")}
    </h1>

    {/* Rol */}
    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-indigo-600 dark:text-indigo-300 mb-8 font-light animate-fade-in-up">
      {t("hero.role")}
    </h2>

    {/* Descripción */}
    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up">
      {t("hero.description")}
    </p>

    {/* Botones */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up">
      <Button
        onClick={downloadCV}
        size="lg"
        className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
      >
        <Download className="mr-2 h-5 w-5" />
        {t("hero.downloadCV")}
      </Button>

      <Button
        variant="outline"
        size="lg"
        onClick={linktoLinkedIn}
        className="w-full sm:w-auto border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-300 hover:bg-purple-500 hover:text-white hover:shadow-lg transition-all duration-300"
      >
        <ExternalLink className="mr-2 h-5 w-5" />
        {t("hero.viewProjects")}
      </Button>
    </div>

    {/* Flecha animada */}
    <button
      onClick={scrollToProjects}
      className="animate-bounce text-indigo-600 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-white transition-colors duration-200"
      aria-label="Scroll to projects"
    >
      <ArrowDown className="h-8 w-8" />
    </button>
  </div>
</section>


  )
}
