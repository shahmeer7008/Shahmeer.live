"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Award } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "March 2024",
    credentialId: "AWS-SAA-2024-001",
    description: "Validates expertise in designing distributed systems on AWS",
    image: "/placeholder.svg?height=300&width=400",
    verifyUrl: "https://aws.amazon.com/verification",
    downloadUrl: "/certificates/aws-saa.pdf",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"],
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "January 2024",
    credentialId: "GCP-PD-2024-001",
    description: "Demonstrates ability to build scalable applications on Google Cloud",
    image: "/placeholder.svg?height=300&width=400",
    verifyUrl: "https://cloud.google.com/certification",
    downloadUrl: "/certificates/gcp-pd.pdf",
    skills: ["GCP Services", "Kubernetes", "DevOps", "Microservices"],
  },
  {
    title: "Meta Frontend Developer Professional",
    issuer: "Meta (Facebook)",
    date: "November 2023",
    credentialId: "META-FE-2023-001",
    description: "Comprehensive frontend development skills certification",
    image: "/placeholder.svg?height=300&width=400",
    verifyUrl: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    downloadUrl: "/certificates/meta-frontend.pdf",
    skills: ["React", "JavaScript", "HTML/CSS", "UI/UX Design"],
  },
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "September 2023",
    credentialId: "MONGO-DEV-2023-001",
    description: "Expertise in MongoDB database design and development",
    image: "/placeholder.svg?height=300&width=400",
    verifyUrl: "https://university.mongodb.com/certification",
    downloadUrl: "/certificates/mongodb-dev.pdf",
    skills: ["NoSQL", "Database Design", "Aggregation", "Performance Tuning"],
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "July 2023",
    credentialId: "DOCKER-DCA-2023-001",
    description: "Containerization and orchestration expertise",
    image: "/placeholder.svg?height=300&width=400",
    verifyUrl: "https://www.docker.com/certification",
    downloadUrl: "/certificates/docker-dca.pdf",
    skills: ["Containerization", "Docker Compose", "Orchestration", "DevOps"],
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "May 2023",
    credentialId: "CKA-2023-001",
    description: "Kubernetes cluster administration and management",
    image: "/placeholder.svg?height=300&width=400",
    verifyUrl: "https://www.cncf.io/certification/cka/",
    downloadUrl: "/certificates/cka.pdf",
    skills: ["Kubernetes", "Container Orchestration", "Cluster Management", "Troubleshooting"],
  },
]

export default function Certifications() {
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
            My <span className="text-primary">Certifications</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning in technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="glass-effect h-full hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary/90 text-primary-foreground p-2 rounded-full">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mb-3">{cert.date}</p>
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-xs text-muted-foreground mb-4">
                    <span className="font-medium">Credential ID:</span> {cert.credentialId}
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Verify
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={cert.downloadUrl} download>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
