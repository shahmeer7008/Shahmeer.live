"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "Remote",
    duration: "2023 - Present",
    description:
      "Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and implementing best practices.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Frontend Developer",
    company: "Digital Innovations",
    location: "New York, NY",
    duration: "2022 - 2023",
    description:
      "Developed responsive web applications and improved user experience across multiple products. Collaborated with design team to implement pixel-perfect interfaces.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Redux", "Jest"],
    color: "from-green-500 to-blue-500",
  },
  {
    title: "Junior Web Developer",
    company: "StartupXYZ",
    location: "San Francisco, CA",
    duration: "2021 - 2022",
    description:
      "Built and maintained company website and internal tools. Gained experience in full-stack development and agile methodologies.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Web Development Intern",
    company: "Local Agency",
    location: "Los Angeles, CA",
    duration: "2021",
    description:
      "Assisted in developing client websites and learned fundamental web development concepts. First professional experience in the tech industry.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
    color: "from-purple-500 to-pink-500",
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
