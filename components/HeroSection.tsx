"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link" // Import Link for navigation

const headings = [
  "Your Creative Design Partner",
  "Transforming Ideas Into Visual Masterpieces",
  "Unleashing Creativity Through Innovation",
]

export default function HeroSection() {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isHovering) {
      const intervalId = setInterval(() => {
        setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length)
      }, 3000)

      return () => clearInterval(intervalId)
    }
  }, [isHovering])

  const stats = [
    {
      number: "10K+",
      label: "Designs Created",
    },
    {
      number: "500+",
      label: "Happy Clients",
    },
    {
      number: "99%",
      label: "Satisfaction",
    },
  ]

  const certifications = [
    {
      name: "Clutch",
      image: "/images/clutch1.png",
      link: "https://clutch.co/",
    },
    {
      name: "CMI",
      image: "/images/cmi.png",
      link: "https://www.cmi.org.uk/",
    },
    {
      name: "ISO 27001",
      image: "/images/iso.png",
      link: "https://www.iso.org/isoiec-27001-information-security.html",
    },
    {
      name: "ISO Certified",
      image: "/images/iso-c.png",
      link: "https://www.iso.org/",
    },
    {
      name: "Startup India",
      image: "/images/startupindia.png",
      link: "https://www.startupindia.gov.in/",
    },
  ]

  return (
    <section
      id="home"
      className="relative bg-black overflow-hidden min-h-screen flex items-center pt-16 pb-4"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30">
          <source src="/videobg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>

        {/* Floating particles */}
        <div className="absolute top-32 left-20 w-3 h-3 bg-green-400/40 rounded-full animate-bounce"></div>
        <div className="absolute top-64 right-32 w-2 h-2 bg-emerald-400/50 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-green-500/30 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-48 right-1/3 w-2.5 h-2.5 bg-emerald-300/40 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-20 relative z-10">
        <div className="flex items-center justify-center text-center">
          <div className="max-w-4xl">
            {/* Floating sparkles */}
            <motion.div
              className="absolute -top-10 -left-10"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-6 h-6 text-green-400/60" />
            </motion.div>

            <motion.div
              className="absolute -top-5 -right-5"
              animate={{
                y: [0, -15, 0],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Sparkles className="w-4 h-4 text-emerald-400/60" />
            </motion.div>

            <motion.h1
              key={currentHeadingIndex}
              initial={{ opacity: 0, y: 30, scale: 0.9, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: -30, scale: 0.9, rotateX: -20 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="hero-title text-4xl lg:text-7xl font-bold text-white mb-6 leading-tight relative"
            >
              {/* Text shadow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent blur-sm opacity-50">
                {headings[currentHeadingIndex]}
              </span>
              <span className="relative z-10">{headings[currentHeadingIndex]}</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle text-gray-300 text-lg lg:text-xl mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Unlock your creative potential with cutting-edge design technology. Generate, customize, and refine
              stunning designs effortlessly.
            </motion.p>

            <motion.div
              className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" passHref>
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-8 py-3 rounded-lg font-semibold transform transition-all duration-200 shadow-lg shadow-green-500/25 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center">
                      Get Started Free
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                  >
                    <div className="relative">
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                          {stat.number}
                        </span>
                      </div>
                      <p className="text-gray-300 text-xs font-medium">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Section - Increased Size */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
                {certifications.map((cert, index) => (
                  <motion.a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1, ease: "easeOut" }}
                    whileHover={{ y: -8, scale: 1.05 }}
                  >
                    <div className="relative w-32 h-32 bg-white/10 backdrop-blur-sm border border-green-500/20 rounded-2xl flex items-center justify-center p-4 hover:bg-white/15 hover:border-green-400/30 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-green-500/10 overflow-hidden">
                      {/* Subtle glow layers */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400/3 via-transparent to-emerald-400/3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                      {/* Logo */}
                      <img
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.name}
                        className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-500 relative z-10"
                      />

                      {/* Subtle floating particles */}
                      <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-green-400/30 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                      <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-emerald-400/30 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>

                      {/* Subtle shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
