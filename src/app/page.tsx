"use client"

import { motion } from "framer-motion"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { FloatingParticles } from "@/components/floating-particles"
import { Avatar3D } from "@/components/avatar-3d"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingParticles />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Muhammad <span className="text-primary">Shahmeer</span>
            </motion.h1>

            <div className="text-xl md:text-2xl text-muted-foreground mb-8">
              <TypewriterEffect
                words={["Software Engineer", "Full Stack Developer", "NEXT JS/ MERN Stack", "AI/ML Enthusiast"]}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Engineering Full Stack end-to-end solutions with clarity, efficiency, and purpose
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - 3D Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <Avatar3D />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        {/* <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div> */}
      </motion.div>
    </div>
  )
}
