"use client"

import { motion } from "framer-motion"
import { Server, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CustomCursor from "../components/custom-cursor"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function ProjectsPage() {
  const currentProjects = [
    {
      name: "HailingMC",
      description: "A premium Minecraft survival server with custom plugins and immersive gameplay mechanics.",
      status: "Active",
      type: "Minecraft Server",
      features: ["Custom Plugins", "Economy System", "PvP Arena", "Community Events"],
    },
    {
      name: "RageSMP",
      description: "Survival Multiplayer server focused on community building and collaborative gameplay.",
      status: "Active",
      type: "Minecraft SMP",
      features: ["Whitelist System", "Community Builds", "Regular Events", "Discord Integration"],
    },
    {
      name: "Clush SMP",
      description: "Advanced server management system with comprehensive moderation tools.",
      status: "SOON",
      type: "Management System",
      features: ["Auto Moderation", "Analytics", "Player Management", "Custom Commands"],
    },
    {
      name: "Frost SMP",
      description: "Multi-server network with various game modes and cross-server functionality.",
      status: "Closed",
      type: "Server Network",
      features: ["Multi-Server", "Cross-Platform", "Custom Lobbies", "Rank System"],
    },
  ]

  const pastProjects = [
    {
      name: "Cleave SMP",
      description: "Popular survival server that hosted over 500 active players at its peak.",
      status: "Completed",
      type: "Minecraft SMP",
      achievements: ["500+ Active Players", "6 Months Runtime", "Community Favorite"],
    },
    {
      name: "Zenith Lifesteal WIP",
      description: "Innovative lifesteal server with unique mechanics and custom features.",
      status: "Completed",
      type: "Minecraft PvP",
      achievements: ["Custom Lifesteal System", "Unique PvP Mechanics", "Active Community"],
    },
    {
      name: "Infiniti Network",
      description: "Large-scale server network with multiple game modes and thousands of players.",
      status: "Completed",
      type: "Server Network",
      achievements: ["1000+ Players", "Multiple Game Modes", "Professional Management"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-900">
      <CustomCursor />
      <Navigation />

      <div className="pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-6">
              Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Showcasing the servers and systems I've built to create amazing gaming experiences
            </p>
          </motion.div>

          {/* Current Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Current Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white flex items-center">
                          <Server className="h-5 w-5 text-cyan-400 mr-2" />
                          {project.name}
                        </CardTitle>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{project.status}</Badge>
                      </div>
                      <Badge variant="outline" className="w-fit border-cyan-400/30 text-cyan-400">
                        {project.type}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-cyan-400">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature) => (
                            <Badge key={feature} variant="secondary" className="bg-slate-700 text-gray-300">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Past Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Past Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pastProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 h-full">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Users className="h-5 w-5 text-cyan-400 mr-2" />
                        {project.name}
                      </CardTitle>
                      <Badge variant="outline" className="w-fit border-blue-400/30 text-blue-400">
                        {project.type}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-cyan-400">Achievements:</h4>
                        <div className="space-y-1">
                          {project.achievements.map((achievement) => (
                            <div key={achievement} className="text-sm text-gray-300 flex items-center">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center pb-8"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Project Impact</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-cyan-400">10+</div>
                    <div className="text-gray-300">Total Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-400">100%</div>
                    <div className="text-gray-300">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-400">4</div>
                    <div className="text-gray-300">Active Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-400">3</div>
                    <div className="text-gray-300">Companies</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
