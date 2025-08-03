



"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ContactTree } from "@/components/contact-tree"

export default function Contact() {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect! Click on the branches of the tree below to explore different ways to reach me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Tree */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="h-[600px]"
          >
            <ContactTree />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
             className="space-y-6"
          >
            <Card className="glass-effect">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Let's Work Together</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always interested in new opportunities, collaborations, and interesting projects. Whether you have
                  a question, want to discuss a project, or just want to say hello, I'd love to hear from you.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">What I Can Help With:</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Full-stack web development</li>
                      <li>• React and Next.js applications</li>
                      <li>• UI/UX design and implementation</li>
                      <li>• Cloud architecture and deployment</li>
                      <li>• Technical consulting</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Response Time:</h3>
                    <p className="text-muted-foreground">
                      I typically respond to emails within 24 hours and LinkedIn messages within a few hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Current Status</h2>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-primary font-semibold">Available for new projects</span>
                </div>
                <p className="text-muted-foreground">
                  I'm currently accepting new freelance projects and full-time opportunities. Let's discuss how we can
                  work together to bring your ideas to life.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}



