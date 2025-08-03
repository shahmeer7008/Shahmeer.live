"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const techStack = [
  { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
  { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
  { name: "TypeScript", icon: "TS", color: "from-blue-500 to-blue-700" },
  { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
  { name: "Python", icon: "🐍", color: "from-yellow-400 to-yellow-600" },
  { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-700" },
  { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-blue-800" },
  { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600" },
]

export function TechStackCarousel() {
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: [0, -100 * techStack.length] }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="flex space-x-6"
        style={{ width: `${techStack.length * 200}px` }}
      >
        {[...techStack, ...techStack].map((tech, index) => (
          <Card key={`${tech.name}-${index}`} className="flex-shrink-0 w-48 glass-effect">
            <CardContent className="p-6 text-center">
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center text-white text-2xl font-bold`}
              >
                {tech.icon}
              </div>
              <h3 className="font-semibold">{tech.name}</h3>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  )
}
