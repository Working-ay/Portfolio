"use client"

import { motion } from "framer-motion"
import { Award, Building, Target, Users, Clock, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CustomCursor from "../components/custom-cursor"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function AboutPage() {
  const companies = [
    {
      name: "KSCloud",
      description: "Cloud hosting solutions for gaming servers.",
      icon: Building,
    },
    {
      name: "HailingMC",
      description: "HailingMC is a hardcore Survival SMP built for players who want the real survival experience.",
      icon: Target,
    },
    {
      name: "XloroBot Soon",
      description: "Advanced Discord bot development and management.",
      icon: Users,
    },
  ]

  const developmentSchedule = [
    {
      name: "First Shift (On Saturday and Sunday Only)",
      time: "8:00 AM - 1 PM",
      timezone: "PKT",
      description: "Morning development session",
      icon: "🌅",
    },
    {
      name: "Second Shift",
      time: "7:00 PM - 10:00 PM",
      timezone: "PKT",
      description: "Evening development session",
      icon: "🌆",
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

      <div className="pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 font-inter">About Me</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-inter">
              Passionate about creating exceptional digital experiences that bring communities together
            </p>
          </motion.div>

          {/* Main About Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="glass-dark border-gray-700/50 card-hover">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Award className="h-8 w-8 text-cyan-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white font-inter">My Story</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed font-inter">
                  I'm AyrixMC, a skilled Community Manager and Minecraft & Discord Server Developer with a focus on
                  building well-structured, engaging, and immersive server environments. I specialize in creating custom
                  setups, managing server performance, and designing interactive systems that bring communities
                  together.
                </p>
                <br />
                <p className="text-gray-300 text-lg leading-relaxed font-inter">
                  Whether it's setting up advanced Minecraft plugins, organizing Discord bots, or managing community
                  events, I ensure every project runs smoothly and leaves a lasting impact. My goal is to help servers
                  grow with stability, creativity, and a strong player base.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Development Schedule Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text font-inter">Development Schedule</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {developmentSchedule.map((shift, index) => (
                <motion.div
                  key={shift.name}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="glass-dark border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 card-hover h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-4 text-2xl">
                          {shift.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white font-inter">{shift.name}</h3>
                          <p className="text-gray-400 text-sm font-inter">{shift.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center text-cyan-400">
                          <Clock className="h-5 w-5 mr-2" />
                          <span className="font-mono text-lg font-semibold">{shift.time}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Calendar className="h-5 w-5 mr-2" />
                          <span className="font-inter">Pakistan Standard Time ({shift.timezone})</span>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-cyan-500/10 rounded-xl border border-cyan-400/20">
                        <p className="text-cyan-300 text-sm font-inter">
                          Available for development work, consultations, and project discussions during this time.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Schedule Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8"
            >
              <Card className="glass-dark border-cyan-400/30 glow-cyan">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-3 font-inter">📅 Daily Availability</h3>
                    <p className="text-gray-300 font-inter">
                      I maintain consistent development hours to ensure reliable communication and project progress.
                      Outside these hours, I'm available for urgent matters via Discord.
                    </p>
                    <div className="mt-4 inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full text-cyan-400 text-sm font-medium border border-cyan-400/30">
                      <Clock className="h-4 w-4 mr-2" />
                      Total: Depends on my Timetable
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Companies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text font-inter">My Companies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="glass-dark border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 card-hover h-full">
                    <CardHeader>
                      <div className="flex items-center">
                        <company.icon className="h-8 w-8 text-cyan-400 mr-3" />
                        <CardTitle className="text-white font-inter">{company.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 font-inter">{company.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pb-8"
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text font-inter">What Drives Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="glass-dark border-gray-700/50 card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4 font-inter">Innovation</h3>
                  <p className="text-gray-300 font-inter">
                    Constantly pushing the boundaries of what's possible in server development and community management.
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-dark border-gray-700/50 card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4 font-inter">Quality</h3>
                  <p className="text-gray-300 font-inter">
                    Every project is crafted with attention to detail and optimized for the best user experience.
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-dark border-gray-700/50 card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4 font-inter">Community</h3>
                  <p className="text-gray-300 font-inter">
                    Building strong, engaged communities that thrive and grow together over time.
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-dark border-gray-700/50 card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4 font-inter">Reliability</h3>
                  <p className="text-gray-300 font-inter">
                    Delivering stable, high-performance solutions that clients can depend on 24/7.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
