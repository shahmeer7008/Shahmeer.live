"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  github: string;
  demo: string;
  technologies: string[];
}
interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  github: string;
  demo: string;
  technologies: string[];
  featured: boolean;
}

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
};

const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/shahmeer/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    github: "https://github.com/shahmeer/taskapp",
    demo: "https://taskapp-demo.vercel.app",
    featured: true,
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts and interactive maps.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    github: "https://github.com/shahmeer/weather",
    demo: "https://weather-demo.vercel.app",
    featured: false,
  },
  {
    id: "portfolio-v1",
    title: "Portfolio Website v1",
    description: "My first portfolio website built with vanilla JavaScript and modern CSS.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    github: "https://github.com/shahmeer/portfolio-v1",
    demo: "https://portfolio-v1-demo.vercel.app",
    featured: false,
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description: "A modern blog platform with markdown support and admin dashboard.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/shahmeer/blog",
    demo: "https://blog-demo.vercel.app",
    featured: false,
  },
  {
    id: "chat-app",
    title: "Real-time Chat App",
    description: "Real-time messaging application with rooms, file sharing, and emoji support.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Socket.io", "Node.js", "Express"],
    github: "https://github.com/shahmeer/chatapp",
    demo: "https://chatapp-demo.vercel.app",
    featured: false,
  },
]

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work, from concept to deployment. Each project represents a unique challenge and learning
            experience.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} featured />
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}


function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="glass-effect overflow-hidden h-full hover:shadow-xl transition-all duration-300">
        <div className="relative overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            <Button size="sm" asChild>
              <Link href={`/projects/${project.id}`}>
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Link>
            </Button>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className={`font-bold ${featured ? "text-xl" : "text-lg"}`}>{project.title}</h3>
            {featured && (
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Featured
              </Badge>
            )}
          </div>

          <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex space-x-3">
            <Button size="sm" variant="outline" asChild>
              <Link href={project.github} target="_blank">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href={project.demo} target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
