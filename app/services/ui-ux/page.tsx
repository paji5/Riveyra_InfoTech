"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  ChevronDown,
  Globe,
  ShoppingCart,
  FileText,
  Zap,
  Smartphone,
  Apple,
  BookOpen,
  Shirt,
  Mail,
  Palette,
  Search,
  Eye,
  Lightbulb,
  Wrench,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function UIUXPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const designProcess = [
    {
      title: "DISCOVER",
      icon: Search,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
      description: "Research and understand user needs",
    },
    {
      title: "DEFINE",
      icon: Eye,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
      description: "Define problems and opportunities",
    },
    {
      title: "IDEATE",
      icon: Lightbulb,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500",
      description: "Generate creative solutions",
    },
    {
      title: "PROTOTYPE",
      icon: Wrench,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500",
      description: "Build and test prototypes",
    },
    {
      title: "TEST",
      icon: CheckCircle,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
      description: "Validate with real users",
    },
  ]

  const services = [
    {
      icon: Globe,
      title: "Static Website",
      description: "Professional static websites",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Website",
      description: "Online shopping platforms",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: FileText,
      title: "Blog Website",
      description: "Content management systems",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: Zap,
      title: "Dynamic Website",
      description: "Interactive web applications",
      color: "from-emerald-600 to-green-600",
    },
    {
      icon: Smartphone,
      title: "Android Apps",
      description: "Native Android applications",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Apple,
      title: "IOS Apps",
      description: "Native iOS applications",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: BookOpen,
      title: "Book Cover & Magazine Design",
      description: "Print design solutions",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: Shirt,
      title: "T-Shirt Design",
      description: "Custom apparel graphics",
      color: "from-emerald-600 to-green-600",
    },
    {
      icon: Mail,
      title: "Invitation Card Design",
      description: "Event invitation designs",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Palette,
      title: "Concept Art Design",
      description: "Creative concept artwork",
      color: "from-emerald-500 to-green-500",
    },
  ]

  const faqs = [
    {
      question: "What is the best UI/UX design company in India?",
      answer:
        "Riveyra Infotech stands out as one of the leading UI/UX design companies in India, offering comprehensive design solutions with a focus on user-centered design, modern aesthetics, and seamless user experiences across all digital platforms.",
    },
    {
      question: "What's the best platform to use to hire UI/UX designers?",
      answer:
        "While there are various platforms available, working directly with established design agencies like Riveyra Infotech ensures you get experienced professionals, consistent quality, ongoing support, and comprehensive project management.",
    },
    {
      question: "What do UI and UX designers do?",
      answer:
        "UI designers focus on the visual interface elements, layouts, and interactive components, while UX designers research user behavior, create user journeys, conduct usability testing, and ensure the overall user experience is intuitive and effective.",
    },
    {
      question: "Where UI/UX are used?",
      answer:
        "UI/UX design is essential for websites, mobile applications, software interfaces, e-commerce platforms, gaming interfaces, IoT devices, and any digital product that requires user interaction and engagement.",
    },
  ]

  useEffect(() => {
    // Hero section animations
    gsap.fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" })
    gsap.fromTo(
      ".hero-breadcrumb",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.5, ease: "power2.out" },
    )
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.7, ease: "power2.out" },
    )
    gsap.fromTo(
      ".hero-mockup",
      { opacity: 0, scale: 0.8, rotation: 5 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1.2, delay: 0.9, ease: "back.out(1.7)" },
    )

    // Floating animation for mockup
    gsap.to(".hero-mockup", {
      y: -15,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    })

    // Design process animation
    gsap.fromTo(
      ".process-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".process-section",
          start: "top 80%",
        },
      },
    )

    gsap.fromTo(
      ".process-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".process-grid",
          start: "top 80%",
        },
      },
    )

    // Services section animation
    gsap.fromTo(
      ".services-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
        },
      },
    )

    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
      },
    )

    // FAQ animation
    gsap.fromTo(
      ".faq-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".faq-section",
          start: "top 80%",
        },
      },
    )

    gsap.fromTo(
      ".faq-item",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".faq-section",
          start: "top 70%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
    

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <nav className="hero-breadcrumb mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span className="hover:text-green-400 cursor-pointer transition-colors">Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-green-400">UI/UX</span>
            </div>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="hero-title text-5xl lg:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  UI/UX Design
                </span>
              </h1>

              <div className="hero-content text-gray-300 text-lg leading-relaxed space-y-4 mb-8">
                <p>
                  UI/UX design is a holistic approach that involves both the visual and interactive aspects of a
                  product. While UI (User Interface) focus on how the product looks, UX (User Experience) ensures it is
                  user-friendly and aligns with user needs. Together, innovative UI/UX Designs create enjoyable and
                  effective digital experiences.
                </p>
                <p>
                  At Riveyra Infotech, we deliver modern UI Designs following the current UI/UX design trends which
                  makes us the best UI/UX design agency in the Kanpur. Our UI/UX designers collaborate to create
                  seamless and user-centric design solutions. Our UI designers focus on the look and feel of the
                  product, while UX designers work on optimizing the user journey, ultimately aiming to deliver products
                  that are both visually appealing and functionally effective.
                </p>
                <p>
                  Prioritizing user experience, Having a good UI/UX can result in numerous benefits, positively
                  impacting both users and your business such as higher customer satisfaction and retention, contributes
                  to a positive brand image and operational efficiency. Businesses that prioritize UI/UX are better
                  positioned to adapt to evolving customer needs and market trends. Elevate your brand today by
                  connecting with Kanpur best UI/UX specialists and leverage our top-notch UI/UX Services.
                </p>
              </div>

              <Link href="/contact">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-green-500/25 transition-all duration-300">
                  More Details
                </Button>
              </Link>
            </div>

            {/* Right Mockup */}
            <div className="hero-mockup relative flex justify-center">
              <div className="relative">
                <img
                  src="/images/dropdown/ui-ux.png"
                  alt="UI/UX Design Mockup"
                  className="w-full max-w-md h-auto rounded-3xl shadow-2xl"
                />
                {/* Floating elements around mockup */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-60"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full opacity-40"
                  animate={{ scale: [1.2, 0.8, 1.2], rotate: [360, 180, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UX Design Process Section */}
      <section className="process-section py-20 bg-white text-gray-900 relative">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="process-title text-4xl lg:text-5xl font-bold mb-4">UX Design Process</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our systematic approach to creating exceptional user experiences through research, design, and validation
            </p>
          </div>

          <div className="process-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {/* Simple connecting line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200"></div>

            {designProcess.map((step, index) => (
              <div key={step.title} className="process-item text-center relative">
                <div className="relative mb-6">
                  {/* Simple icon container */}
                  <div
                    className={`w-16 h-16 mx-auto bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative z-10`}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>

                  {/* Simple connecting line */}
                  {index < designProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 z-0"></div>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="container mx-auto">
          <h2 className="services-title text-4xl lg:text-5xl font-bold text-center mb-16 text-white">Our Services</h2>

          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-green-500/20 hover:border-green-400/40 transition-all duration-300 h-full backdrop-blur-sm group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div
                        className={`p-3 bg-gradient-to-r ${service.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="faq-title text-4xl lg:text-5xl font-bold text-center mb-16 text-white">FAQ's</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-green-500/20 rounded-lg backdrop-blur-sm overflow-hidden">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-green-500/5 transition-colors duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-medium text-white">
                      {index + 1}. {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-green-400 transition-transform duration-300 ${
                        expandedFAQ === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-gray-300 leading-relaxed">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  )
}
