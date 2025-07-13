"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  ChevronRight,
  Phone,
  MessageSquare,
  Users,
  TrendingUp,
  Target,
  Globe,
  Star,
  BarChart3,
  Megaphone,
  Eye,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const services = [
  {
    id: "01",
    title: "We Will Help You Speak Louder",
    description:
      "We Target All Social Media Platforms. From Facebook (1 Billion Users) To Twitter (316 OR Others) Like A Acrobat. From Pinterest (The Visual Sensation) To Google+ (A Strong Facebook Competitor). LinkedIn And YouTube. We Know How To Speak Louder.",
    icon: Megaphone,
  },
  {
    id: "02",
    title: "We Will Help You Get Your Target Audience",
    description:
      "Every Business Has Its Target Audience. Riveyra Infotech Knows That Your Business Requires Individual Attention And It Has Different Audience. We Help You Achieve Your Target Audience Socially As Well As Internationally.",
    icon: Target,
  },
  {
    id: "03",
    title: "We Offer You Individual Attention",
    description:
      "Every Business Without A Social Media We Cannot Do All Media Campaigns With One Standard Strategy. We Have No Single Formula Strategy. Our Professional Team Will Analyze Your Business Thoroughly And Then Customize An Individual Strategy For Your Business.",
    icon: Users,
  },
  {
    id: "04",
    title: "We Help You Get International Recognition",
    description:
      "Because And Access To The Target Audience And To Target Market Is Essential For Successful Survival Of Any Business. We Help You Get The Fame And Recognition That Was Once Reserved For Presidents, Prime Ministers, And Stars Are Now Being Felt By People Who Run Business Like You.",
    icon: Globe,
  },
  {
    id: "05",
    title: "My Marketer Has Badly Ruined My Social Media Marketing",
    description:
      "A Badly Operated Social Media Marketing Does More Harm Than Good, Especially In These Days When There Is Cut Throat Competition Between Rivals. We Have Seen Many Businesses Whose Social Media Marketing Was Handled By A Professional Team Will Help Fix Your Social Media Blunders. We Will Also Take Care Of Your Reputation Building With Your Customers And Followers. We Guarantee You Positive Results, After All Hard Work Always Pays Back!",
    icon: Star,
  },
  {
    id: "06",
    title: "We Manage Your Reputation",
    description:
      "Our Social Media Strategy Revolves Around Your Reputation. We Believe In Our Responsibility To Take Care Of Your Company's Reputation. We Consistently Follow All Of The Social Media Platforms Activities. All Comments & All The Reviews Are Taken Care Of By Our Team. We Make Sure That Everything Is Done By Humans And Is Done For Humans.",
    icon: MessageSquare,
  },
  {
    id: "07",
    title: "Dedication, Serious Effort And Positive Results",
    description:
      "We Do Riveyra Infotech Know That Social Media Is A Platform That If Triggered Properly Can Generate Hundreds And Thousands Of Leads. At The Same Time It Is One Of The Most Time Consuming Internet Marketing Strategies. Due To This Reason, Most Of The Social Media Marketing Do This Business In Haste. As A Result, The Campaign Will Fall Down. The Dedication Required By Social Media Is Half Easy To Work. We Know You That Dedication, Serious Effort And Positive Results Are The Three Pillars Of Social Media Marketing. As Well You Use Your Business Receives The Height That You Once Dreamt Of.",
    icon: TrendingUp,
  },
  {
    id: "08",
    title: "Riveyra Infotech Believes Social Media Is A Mixture Of SEO And Content Marketing",
    description:
      "Social Media Does Not Work Alone. Instead Social Media Marketing Never Happens In Business SEO And Content Marketing. For Example, A Car That Social Media Platforms like Facebook, Twitter, LinkedIn, Google+ Or YouTube Need Content To Go To The Next Level. Understanding Of This Business Is Helpful. As A Result, We Have A Team Of Content Writers, SEO Experts And Social Media Experts. All Uses Second Or Third Based Internet Page. We Do Riveyra Infotech Pay Special Attention To Detailed Aspect Of Your Social Media Like. We Keep Eyes On Every Single Comment, Like, Share And Even The View. We Have A Team Of Experienced Of Course Something. For The Change View Survey For Their Business. Our Team Is Experienced Enough To Work And For The Change View Survey For Their Business.",
    icon: BarChart3,
  },
  {
    id: "09",
    title: "We Will Help You Speak Louder",
    description:
      "We Target All Social Media Platforms. From Facebook (1 Billion Users) To Twitter (316 OR Others) Like A Acrobat. From Pinterest (The Visual Sensation) To Google+ (A Strong Facebook Competitor). LinkedIn And YouTube. We Know How To Speak Louder.",
    icon: Megaphone,
  },
  {
    id: "10",
    title: "We Will Help You Get Your Target Audience",
    description:
      "Every Business Has Its Target Audience. Riveyra Infotech Knows That Your Business Requires Individual Attention And It Has Different Audience. We Help You Achieve Your Target Audience Socially As Well As Internationally.",
    icon: Target,
  },
  {
    id: "11",
    title: "We Help You Improve Website Traffic",
    description:
      "Bringing links to your website can boost website traffic can significantly boost website traffic. The more visibility your website receives, the higher the chances of attracting potential customers and converting leads into sales.",
    icon: TrendingUp,
  },
  {
    id: "12",
    title: "Increase Your Brand Visibility With Us",
    description:
      "Social media platforms, with their vast user bases, offer an unparalleled opportunity to increase your brand's visibility. Regular, engaging posts and interactions with your audience can enhance brand recall and recognition.",
    icon: Eye,
  },
]

