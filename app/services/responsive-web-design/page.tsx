"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ColorfulCardSection, { getColorScheme } from "@/components/ColorfulCardSection"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Tablet, Smartphone, Code, Palette, Zap, ShoppingCart, ChevronDown, CheckCircle } from "lucide-react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function ResponsiveWebDesignPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const services = [
    {
      title: "Landing Page Redesign",
      description:
        "Modern, conversion-focused landing pages that capture attention and drive results with responsive design principles.",
      icon: Monitor,
      colorScheme: getColorScheme(0),
    },
    {
      title: "Redesigning Existing Website",
      description:
        "Transform your current site with fresh design, improved user experience, and mobile-first approach.",
      icon: Palette,
      colorScheme: getColorScheme(1),
    },
    {
      title: "Custom WordPress Website Services",
      description:
        "Tailored WordPress solutions with responsive themes, custom functionality, and seamless user experience.",
      icon: Code,
      colorScheme: getColorScheme(2),
    },
    {
      title: "E-commerce Website Development",
      description:
        "Complete online store solutions with mobile-optimized checkout, inventory management, and payment integration.",
      icon: ShoppingCart,
      colorScheme: getColorScheme(3),
    },
    {
      title: "Content Migration",
      description:
        "Seamless content transfer services ensuring data integrity and improved site structure for better performance.",
      icon: Zap,
      colorScheme: getColorScheme(4),
    },
  ]

  const reasons = [
    {
      number: "01",
      title: "Gives a Fresh Look",
      description:
        "Creating a unique design is a difficult and complex task, and our team of designers and developers work hard to give you the best design that will make your website stand out from the crowd.",
      colorScheme: getColorScheme(0),
    },
    {
      number: "02",
      title: "Redesign that Connects",
      description:
        "Our website is not all about getting fancy fonts and new features only, being fresh and modern themes clearly show your business and services in a way that connects directly with your target audience.",
      colorScheme: getColorScheme(1),
    },
    {
      number: "03",
      title: "Improves Branding",
      description:
        "Redesigning your website will help you stand out and make you grow your branding through all the aspects of your website and business. Our team of experts will help you to create a brand that pleases your customers.",
      colorScheme: getColorScheme(2),
    },
    {
      number: "04",
      title: "Drive Sales Growth",
      description:
        "We ensure that your online presence will not only attract but also convert visitors to customers. Our redesigned website will be optimized to drive more business and bring growth.",
      colorScheme: getColorScheme(3),
    },
    {
      number: "05",
      title: "Optimize Marketing Costs",
      description:
        "With the new site that built for your business, achieving marketing goals becomes easy. Our redesigned website will be optimized for search engines and social media.",
      colorScheme: getColorScheme(4),
    },
    {
      number: "06",
      title: "Optimized for SEO",
      description:
        "While redesigning, one of the best aspects of our website is to get optimized for SEO factors along with the design. Our team ensures your website is search engine friendly.",
      colorScheme: getColorScheme(5),
    },
  ]

  const industries = [
    {
      number: "01",
      title: "Healthcare",
      description:
        "Specialized in developing out-of-the-box healthcare website development, engaging layouts reflecting your business that helps increase patient base.",
      colorScheme: getColorScheme(0),
    },
    {
      number: "02",
      title: "Retail & eCommerce",
      description:
        "As a supply chain, retail business is a giant ball game. We help you create a seamless experience and enable smart identity to increase business conversion.",
      colorScheme: getColorScheme(1),
    },
    {
      number: "03",
      title: "Travel & Tourism",
      description:
        "Helps you travel to your destination reducing cost and time with the help of our website business operations with creative designs and engaging content.",
      colorScheme: getColorScheme(2),
    },
    {
      number: "04",
      title: "Professional Business",
      description:
        "Our designing services will help you grow your business and reach new heights with our professional business website with increased operational efficiency.",
      colorScheme: getColorScheme(3),
    },
    {
      number: "05",
      title: "Education",
      description:
        "With the power of experience, we transform educational learning experience into highly engaging and interactive learning that helps students feel more engaged.",
      colorScheme: getColorScheme(4),
    },
    {
      number: "06",
      title: "Media & Entertainment",
      description:
        "Our customized layouts will bring together all the best entertainment experiences that are more user-friendly and engaging for your audience's entertainment.",
      colorScheme: getColorScheme(5),
    },
  ]

  const faqs = [
    {
      question: "How does Responsive Web Design affect SEO?",
      answer:
        "Responsive design significantly improves SEO by providing better user experience, faster loading times, and mobile-friendly design that search engines favor.",
    },
    {
      question: "Can Riveyra InfoTech update an existing website to make it responsive?",
      answer:
        "Yes, we specialize in converting existing websites to responsive designs while maintaining all functionality and improving user experience.",
    },
    {
      question: "Will my responsive website be compatible with all browsers?",
      answer:
        "We ensure cross-browser compatibility and test on all major browsers including Chrome, Firefox, Safari, and Edge.",
    },
    {
      question: "Is responsive design more expensive than traditional web design?",
      answer:
        "While initial costs may be slightly higher, responsive design is more cost-effective long-term as it eliminates the need for separate mobile sites.",
    },
  ]

  // Fixed positions for particles to avoid hydration mismatch - optimized for mobile
  const heroParticles = [
    { left: 15, top: 20 },
    { left: 85, top: 15 },
    { left: 25, top: 80 },
    { left: 75, top: 85 },
    { left: 45, top: 25 },
    { left: 65, top: 70 },
    { left: 35, top: 60 },
    { left: 55, top: 40 },
  ]

  const ctaParticles = [
    { left: 20, top: 25 },
    { left: 80, top: 20 },
    { left: 30, top: 75 },
    { left: 70, top: 80 },
    { left: 50, top: 30 },
    { left: 60, top: 65 },
  ]

  useEffect(() => {
    // Hero animations
    gsap.fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 })
    gsap.fromTo(".hero-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.4 })
    gsap.fromTo(
      ".hero-devices",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, delay: 0.6, ease: "back.out(1.7)" },
    )

    // Floating animation for devices - reduced for mobile
    gsap.to(".floating-device", {
      y: -10,
      duration: 4,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
    })

    // Scroll-triggered animations
    gsap.utils.toArray(".scroll-animate").forEach((element: any, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.05,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Code animation
    gsap.fromTo(
      ".code-block",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".code-section",
          start: "top 75%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
     

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
        {/* Background Effects - Responsive */}
        <div className="absolute inset-0">
          <div className="absolute top-5 left-5 sm:top-10 sm:left-10 lg:top-20 lg:left-20 w-20 h-20 sm:w-32 sm:h-32 lg:w-72 lg:h-72 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
          <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 lg:bottom-20 lg:right-20 w-24 h-24 sm:w-48 sm:h-48 lg:w-96 lg:h-96 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-2xl sm:blur-3xl"></div>
        </div>

        {/* Floating Particles - Reduced for mobile */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden">
            {heroParticles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-green-400/30 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [-10, 10],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4 + (i % 2),
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <motion.div
                className="hero-title"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Responsive
                  </span>
                  <br />
                  Web Design
                </h1>
              </motion.div>

              <motion.p
                className="hero-subtitle text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A website goes without saying that a modern website needs to be responsive. If you want your business to
                have a digital presence, then you need to make sure that users can get responsive website design that is
                optimized on desktop computers and mobile devices.
              </motion.p>

              <motion.p
                className="text-xs sm:text-sm lg:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                That's what we do at Riveyra Infotech Limited, we design and develop websites that work on mobile and
                desktop devices. We work with you to create a website that is not only responsive but also looks great.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center lg:justify-start pt-2"
              >
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-lg shadow-lg shadow-green-500/25">
                    More Details
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right Content - Devices */}
            <motion.div
              className="hero-devices relative order-1 lg:order-2 mb-6 lg:mb-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <div className="relative flex justify-center max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                {/* Desktop */}
                <motion.div
                  className="floating-device relative z-10"
                  animate={{ y: [-5, 5] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  <div className="bg-gray-800 rounded-lg p-2 sm:p-3 lg:p-4 shadow-2xl border border-green-500/20">
                    <div className="bg-black rounded-md h-20 w-32 sm:h-32 sm:w-48 lg:h-48 lg:w-64 flex items-center justify-center">
                      <Monitor className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-green-400" />
                    </div>
                  </div>
                </motion.div>

                {/* Tablet */}
                <motion.div
                  className="floating-device absolute -right-2 sm:-right-4 lg:-right-8 top-4 sm:top-6 lg:top-12 z-20"
                  animate={{ y: [-7, 7] }}
                  transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
                >
                  <div className="bg-gray-800 rounded-lg p-1 sm:p-2 lg:p-3 shadow-2xl border border-green-500/20">
                    <div className="bg-black rounded-md h-12 w-8 sm:h-20 sm:w-16 lg:h-32 lg:w-24 flex items-center justify-center">
                      <Tablet className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-green-400" />
                    </div>
                  </div>
                </motion.div>

                {/* Mobile */}
                <motion.div
                  className="floating-device absolute -left-2 sm:-left-3 lg:-left-6 top-6 sm:top-8 lg:top-20 z-30"
                  animate={{ y: [-10, 10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
                >
                  <div className="bg-gray-800 rounded-lg p-1 sm:p-1 lg:p-2 shadow-2xl border border-green-500/20">
                    <div className="bg-black rounded-md h-10 w-5 sm:h-16 sm:w-8 lg:h-24 lg:w-12 flex items-center justify-center">
                      <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-green-400" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Various Aspects Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 relative code-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16 scroll-animate"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
              Various <span className="text-green-400">Aspects</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 scroll-animate order-2 lg:order-1">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400 mb-2 sm:mb-3 lg:mb-4">
                  Front-End Development
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4 lg:mb-6">
                  Front-end development, often referred to as client-side development, is the process of creating the
                  visual and interactive elements of a website or web application that users see and interact with
                  directly. Front-end developers are responsible for designing, coding, and optimizing the user
                  interface, ensuring a positive and engaging user experience.
                </p>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-base text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0" />
                    HTML (HyperText Markup Language)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0" />
                    CSS (Cascading Style Sheets)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0" />
                    JavaScript
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0" />
                    Responsive Web Design
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400 mb-2 sm:mb-3 lg:mb-4">
                  Responsive Web Design
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed">
                  Web developers ensure that websites are responsive, meaning they adapt to different screen sizes and
                  devices. This is essential for a positive user experience.
                </p>
              </div>
            </div>

            {/* Right Content - Code Block */}
            <motion.div
              className="code-block bg-gray-900 rounded-lg p-3 sm:p-4 lg:p-6 border border-green-500/20 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
                <div className="flex space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <Badge variant="outline" className="text-green-400 border-green-400 text-xs sm:text-sm">
                  CSS
                </Badge>
              </div>
              <pre className="text-xs sm:text-sm text-green-400 overflow-x-auto">
                <code>{`/* Media Queries for Responsive Design */
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    padding: 0 15px;
  }
  
  .header {
    flex-direction: column;
    text-align: center;
  }
  
  .navigation {
    display: none;
  }
  
  .mobile-menu {
    display: block;
  }
}

@media screen and (min-width: 769px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}`}</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <ColorfulCardSection
        title="Professional Responsive Website Development Services"
        subtitle="Web developers ensure that websites are responsive, meaning they adapt to different screen sizes and devices. This is essential for a positive user experience."
        cards={services}
        className="bg-gray-900/50"
        isSquare={false}
      />

      {/* Reasons Section - Square Cards */}
      <ColorfulCardSection
        title="Reasons to help you to make a Decision"
        subtitle="When our team looks into your website and redesigns it, we don't just change the look and feel, but we also do things by that, which is why some of the biggest brands across the nation have worked alongside us."
        cards={reasons}
        isSquare={true}
      />

      {/* Industries Section - Square Cards */}
      <ColorfulCardSection
        title="Industries We Serve"
        subtitle="Riveyra Infotech is dedicated to serving a diverse range of industries, striving to provide excellent services across the board. Our commitment extends to delivering exceptional solutions and we take pride in our comprehensive approach to cater to the unique needs of each industry."
        cards={industries}
        className="bg-gray-900/50"
        isSquare={true}
      />

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 relative overflow-hidden">
        {/* Simple Blue Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-blue-900/30"></div>
          <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-blue-500/10 rounded-full blur-xl sm:blur-2xl"></div>
          <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-20 h-20 sm:w-40 sm:h-40 lg:w-64 lg:h-64 bg-blue-400/10 rounded-full blur-xl sm:blur-2xl"></div>
        </div>

        {/* Simple Floating Dots */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden">
            {ctaParticles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-blue-400/40 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [-10, 10],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4 + (i % 2),
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
          <motion.div
            className="text-center scroll-animate"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Let's Start a New Project <span className="text-blue-400">Together</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="relative group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Simple Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>

                {/* Button Text */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Call Us Now
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16 scroll-animate"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
              FAQ's
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-2 sm:space-y-3 lg:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="scroll-animate"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 lg:p-6">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white pr-3 sm:pr-4 leading-relaxed">
                        {faq.question}
                      </h3>
                      <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-400 flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 mt-2 sm:mt-3 lg:mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  )
}
