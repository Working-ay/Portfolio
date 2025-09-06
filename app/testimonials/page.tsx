"use client"

import { motion } from "framer-motion"
import { Quote, Star, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import CustomCursor from "../components/custom-cursor"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Ryxious",
      role: "HailingMC Owner",
      content:
        "AyrixMC transformed the server completely. The custom plugins and community management strategies increased our player base by 100%. Absolutely incredible work!",
      rating: 5,
      project: "HailingMC Setup",
    },
    {
      name: "Hashir",
      role: "Discord Community Manager",
      content:
        "Working with AyrixMC on our Discord server was amazing. The bot systems and moderation tools they created are exactly what we needed. Professional and efficient!",
      rating: 5,
      project: "Discord Bot Development",
    },
    {
      name: "ItzVandine",
      role: "Infiniti Network Owner",
      content:
        "The multi-server network setup was flawless. AyrixMC's expertise in server management and cross-platform integration is unmatched. Highly recommend!",
      rating: 5,
      project: "Network Infrastructure",
    },
    {
      name: "Travis",
      role: "TideSMP Owner",
      content:
        "The server runs so smoothly and the custom features make gameplay incredibly engaging. You can tell AyrixMC really cares about the player experience.",
      rating: 5,
      project: "Server Optimization",
    },
    {
      name: "Frontman",
      role: "Gaming Company CEO",
      content:
        "AyrixMC delivered beyond expectations. The hosting solutions from KSCloud are reliable and the support is outstanding. True professional!",
      rating: 5,
      project: "Hosting Solutions",
    },
    {
      name: "M2trix",
      role: "Fellow Developer",
      content:
        "Collaborating with AyrixMC was a pleasure. Their code quality and system architecture knowledge is impressive. Learned a lot from working together!",
      rating: 5,
      project: "Development Collaboration",
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
              Testimonials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              What clients say about working with me and the results we've achieved together
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Quote className="h-8 w-8 text-cyan-400 mr-3" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarFallback className="bg-cyan-400/20 text-cyan-400">
                            <User className="h-5 w-5" />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-sm text-gray-400">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <div className="text-sm text-cyan-400 font-medium">Project: {testimonial.project}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center pb-8"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-8">Client Satisfaction</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
                    <div className="text-gray-300">Client Satisfaction Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">49</div>
                    <div className="text-gray-300">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">5.0</div>
                    <div className="text-gray-300">Average Rating</div>
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
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
