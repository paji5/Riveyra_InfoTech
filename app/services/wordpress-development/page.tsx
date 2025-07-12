"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Home, ChevronRight, Layout, ShoppingCart, BookOpen, Zap } from "lucide-react"
import CommonCTASection from "@/components/CommonCTASection"

export default function WordpressDevelopmentPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  }

  const faqItems = [
    {
      question: "Why should I choose WordPress for my website?",
      answer:
        "WordPress is a versatile and user-friendly platform, ideal for various website types from blogs to e-commerce. It offers extensive customization, a vast plugin ecosystem, and strong SEO capabilities, making it a powerful choice for businesses of all sizes.",
    },
    {
      question: "How long does it take to develop a WordPress website?",
      answer:
        "The development timeline for a WordPress website varies based on complexity, features, and content. A basic site might take a few weeks, while a complex e-commerce or custom solution could take several months. We provide a detailed timeline after understanding your specific requirements.",
    },
    {
      question: "Can you migrate my existing website to WordPress?",
      answer:
        "Yes, we specialize in seamless website migrations to WordPress. Our team ensures a smooth transition of your content, design, and SEO rankings with minimal downtime, providing a hassle-free experience.",
    },
    {
      question: "What are custom plugins, and why might I need them?",
      answer:
        "Custom plugins are bespoke software components developed to add unique functionalities to your WordPress site that aren't available off-the-shelf. You might need them for specific business processes, integrations, or unique user experiences that differentiate your website.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div className="text-center md:text-left mb-8" initial="initial" animate="animate" variants={fadeIn}>
            <nav className="text-sm mb-2">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors">
                    <Home className="w-4 h-4" />
                  </Link>
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-500" />
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 font-medium">WordPress Development</span>
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              WordPress{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="initial" animate="animate" variants={fadeIn} className="relative">
              <img
                src="/images/dropdown/WordPress.png"
                alt="WordPress Development Infographic"
                width={600}
                height={400}
                className="w-full h-auto object-contain rounded-lg shadow-2xl border border-green-500/20"
              />
              {/* Subtle glowing effect around the image */}
              <div className="absolute inset-0 -m-2 rounded-lg bg-green-500/10 blur-xl opacity-50 animate-pulse -z-10"></div>
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={fadeIn} transition={{ delay: 0.2 }}>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                WordPress development refers to the process of creating and customizing websites using the WordPress
                content management system (CMS). WordPress is a popular and versatile platform that allows users to
                build and manage websites without extensive coding knowledge. At Riveyra Infotech, our developers will
                benefit you with custom plugins to add new features, integrating third-party services, editing theme
                files, adding custom code, and utilizing hooks and filters and many more.
              </p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  Responsive themes to target mobile traffic and boost conversations.
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  Social Media Integration to increase user engagement.
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  Custom WordPress Solutions to give you full control.
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  SEO friendly architecture to improve organic rankings.
                </li>
              </ul>
              <Link href="/contact" passHref>
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-8 py-3 rounded-xl font-semibold shadow-lg shadow-green-500/25 relative overflow-hidden group text-base">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
                  <span className="relative z-10">Enquire Now</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Why choose Us for{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              WordPress Development
            </span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={cardVariants}>
              <Card className="bg-gray-900 border border-green-500/20 rounded-xl p-6 flex flex-col items-center text-center h-full hover:shadow-green-500/30 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0 flex flex-col items-center">
                  <Layout className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Static Website</h3>
                  <p className="text-gray-400 text-sm">Ideal for simple, informative sites with minimal updates.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card className="bg-gray-900 border border-green-500/20 rounded-xl p-6 flex flex-col items-center text-center h-full hover:shadow-green-500/30 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0 flex flex-col items-center">
                  <ShoppingCart className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">E-Commerce Website</h3>
                  <p className="text-gray-400 text-sm">
                    Robust solutions for online stores with secure payment gateways.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card className="bg-gray-900 border border-green-500/20 rounded-xl p-6 flex flex-col items-center text-center h-full hover:shadow-green-500/30 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0 flex flex-col items-center">
                  <BookOpen className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Blog Website</h3>
                  <p className="text-gray-400 text-sm">Engaging platforms for content creators and publishers.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card className="bg-gray-900 border border-green-500/20 rounded-xl p-6 flex flex-col items-center text-center h-full hover:shadow-green-500/30 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0 flex flex-col items-center">
                  <Zap className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Dynamic Website</h3>
                  <p className="text-gray-400 text-sm">
                    Interactive sites with database integration and user-specific content.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            FAQ's
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <AccordionItem
                    value={`item-${index + 1}`}
                    className="border-b border-green-500/20 mb-4 rounded-lg overflow-hidden bg-gray-900 shadow-lg"
                  >
                    <AccordionTrigger className="text-lg md:text-xl text-white hover:text-green-400 px-6 py-4 transition-colors duration-200">
                      <span className="text-green-400 mr-3 font-semibold">{index + 1}.</span> {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 px-6 pb-4 pt-0 text-base leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Common CTA Section */}
      <CommonCTASection />
    </div>
  )
}
