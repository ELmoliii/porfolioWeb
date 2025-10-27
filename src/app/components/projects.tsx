"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { useLanguage } from "./language-provider"


const projects = [
  {
    id: 1,
    title: "Pato Juego",
    description: "Pato Juego es el TFG de DAM que hice con mis compañeros Izan y Andrea. Es un juego Multiplataforma de escritorio consite en contruir una ciudad de patos.",
    descriptionEn: "Pato Juego is the DAM final project I did with my classmates Izan and Andrea. It is a multiplatform desktop game that consists of building a city of ducks.",
    image: "/patoJuego.webp",
    technologies: ["Java", "Open GL", "Gimp"],
    category: "game",
    liveUrl: "https://drive.google.com/file/d/1N49B9YP8l73Q4XD35Y4PJ9Von9s2ST25/view",
    githubUrl: "https://github.com/lz4n/TFG",
  },
  
]

export function Projects() {
  const [filter, setFilter] = useState("all")
  const { language, t } = useLanguage()

  const filters = [
      { key: "all", label: t("projects.filter.all") },
      { key: "game", label: "game" }, 
   // { key: "fronted", label: t("projects.filter.frontend") },
  //  { key: "fullstack", label: t("projects.filter.fullstack") },
   // { key: "mobile", label: t("projects.filter.mobile") },
        
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">{t("projects.title")}</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterOption) => (
              <Button
                key={filterOption.key}
                variant={filter === filterOption.key ? "default" : "outline"}
                onClick={() => setFilter(filterOption.key)}
                className={
                  filter === filterOption.key
                    ? "transition-all duration-200" 
                    : "text-gray-300 border-purple-800 hover:text-[#8A2BE2] hover:border-[#8A2BE2] hover:bg-purple-900/20 " + 
                      "transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg" 
                }
              >
                {filterOption.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="project-card overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover opacity-80"
                    loading="lazy"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>
                    {language === "es" ? project.description : project.descriptionEn}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t("projects.viewLive")}
                      </a>
                    </Button>

                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        {t("projects.viewCode")}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