const socialMediaServices = [
  { name: "Facebook page Integration, Management and Optimization", icon: "📘" },
  { name: "Twitter account Integration, Management and Optimization", icon: "🐦" },
  { name: "YouTube video production and optimization", icon: "📺" },
  { name: "Branding and Reputation Management", icon: "🏆" },
  { name: "Blog Creations, Development and Management", icon: "📝" },
]

const faqs = [
  {
    question: "Can you help with SEO optimization of content?",
    answer:
      "Yes, we provide comprehensive SEO optimization for all social media content. Our team ensures that your posts, descriptions, and hashtags are optimized for maximum visibility and engagement across all platforms.",
  },
  {
    question: "What types of content does are created?",
    answer:
      "We create diverse content including engaging posts, stories, reels, videos, infographics, blog articles, and interactive content tailored to each platform's unique requirements and your brand voice.",
  },
  {
    question: "How frequently does Riveyra Infotech recommend updating content on our socials?",
    answer:
      "We recommend posting consistently based on platform best practices - typically 1-2 times daily for Facebook, 3-5 times for Twitter, and 1-2 times for Instagram, with stories and reels posted more frequently.",
  },
  {
    question: "How does Riveyra Infotech ensure that content resonates with our target audience?",
    answer:
      "We conduct thorough audience research, analyze demographics and behavior patterns, create buyer personas, and continuously monitor engagement metrics to ensure content resonates with your specific target audience.",
  },
]

