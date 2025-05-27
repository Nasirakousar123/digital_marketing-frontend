"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <button
        className="md:hidden flex items-center justify-center"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={closeMenu}>
          <div
            className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                  D
                </div>
                <span className="font-bold text-xl">DigitalEdge</span>
              </Link>
              <button onClick={closeMenu} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mb-8">
              <Link
                href="#services"
                className="text-gray-700 hover:text-purple-600 transition-colors py-2 border-b border-gray-100"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                href="#portfolio"
                className="text-gray-700 hover:text-purple-600 transition-colors py-2 border-b border-gray-100"
                onClick={closeMenu}
              >
                Portfolio
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-700 hover:text-purple-600 transition-colors py-2 border-b border-gray-100"
                onClick={closeMenu}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-purple-600 transition-colors py-2 border-b border-gray-100"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </nav>

            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={closeMenu}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
