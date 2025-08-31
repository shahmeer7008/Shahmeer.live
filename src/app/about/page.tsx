"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TechStackCarousel } from "@/components/tech-stack-carousel"
import { GrowthTimeline } from "@/components/growth-timeline"

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "Azure",
  "Docker",
  "SQL",
  "Tailwind CSS",
]

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful, functional, and user-centered digital experiences.
          </p>
        </motion.div>

        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="glass-effect">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Hello, I&apos;m Muhammad Shahmeer</h2>
                  <p className="text-muted-foreground mb-4">
                    I&apos;m a Software Engineer and Full Stack Developer with experties in MERN and Next JS and ASP .Net. I have some exciting self initiated Projects and Freelance Projects that combine
                    beautiful design with robust functionality. My journey in tech started with curiosity and has
                    evolved into a passion for creating digital solutions that make a difference.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
                    projects, or sharing knowledge with the developer community. I believe in continuous learning and
                    staying updated with the latest trends in web development.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white text-6xl font-bold">
                      MS
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tech Stack Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
          <TechStackCarousel />
        </motion.div>

        {/* Growth Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">My Journey</h2>
          <GrowthTimeline />
        </motion.div>
      </div>
    </div>
  )
}
