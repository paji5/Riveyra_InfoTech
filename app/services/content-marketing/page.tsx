"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  BarChart3,
  PenTool,
  Search,
  FileText,
  Share2,
  Calendar,
  Settings,
  Lightbulb,
  Palette,
  TrendingUp,
  Users,
  Globe,
  Award,
  ChevronDown,
  ChevronRight,
  Home,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
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

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300 },
}

export default function ContentMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const strategyServices = [
    {
      number: "01",
      title: "Define marketing goals",
      description:
        "In the first stage, we set clear and specific goals we desire to achieve to take your business to the next level – whether for B2B, B2C or non-profit organization. This not only sets us understand your vision but also forms the backbone for our content marketing strategy.",
      icon: Target,
    },
    {
      number: "02",
      title: "Analyse to measure results",
      description:
        "Using analytic tools, we track user engagement, social sharing, readability, content performance, conversions. Both for PCs & mobile device users. Not just this, we also perform in-depth custom analytical & customized to your business needs & demand for focused strategy accordingly.",
      icon: BarChart3,
    },
    {
      number: "03",
      title: "Create compelling & focused content",
      description:
        "We can create highly relevant content customized as per your specifications – from blogs, news press releases, whitepapers, case-studies, email email campaigns, social media posts, product descriptions, technical articles, guest letters or online ads etc, we do everything.",
      icon: PenTool,
    },
    {
      number: "04",
      title: "SEO Integrated Content Marketing",
      description:
        "We search potentially relevant keywords & SEO content ideas to include in your fresh content so that you can get better rankings in the search results. This helps your website get more organic traffic from search engines.",
      icon: Search,
    },
    {
      number: "05",
      title: "Blog set up & Content Publishing",
      description:
        "Depending on our content marketing strategy, we create touch points where we publish fresh content on publication platforms. In the best format that works best webpage, blog post, online PDF, plain HTML or printable etc. We also help brands in setting up blogs, optimize & manage them.",
      icon: FileText,
    },
    {
      number: "06",
      title: "Making Content Social",
      description:
        "It's important to tap social media platforms in order to share your content & popularize it by outsourcing to the desired audience. We also integrate social strategy into our content marketing campaigns to help businesses plan social media activities around the content strategy.",
      icon: Share2,
    },
    {
      number: "07",
      title: "Plan content strategy",
      description:
        "We plan the content marketing strategy by creating a content calendar based on thorough research of your business and in-depth competitor analysis. This also includes searching trends, hot topics& seasonal searches. We do all this to ensure that your content is timely, relevant to your target audience, has good reach and the plan turns out successful in mapping the efforts against visitor behavior.",
      icon: Calendar,
    },
    {
      number: "08",
      title: "Content Management through CMS",
      description:
        "Thankfully, we now have a team of content management system (CMS) expert at creating custom CMS that allows one to manage the content activities efficiently like – frequently updating the content, managing everything in content workflow, creating new content, editing, reviewing, approving & publishing of content, style using wysiwyg editor, restricting access etc.",
      icon: Settings,
    },
  ]

  const whyChooseServices = [
    {
      number: "01",
      title: "Strategic Content Planning",
      description:
        "We thoroughly understand your business and develop strategic planning. We examine your company objectives, target audience and industry environment to develop a content strategy that connects with your goals and resonates with your target audience.",
      icon: Lightbulb,
    },
    {
      number: "02",
      title: "Customized Content Creation",
      description:
        "We don't believe in one-size-fits-all content. Our team crafts customized, high-quality content tailored to your brand voice and the preferences of your target audience. Whether it's blog posts, articles, infographics or videos, our content is designed to engage and captivate.",
      icon: Palette,
    },
    {
      number: "03",
      title: "SEO Optimization",
      description:
        "Our content is not just creative but also strategically optimized for search engines. We integrate SEO best practices to ensure your content ranks well, improves search engine rankings, and drives organic traffic to your website.",
      icon: TrendingUp,
    },
    {
      number: "04",
      title: "Audience-Centric Approach",
      description:
        "We prioritize understanding your audience's needs and preferences. By conducting thorough research and analysis, we create content that truly provides value, we build trust and foster a genuine connection between your brand and your audience.",
      icon: Users,
    },
    {
      number: "05",
      title: "Multi-Channel Distribution",
      description:
        "Effective content marketing goes beyond creation; it requires strategic distribution. We use a multi-channel strategy, utilizing platforms such as social media, email, and industry-specific publications to guarantee that your information reaches the proper audience across several channels.",
      icon: Globe,
    },
    {
      number: "06",
      title: "Brand Authority Building",
      description:
        "Through consistent, valuable content, we help establish your business as an authority in your industry. Through well-researched and insightful content, we establish your business as a thought leader, building credibility and trust among your target audience.",
      icon: Award,
    },
  ]

  const faqs = [
    {
      question: "Can you help with SEO optimization of content?",
      answer:
        "Yes, we integrate SEO best practices into all our content marketing strategies. Our team conducts keyword research, optimizes content structure, and ensures your content ranks well in search engines while maintaining readability and engagement.",
    },
    {
      question: "What types of content does we create?",
      answer:
        "We create a wide variety of content including blog posts, articles, whitepapers, case studies, infographics, social media content, email campaigns, product descriptions, technical articles, and multimedia content tailored to your specific needs.",
    },
    {
      question: "How frequently does Riveyra Infotech recommend updating content on our website?",
      answer:
        "We recommend updating content regularly based on your industry and audience needs. Typically, we suggest publishing new blog content 2-4 times per week, updating existing content quarterly, and maintaining an active social media presence with daily posts.",
    },
    {
      question: "How does Riveyra Infotech ensure that content resonates with our target audience?",
      answer:
        "We conduct thorough audience research, analyze competitor strategies, and use data-driven insights to understand your target market's preferences, pain points, and behavior patterns. This ensures our content speaks directly to your audience's needs and interests.",
    },
  ]

  return (
    <>
      
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
              opacity: [0.4, 0.7, 0.4],
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
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-sm text-gray-400 mb-6 sm:mb-8"
            >
              <Link href="/" className="hover:text-green-400 transition-colors">
                <Home className="w-4 h-4" />
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-green-400">Content Marketing</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 sm:space-y-8"
              >
                <div>
                  <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      Content Marketing
                    </span>
                  </motion.h1>
                  <motion.p
                    className="text-lg sm:text-xl md:text-2xl text-blue-400 mb-4 sm:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    At Riveyra Infotech, we take great satisfaction in offering our clients content marketing services
                    of the highest grade that provide noticeable outcomes.
                  </motion.p>
                  <motion.p
                    className="text-base sm:text-lg text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Our method is based on a calculated fusion of industry knowledge, laborious preparation, and a
                    dedication to ongoing optimization. In order to customize our content marketing campaigns to meet
                    our clients' specific needs—whether it be raising conversion rates, increasing website traffic, or
                    raising brand awareness—we start by getting to know their individual goals and objectives.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Enquire Now
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10">
                  <Image
                    src="/images/dropdown/content.png"
                    alt="Content Marketing Illustration"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl"
                    priority
                  />
                </div>
                {/* Floating Elements Around Image */}
                <motion.div
                  className="absolute -top-4 -left-4 w-8 h-8 bg-green-500/20 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-6 h-6 bg-emerald-500/20 rounded-full"
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                How We Develop A Successful{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Content Marketing Strategy?
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8"
            >
              {strategyServices.map((service, index) => (
                <motion.div key={service.number} variants={fadeInUp} whileHover={{ scale: 1.02 }} className="group">
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 h-full backdrop-blur-sm">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <Badge
                          variant="outline"
                          className="bg-green-500/10 text-green-400 border-green-500/30 text-lg font-bold px-3 py-1 flex-shrink-0"
                        >
                          {service.number}
                        </Badge>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="text-green-400 flex-shrink-0"
                        >
                          <service.icon className="w-6 h-6" />
                        </motion.div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-400 group-hover:text-green-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Why You Should Seek Our{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Content Marketing Services?
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {whyChooseServices.map((service, index) => (
                <motion.div key={service.number} variants={fadeInUp} whileHover={{ scale: 1.02 }} className="group">
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 h-full backdrop-blur-sm">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <Badge
                          variant="outline"
                          className="bg-green-500/10 text-green-400 border-green-500/30 text-lg font-bold px-3 py-1 flex-shrink-0"
                        >
                          {service.number}
                        </Badge>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="text-green-400 flex-shrink-0"
                        >
                          <service.icon className="w-6 h-6" />
                        </motion.div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-400 group-hover:text-green-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Let's Start a New Project Together
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
              Ready to transform your content marketing strategy? Let's discuss your goals and create something amazing
              together.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Call Us Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">FAQ's</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="border border-gray-800 rounded-lg overflow-hidden hover:border-green-500/50 transition-colors duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 sm:px-8 py-4 sm:py-6 text-left flex justify-between items-center hover:bg-green-500/5 transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg font-medium pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-green-400 transition-transform duration-300 flex-shrink-0 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-4 sm:pb-6 text-gray-300 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
     
    </>
  )
}
