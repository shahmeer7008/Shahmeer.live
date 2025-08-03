"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react"
import Link from "next/link"
import { ImageCarousel } from "@/components/image-carousel"
import { notFound } from "next/navigation"

const projectsData: Record<string, any> = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    date: "March 2024",
    description:
      "A comprehensive e-commerce solution built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard. The platform is designed to be scalable and maintainable with a focus on user experience.",
    longDescription: `This e-commerce platform represents a full-stack solution designed to handle modern online retail needs. The project showcases advanced React patterns, state management, and integration with third-party services.

Key features include:
• User authentication and authorization system
• Dynamic product catalog with search and filtering
• Shopping cart with persistent state
• Secure payment processing via Stripe
• Order tracking and management
• Admin dashboard for inventory management
• Responsive design optimized for all devices
• SEO optimization for better search visibility

The backend is built with Node.js and Express, utilizing MongoDB for data persistence. The application implements RESTful APIs and follows best practices for security and performance.`,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "Express", "JWT"],
    github: "https://github.com/shahmeer/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  "task-management": {
    title: "Task Management App",
    date: "January 2024",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and intuitive project organization. Built with Next.js and TypeScript for type safety and performance.",
    longDescription: `This task management application was designed to solve the challenges of team collaboration and project organization. The app provides real-time updates, ensuring all team members stay synchronized.

Features include:
• Real-time collaboration with Socket.io
• Drag-and-drop task organization
• Team member assignment and notifications
• Project timeline and milestone tracking
• File attachments and comments
• Advanced filtering and search capabilities
• Mobile-responsive design
• Dark/light theme support

The application uses Prisma as an ORM for database operations, providing type-safe database queries and migrations. The real-time functionality is powered by Socket.io, enabling instant updates across all connected clients.`,
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/shahmeer/taskapp",
    demo: "https://taskapp-demo.vercel.app",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
}

export default function Page({ params }: { params: { id: string } }) {

  const project = projectsData[params.id]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild>
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        {/* Project header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <div className="flex items-center text-muted-foreground mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{project.date}</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button asChild>
                <Link href={project.github} target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={project.demo} target="_blank">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
            </div>
          </div>

          <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Image carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <ImageCarousel images={project.images} />
        </motion.div>

        {/* Project details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="glass-effect">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {project.longDescription.split("\n\n").map((paragraph: string, index: number) => (
                  <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
