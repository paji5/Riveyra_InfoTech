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
  Phone,
  ChevronDown,
  ChevronRight,
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
      <Navbar />
      <div className="min-h-screen bg-black text-white">
        {/* Floating Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-green-500/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="container mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm mb-8">
                <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="text-green-400">Web Analytics</span>
              </nav>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Web Analytics
                  </motion.h1>

                  <motion.h2
                    className="text-2xl md:text-3xl font-semibold mb-6 text-blue-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    At Riveyra Infotech, we take great satisfaction in offering our clients PPC advertising services of
                    the highest grade that provide noticeable outcomes.
                  </motion.h2>

                  <motion.p
                    className="text-gray-300 text-lg leading-relaxed mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Our method is based on a calculated fusion of industry knowledge, laborious preparation, and a
                    dedication to engaging optimization. In order to customize our PPC campaigns to meet our client's
                    specific needs—whether it be raising conversion rates, increasing website traffic, or raising brand
                    awareness—we start by getting to know their individual goals and objectives.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Enquire Now
                    </Button>
                  </motion.div>
                </div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="relative">
                    <Image
                      src="/images/web-analytics-hero.png"
                      alt="Web Analytics Illustration"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    {/* Floating elements around the image */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full"
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-400 rounded-full"
                      animate={{
                        y: [0, 10, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Digital Analytics Section */}
        <section className="py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">
                  Digital Analytics - Tracking, Reporting & Analysis
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Insights, great ideas, vast databases of data & a cutting-edge marketing strategy won't do wonders for
                  your business unless you have a solid infrastructure to analyse the collected data and use it to track
                  the impact of your efforts against the money invested. That's where Digital Analytics comes in.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Digital Analytics is all about interpreting tons of your own business data & analysing your
                  competitors' data to gather meaningful insights that can improve the entire direction. Without
                  measuring your efforts, you'll never know which marketing direction. Without measuring your efforts,
                  you'll never know which marketing level doesn't. That is how to best optimize your website & campaigns
                  to improve performance.
                </p>
              </div>
              <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-8 backdrop-blur-sm border border-green-500/20">
                  <div className="flex items-center justify-center h-64">
                    <BarChart3 className="w-32 h-32 text-green-400" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What We DO Section */}
        <section className="py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What We DO</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-green-500/20 hover:border-green-400/40 transition-all duration-300 group hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Badge className="bg-green-500 text-black font-bold text-lg px-3 py-1 rounded-full">
                          {service.number}
                        </Badge>
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                          <service.icon className="w-6 h-6 text-green-400 mt-1" />
                        </motion.div>
                      </div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-3 group-hover:text-green-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-white text-black">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">
                  Digital Analytics - Tracking, Reporting & Analysis
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8">
                  <div className="flex items-center justify-center h-64">
                    <TrendingUp className="w-32 h-32 text-green-600" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's Start a New Project Together</h2>
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">FAQ's</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-green-500/20 hover:bg-green-500/5 transition-all duration-300">
                    <CardContent className="p-0">
                      <button
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-green-500/5 transition-colors"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                        <span className="text-white font-medium pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-green-400 transition-transform ${
                            openFaq === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openFaq === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
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
      <Footer />
    </>
  )
}
