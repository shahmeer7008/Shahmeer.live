"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Intern",
    company: "Pure Logics",
    location: "Lahore",
    duration: "July 2025 - Present",
    description:
      "Working as  Full Stack intern in Pure Logics and developing scalable web applications using React, Next.js, and Node.js.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Azure"],
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Full Stack Developer",
    company: "Fiver",
    location: "Remote",
    duration: "July 2025-present",
    description:
      "Developing responsive web applications and improved user experience across multiple projects.",
    technologies: ["React", "Next JS", "Tailwind CSS", "Redux", "Tyscript"],
    color: "from-green-500 to-blue-500",
  },
  
  
]

export default function Experience() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-primary">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through my professional growth and the amazing teams I &#39;ve worked with.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-background z-10`}
                />

                <div className="ml-20">
                  <Card className="glass-effect hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                          <div className="flex items-center text-muted-foreground mb-2">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                          <div className="flex items-center mb-1">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
