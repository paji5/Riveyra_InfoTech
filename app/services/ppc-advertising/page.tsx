"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CommonCTASection from "@/components/CommonCTASection"

gsap.registerPlugin(ScrollTrigger)

export default function PPCAdvertisingPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const outcomes = [
    {
      number: "01",
      title: "Highly Qualified Traffic",
      description:
        "We build, tune and manage campaigns that consistently drive quality traffic at considerably lower costs. Our strategy exactly matches to what our clients really want.",
    },
    {
      number: "02",
      title: "No Wasteful PPC Spending",
      description:
        "We're specialists in running campaigns that lower your spend & generate more value by identifying flaws & reducing wasteful spending.",
    },
    {
      number: "03",
      title: "Higher Returns",
      description:
        "Our campaigns is driven by clear business goals & achieve the highest ROI by being effective, efficient & to the point.",
    },
    {
      number: "04",
      title: "Fast Project Payback",
      description: "Our PPC advertising projects payback quickly, often within the first month.",
    },
  ]

  const faqs = [
    {
      question: "Can Logoriv assist with landing page optimization for PPC campaigns?",
      answer:
        "Yes, we offer comprehensive landing page optimization services to ensure your PPC campaigns drive maximum conversions.",
    },
    {
      question: "How does Logoriv determine the most effective PPC strategy for my business?",
      answer:
        "We conduct in-depth market research, competitor analysis, and audience segmentation to tailor a PPC strategy that aligns with your specific business goals and target audience.",
    },
    {
      question: "How can PPC advertising benefit my business?",
      answer:
        "PPC advertising can rapidly increase website traffic, generate leads, boost sales, and enhance brand visibility by placing your ads directly in front of your target audience.",
    },
    {
      question: "What sets Logoriv apart in the realm of PPC advertising services?",
      answer:
        "Our unique blend of industry knowledge, data-driven optimization, and a dedicated team ensures noticeable outcomes, focusing on maximizing your ROI and achieving your individual goals.",
    },
  ]

  useEffect(() => {
    // Hero animations
    gsap.fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 })
    gsap.fromTo(".hero-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.4 })
    gsap.fromTo(
      ".hero-image",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, delay: 0.6, ease: "back.out(1.7)" },
    )
    gsap.fromTo(".hero-button", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.8 })

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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
    
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-5 left-5 sm:top-10 sm:left-10 lg:top-20 lg:left-20 w-20 h-20 sm:w-32 sm:h-32 lg:w-72 lg:h-72 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
          <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 lg:bottom-20 lg:right-20 w-24 h-24 sm:w-48 sm:h-48 lg:w-96 lg:h-96 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-2xl sm:blur-3xl"></div>
        </div>

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
                    PPC
                  </span>
                  <br />
                  Advertising
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-2">Home &gt; PPC Advertising</p>
              </motion.div>

              <motion.p
                className="hero-subtitle text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                At Logoriv, we take great satisfaction in offering our clients PPC advertising services of the highest
                grade that provide noticeable outcomes. Our method is based on a calculated fusion of industry
                knowledge, laborious preparation, and a dedication to ongoing optimization. In order to customize our
                PPC campaigns to meet our client's specific needs—whether it be raising conversion rates, increasing
                website traffic, or raising brand awareness—we start by getting to know their individual goals and
                objectives.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center lg:justify-start pt-2 hero-button"
              >
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-lg shadow-lg shadow-green-500/25">
                    Enquire Now
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right Content - Image */}
            <motion.div
              className="hero-image relative order-1 lg:order-2 mb-6 lg:mb-0 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <Image
                src="/images/dropdown/ppc-example.webp"
                alt="Google Search PPC Ad Example"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl border border-green-500/20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advertise to the Right People Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 scroll-animate order-2 lg:order-1">
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Advertise to the Right <span className="text-blue-400">People at Right place</span>
              </motion.h2>
              <motion.p
                className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-3 sm:mb-4 lg:mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                We see PPC advertising as a dynamic and ever-changing approach, and our dedicated team is constantly
                ready to use their abilities to give the best possible outcomes for our clients. Whether you want to
                increase exposure, create leads, or drive sales, our comprehensive and results-driven digital marketing
                partner. With a commitment to transparency and to ensure that our clients' campaigns remain competitive
                and adaptive to evolving market dynamics we,
              </motion.p>
              <motion.p
                className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-3 sm:mb-4 lg:mb-6 font-semibold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Keep our clients informed through detailed analytics and reporting
              </motion.p>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg text-gray-300">
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  Regularly monitoring and adjusting bids
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  Testing various ad elements through A/B testing
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  Incorporating industry best practices are integral parts of our methodology
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  Staying abreast of the latest trends and updates in PPC platforms
                </motion.li>
              </ul>
            </div>

            {/* Right Content - Image */}
            <motion.div
              className="relative order-1 lg:order-2 mb-6 lg:mb-0 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/dropdown/advertising-png.png"
                alt="Social Media Signpost"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16 scroll-animate"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
              Outcomes of PPC Advertising <span className="text-green-400">Campaign</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                className="scroll-animate"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 h-full flex flex-col">
                  <CardContent className="p-4 sm:p-6 lg:p-8 flex-grow">
                    <div className="flex justify-between items-start mb-2 sm:mb-3">
                      <span className="text-2xl sm:text-3xl font-bold text-green-400">{outcome.number}</span>
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 hover:text-red-500 transition-colors cursor-pointer" />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-400 mb-2 sm:mb-3">
                      {outcome.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{outcome.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common CTA Section */}
      <CommonCTASection />

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
