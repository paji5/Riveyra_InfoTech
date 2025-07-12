"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import CommonCTASection from "@/components/CommonCTASection" // Corrected import

export default function ERPDevelopmentPage() {
  const faqs = [
    {
      question: "What is ERP development?",
      answer:
        "ERP (Enterprise Resource Planning) development involves creating and customizing software solutions that integrate and streamline various business operations into a cohesive, integrated system. This includes analyzing an organization's needs, designing a system blueprint, coding, rigorous testing, deployment, and ongoing maintenance.",
    },
    {
      question: "How long does an ERP implementation take?",
      answer:
        "The duration of an ERP implementation varies greatly depending on the complexity of the system, the size of the organization, and the scope of customization. It can range from a few months for smaller, less complex systems to over a year for large-scale enterprise solutions.",
    },
    {
      question: "What are the benefits of a custom ERP system?",
      answer:
        "Custom ERP systems offer tailored solutions that perfectly align with your unique business processes, leading to improved efficiency, better data management, enhanced decision-making, and a competitive advantage. They can integrate various departments like finance, HR, supply chain, and customer relationship management.",
    },
    {
      question: "How do you ensure data security in ERP systems?",
      answer:
        "We prioritize data security through robust encryption, multi-factor authentication, regular security audits, compliance with industry standards, and strict access controls. Our development process incorporates security best practices from the initial design phase to deployment and maintenance.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-950 to-black overflow-hidden">
        {/* Background Grid and Glows */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        ></div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full mix-blend-overlay blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full mix-blend-overlay blur-3xl"
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

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">ERP</span>{" "}
              Development
            </motion.h1>
            <motion.p
              className="text-gray-400 text-lg md:text-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Home &gt; Our ERP Development
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/images/dropdown/ERP-top.png"
                width={800}
                height={500}
                alt="ERP Development Dashboard"
                className="rounded-xl shadow-2xl border border-green-500/20"
              />
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                ERP (Enterprise Resource Planning) development is the creation or customization of software solutions
                that bring together and streamline various business operations into a cohesive, integrated system. It
                involves analyzing an organization's needs, designing a system blueprint, coding and configuring the
                software, rigorous testing, deployment, and ongoing maintenance.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Our ERP systems typically cover finance, human resources, supply chain, and customer relationship
                management. We build custom systems, tailor existing software, or implement off-the-shelf solutions to
                improve efficiency, data management, and collaboration across all departments.
              </p>
              <Link href="/contact" passHref>
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-8 py-3 rounded-xl font-semibold shadow-lg shadow-green-500/25 relative overflow-hidden group text-sm md:text-base">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    Enquire Now
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our ERP System Section */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">ERP</span>{" "}
            System
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6 order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                ERP (Enterprise Resource Planning) development is about creating or customizing software solutions that
                bring together and streamline various business operations into a cohesive, integrated system. It
                involves analyzing an organization's needs, designing a system blueprint, coding and configuring the
                software, rigorous testing, deployment, and ongoing maintenance.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                ERP solutions typically cover finance, human resources, supply chain, and customer relationship
                management. Development can include building custom systems, or implementing off-the-shelf solutions to
                improve efficiency, data management, and collaboration across an organization's departments.
              </p>
              <Link href="/contact" passHref>
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-8 py-3 rounded-xl font-semibold shadow-lg shadow-green-500/25 relative overflow-hidden group text-sm md:text-base">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    Enquire Now
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </span>
                </Button>
              </Link>
            </motion.div>
            <motion.div
              className="relative order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                src="/images/dropdown/erp-bg.png"
                width={800}
                height={500}
                alt="ERP System Analytics"
                className="rounded-xl shadow-2xl border border-green-500/20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common CTA Section */}
      <CommonCTASection />

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
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
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700 last:border-b-0">
                  <AccordionTrigger className="text-lg md:text-xl text-white hover:text-green-400 transition-colors duration-200 py-4 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base md:text-lg pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
