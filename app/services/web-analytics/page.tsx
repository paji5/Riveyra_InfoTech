"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Target,
  FileText,
  TrendingUp,
  Settings,
  RefreshCw,
  Search,
  Zap,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const services = [
  {
    number: "01",
    title: "Define measurement goals",
    description:
      "To define meaningful goals, targets & segments, we first organize the right people to be involved with the planning process. Next, we focus on bringing a clear understanding of your business model & how your website & digital analytics team identifies your business objectives, KPIs & targets to measure performance.",
    icon: Target,
  },
  {
    number: "02",
    title: "Create implementation plan",
    description:
      "Designing right digital analytics implementation plan for every business size - small or large, specific to the business objectives is important. If you're using Google Analytics, Google Tag Manager, or any other analytics platform, our implementation plan to help you make right business decisions & improve productivity.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Advanced Reporting",
    description:
      "To give actionable insights from your data, we offer executive level reports that can help you make right business decisions & optimize your marketing plans. From custom dashboard to segmentation, we create custom reports for everything from visitors demographics & potential conversions to thinking more opportunities.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "In-depth Analysis",
    description:
      "We perform baseline analysis of your website metrics to understand your visitor's behaviour, gain insights on latest trends across your site, identify ROI challenges and find out new opportunities. The in-depth analytics done by our team will help you understand user flow, conversion funnel analysis & also where you're losing potential traffic, how to shoot up conversion rate etc.",
    icon: TrendingUp,
  },
  {
    number: "05",
    title: "Document technical environment",
    description:
      "For more concrete analytics tracking, our digital analytics experts document technical environment involved to answer the questions like - What are the technologies being used? What are the limitations? How responsive is your website responsive, on the technologies you're using make it possible to track everything we need to track & lot more.",
    icon: Settings,
  },
  {
    number: "06",
    title: "Maintain & improve",
    description:
      "Our implementation process is flexible & cyclical. After every implementation stage, we iterate over our model to maintain & keep your business plans. The maintenance & improvement is an ongoing process & we make sure all the requirements show up high.",
    icon: RefreshCw,
  },
  {
    number: "07",
    title: "Google Analytics Set up",
    description:
      "We do everything from analytics tracking code installation to essential configuration settings including setting up filters, views, goals, ecommerce tracking & campaign tracking.",
    icon: Search,
  },
  {
    number: "08",
    title: "Implement the planned model",
    description:
      "Once we design the plan, we proceed further by forwarding it to our implementation team that accurately configures everything keeping in mind the goals, purpose, targets & business requirements.",
    icon: Zap,
  },
]

const benefits = [
  "Have hassle-free configuration set up with right implementation done to gain accurate insights.",
  "Get not just personal findings, but real insights for analysis that matched the business objectives.",
  "Identify the right marketing channel & measure ROI",
  "Understand the user behaviour, demographics & find more opportunities",
  "Get ahead of the out-throat competition by launching effective campaigns that'll actually work",
  "Monitor site's performance, track conversions & optimize",
  "Identify the source of your traffic",
  "Gain insight into how visitors treat various design elements & develop a better website for higher conversion rates",
]

const faqs = [
  {
    question:
      "Can I track the effectiveness of my online marketing campaigns through Company Riveyra Infotech web analytics services?",
    answer:
      "Yes, absolutely! Our web analytics services are specifically designed to track and measure the effectiveness of your online marketing campaigns. We set up comprehensive tracking systems that monitor campaign performance, conversion rates, ROI, and user engagement across all your marketing channels.",
  },
  {
    question: "How do I get started with Company Riveyra Infotech web analytics services?",
    answer:
      "Getting started is simple! Contact us through our website or call us directly. We'll schedule a consultation to understand your business goals, current analytics setup, and requirements. Then we'll create a customized analytics implementation plan tailored to your specific needs.",
  },
  {
    question: "How often will I receive reports on my website performance?",
    answer:
      "We provide flexible reporting schedules based on your needs. Typically, we offer weekly, monthly, and quarterly reports. For businesses requiring more frequent insights, we can provide daily reports and real-time dashboard access to monitor your website performance continuously.",
  },
  {
    question: "Can Company Riveyra Infotech integrate with other tools or platforms for a seamless experience?",
    answer:
      "Yes, we specialize in integrating analytics tools with various platforms including CRM systems, marketing automation tools, e-commerce platforms, social media channels, and advertising platforms. This ensures a seamless flow of data and comprehensive insights across all your business tools.",
  },
]

