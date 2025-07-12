"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// Removed: import Navbar from "@/components/Navbar"
import CommonCTASection from "@/components/CommonCTASection"
// Removed: import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function IOSAppDevelopmentPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const faqItems = [
    {
      question: "Which programming languages do we use for iOS app development?",
      answer:
        "We primarily use Swift and Objective-C, the native programming languages for iOS development, to build high-performance and secure applications.",
    },
    {
      question: "How long does it typically take to develop a custom iOS app?",
      answer:
        "The development timeline varies based on complexity, features, and client requirements. A basic app might take 3-6 months, while more complex applications can take 6-12 months or more.",
    },
    {
      question: "How do you approach user interface (UI) and user experience (UX) design for iOS apps?",
      answer:
        "Our approach is user-centric. We focus on creating intuitive, visually appealing, and highly functional interfaces that align with Apple's Human Interface Guidelines to ensure a seamless user experience.",
    },
    {
      question: "What is the cost structure for custom iOS app development?",
      answer:
        "The cost depends on various factors like features, complexity, design, and integration requirements. We provide a detailed proposal and transparent pricing after understanding your specific needs during the initial consultation.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Removed: <Navbar /> */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-950 to-black overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="space-y-6 text-center lg:text-left"
              >
                <motion.p variants={fadeIn} className="text-green-400 text-sm font-medium uppercase tracking-wider">
                  Home &gt; IOS App Development
                </motion.p>
                <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    IOS App Development
                  </span>
                </motion.h1>
                <motion.p variants={fadeIn} className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  iOS app development refers to the process of creating mobile applications specifically designed for
                  Apple's iOS operating system, which runs on devices such as iPhones, iPads, and iPod Touches. iOS
                  development involves a combination of design, coding, testing, and deployment to create applications
                  that can be distributed through Apple's App Store.
                </motion.p>
                <motion.p variants={fadeIn} className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  Our developers have in-depth knowledge of how iOS works on Apple devices. Experienced team of
                  qualified professionals majorly make use of two major programing languages Swift and Objective-C.
                </motion.p>
                <motion.div variants={fadeIn}>
                  <Link href="/contact" passHref>
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-8 py-3 rounded-xl font-semibold shadow-lg shadow-green-500/25 relative overflow-hidden group text-base md:text-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
                      <span className="relative z-10">Enquire Now</span>
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex justify-center lg:justify-end"
              >
                <Image
                  src="/images/dropdown/ios-img.png"
                  alt="iOS App Development Hero"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl border border-black"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Custom iPhone/iPad Apps Development Section */}
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Custom{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                iphone/ipad Apps Development
              </span>
            </motion.h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex justify-center lg:justify-start"
              >
                <Image
                  src="/images/dropdown/ios-dev.jpg"
                  alt="Custom iPhone/iPad Apps"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-2xl border border-green-500/30"
                />
              </motion.div>
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="space-y-6 text-center lg:text-left"
              >
                <motion.p variants={fadeIn} className="text-gray-300 text-lg leading-relaxed">
                  At Riveyra, we understand the importance of creating applications that not only align with your
                  business goals but also provide an exceptional user experience. From customizing features to ensuring
                  scalability, we aim to enhance your mobile presence. We are your trusted partner in the dynamic world
                  of iOS app development. Let's collaborate to turn your ideas into innovative, user-friendly, and
                  cutting-edge iOS applications that leave a lasting impression on your audience.
                </motion.p>
                <motion.p variants={fadeIn} className="text-gray-300 text-lg leading-relaxed">
                  So far, we have successfully served 100+ overseas clients across diversified business verticals
                  through our custom-built apps.
                </motion.p>
                <motion.ul variants={fadeIn} className="list-disc list-inside text-gray-300 text-lg space-y-2">
                  <li>Education Apps</li>
                  <li>Social Networking iPhone Apps</li>
                  <li>News & Business Apps</li>
                  <li>Travel & Hotel Apps</li>
                  <li>Education Apps</li>
                </motion.ul>
                <motion.div variants={fadeIn}>
                  <Link href="/contact" passHref>
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-8 py-3 rounded-xl font-semibold shadow-lg shadow-green-500/25 relative overflow-hidden group text-base md:text-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
                      <span className="relative z-10">Enquire Now</span>
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* iPhone/iPad Game Development Section */}
        <section className="py-16 md:py-24 bg-gray-950 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                iphone/ipad Game Development
              </span>
            </motion.h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="space-y-6 text-center lg:text-left"
              >
                <motion.p variants={fadeIn} className="text-gray-300 text-lg leading-relaxed">
                  We specialize in crafting cutting-edge game apps tailored to meet the preferences of avid gamers. Our
                  focus is on delivering high-speed performance and incorporating key features and gestures that
                  resonate with gaming enthusiasts. Whether it's the dynamic realm of action games, the thrill of sports
                  games, the intensity of shooting games, the strategy in card games, or the adrenaline-pumping
                  excitement of racing games, our team of mobile app developers excels in creating immersive
                  experiences. Our innovative approach extends to both 2D and 3D game graphics, unique characters, and
                  captivating sounds to ensure a seamless and unforgettable gaming experience.
                </motion.p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex justify-center lg:justify-end"
              >
                <Image
                  src="/images/dropdown/Genshin.png"
                  alt="iPhone/iPad Game Development"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl border border-green-500/30"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common CTA Section */}
        <CommonCTASection />

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              FAQ's
            </motion.h2>
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="show"
              variants={staggerContainer}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <motion.div variants={fadeIn} key={index} className="mb-4">
                    <AccordionItem value={`item-${index}`} className="border border-green-500/30 rounded-lg">
                      <AccordionTrigger className="px-6 py-4 text-lg md:text-xl font-semibold text-white hover:text-green-300 transition-colors duration-200">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 text-gray-300 text-base md:text-lg leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>
      {/* Removed: <Footer /> */}
    </div>
  )
}
