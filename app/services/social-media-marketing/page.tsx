"use client"

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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
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
      "Social Media Does Not Work Alone. Instead Social Media Marketing Never Happens In Business SEO And Content Marketing. For Example, A Car That Social Media Platforms Like Facebook, Twitter, LinkedIn, Google+ Or YouTube Need Content To Go To The Next Level. Understanding Of This Business Is Helpful. As A Result, We Have A Team Of Content Writers, SEO Experts And Social Media Experts. All Uses Second Or Third Based Internet Page. We Do Riveyra Infotech Pay Special Attention To Detailed Aspect Of Your Social Media Like. We Keep Eyes On Every Single Comment, Like, Share And Even The View. We Have A Team Of Experienced Of Course Something. For The Change View Survey For Their Business. Our Team Is Experienced Enough To Work And For The Change View Survey For Their Business.",
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
                <span>Home</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-green-400">Social Media Marketing</span>
              </nav>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Social Media Marketing
                </motion.h1>

                <motion.h2
                  className="text-xl md:text-2xl text-blue-400 mb-6 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Exclusively for Expanded reach, Greater promotions, Increased traffic, Better sales and Boosting Brand
                  image and popularity
                </motion.h2>

                <motion.p
                  className="text-gray-300 text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Riveyra Infotech offers you social media consulting and ultimate solution to all of your social media
                  marketing problems. Social Media marketing has its own rules and regulations that are functioning.
                  Only a professional like Riveyra Infotech can help you get your word out to a majority of people. In
                  fact your word will get out to more than half of the world's population who is using one or other
                  platform of social media.
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
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <Image
                    src="/images/social-media-marketing-hero.png"
                    alt="Social Media Marketing Illustration"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />

                  {/* Floating Elements Around Image */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -right-4 w-6 h-6 bg-emerald-400 rounded-full"
                    animate={{
                      y: [0, 10, 0],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 -right-8 w-4 h-4 bg-green-300 rounded-full"
                    animate={{
                      x: [0, 10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How Social Media Can Transform Your Online Business?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-green-500/20 hover:border-green-400/40 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <span className="text-green-400 font-bold text-lg">{service.id}</span>
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                          <service.icon className="w-6 h-6 text-green-400" />
                        </motion.div>
                      </div>
                      <h3 className="text-blue-400 font-semibold text-lg mb-3 group-hover:text-green-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services List Section */}
        <section className="py-20 bg-white text-black px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-600">
                  Our Social Media Marketing Services Includes:
                </h2>
                <div className="space-y-4">
                  {socialMediaServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-green-50 transition-colors duration-300"
                    >
                      <span className="text-2xl">{service.icon}</span>
                      <span className="text-gray-700 font-medium">{service.name}</span>
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
                <div className="w-full h-80 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-gray-600 font-medium">Social Media Marketing Services</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Let's Start a New Project Together</h2>
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">FAQ's</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-green-500/20 rounded-lg px-6 hover:border-green-400/40 transition-colors duration-300 hover:bg-green-500/5"
                  >
                    <AccordionTrigger className="text-white hover:text-green-400 transition-colors duration-300">
                      <span className="text-left">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
