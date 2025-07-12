"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import CommonCTASection from "@/components/CommonCTASection"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function DigitalMarketingPage() {
  const [isClient, setIsClient] = useState(false)
  const [heroParticles, setHeroParticles] = useState<Particle[]>([])

  useEffect(() => {
    setIsClient(true)
    if (typeof window !== "undefined") {
      const generateParticles = () => {
        const particles: Particle[] = []
        for (let i = 0; i < 20; i++) {
          particles.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 5 + 5,
            delay: Math.random() * 2,
          })
        }
        setHeroParticles(particles)
      }
      generateParticles()
    }
  }, [])

  const faqs = [
    {
      question: "How can digital marketing help my business grow?",
      answer:
        "Digital marketing expands your reach, targets specific audiences, builds brand awareness, drives traffic, generates leads, and provides measurable results, all contributing to significant business growth.",
    },
    {
      question: "How can email marketing benefit my business?",
      answer:
        "Email marketing allows direct communication with your audience, fosters customer loyalty, promotes products/services, and drives conversions through personalized and timely messages.",
    },
    {
      question: "What ongoing support does Riveyra Infotech Private Limited provide?",
      answer:
        "We offer continuous monitoring, analysis, and optimization of your digital marketing campaigns, adapting strategies to market changes and ensuring sustained performance.",
    },
    {
      question: "Can Riveyra Infotech Private Limited create engaging content for my business?",
      answer:
        "Our team specializes in crafting compelling and relevant content across various formats to engage your target audience and support your marketing goals.",
    },
  ]

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-950 to-black overflow-hidden">
        {/* Background Glows */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-overlay blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-overlay blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Background Particles */}
        {isClient &&
          heroParticles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-white/10"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
              }}
              animate={{
                x: [0, Math.random() * 20 - 10],
                y: [0, Math.random() * 20 - 10],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: p.duration,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: p.delay,
                ease: "easeInOut",
              }}
            />
          ))}

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">Digital Marketing</h1>
            <p className="text-gray-400 text-sm md:text-base">
              Home <ChevronRight className="inline-block w-4 h-4 mx-1" /> Digital Marketing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative flex justify-center items-center"
            >
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-blue-500/50 animate-pulse-slow"></div>
                <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-green-500/50 animate-pulse-slow delay-100"></div>
                <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-purple-500/50 animate-pulse-slow delay-200"></div>
              </div>
              <img
                src="/images/dropdown/digital.png"
                alt="Digital Marketing Expert"
                width={400}
                height={400}
                className="relative z-10 rounded-full object-cover w-72 h-72 md:w-80 md:h-80"
              />
              <motion.div
                className="absolute top-10 left-10 w-12 h-12 bg-green-400 rounded-full blur-xl opacity-70"
                animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror" }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-16 h-16 bg-purple-400 rounded-full blur-xl opacity-70"
                animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-8 h-8 bg-blue-400 rounded-full blur-lg opacity-70"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4 leading-tight">
                Uncovering paid opportunities to grow your business fast!!
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                In the dynamic landscape of business, seizing paid opportunities can be the catalyst for exponential
                growth. This guide unveils strategic avenues to propel your business forward, ensuring a swift and
                impactful ascent to success. Let's dive into the world of paid opportunities that can supercharge your
                business growth and maximize your profit.
              </p>
              <Link href="/contact" passHref>
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-6 py-3 rounded-lg font-semibold shadow-lg shadow-green-500/25 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span className="relative z-10">Enquire Now</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Organic Reach Section */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4 leading-tight">
                SEO Organic Reach, Better Traffic, More Revenue!!
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Potential buyers tend to look for products or services via search & topmost results gain their focus
                first. To convert all those searchers to customers, our digital marketing agency lifts your business on
                higher search engine rankings for better CTRs & more traffic. Keeping digital marketing performance in
                mind, our SEO team offers digital marketing consulting based on latest Google algorithmic preferences &
                SEO trends fused with campaign based digital marketing solution & fully integrated on online & offline
                ethical channels. All these attributes makes our firm, one of the renowned and trusted digital marketing
                company in India.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative flex justify-center items-center"
            >
              <img
                src="/images/dropdown/SEO.png"
                alt="SEO Process"
                width={500}
                height={500}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Marketing & Publishing Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative flex justify-center items-center"
            >
              <img
                src="/images/dropdown/publishing.png"
                alt="Content Marketing & Publishing"
                width={600}
                height={400}
                className="object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4 leading-tight">
                Content Marketing & Publishing Compelling Content Drives Cross-Channel Engagement
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Content marketing is not just a campaign for our digital marketing agency; it's a commitment for us. Our
                digital marketing company offers full-spectrum content marketing through an integrated content creation
                & publishing plan that includes drafting a competent strategy & then fuelling your online presence
                through branded custom-written news, case studies, videos & info graphics. Our high quality content is
                cached fast & ranked top by the search engines & drives SEO & Inbound marketing as well. We always
                strive to provide you best-in-domain digital marketing services at the pocket friendly prices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Paid-Advertising - Search & Display Section */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4 leading-tight">
                Paid-Advertising -Search & Display
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Content marketing is not just a campaign for our digital marketing agency; it's a commitment for us. Our
                digital marketing company offers full-spectrum content marketing through an integrated content creation
                & publishing plan that includes drafting a competent strategy & then fuelling your online presence
                through branded custom-written news, case studies, videos & info graphics. Our high quality content is
                cached fast & ranked top by the search engines & drives SEO & Inbound marketing as well. We always
                strive to provide you best-in-domain digital marketing services at the pocket friendly prices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative flex justify-center items-center"
            >
              <img
                src="/images/dropdown/paid-img.webp"
                alt="Paid Advertising"
                width={600}
                height={400}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Email Marketing Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative flex justify-center items-center"
            >
              <img
                src="/images/dropdown/email.png"
                alt="Email Marketing"
                width={600}
                height={400}
                className="object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4 leading-tight">Email Marketing</h2>
              <p className="text-gray-300 text-lg mb-6">
                We are a leading digital marketing company in India; and for us, email marketing is not about sending
                e-mailers to a large database waiting for someone to click & convert. To maximize digital marketing
                performance, our email campaigns are monitored by quality content & actionable language to deliver
                higher success rate in converting leads. Our digital marketing agency does this by designing a focused
                mailer, choosing the right kind of messaging for right audience, integrating perfect call to action
                buttons at appropriate places & finally measures the impact for better re-marketing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common CTA Section */}
      <CommonCTASection />

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            FAQ's
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${index}`} className="border border-gray-700 rounded-lg px-4">
                    <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-green-400 transition-colors duration-200">
                      {index + 1}. {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 text-base pt-2 pb-4">{faq.answer}</AccordionContent>
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
