"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Director, NIEDO",
      image: "images/clientimg/personpass.webp",
      content:
        "RivDesign's innovative approach to educational technology design has transformed our digital learning platforms. Their AI-powered solutions are exceptional.",
      rating: 5,
    },
    {
      name: "Eng. Priya Sharma",
      role: "Chief Engineer, Central Water Commission",
      image: "images/clientimg/personpass2.png",
      content:
        "The technical documentation and interface designs delivered by RivDesign have significantly improved our water management systems' usability.",
      rating: 5,
    },
    {
      name: "Commander Vikash Singh",
      role: "Operations Head, NDRF",
      image: "images/clientimg/personpass3.webp",
      content:
        "RivDesign's emergency response interface designs have enhanced our disaster management capabilities. Their attention to critical user experience is outstanding.",
      rating: 5,
    },
    {
      name: "Dr. Amit Patel",
      role: "Safety Director, DGRASU",
      image: "images/clientimg/personpass4.jpg",
      content:
        "The safety training materials and digital interfaces created by RivDesign have revolutionized our safety culture programs across all departments.",
      rating: 5,
    },
    {
      name: "Prof. Meera Shah",
      role: "Academic Director",
      image: "images/clientimg/personpass5.png",
      content:
        "RivDesign's educational design solutions have helped us create more engaging and effective learning experiences for our students and faculty.",
      rating: 5,
    },
  ]

  // Company logos for infinite slider
  const companyLogos = [
    { name: "NIEDO", logo: "images/clientimg/niedo.jpg" },
    { name: "Central Water Commission", logo: "images/clientimg/client-3.png" },
    { name: "NDRF", logo: "images/clientimg/client-1.jpg" },
    { name: "DGRASU", logo: "images/clientimg/client-6.png" },
    { name: "Educational Institute", logo: "images/clientimg/client5.jpeg" },
    // Repeat for seamless loop
    { name: "NIEDO", logo: "images/clientimg/niedo.jpg" },
    { name: "Central Water Commission", logo: "images/clientimg/client-3.png" },
    { name: "NDRF", logo: "images/clientimg/client-1.jpg" },
    { name: "DGRASU", logo: "images/clientimg/client-6.png" },
    { name: "Educational Institute", logo: "images/clientimg/client5.jpeg" },
  ]

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(slideInterval)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-black py-20 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400/5 to-emerald-400/5 rounded-full blur-2xl"></div>

        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-green-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-32 w-3 h-3 bg-emerald-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-green-500/50 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-60 right-1/4 w-2.5 h-2.5 bg-emerald-300/30 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Esteemed{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Clients
            </span>
          </motion.h2>
        </div>

        {/* Smooth Infinite Logo Slider */}
        <div className="mb-16 overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="flex space-x-12"
              animate={{
                x: [0, -600],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {companyLogos.map((company, index) => (
                <motion.div
                  key={`logo-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="w-40 h-40 rounded-full bg-gray-800/50 border border-green-500/20 flex items-center justify-center hover:border-green-400/50 transition-all duration-500 backdrop-blur-sm relative overflow-hidden group">
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      className="w-32 h-32 rounded-full object-cover relative z-10 transition-all duration-500"
                    />

                    {/* Subtle floating particles on hover */}
                    <div className="absolute -top-2 -right-2 w-2 h-2 bg-green-400/40 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                    <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-emerald-400/40 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Reviews Section Heading */}
        <div className="text-center mb-12">
          <motion.h3
            className="text-2xl lg:text-3xl font-semibold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h3>
        </div>

        {/* Enhanced Testimonial Slider - Hidden on mobile */}
        <div className="relative max-w-4xl mx-auto hidden md:block">
          <div className="flex items-center justify-between mb-8">
            <motion.button
              onClick={prevSlide}
              className="p-3 rounded-full bg-gray-900/50 border border-green-500/20 hover:bg-gray-800/50 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ChevronLeft className="w-6 h-6 text-green-400 relative z-10" />
            </motion.button>

            <div className="flex-1 mx-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 text-center relative overflow-hidden group"
                >
                  {/* Subtle animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/3 via-transparent to-emerald-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Subtle floating orbs */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-green-400/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-emerald-400/20 rounded-full animate-pulse"></div>

                  <div className="flex items-center justify-center mb-6 relative z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    >
                      <Quote className="w-8 h-8 text-green-400 mr-3" />
                    </motion.div>
                    <div className="flex">
                      {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 + 0.3, duration: 0.4, ease: "easeOut" }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.p
                    className="text-gray-300 mb-8 leading-relaxed italic text-lg relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    "{testimonials[currentSlide].content}"
                  </motion.p>

                  <motion.div
                    className="flex items-center justify-center relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div className="relative">
                      <img
                        src={testimonials[currentSlide].image || "/placeholder.svg"}
                        alt={testimonials[currentSlide].name}
                        className="w-16 h-16 rounded-full mr-4 border-2 border-green-500/30 object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{testimonials[currentSlide].name}</h4>
                      <p className="text-gray-400">{testimonials[currentSlide].role}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button
              onClick={nextSlide}
              className="p-3 rounded-full bg-gray-900/50 border border-green-500/20 hover:bg-gray-800/50 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ChevronRight className="w-6 h-6 text-green-400 relative z-10" />
            </motion.button>
          </div>

          {/* Enhanced Slide Indicators */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                  index === currentSlide ? "w-8 h-3 bg-green-400" : "w-3 h-3 bg-gray-600"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {index === currentSlide && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-300 to-emerald-300"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 4, ease: "linear" }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Enhanced additional testimonials grid for all devices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => {
            const isHighlighted = currentSlide === index

            return (
              <motion.div
                key={index}
                className={`bg-gray-900/30 backdrop-blur-sm border border-green-500/10 rounded-xl p-4 sm:p-6 hover:bg-gray-800/30 transition-all duration-500 relative overflow-hidden group ${
                  isHighlighted ? "border-green-400/80 scale-105" : ""
                }`}
                style={{
                  ...(isHighlighted
                    ? {
                        boxShadow: "0 0 10px rgba(74, 222, 128, 0.5)",
                      }
                    : {}),
                }}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                {/* Subtle animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/3 to-emerald-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Subtle floating elements */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-green-400/20 rounded-full animate-pulse"></div>

                <div className="flex items-center mb-3 sm:mb-4 relative z-10">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div key={i} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm italic relative z-10">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center relative z-10">
                  <div className="relative">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 sm:mr-3 border border-green-500/20 object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xs sm:text-sm">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
