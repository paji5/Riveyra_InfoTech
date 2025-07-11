"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  // const [isVisible, setIsVisible] = useState(true) // Removed isVisible state

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ]

  const servicesDropdown = {
    DESIGN: {
      items: [
        { name: "Graphic Design", href: "/services/graphic-design" },
        { name: "UI/UX Design", href: "/services/ui-ux" },
        { name: "Responsive Web Design", href: "/services/responsive-web-design" },
      ],
      color: "from-orange-500 to-amber-500",
    },
    DEVELOPMENT: {
      items: [
        { name: "WEB Development", href: "/services/web-development" },
        { name: "Android App Development", href: "/services/android-app" },
        { name: "PHP Development", href: "/services/php-development" },
        { name: "Wordpress Development", href: "/services/wordpress-development" },
        { name: "IOS App Development", href: "/services/ios-app" },
        { name: "ERP Development", href: "/services/erp-development" },
      ],
      color: "from-green-500 to-emerald-500",
    },
    "INTEGRATED MARKETING": {
      items: [
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "SEO Service", href: "/services/seo-service" },
        { name: "PPC Advertising", href: "/services/ppc-advertising" },
        { name: "Content Marketing", href: "/services/content-marketing" },
        { name: "Social Media Marketing", href: "/services/social-media-marketing" },
        { name: "Web Analytics", href: "/services/web-analytics" },
        { name: "Reputation Management", href: "/services/reputation-management" },
        { name: "Content Writing", href: "/services/content-writing" },
      ],
      color: "from-purple-500 to-pink-500",
    },
  }

  useEffect(() => {
    // Faster initial navbar animation
    gsap.fromTo(".navbar", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: "power3.out" })

    // Faster logo animation
    gsap.fromTo(
      ".logo",
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.6, delay: 0.2, ease: "back.out(1.7)" },
    )

    // Faster nav items stagger animation
    gsap.fromTo(
      ".nav-item",
      { y: -30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.05,
        delay: 0.4,
        ease: "power2.out",
      },
    )

    // Faster CTA button animation
    gsap.fromTo(
      ".cta-button",
      { scale: 0, rotation: 360 },
      { scale: 1, rotation: 0, duration: 0.5, delay: 0.6, ease: "elastic.out(1, 0.5)" },
    )

    // Scroll-based navbar background and visibility
    let lastScrollY = 0
    ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      onUpdate: (self) => {
        const currentScrollY = self.scroll()

        // Handle navbar background
        if (self.direction === 1) {
          setIsScrolled(true)
        } else if (self.progress < 0.1) {
          setIsScrolled(false)
        }

        // Handle navbar visibility based on scroll direction
        if (currentScrollY > 100) {
          // Only hide after scrolling past 100px
          if (self.direction === 1 && currentScrollY > lastScrollY + 10) {
            // Scrolling down - hide navbar
            gsap.to(".navbar", {
              y: -100,
              duration: 0.3,
              ease: "power2.out",
            })
          } else if (self.direction === -1 && currentScrollY < lastScrollY - 10) {
            // Scrolling up - show navbar
            gsap.to(".navbar", {
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            })
          }
        } else {
          // Always show navbar when near top
          gsap.to(".navbar", {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          })
        }

        // Only update lastScrollY if there's significant movement
        if (Math.abs(currentScrollY - lastScrollY) > 5) {
          lastScrollY = currentScrollY
        }
      },
    })

    // Faster floating animation for logo
    gsap.to(".logo-icon", {
      y: -3,
      duration: 1.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    setIsServicesOpen(false)

    if (href === "/") {
      window.location.href = "/"
    } else if (href.startsWith("#")) {
      if (window.location.pathname === "/") {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        window.location.href = "/" + href
      }
    } else {
      window.location.href = href
    }
  }

  const handleServiceClick = (href: string) => {
    setIsServicesOpen(false)
    setIsOpen(false)
    window.location.href = href
  }

  return (
    <nav
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-green-500/30 shadow-2xl shadow-green-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="logo flex items-center cursor-pointer" onClick={() => handleNavClick("/")}>
            <div className="logo-icon relative">
              <div className="w-48 h-12 sm:w-60 sm:h-14 md:w-72 md:h-16 bg-transparent rounded-xl flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Riveyra Infotech"
                  className="w-40 h-10 sm:w-52 sm:h-12 md:w-60 md:h-14 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="nav-item relative text-gray-300 hover:text-white transition-colors duration-200 font-medium group flex items-center cursor-pointer">
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                      />
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-full transition-all duration-200"></div>
                    </div>

                    {/* Services Mega Dropdown */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="fixed top-20 left-0 right-0 flex justify-center z-50"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          <div className="w-[900px] bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden border border-green-500/30 backdrop-blur-xl">
                            {/* Animated Background Effects */}
                            <div className="absolute inset-0">
                              <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                              <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                              <div className="absolute top-5 right-20 w-2 h-2 bg-green-400/30 rounded-full animate-bounce"></div>
                              <div className="absolute bottom-8 left-16 w-1.5 h-1.5 bg-emerald-400/40 rounded-full animate-ping"></div>
                            </div>

                            {/* Header Section */}
                            <div className="bg-gradient-to-r from-gray-900/80 via-black/80 to-gray-900/80 p-8 border-b border-green-500/20 relative">
                              <div className="flex items-center justify-center relative z-10">
                                <div className="text-center">
                                  <motion.h3
                                    className="text-3xl font-bold text-white mb-3"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    Made to{" "}
                                    <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                      Scale
                                    </span>
                                  </motion.h3>
                                  <motion.p
                                    className="text-gray-300 text-lg leading-relaxed max-w-2xl"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.05 }}
                                  >
                                    Our comprehensive services are built to evolve your business idea into a successful
                                    growth story
                                  </motion.p>
                                </div>
                              </div>

                              <motion.div
                                className="absolute top-4 right-4"
                                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                              >
                                <Sparkles className="w-4 h-4 text-green-400/60" />
                              </motion.div>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-3 gap-0 relative z-10">
                              {Object.entries(servicesDropdown).map(([category, data], categoryIndex) => (
                                <motion.div
                                  key={category}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: categoryIndex * 0.05, duration: 0.2 }}
                                  className="p-6 border-r border-green-500/20 last:border-r-0 hover:bg-gradient-to-br hover:from-green-500/5 hover:to-emerald-500/5 transition-all duration-200 relative group"
                                >
                                  <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                  <h4 className="text-orange-400 font-bold text-sm mb-4 uppercase tracking-wider relative z-10">
                                    {category}
                                  </h4>
                                  <div className="space-y-3 relative z-10">
                                    {data.items.map((service, serviceIndex) => (
                                      <motion.button
                                        key={service.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          delay: categoryIndex * 0.05 + serviceIndex * 0.02,
                                          duration: 0.2,
                                        }}
                                        className="block w-full text-left text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10 px-3 py-2 rounded-lg transition-all duration-200 text-sm group/item relative overflow-hidden"
                                        whileHover={{ x: 5 }}
                                        onClick={() => handleServiceClick(service.href)}
                                      >
                                        <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-emerald-400/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></div>

                                        <div className="flex items-center relative z-10">
                                          <motion.div
                                            className={`w-1.5 h-1.5 bg-gradient-to-r ${data.color} rounded-full mr-3 transition-all duration-200`}
                                            whileHover={{ scale: 1.5 }}
                                          ></motion.div>
                                          {service.name}
                                        </div>
                                      </motion.button>
                                    ))}
                                  </div>
                                </motion.div>
                              ))}
                            </div>

                            <div className="absolute inset-0 rounded-2xl border border-green-500/30 pointer-events-none"></div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    className="nav-item relative text-gray-300 hover:text-white transition-colors duration-200 font-medium group"
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.name}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-full transition-all duration-200"></div>
                  </button>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Button className="cta-button bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-6 py-2 rounded-lg font-semibold shadow-lg shadow-green-500/25 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Get Started</span>
              </div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 bg-black/95 backdrop-blur-lg rounded-lg mt-2 border border-green-500/20 max-h-[80vh] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-green-500/10 transition-all duration-200 rounded-lg mx-2"
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="max-h-64 overflow-y-auto bg-gray-900/50 mx-2 rounded-lg border border-green-500/10">
                                {Object.entries(servicesDropdown).map(([category, data]) => (
                                  <div key={category} className="p-3 border-b border-green-500/10 last:border-b-0">
                                    <h4 className="text-orange-400 font-bold text-xs mb-2 uppercase tracking-wider">
                                      {category}
                                    </h4>
                                    <div className="space-y-1">
                                      {data.items.map((service) => (
                                        <button
                                          key={service.name}
                                          className="block w-full text-left text-gray-300 hover:text-white hover:bg-green-500/10 px-2 py-1.5 rounded text-sm transition-all duration-200"
                                          onClick={() => handleServiceClick(service.href)}
                                        >
                                          <div className="flex items-center">
                                            <div
                                              className={`w-1 h-1 bg-gradient-to-r ${data.color} rounded-full mr-2`}
                                            ></div>
                                            {service.name}
                                          </div>
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <button
                        className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-green-500/10 transition-all duration-200 rounded-lg mx-2"
                        onClick={() => handleNavClick(item.href)}
                      >
                        {item.name}
                      </button>
                    )}
                  </div>
                ))}
                <div className="px-2 pt-2">
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black py-3 rounded-lg font-semibold shadow-lg shadow-green-500/25"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Animated border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
    </nav>
  )
}
