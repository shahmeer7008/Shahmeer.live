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
    description:
      "Got hands on with backend development and APIs using Node.js, Express, MongoDB, and RESTful API design principles.",
    image: "/images/FreeCodeCamp.png",
    verifyUrl: "https://aws.amazon.com/verification",
    skills: ["Node.js", "Express", "MongoDB", "RESTful APIs"],
  },
  {
    title: "Hands On ReactJS from Begineer to Advanced",
    issuer: "Learnify IT",
    date: "June 2025",
    credentialId: "UC-faadcbda-378d-4ab2-9028-8e00d330f1a3",
    description:
      "Comprehensive ReactJS course covering fundamentals to advanced concepts, including hooks, state management, and component architecture.",
    image: "/images/react_Udemy.png",
    verifyUrl:
      "https://udemy-certificate.s3.amazonaws.com/pdf/UC-faadcbda-378d-4ab2-9028-8e00d330f1a3.pdf",
    skills: ["ReactJS", "Tailwind CSS", "JavaScript", "UI/UX Design"],
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Deeplearning.ai",
    date: "March 2025",
    credentialId: "02V725HIKQPE",
    description:
      "Covered supervised machine learning techniques for regression and classification tasks.",
    image: "/images/ml.png",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/02V725HIKQPE",
    skills: ["Regression", "Classification", "Model Evaluation", "Scikit-learn"],
  },
  {
    title: "Introduction to Backend Development",
    issuer: "Meta",
    date: "June 2023",
    credentialId: "EY7VN8KGG6FL",
    description: "Expertise in MongoDB database design and development",
    image: "/images/backend_meta.png",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/EY7VN8KGG6FL",
    skills: ["Nodejs", "JavaScript", "API Development", "Express.js"],
  },
  {
    title: "Programming in Python",
    issuer: "Meta",
    date: "August 2023",
    credentialId: "2U985SS3P9T9",
    description:
      "Proficiency in Python programming language including syntax and data structures.",
    image: "/images/python_meta.png",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/2U985SS3P9T9",
    skills: ["Python", "Data Structures", "Algorithms", "OOP"],
  },
  {
    title: "Introduction to HTML, CSS and JavaScript",
    issuer: "IBM",
    date: "August 2023",
    credentialId: "3FG3QVH26NJP",
    description:
      "Fundamental skills in web development with HTML, CSS, and JavaScript.",
    image: "/images/html_ibm.png",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/3FG3QVH26NJP",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    title: "Get started with Git & Github",
    issuer: "IBM",
    date: "August 2023",
    credentialId: "7FGFNRQWUTQY",
    description:
      "Proficiency in Git version control and GitHub collaboration workflows.",
    image: "/images/git_ibm.png",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/7FGFNRQWUTQY",
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
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <p className="text-primary">{cert.issuer}</p>

                  <Button size="sm" variant="outline" asChild className="mt-4">
                    <a href={cert.verifyUrl} target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}