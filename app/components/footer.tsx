import Link from "next/link"
import { DiscIcon as Discord, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="glass-dark border-t border-gray-700/50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
            <span>&copy; {new Date().getFullYear()} AyrixMC. All rights reserved.</span>
            <Heart className="h-4 w-4 mx-2 text-red-400" />
            <span>Made with passion</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="https://discord.gg/ayrixmc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-105 glass px-4 py-2 rounded-xl border border-cyan-400/30"
            >
              <Discord className="h-5 w-5 mr-2" />
              <span className="font-medium">Join Discord</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