export default function WebAnalyticsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
     
      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Enhanced Floating Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-emerald-500/15 to-green-500/15 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.6, 0.2],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-r from-green-400/25 to-emerald-400/25 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.9, 0.4],
              x: [0, 60, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full blur-2xl"
            animate={{
              scale: [1.1, 1.3, 1.1],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm mb-8 sm:mb-12">
                <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="text-green-400 font-medium">Web Analytics</span>
              </nav>

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="space-y-6 lg:space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
                      <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                        Web Analytics
                      </span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mb-6"></div>
                  </motion.div>

                  <motion.h2
                    className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-400 leading-relaxed"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    Transform Your Data Into Actionable Business Intelligence
                  </motion.h2>

                  <motion.p
                    className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    At Riveyra Infotech, we specialize in comprehensive web analytics solutions that turn your website
                    data into powerful insights. Our expert team helps you understand user behavior, optimize conversion
                    rates, and make data-driven decisions that drive business growth.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link href="/contact">
                      <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 group">
                        Get Started Today
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>

                <motion.div
                  className="relative mt-8 lg:mt-0"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <div className="relative">
                    {/* Main Image Container */}
                    <div className="relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl p-8 backdrop-blur-sm border border-green-500/20 shadow-2xl">
                      <Image
                        src="/images/dropdown/web-a.png"
                        alt="Web Analytics Dashboard"
                        width={600}
                        height={500}
                        className="w-full h-auto rounded-2xl shadow-lg"
                      />

                      {/* Floating Analytics Cards */}
                      <motion.div
                        className="absolute -top-4 -right-4 bg-green-500 text-black px-4 py-2 rounded-xl font-bold shadow-lg"
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <BarChart3 className="w-6 h-6" />
                      </motion.div>

                      <motion.div
                        className="absolute -bottom-4 -left-4 bg-emerald-500 text-black px-4 py-2 rounded-xl font-bold shadow-lg"
                        animate={{
                          y: [0, 10, 0],
                          rotate: [0, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <TrendingUp className="w-6 h-6" />
                      </motion.div>

                      <motion.div
                        className="absolute top-1/2 -right-6 bg-blue-500 text-white px-3 py-2 rounded-lg shadow-lg"
                        animate={{
                          x: [0, 10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <Target className="w-5 h-5" />
                      </motion.div>
                    </div>

                    {/* Background Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl -z-10"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Digital Analytics Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-4">Digital Analytics</h2>
                  <div className="text-lg sm:text-xl text-gray-400 mb-6">Tracking, Reporting & Analysis</div>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Insights, great ideas, vast databases of data & a cutting-edge marketing strategy won't do wonders
                    for your business unless you have a solid infrastructure to analyse the collected data and use it to
                    track the impact of your efforts against the money invested. That's where Digital Analytics comes
                    in.
                  </p>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Digital Analytics is all about interpreting tons of your own business data & analysing your
                    competitors' data to gather meaningful insights that can improve the entire direction. Without
                    measuring your efforts, you'll never know which marketing strategies work and which don't.
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl p-8 sm:p-12 backdrop-blur-sm border border-green-500/20 shadow-2xl">
                  <div className="flex items-center justify-center h-48 sm:h-64 lg:h-80">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <BarChart3 className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-green-400" />
                    </motion.div>
                  </div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl blur-xl -z-10"></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What We DO Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                What We <span className="text-green-400">DO</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mx-auto"></div>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="bg-gray-900/50 border-green-500/20 hover:border-green-400/40 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 h-full">
                    <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold text-lg px-4 py-2 rounded-full shadow-lg">
                          {service.number}
                        </Badge>
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                          className="p-2 bg-green-500/10 rounded-lg"
                        >
                          <service.icon className="w-6 h-6 text-green-400" />
                        </motion.div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4 group-hover:text-green-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base flex-grow">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white text-black">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
                    Why Choose Our Analytics?
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6"></div>
                </motion.div>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-green-50 transition-colors duration-300 group"
                    >
                      <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0 group-hover:text-green-600" />
                      </motion.div>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base group-hover:text-gray-800">
                        {benefit}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 sm:p-12 shadow-2xl">
                  <div className="flex items-center justify-center h-48 sm:h-64 lg:h-80">
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <TrendingUp className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-green-600" />
                    </motion.div>
                  </div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-green-200/50 to-emerald-200/50 rounded-3xl blur-xl -z-10"></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-12 lg:py-16 xl:py-20 relative overflow-hidden">
          {/* Simple Blue Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-blue-900/30"></div>
            <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-blue-500/10 rounded-full blur-xl sm:blur-2xl"></div>
            <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-20 h-20 sm:w-40 sm:h-40 lg:w-64 lg:h-64 bg-blue-400/10 rounded-full blur-xl sm:blur-2xl"></div>
          </div>

          {/* Simple Floating Dots */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { left: 20, top: 25 },
              { left: 80, top: 20 },
              { left: 30, top: 75 },
              { left: 70, top: 80 },
              { left: 50, top: 30 },
              { left: 60, top: 65 },
            ].map((particle, i) => (
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
                <Link href="/contact">
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
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Frequently Asked <span className="text-green-400">Questions</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mx-auto"></div>
            </motion.div>

            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-green-500/20 hover:bg-green-500/5 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                    <CardContent className="p-0">
                      <button
                        className="w-full p-6 sm:p-8 text-left flex items-center justify-between hover:bg-green-500/5 transition-colors duration-300 group"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                        <span className="text-white font-medium pr-4 text-sm sm:text-base group-hover:text-green-400 transition-colors">
                          {faq.question}
                        </span>
                        <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                        </motion.div>
                      </button>
                      {openFaq === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 sm:px-8 pb-6 sm:pb-8"
                        >
                          <div className="pt-4 border-t border-green-500/20">
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    
    </>
  )
}
