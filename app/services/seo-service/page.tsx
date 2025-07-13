"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CommonCTASection from "@/components/CommonCTASection" // Import the common CTA section

export default function SEOServicePage() {
  const serviceCards = [
    {
      id: "01",
      title: "Site Audit & Optimization",
      description:
        "Through comprehensive SEO audits & deploying on-page optimization techniques to the site, we remove the flaws & optimize the site for search engines and users. From right keyword research to SEO tags, stronger internal linking to content optimization, there are around 100+ ranking signals we take care of.",
    },
    {
      id: "02",
      title: "Keyword & Opportunity Research",
      description:
        "Our SEO experts dig out online opportunities by researching & monitoring productive keywords, analysing density of highly competitive search terms/ phrases to consider for top-rankings and finding more opportunities through long tail & Google hummingbird related searches that can add onto the organic traffic.",
    },
    {
      id: "03",
      title: "Persona Modelling",
      description:
        "We research, collect, analyse & review your business data along with the competitors' status to identify target audience, their interests and demography & build cutting-edge SEO strategies focused on driving real traffic that have potential to engage & convert.",
    },
    {
      id: "04",
      title: "In-Depth Analytics",
      description:
        "We have Google Analytics certified SEO experts who know how Analytics can help in monitoring & optimizing the site's performances. From setting up goals, tracking events, producing custom reports to setting intelligence alerts, we manage everything to provide actionable insights.",
    },
    {
      id: "05",
      title: "Content Marketing & Outreach",
      description:
        "Tapping the content marketing channel as a part of our off-page optimization strategy, we create content ideas around user persona & search engines, manage blogs, promote on social media - all this to build authority & a strong case to get websites move up on search results.",
    },
    {
      id: "06",
      title: "SEO Integrated Marketing",
      description:
        "SEO is more powerful when integrated with other marketing activities including social media, content marketing, PR & Branding focused on the common goal of improving traffic & sales. As a full-service digital marketing agency, we plan integrating marketing approach that can yield faster results, more traffic & enhanced engagement.",
    },
    {
      id: "07",
      title: "Link Audit & Penguin Recovery",
      description:
        "As poor quality or spammy backlinks can harm the site. From extensive link audit to link removal and then further submitting disavow & reconsideration request to Google, our SEO experts manage the whole process required to recover the site from penalty, if hit by Google Penguin.",
    },
  ]

  const faqs = [
    {
      question: "1. What makes Riveyra Infotech's approach to SEO unique?",
      answer:
        "Riveyra Infotech combines industry knowledge, meticulous preparation, and ongoing optimization to deliver noticeable outcomes. Our approach is tailored to your specific needs, focusing on increasing conversion rates, website traffic, and brand awareness.",
    },
    {
      question: "2. How does Riveyra Infotech ensure my website ranks higher on search engines?",
      answer:
        "We employ a blend of social signals, content marketing, on-page and off-page optimization, and continuous monitoring of Google algorithm updates to ensure your site is SEO friendly and achieves higher rankings.",
    },
    {
      question: "3. What ongoing support does Riveyra Infotech provide after implementing SEO strategies?",
      answer:
        "We provide detailed analytics and reporting, regularly monitor and adjust bids, test various ad elements, incorporate industry best practices, and stay abreast of the latest trends and updates in SEO platforms.",
    },
    {
      question: "4. How does Riveyra Infotech measure the success of SEO campaigns?",
      answer:
        "We measure success through key metrics such as increased conversion rates, website traffic, brand awareness, and return on investment (ROI). We provide transparent reporting on these outcomes.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
      {/* Common Navbar */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
          {/* Background Glows */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 opacity-70"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-sm text-gray-400 mb-2">Home &gt; SEO Services</p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    SEO Services
                  </h1>
                </motion.div>

                <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  SEO India Ethical SEO Services Focused On Traffic Growth & Better Sales
                </motion.h2>
                <motion.p
                  className="text-gray-300 text-base md:text-lg mb-8 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Effective SEO is what you need for first page rankings, more traffic & enhanced sales. We have a team
                  of expert SEO consultants who carve a great SEO strategy with a blend of social signals & content
                  marketing efforts. From on page & off page optimization to placing your owned media & content links in
                  an appropriate position, we make your site completely SEO friendly for higher engagement, more
                  valuable earned media as well. Our team also monitors analytics & keeps up well with the latest Google
                  algorithm updates & guidelines to offer intelligent SEO marketing services.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link href="/contact" passHref>
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/25 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
                      <span className="relative z-10">Enquire Now</span>
                    </Button>
                  </Link>
                </motion.div>
              </div>
              <motion.div
                className="lg:w-1/2 flex justify-center lg:justify-end relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src="/images/dropdown/seo-case.png"
                  alt="3D SEO Text with Upward Arrow"
                  width={500}
                  height={300}
                  className="max-w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SEO Case Study Section */}
        <section className="py-16 md:py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-12">
              <motion.div
                className="lg:w-1/2 text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                  SEO Case Study
                </h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  How we Increased Conversion Rate by 1,407% for Tour My India
                </h2>
                <p className="text-gray-300 text-base md:text-lg">
                  A successful digital marketing campaign that helped Tour My India, one of the fastest growing Travel
                  companies in India to get conversions improved by a huge figure of 1,407% in just 12 months. Our
                  Digital Marketing team was responsible for strategizing, planning & executing marketing campaigns that
                  involved SEO primarily & also PPC, Social media, Conversion optimization as well that performed
                  equally well. Site started ranking on top results in Google driving 1,844% more non-paid traffic &
                  1,281% more organic traffic.
                </p>
              </motion.div>
              <motion.div
                className="lg:w-1/2 flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <img
                  src="/images/dropdown/seo-serv.png"
                  alt="SEO Magnifying Glass over Laptop"
                  width={500}
                  height={300}
                  className="max-w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our SEO Services Includes Section */}
        <section className="py-16 md:py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Our SEO Services Includes
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-green-500 transition-all duration-300 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-green-400 text-2xl font-bold">{card.id}</span>
                      <HeartIcon className="w-6 h-6 text-gray-500 group-hover:text-green-400 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                    <p className="text-gray-400 text-sm">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Common CTA Section */}
        <CommonCTASection />

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-[#0a0a0a]">
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
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <AccordionItem value={`item-${index}`} className="border-b border-gray-700 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline text-left text-base md:text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 text-sm md:text-base pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
   
    </div>
  )
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
