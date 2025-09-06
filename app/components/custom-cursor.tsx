"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners for mouse movement with passive option for better performance
    window.addEventListener("mousemove", updateMousePosition, { passive: true })

    // Function to add hover listeners to elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "button, a, [role='button'], input, textarea, select, nav, .nav-item",
      )
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
      })
    }

    // Initial setup
    addHoverListeners()

    // Re-add listeners when DOM changes (for dynamic content)
    const observer = new MutationObserver(() => {
      addHoverListeners()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      observer.disconnect()
      const interactiveElements = document.querySelectorAll(
        "button, a, [role='button'], input, textarea, select, nav, .nav-item",
      )
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor - just a blue dot */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-50 bg-gradient-to-r from-cyan-400 to-blue-600"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "tween", // Using tween for smoother movement
          ease: "circOut",
          duration: 0.15, // Shorter duration for more responsive feel
        }}
      />
    </>
  )
}
