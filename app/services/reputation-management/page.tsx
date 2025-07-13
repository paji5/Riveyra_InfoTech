"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, TrendingUp, Search, Monitor, Star, MessageSquare, ChevronDown, ChevronRight, Home } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const services = [
  {
    number: "01",
    title: "Counter-Propaganda Strategy:",
    description:
      "Your small business can suffer severely if there is negative online propaganda against it. Anyone with an axe to grind with you can upload a negative review or comment about your business. This can be devastating for your business against you. This is the time that you must take strong action and give a counter-propaganda strategy. Digital SEO can help you manage online reputation for small business through SEO techniques and analytical tools. We help take control of your business and your reputation in your own hands.",
    icon: Shield,
  },
  {
    number: "02",
    title: "Highlight Positive Aspects of the Individual and the Business:",
    description:
      "The posts, reviews and comments that appear on Google pages while searching for your business, as well as post comments, and Facebook, Twitter uploads, do affect your business. The impressions and slanderous remarks about you immediately personally using your business name on various business Marketing help of SEO techniques and Social Media Marketing) and Content Marketing help of SEO techniques and only positive and vibrant aspects and reviews are highlighted on search engines while the negative reviews and unwanted post uploads from your side go unnoticed.",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "SEO and Reputation Management:",
    description:
      "With SEO, we make sure that all of the negative reviews, bad comments and anything maligning your name or business is moved down to the lowest search engine pages. The ranking will be so low that it will go unnoticed by the potential customers searching for you or your business. In special cases we will use proprietary techniques to completely eliminate negative reviews from Google listings.",
    icon: Search,
  },
  {
    number: "04",
    title: "Reputation Monitoring:",
    description:
      "Digital SEO provides you complete monitoring of your small business. We collect reviews from all of the websites and share them with you. We provide you daily alerts of your small business reputation management as well as weekly detailed reports so that nothing goes missing from your site. We give you complete control and comprehensive of your business online reputation so that you can concentrate on much important things, but achieving revenue target of this year.",
    icon: Monitor,
  },
  {
    number: "05",
    title: "We Collect Reviews from All Major Websites:",
    description:
      "From Yellow Pages to LinkedIn, Google, Yelp, Yahoo, Google+, Angie's List, Twitter to random Google reports and negative site listings, we target everything that is online and that can influence your business. Instead of the bad reviews we upload fresh and positive reviews that give small business a new and fresh boost.",
    icon: Star,
  },
  {
    number: "06",
    title: "Testimonials on Your Website:",
    description:
      "We request all of your good and loyal customers to fill feedback. This feedback is published on the wall of their social media ( Facebook, Twitter, Google+ or whichever they choose) as well as on your website as a testimonial.",
    icon: MessageSquare,
  },
]

const faqs = [
  {
    question: "What is reputation management, and why is it important for my business?",
    answer:
      "Reputation management is the practice of monitoring, influencing, and managing your business's online reputation. It's crucial because potential customers often research businesses online before making purchasing decisions. A positive online reputation builds trust, credibility, and can significantly impact your bottom line.",
  },
  {
    question: "How does Company Riveyra Infotech handle crises or urgent reputation issues?",
    answer:
      "We have a dedicated crisis management team that responds immediately to urgent reputation issues. Our rapid response protocol includes immediate assessment, strategic counter-messaging, SEO optimization to suppress negative content, and proactive communication with stakeholders to minimize damage.",
  },
  {
    question: "How do you monitor and track online mentions of my brand?",
    answer:
      "We use advanced monitoring tools and techniques to track mentions across social media platforms, review sites, news outlets, blogs, and forums. Our comprehensive monitoring system provides real-time alerts and detailed reports on your brand's online presence and sentiment analysis.",
  },
  {
    question: "What aspects of my online presence does reputation management cover?",
    answer:
      "Our reputation management covers all aspects of your online presence including Google search results, social media profiles, review platforms (Google, Yelp, Facebook), news articles, blog mentions, industry forums, and any other digital touchpoints where your brand appears online.",
  },
]

export default function ReputationManagementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
     
      <div className="min-h-screen bg-black text-white">
        {/* Floating Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-400/10 rounded-full blur-lg animate-pulse delay-1000" />
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-green-600/10 rounded-full blur-2xl animate-pulse delay-2000" />
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl animate-pulse delay-3000" />
        </div>

        {/* Hero Section */}
        <section className="relative py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="container mx-auto">
            {/* Breadcrumb */}
            <motion.nav
              className="flex items-center space-x-2 text-sm mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Home className="w-4 h-4" />
              <span className="text-gray-400">Home</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-green-400">Reputation Management</span>
            </motion.nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Reputation Management
                  </span>
                </motion.h1>

                <motion.h2
                  className="text-2xl md:text-3xl text-blue-400 mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Exclusively for Expanded reach, Greater promotions, Increased traffic, Better sales and Boosting Brand
                  image and popularity
                </motion.h2>

                <motion.p
                  className="text-gray-300 text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  At Riveyra Infotech, we take great satisfaction in offering our clients reputation management services
                  of the highest grade that provide noticeable outcomes. Our method is based on a calculated fusion of
                  industry knowledge, laborious preparation, and a dedication to engaging optimization in order to
                  customize our reputation management campaigns to meet our client's specific needs—whether it be
                  raising conversion rates, increasing website traffic, or raising brand awareness—we start by getting
                  to know their individual goals and objectives.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                    >
                      Get Started Today
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative z-10">
                  <img
                    src="/images/dropdown/repu-mang.png"
                    alt="Reputation Management Services"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                {/* Floating Elements Around Image */}
                <motion.div
                  className="absolute -top-4 -left-4 w-8 h-8 bg-green-400 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
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
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute top-1/2 -right-8 w-4 h-4 bg-green-300 rounded-full"
                  animate={{
                    x: [0, 10, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Have Professionals Manage Your Online Reputation
              </h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="bg-gray-900/50 border-green-500/20 hover:border-green-400/40 transition-all duration-300 group hover:shadow-lg hover:shadow-green-500/10 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Badge
                            variant="outline"
                            className="bg-green-500/10 text-green-400 border-green-500/30 text-lg px-3 py-1 font-bold"
                          >
                            {service.number}
                          </Badge>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <IconComponent className="w-6 h-6 text-green-400 group-hover:rotate-12 transition-transform duration-300" />
                              <h3 className="text-xl font-semibold text-green-400 group-hover:text-green-300 transition-colors">
                                {service.title}
                              </h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">{service.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
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
        <section className="py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">FAQ's</h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-gray-900/50 border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:bg-green-500/5">
                    <CardContent className="p-0">
                      <button
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-green-500/5 transition-colors rounded-lg"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                        <span className="font-semibold text-white pr-4">
                          {index + 1}. {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-green-400 transition-transform duration-300 flex-shrink-0 ${
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
            </motion.div>
          </div>
        </section>
      </div>
   
    </>
  )
}
