"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const timelineData = [
  {
    year: "2022",
    title: "Started my bachelors in Software Engineering from  PUCIT",
    description: "Began learning significant courses like Programming Fundamentals, OOP , DSA and web development with HTML, CSS, and JavaScript",
    color: "from-blue-400 to-blue-600",
  },
  {
    year: "2023",
    title: "Teaching Assistant Role",
    description: "Have been Teaching Assistant  of important courses like Programming Fundamentals, DSA and Algorithm Analysis in my university.Primary responsibilty was to assist professor in conducting labs,marking quizes and guiding srudents.",
    color: "from-green-400 to-green-600",
  },
  {
    year: "2024",
    title: "Full Stack Development",
    description: "Got hands on with MERN and Next JS and built exciting Projects in MERN and Next JS",
    color: "from-purple-400 to-purple-600",
  },
  {
    year: "2025",
    title: "MERN Stack Intern",
    description: "Working as MERN Stack Intern in Pure Logics ,one of the premium sofware houses of Pakistan.",
    color: "from-orange-400 to-orange-600",
  },
]

export function GrowthTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-purple-500 rounded-full" />

      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            <div className="flex-1 px-8">
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <div
                    className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-semibold mb-2`}
                  >
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>

            {/* Timeline dot */}
            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} border-4 border-background z-10`} />

            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