export default function SocialMediaMarketingPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4 sm:mb-6 lg:mb-8"
              >
                <nav className="flex items-center justify-center lg:justify-start space-x-2 text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 lg:mb-8">
                  <Link href="/" className="hover:text-green-400 transition-colors">
                    Home
                  </Link>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-green-400">Social Media Marketing</span>
                </nav>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Social Media
                  </span>
                  <br />
                  Marketing
                </h1>
              </motion.div>

              <motion.h2
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-400 mb-3 sm:mb-4 lg:mb-6 font-semibold leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Exclusively for Expanded reach, Greater promotions, Increased traffic, Better sales and Boosting Brand
                image and popularity
              </motion.h2>

              <motion.p
                className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-3 sm:mb-4 lg:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Riveyra Infotech offers you social media consulting and ultimate solution to all of your social media
                marketing problems. Social Media marketing has its own rules and regulations that are functioning. Only
                a professional like Riveyra Infotech can help you get your word out to a majority of people.
              </motion.p>

              <motion.p
                className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                In fact your word will get out to more than half of the world's population who is using one or other
                platform of social media.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center lg:justify-start pt-2"
              >
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-lg shadow-lg shadow-green-500/25 group">
                    Get Started Today
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right Content - Enhanced Image Section */}
            <motion.div
              className="relative order-1 lg:order-2 mb-6 lg:mb-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <div className="relative max-w-lg mx-auto">
                {/* Main Image Container */}
                <motion.div
                  className="relative z-10"
                  animate={{ y: [-5, 5] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  {/* Social Media Marketing Illustration */}
                  <div className="relative">
                    <Image
                      src="/images/dropdown/social.png"
                      alt="Social Media Marketing Services"
                      width={500}
                      height={400}
                      className="w-full h-auto rounded-2xl"
                      priority
                    />

                    {/* Clean image without overlay */}
                  </div>
                </motion.div>

                {/* Floating Social Platform Icons */}
                <motion.div
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-20"
                  animate={{ y: [-7, 7], rotate: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
                >
                  <div className="bg-blue-600 rounded-xl p-3 sm:p-4 shadow-xl border border-blue-400/30">
                    <div className="text-white text-xl sm:text-2xl">📘</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-1/4 -right-6 sm:-right-8 z-30"
                  animate={{ x: [5, -5], y: [5, -5] }}
                  transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 2 }}
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3 sm:p-4 shadow-xl border border-purple-300/30">
                    <div className="text-white text-xl sm:text-2xl">📷</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-1/4 -right-4 sm:-right-6 z-30"
                  animate={{ x: [3, -3], y: [3, -3] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 2.5 }}
                >
                  <div className="bg-green-600 rounded-xl p-2 sm:p-3 shadow-xl border border-green-400/30">
                    <div className="text-white text-lg sm:text-xl">💬</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-3/4 -left-4 sm:-left-6 z-30"
                  animate={{ x: [-3, 3], y: [-3, 3] }}
                  transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 3 }}
                >
                  <div className="bg-blue-500 rounded-xl p-2 sm:p-3 shadow-xl border border-blue-300/30">
                    <div className="text-white text-lg sm:text-xl">💼</div>
                  </div>
                </motion.div>

                {/* Background Glow Effects */}
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl blur-2xl -z-10"></div>
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl -z-20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
              How Social Media Can Transform Your <span className="text-green-400">Online Business?</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-green-500/20 hover:border-green-400/40 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 h-full">
                  <CardContent className="p-3 sm:p-4 lg:p-6">
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <span className="text-green-400 font-bold text-sm sm:text-base lg:text-lg">{service.id}</span>
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <service.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-400" />
                      </motion.div>
                    </div>
                    <h3 className="text-blue-400 font-semibold text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 group-hover:text-green-400 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-green-600">
                Our Social Media Marketing Services Includes:
              </h2>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                {socialMediaServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg hover:bg-green-50 transition-colors duration-300"
                  >
                    <span className="text-lg sm:text-xl lg:text-2xl">{service.icon}</span>
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-60 sm:h-72 lg:h-80 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white" />
                  </motion.div>
                  <p className="text-gray-600 font-medium text-sm sm:text-base">Social Media Marketing Services</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 relative overflow-hidden">
        {/* Enhanced Blue Background with Multiple Layers */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-900/40"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-900/30 via-transparent to-blue-900/30"></div>
          <div className="absolute top-5 left-5 sm:top-10 sm:left-10 lg:top-20 lg:left-20 w-16 h-16 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-blue-500/15 rounded-full blur-xl sm:blur-2xl animate-pulse"></div>
          <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 lg:bottom-20 lg:right-20 w-20 h-20 sm:w-40 sm:h-40 lg:w-64 lg:h-64 bg-blue-400/15 rounded-full blur-xl sm:blur-2xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-indigo-500/10 rounded-full blur-2xl sm:blur-3xl"></div>
        </div>

        {/* Enhanced Floating Particles */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden">
            {ctaParticles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-blue-400/50 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [-15, 15],
                  x: [-5, 5],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + (i % 2),
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.4,
                }}
              />
            ))}

            {/* Additional floating elements */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`extra-${i}`}
                className="absolute w-1 h-1 bg-indigo-400/40 rounded-full"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + (i % 4) * 15}%`,
                }}
                animate={{
                  y: [-10, 10],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
          <motion.div
            className="text-center"
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

            <motion.p
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-100 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to elevate your social media presence? Let's discuss your marketing goals and create a strategy that
              drives engagement and results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-20"></div>

                  {/* Button Content */}
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
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

                  {/* Ripple Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    initial={{ scale: 0, opacity: 0.5 }}
                    whileHover={{
                      scale: 1.1,
                      opacity: 0,
                      transition: { duration: 0.6 },
                    }}
                    style={{
                      background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
                    }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16"
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-green-500/20 rounded-lg px-3 sm:px-4 lg:px-6 hover:border-green-400/40 transition-colors duration-300 hover:bg-green-500/5"
                  >
                    <AccordionTrigger className="text-white hover:text-green-400 transition-colors duration-300 text-left text-xs sm:text-sm lg:text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
