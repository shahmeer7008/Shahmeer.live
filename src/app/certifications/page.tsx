"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    title: "Backend Development and APIs",
    issuer: "FreeCodeCamp",
    date: "June 2025",
    credentialId: "fcc071d184a-2330-4640-83e9-52766ddb5d79",
    description: "Got hands on with backend development and APIs using Node.js, Express, MongoDB, and RESTful API design principles.",
    image: "/images/FreeCodeCamp.png?height=300&width=400",
    verifyUrl: "https://aws.amazon.com/verification",
    downloadUrl: "/certificates/aws-saa.pdf",
    skills: ["Node.js", "Express", "MongoDB", "RESTful APIs"],
  },
  {
    title:"Hands On ReactJS from Begineer to Advanced",
    issuer: "Learnify IT",
    date: "June 2025",
    credentialId: "UC-faadcbda-378d-4ab2-9028-8e00d330f1a3",
    description: "Comprehensive ReactJS course covering fundamentals to advanced concepts, including hooks, state management, and component architecture.",
    image: "/images/react_Udemy.png?height=300&width=400",
    verifyUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-faadcbda-378d-4ab2-9028-8e00d330f1a3.pdf",
    downloadUrl: "/certificates/gcp-pd.pdf",
    skills: ["ReactJS", "Tailwind CSS", "JavaScript", "UI/UX Design"],
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Deeplearning.ai",
    date: "March 2025",
    credentialId: "02V725HIKQPE",
    description: "Covered supervised machine learning techniques for regression and classification tasks, including linear regression, logistic regression, and evaluation metrics.",
    image: "/images/ml.png?height=300&width=400",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/02V725HIKQPE",
    downloadUrl: "/certificates/meta-frontend.pdf",
    skills: ["Regression", "Classification", "Model Evaluation", "Scikit-learn"],
  },
  {
    title: "Introduction to Backend Development",
    issuer: "Meta",
    date: "June 2023",
    credentialId: "EY7VN8KGG6FL",
    description: "Expertise in MongoDB database design and development",
    image: "/images/backend_meta.png?height=300&width=400",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/EY7VN8KGG6FL",
    downloadUrl: "/certificates/mongodb-dev.pdf",
    skills: ["Nodejs", "JavaScript", "API Development", "Express.js"],
  },
  {
    title: "Programming in Python",
    issuer: "Meta",
    date: "August 2023",
    credentialId: "2U985SS3P9T9",
    description: "Proficiency in Python programming language, including syntax, data structures, and basic programming concepts.",
    image: "/images/python_meta.png?height=300&width=400",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/2U985SS3P9T9",
    downloadUrl: "/certificates/python-programming.pdf",
    skills: ["Python", "Data Structures", "Algorithms", "Object-Oriented Programming"],
  },
  {
    title: "Introduction to HTML,CSS and JavaScript",
    issuer: "IBM",
    date: "August 2023",
    credentialId: "3FG3QVH26NJP",
    description: "Fundamental skills in web development with HTML, CSS, and JavaScript, including responsive design and basic front-end development principles.",
    image: "/images/html_ibm.png?height=300&width=400",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/3FG3QVH26NJP",
    downloadUrl: "/certificates/html-css-javascript.pdf",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    title: "Get started with Git & Github",
    issuer: "IBM",
    date: "August 2023",
    credentialId: "7FGFNRQWUTQY",
    description: "Proficiency in Git version control system and GitHub platform for collaborative software development, including branching, merging, and pull requests.",
    image: "/images/git_ibm.png?height=300&width=400",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/7FGFNRQWUTQY",
    downloadUrl: "/certificates/git-github.pdf",
    skills: ["Git", "GitHub", "Version Control", "Collaboration"],
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
                    {/* <Button size="sm" asChild>
                      <a href={cert.downloadUrl} download>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </Button> */}
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
