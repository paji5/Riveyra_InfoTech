"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import { Search, Edit3, Eye, BarChart3, MessageSquare, ChevronDown, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ContentWritingPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const contentServices = [
    {
      id: "01",
      title: "Perfect Catalyst for SEO",
      description:
        "Our web content writers create the most SEO friendly and user friendly Content. With SEO and user friendly content, we embed perfect SEO tactic and strategies. Consequently, with unique and result oriented SEO tactic and strategy engrained in content, you website rank the best heights. With an adequate quantity of keywords your web page is exposed to target customers and other enthusiast. However, we don't turn messy after keywords but let them in adequate quantity.",
      icon: Search,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "02",
      title: "Professional Copywriting Services",
      description:
        "Our professional approach makes your things simpler. Our content writers write accordingly clients web, satisfying him with each and every text. Website reviewing, rewriting and all other genres of writing are provided here!",
      icon: Edit3,
      gradient: "from-emerald-500 to-green-600",
    },
    {
      id: "03",
      title: "Appealing",
      description:
        "Originality is the key to attract the visitors Our website content writers write content that really appeals the reader and makes him visit your site again and again. Also, our website content writers approach every topic with new angle, creating a unique and interesting approach.",
      icon: Eye,
      gradient: "from-green-600 to-emerald-600",
    },
    {
      id: "04",
      title: "Quality Analysis",
      description:
        "We provide result oriented content! We keep on upgrading our Content Management Device as per market lovers and customer demands. Thence, Our Content is Modern and Easy-to-relate to the market scenario.",
      icon: BarChart3,
      gradient: "from-emerald-600 to-green-500",
    },
    {
      id: "05",
      title: "Interactive Content",
      description:
        'We create Content that becomes the voice of the website and perfectly communicates to the masses. "Taking Content is better choice for endorsements and promotions."',
      icon: MessageSquare,
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  const servicesList = [
    "Business Writing- Make your business Professional, Effective, Unique.",
    "Web Content Writing- Let your website Talk, Communicate and Interact",
    "SEO Copywriting- Optimize, Promote and Excel with your words",
    "Article Writing- Meant for readers... Informative... Featured... and much more",
    "Newsletter Writing- Tell to your clients routinely, Say the latest about your business",
    "Ebook Writing- Amass all your expertise, working and much more into one......",
    "Blog Writing- Interesting...Entertaining...Let readers enjoy your style of messaging",
    "Technical Writing- Explain in Informative, Detailed, Easy-to-interpret ways",
    "Press Release- What's new and What's more- tell everyone.",
  ]

  const faqs = [
    {
      question: "What types of content does Riveyra Infotech specialize in writing?",
      answer:
        "We specialize in various types of content including business writing, web content, SEO copywriting, articles, newsletters, ebooks, blogs, technical writing, and press releases. Our team creates content that is professional, engaging, and tailored to your specific business needs.",
    },
    {
      question: "How can professional content writing benefit my business?",
      answer:
        "Professional content writing enhances your brand image, improves SEO rankings, engages your target audience, increases conversions, and establishes your authority in your industry. Quality content helps build trust with customers and drives business growth.",
    },
    {
      question: "How does Company ensure the content is original and not plagiarized?",
      answer:
        "We have strict quality control measures in place. All content is written from scratch by our experienced writers and goes through plagiarism detection tools. We guarantee 100% original, unique content that meets your specific requirements.",
    },
    {
      question: "What is the typical turnaround time for content writing projects?",
      answer:
        "Turnaround time varies depending on the project scope and complexity. Typically, blog posts take 2-3 days, web pages 3-5 days, and larger projects like ebooks may take 1-2 weeks. We always discuss timelines upfront and work to meet your deadlines.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
   

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-green-400/5 to-emerald-400/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Breadcrumb */}
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Home</span>
                <span>/</span>
                <span>Services</span>
                <span>/</span>
                <span className="text-green-400">Content Writing</span>
              </div>

              <div className="space-y-6">
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Content Writing
                  </span>{" "}
                  <span className="text-white">Services</span>
                </motion.h1>

                <motion.h2
                  className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Delivering SEO Friendly, Interactive, Convincing, Unique and Professional Content Writing Services
                </motion.h2>

                <motion.p
                  className="text-gray-400 text-base sm:text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Transform your online presence with our professional content writing services. We create compelling,
                  SEO-optimized content that engages your audience and drives results. From web copy to blog posts, our
                  expert writers deliver content that converts visitors into customers.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-lg shadow-2xl shadow-green-500/30 transition-all duration-300 hover:scale-105">
                      Get Started Today
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="/images/dropdown/content-mar.png"
                  alt="Content Writing Services"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-emerald-400/30 rounded-full blur-sm"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Content Writing is Different Section */}
      <section ref={servicesRef} className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Content Writing Services
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We deliver content that not only engages your audience but also drives measurable results for your
              business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {contentServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-500 hover:scale-105 hover:-translate-y-2 backdrop-blur-sm overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(34, 197, 94, 0.1)`,
                }}
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Service Number */}
                <div className="absolute top-4 right-4">
                  <span className="text-4xl font-bold text-green-400/20 group-hover:text-green-400/40 transition-colors duration-300">
                    {service.id}
                  </span>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 shadow-lg shadow-green-500/20 group-hover:shadow-2xl transition-all duration-500`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Content Writing Services Section */}
      <section ref={featuresRef} className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white text-black relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isFeaturesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                  Our{" "}
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                    Content Writing Services
                  </span>{" "}
                  Include:
                </h2>

                <div className="space-y-4">
                  {servicesList.map((service, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 p-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isFeaturesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed font-medium">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isFeaturesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="/images/dropdown/content-mar2.jpg"
                  alt="Content Writing Services Portfolio"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-emerald-500/30 rounded-full blur-sm"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-8 sm:py-12 lg:py-16 xl:py-20 relative overflow-hidden">
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
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              Let's Start a New Project <span className="text-blue-400">Together</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isCtaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg">Everything you need to know about our content writing services</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-green-500/20 rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm hover:border-green-500/40 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-green-500/5 transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-green-400 transition-transform duration-200 flex-shrink-0 ${
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
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  )
}
