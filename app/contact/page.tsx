"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CustomCursor from "../components/custom-cursor"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function ContactPage() {
  const handleDiscordClick = () => {
    // Open Discord profile/chat
    window.open(`https://discord.com/users/1284787467148460146`, "_blank")
  }

  const handleEmailClick = () => {
    // Open email client
    window.open("mailto:ayrixmc@gmail.com", "_blank")
  }

  return (
    <div className="min-h-screen animated-black-bg grid-pattern">
      <CustomCursor />
      <Navigation />

      {/* Animated Particles */}
      <div className="particles fixed inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <div className="pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 font-inter">Contact</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-inter">
              Ready to start your next project? Get in touch with me directly through email or Discord.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-12"
          >
            {/* Email Section */}
            <Card className="glass-dark border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 card-hover">
              <CardContent className="p-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-4">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white font-inter">Contact through email</h2>
                  </div>

                  <div className="mb-8">
                    <p className="text-xl text-cyan-400 font-mono mb-4">ayrixmc@gmail.com</p>
                    <p className="text-gray-300 font-inter">
                      Send me an email with your project details and I'll get back to you within 2-4 hours.
                    </p>
                  </div>

                  <Button onClick={handleEmailClick} className="btn-modern text-lg px-8 py-4 h-auto font-inter">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>

            {/* Discord Section */}
            <Card className="glass-dark border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 card-hover">
              <CardContent className="p-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center mr-4">
                      <MessageSquare className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white font-inter">Contact me on Discord</h2>
                  </div>

                  <div className="mb-8">
                    <p className="text-xl text-purple-400 font-mono mb-4">ayrixmc</p>
                    <p className="text-gray-300 font-inter">
                      Click the button below to open my Discord profile and start a conversation. This is the fastest
                      way to reach me!
                    </p>
                  </div>

                  <Button
                    onClick={handleDiscordClick}
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white border-0 text-lg px-8 py-4 h-auto font-inter"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Contact me on Discord
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="glass-dark border-cyan-400/30 glow-cyan card-hover">
                <CardContent className="p-8">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 30px rgba(6, 182, 212, 0.4)",
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="rounded-lg"
                  >
                    <h3 className="text-2xl font-bold text-white mb-6 font-inter">Quick Info</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                      <div>
                        <div className="text-cyan-400 text-lg font-semibold mb-2 font-inter">⚡ Response Time</div>
                        <div className="text-gray-300 font-inter">2-4 hours</div>
                      </div>
                      <div>
                        <div className="text-cyan-400 text-lg font-semibold mb-2 font-inter">🌍 Timezone</div>
                        <div className="text-gray-300 font-inter">PST</div>
                      </div>
                      <div>
                        <div className="text-cyan-400 text-lg font-semibold mb-2 font-inter">💼 Consultation</div>
                        <div className="text-gray-300 font-inter">Free</div>
                      </div>
                      <div>
                        <div className="text-cyan-400 text-lg font-semibold mb-2 font-inter">🚀 Availability</div>
                        <div className="text-gray-300 font-inter">Ready to start</div>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
