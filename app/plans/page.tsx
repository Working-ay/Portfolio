"use client"

import { motion } from "framer-motion"
import { Check, ChevronRight, MessageSquare, Server, Shield, Globe, Database, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import CustomCursor from "../components/custom-cursor"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function PlansPage() {
  const plans = [
    {
      name: "Full Minecraft Network Setup",
      description: "Complete multi-server network with custom plugins and advanced configurations",
      price: "$100",
      timeframe: "3-4 weeks",
      icon: Server,
      color: "from-cyan-500 to-blue-600",
      features: [
        "Multi-server network architecture",
        "Custom plugin development",
        "Cross-server communication",
        "Advanced permissions system",
        "Economy & shop systems",
        "Anti-cheat implementation",
        "Performance optimization",
        "Staff training & documentation",
      ],
      popular: true,
    },
    {
      name: "Duels, Lifesteal & Hub",
      description: "Specialized PvP server setup with custom game modes and lobby system",
      price: "$150",
      timeframe: "2 weeks",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      features: [
        "Custom duels arena system",
        "Lifesteal mechanics setup",
        "Professional hub/lobby design",
        "Queue & matchmaking system",
        "Statistics & leaderboards",
        "Custom kits & abilities",
        "Spectator systems",
        "Tournament features",
      ],
      popular: false,
    },
    {
      name: "Discord Server Development",
      description: "Professional Discord server setup with custom bots and automation",
      price: "$50",
      timeframe: "1 week",
      icon: MessageSquare,
      color: "from-purple-500 to-indigo-500",
      features: [
        "Server structure & channels",
        "Custom bot development",
        "Role management system",
        "Moderation automation",
        "Welcome & verification system",
        "Ticket support system",
        "Event management tools",
        "Integration with other platforms",
      ],
      popular: false,
    },
    {
      name: "Website Development",
      description: "Custom websites from simple landing pages to full-stack applications",
      price: "From $50",
      timeframe: "1-4 weeks",
      icon: Globe,
      color: "from-green-500 to-teal-500",
      features: [
        "Static websites: $50 - $100",
        "Business websites: $200 - $500",
        "E-commerce sites: $500 - $1,500+",
        "Full-stack apps: $1,000 - $5,000+",
        "Responsive design",
        "SEO optimization",
        "Content management",
        "Analytics integration",
      ],
      popular: false,
      isPriceRange: true,
    },
    {
      name: "Server Management",
      description: "Ongoing Discord server management and maintenance services",
      price: "From $20",
      timeframe: "Ongoing",
      icon: Settings,
      color: "from-blue-500 to-purple-500",
      features: [
        "Small servers (100-500): $20 - $50",
        "Medium servers (500-5K): $50 - $150",
        "Large servers (5K+): $200 - $300+",
        "Monthly maintenance: $30 - $150/mo",
        "24/7 monitoring",
        "Community engagement",
        "Event organization",
        "Growth strategies",
      ],
      popular: false,
      isPriceRange: true,
    },
  ]

  const hostingPlan = {
    name: "Hosting Development",
    description: "Complete hosting business setup with panels, billing, and automation",
    icon: Database,
    color: "from-orange-500 to-red-500",
    services: [
      {
        name: "Basic Pterodactyl Panel",
        price: "$30 - $80",
        description: "Simple game server panel setup",
      },
      {
        name: "Panel + WHMCS Integration",
        price: "$100 - $300",
        description: "Billing system integration",
      },
      {
        name: "Custom Theme & Branding",
        price: "$100 - $250",
        description: "Professional visual identity",
      },
      {
        name: "Full Hosting Business",
        price: "$500 - $1,000+",
        description: "Complete hosting company setup",
      },
    ],
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
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 font-inter">Plans</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-inter">
              Choose the perfect service for your project needs, backed by my expertise in server development
            </p>
          </motion.div>

          {/* Main Plans Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex"
              >
                <Card
                  className={`glass-dark border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 flex flex-col h-full relative card-hover ${
                    plan.popular ? "ring-2 ring-blue-500/50 shadow-lg shadow-blue-500/20" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <Badge className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white border-0 px-3 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mr-3`}
                        >
                          <plan.icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-white text-lg font-inter">{plan.name}</CardTitle>
                      </div>
                    </div>
                    <p className="text-gray-300 font-inter">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold gradient-text font-mono">{plan.price}</span>
                        <span className="text-gray-400 ml-2 font-inter">{plan.isPriceRange ? "" : "/ project"}</span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1 font-inter">
                        {plan.timeframe !== "Ongoing" ? `Estimated timeframe: ${plan.timeframe}` : "Ongoing service"}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider font-inter">
                        {plan.isPriceRange ? "Pricing & Services:" : "What's included:"}
                      </h4>
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start">
                          <Check className="h-4 w-4 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm font-inter">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white border-0 font-inter`}
                      size="lg"
                    >
                      Get Started
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Hosting Development Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <Card className="glass-dark border-gray-700/50 card-hover">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${hostingPlan.color} flex items-center justify-center mr-4`}
                  >
                    <hostingPlan.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl font-inter">{hostingPlan.name}</CardTitle>
                    <p className="text-gray-300 font-inter">{hostingPlan.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {hostingPlan.services.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="p-4 bg-slate-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      <h4 className="text-white font-semibold mb-2 font-inter">{service.name}</h4>
                      <p className="text-cyan-400 font-bold mb-2 font-mono">{service.price}</p>
                      <p className="text-gray-400 text-sm font-inter">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button
                    className={`bg-gradient-to-r ${hostingPlan.color} hover:opacity-90 text-white border-0 font-inter`}
                  >
                    Discuss Hosting Project
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Custom Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center pb-8"
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
                  <h3 className="text-2xl font-bold text-white mb-4 font-inter">Need a Custom Solution?</h3>
                  <p className="text-gray-300 mb-6 font-inter">
                    Don't see a service that fits your needs? I offer custom solutions tailored to your specific
                    requirements. Let's discuss your project and create something amazing together.
                  </p>
                  <Button asChild size="lg" className="btn-modern font-inter">
                    <Link href="/contact">
                      Contact Me for Custom Quote
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
