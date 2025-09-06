"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Database, Globe, MessageSquare, Server, Star, Zap, Users, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CustomCursor from "./components/custom-cursor"
import Navigation from "./components/navigation"
import Footer from "./components/footer"

export default function HomePage() {
  const skills = [
    { name: "Discord Development", percentage: 100, icon: MessageSquare, color: "from-purple-500 to-pink-500" },
    { name: "Minecraft Servers", percentage: 95, icon: Server, color: "from-green-500 to-emerald-500" },
    { name: "Web Development", percentage: 91, icon: Globe, color: "from-blue-500 to-cyan-500" },
    { name: "Cloud Hosting", percentage: 90, icon: Database, color: "from-orange-500 to-red-500" },
    { name: "Database Management", percentage: 80, icon: Code, color: "from-indigo-500 to-purple-500" },
  ]

  const stats = [
    {
      number: "10+",
      label: "Projects Completed",
      name: "Total Projects",
      icon: Trophy,
      description: "Successfully delivered projects",
    },
    {
      number: "100%",
      label: "Satisfied Clients",
      name: "Happy Customers",
      icon: Users,
      description: "Clients who love our work",
    },
    {
      number: "3",
      label: "Active Companies",
      name: "Business Ventures",
      icon: Star,
      description: "Companies I currently run",
    },
    {
      number: "7",
      label: "Support Available",
      name: "Always Online",
      icon: Zap,
      description: "Round-the-clock assistance",
    },
  ]

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl float"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full text-cyan-400 text-sm font-medium mb-6 glass border border-cyan-400/30">
              ✨ Available for new projects
            </span>
            <h1 className="text-6xl md:text-8xl font-black gradient-text mb-6 leading-tight font-inter">
              Hi, I'm AyrixMC
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto font-inter"
          >
            I craft <span className="text-cyan-400 font-semibold">immersive digital experiences</span> through expert
            server development and community management
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button asChild className="btn-modern text-lg px-8 py-4 h-auto font-inter">
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="glass border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 text-lg px-8 py-4 h-auto rounded-xl font-inter"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold gradient-text mb-6 font-inter">My Expertise</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-inter">
              Specialized skills honed through years of experience in server development and community building
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="glass-dark border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 card-hover overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}
                      >
                        <skill.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white font-inter">{skill.name}</h3>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 font-inter">Proficiency</span>
                        <span className="text-cyan-400 font-bold font-mono">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4 font-inter">Proven Track Record</h2>
            <p className="text-gray-400 text-lg font-inter">Numbers that speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <Card className="glass-dark border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 card-hover p-6 h-full">
                  <div className="flex flex-col items-center h-full">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-black gradient-text mb-2 font-mono">{stat.number}</div>
                    <div className="text-white font-semibold mb-2 font-inter text-lg">{stat.name}</div>
                    <div className="text-gray-400 font-medium font-inter text-sm text-center">{stat.description}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Card className="glass-dark border-cyan-400/30 glow-cyan overflow-hidden">
            <CardContent className="p-12">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(6, 182, 212, 0.3)",
                    "0 0 50px rgba(59, 130, 246, 0.4)",
                    "0 0 30px rgba(6, 182, 212, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="rounded-2xl"
              >
                <h2 className="text-5xl font-bold gradient-text mb-6 font-inter">Ready to Build Something Epic?</h2>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed font-inter">
                  Let's collaborate and create the next generation of server experiences that your community will love.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button asChild className="btn-modern text-lg px-8 py-4 h-auto font-inter">
                    <Link href="/plans">
                      View Plans <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="glass border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 text-lg px-8 py-4 h-auto rounded-xl font-inter"
                  >
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
