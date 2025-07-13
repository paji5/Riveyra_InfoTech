"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import {
  ChevronRight,
  ChevronDown,
  Palette,
  Monitor,
  Layers,
  Users,
  Target,
  Zap,
  Eye,
  Lightbulb,
  Figma,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

gsap.registerPlugin(ScrollTrigger)

export default function GraphicDesignPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const services = [
    {
      icon: Figma,
      title: "Logo Design",
      description: "Creating memorable and impactful brand logos",
      gradient: "from-purple-500/20 to-pink-500/20",
      hoverGradient: "from-purple-500/30 to-pink-500/30",
      iconColor: "text-purple-400",
      titleHoverColor: "group-hover:text-purple-400",
      borderColor: "border-purple-500/20 hover:border-purple-500/40",
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Comprehensive brand identity design solutions",
      gradient: "from-blue-500/20 to-cyan-500/20",
      hoverGradient: "from-blue-500/30 to-cyan-500/30",
      iconColor: "text-blue-400",
      titleHoverColor: "group-hover:text-blue-400",
      borderColor: "border-blue-500/20 hover:border-blue-500/40",
    },
    {
      icon: Eye,
      title: "Print Design",
      description: "Professional print materials and layouts",
      gradient: "from-emerald-500/20 to-teal-500/20",
      hoverGradient: "from-emerald-500/30 to-teal-500/30",
      iconColor: "text-emerald-400",
      titleHoverColor: "group-hover:text-emerald-400",
      borderColor: "border-emerald-500/20 hover:border-emerald-500/40",
    },
    {
      icon: Monitor,
      title: "Digital Graphics",
      description: "Modern digital design for web and social media",
      gradient: "from-orange-500/20 to-red-500/20",
      hoverGradient: "from-orange-500/30 to-red-500/30",
      iconColor: "text-orange-400",
      titleHoverColor: "group-hover:text-orange-400",
      borderColor: "border-orange-500/20 hover:border-orange-500/40",
    },
    {
      icon: Layers,
      title: "Packaging Design",
      description: "Creative packaging and product design",
      gradient: "from-indigo-500/20 to-purple-500/20",
      hoverGradient: "from-indigo-500/30 to-purple-500/30",
      iconColor: "text-indigo-400",
      titleHoverColor: "group-hover:text-indigo-400",
      borderColor: "border-indigo-500/20 hover:border-indigo-500/40",
    },
    {
      icon: Target,
      title: "Marketing Materials",
      description: "Brochures, flyers, and promotional designs",
      gradient: "from-rose-500/20 to-pink-500/20",
      hoverGradient: "from-rose-500/30 to-pink-500/30",
      iconColor: "text-rose-400",
      titleHoverColor: "group-hover:text-rose-400",
      borderColor: "border-rose-500/20 hover:border-rose-500/40",
    },
    {
      icon: Palette,
      title: "Illustration",
      description: "Custom illustrations and artwork",
      gradient: "from-yellow-500/20 to-amber-500/20",
      hoverGradient: "from-yellow-500/30 to-amber-500/30",
      iconColor: "text-yellow-400",
      titleHoverColor: "group-hover:text-yellow-400",
      borderColor: "border-yellow-500/20 hover:border-yellow-500/40",
    },
    {
      icon: Zap,
      title: "Social Media Graphics",
      description: "Engaging social media visual content",
      gradient: "from-violet-500/20 to-purple-500/20",
      hoverGradient: "from-violet-500/30 to-purple-500/30",
      iconColor: "text-violet-400",
      titleHoverColor: "group-hover:text-violet-400",
      borderColor: "border-violet-500/20 hover:border-violet-500/40",
    },
    {
      icon: Lightbulb,
      title: "Creative Concepts",
      description: "Innovative design concepts and ideas",
      gradient: "from-lime-500/20 to-green-500/20",
      hoverGradient: "from-lime-500/30 to-green-500/30",
      iconColor: "text-lime-400",
      titleHoverColor: "group-hover:text-lime-400",
      borderColor: "border-lime-500/20 hover:border-lime-500/40",
    },
    {
      icon: Users,
      title: "Brand Guidelines",
      description: "Comprehensive brand style guides",
      gradient: "from-sky-500/20 to-blue-500/20",
      hoverGradient: "from-sky-500/30 to-blue-500/30",
      iconColor: "text-sky-400",
      titleHoverColor: "group-hover:text-sky-400",
      borderColor: "border-sky-500/20 hover:border-sky-500/40",
    },
  ]

  const faqs = [
    {
      question: "What is the difference between graphic design and branding?",
      answer:
        "Graphic design focuses on creating visual elements like logos, layouts, and graphics, while branding encompasses the entire identity and personality of a business. Branding includes graphic design but also covers messaging, values, and overall brand strategy.",
    },
    {
      question: "What software and tools do graphic designers use?",
      answer:
        "Professional graphic designers use industry-standard tools including Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma, Sketch, CorelDRAW, and various other specialized design software depending on the project requirements.",
    },
    {
      question: "How long does a typical graphic design project take?",
      answer:
        "Project timelines vary based on complexity. A simple logo design might take 1-2 weeks, while a complete brand identity package could take 4-8 weeks. This includes research, concept development, design iterations, and final delivery.",
    },
    {
      question: "Do you provide print-ready files and brand guidelines?",
      answer:
        "Yes, we provide all necessary file formats including print-ready files (PDF, AI, EPS) and web-optimized formats (PNG, JPG, SVG). We also create comprehensive brand guidelines to ensure consistent use of your visual identity.",
    },
  ]

  useEffect(() => {
    // Page entrance animations
    gsap.fromTo(".page-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })

    gsap.fromTo(
      ".breadcrumb",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power2.out" },
    )

    gsap.fromTo(
      ".hero-content",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.4, ease: "power2.out" },
    )

    gsap.fromTo(".hero-image", { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.6, ease: "power2.out" })

    // Floating animation for hero image
    gsap.to(".hero-image", {
      y: -10,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    })

    // Services section animation
    gsap.fromTo(
      ".services-title",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
        },
      },
    )

    // FAQ section animation
    gsap.fromTo(
      ".faq-title",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".faq-section",
          start: "top 80%",
        },
      },
    )

    // Floating particles animation
    gsap.to(".floating-particle", {
      y: -20,
      duration: 4,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Floating particles */}
        <div className="floating-particle absolute top-32 right-32 w-3 h-3 bg-purple-400/30 rounded-full"></div>
        <div className="floating-particle absolute bottom-40 left-20 w-2 h-2 bg-blue-400/40 rounded-full"></div>
        <div className="floating-particle absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-emerald-300/50 rounded-full"></div>
        <div className="floating-particle absolute top-1/4 right-1/4 w-2.5 h-2.5 bg-orange-400/35 rounded-full"></div>
        <div className="floating-particle absolute bottom-1/4 left-1/2 w-2 h-2 bg-violet-400/40 rounded-full"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          {/* Breadcrumb */}
          <nav className="breadcrumb mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span className="hover:text-purple-400 transition-colors cursor-pointer">Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="hover:text-blue-400 transition-colors cursor-pointer">Services</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-emerald-400">Graphic Design Services</span>
            </div>
          </nav>

          {/* Page Title */}
          <h1 className="page-title p-5 text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-green-400 via-green-400 to-green-400 bg-clip-text text-transparent">
            Graphic Design Services
          </h1>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Graphic Design serves as a potent mode of visual communication, bridging the connection between content
                and its audience. At Riveyra Infotech, we specialize in crafting tailor-made designs to elevate your
                branding, encompassing Graphic design services such as custom logo designs, business card designs,
                catalogue design, UI/UX graphic design, print designs and much more. Our experienced and creative
                Graphic Designers are adept professionals dedicated to enhancing your visual presence with our graphic
                design services.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether it's creating exceptional logo designs, ranging from business logos to real estate logos,
                animated logos, 3D logos, or even wedding logos, we've got you covered. We also excel in producing
                captivating visiting business card designs, brochure designs, leaflets designs, pamphlet designs,
                T-shirt designs, and invitation card designs, be it for weddings, birthdays, or anniversaries. Designing
                plays a pivotal role in capturing audience attention. Strong, compelling graphics helps creating brand's
                distinctive visual identity, effectively driving marketing and advertising campaigns, triggers emotions,
                improves user experience and delivering numerous other invaluable benefits. Make a wise choice and
                choose the best in Kanpur- Riveyra Infotech.
              </p>
            </div>

            <div className="hero-image relative">
              <div className="relative z-10">
                <img
                  src="/images/dropdown/graphic-design.jpg"
                  alt="Graphic Design Services"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section relative z-10 py-20">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <h2 className="services-title text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 via-green-400 to-green-400 bg-clip-text text-transparent">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group"
              >
                <Card
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 border ${service.borderColor} transition-all  duration-500 h-full backdrop-blur-sm hover:shadow-2xl hover:shadow-${service.iconColor.split("-")[1]}-500/20`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <motion.div
                        className={`p-3 bg-gradient-to-r ${service.gradient} group-hover:${service.hoverGradient} rounded-xl transition-all duration-500`}
                        whileHover={{
                          rotate: 360,
                          transition: { duration: 0.6, ease: "easeInOut" },
                        }}
                      >
                        <service.icon className={`w-8 h-8 ${service.iconColor} transition-all duration-300`} />
                      </motion.div>
                    </div>
                    <h3
                      className={`text-lg font-semibold text-white mb-2 ${service.titleHoverColor} transition-colors duration-300`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section relative z-10 py-20">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <h2 className="faq-title text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 via-green-400 to-green-400 bg-clip-text text-transparent">
            FAQ's
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Collapsible open={openFAQ === index} onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}>
                  <CollapsibleTrigger className="w-full">
                    <motion.div
                      className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-purple-500/20 hover:border-green-500/40 rounded-lg transition-all duration-500 backdrop-blur-sm"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 30px rgba(0, 128, 0, 0.1)",
                      }}
                    >
                      <span className="text-left text-white font-medium">
                        {index + 1}. {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-green-400 transition-transform duration-300 ${
                          openFAQ === index ? "rotate-180" : ""
                        }`}
                      />
                    </motion.div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="p-6 bg-gradient-to-r from-gray-900/30 to-black/30 border-x border-b border-purple-500/20 rounded-b-lg backdrop-blur-sm">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    
    </div>
  )
}
