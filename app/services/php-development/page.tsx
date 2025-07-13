"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Database,
  Globe,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Navbar from "@/components/Navbar"
import CommonCTASection from "@/components/CommonCTASection"

export default function PHPDevelopmentPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const features = [
    {
      icon: Code,
      title: "Custom PHP Solutions",
      description: "Tailored PHP applications built to meet your specific business requirements",
    },
    {
      icon: Database,
      title: "Database Integration",
      description: "Seamless integration with MySQL, PostgreSQL, and other database systems",
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Dynamic and interactive web applications with modern PHP frameworks",
    },
    {
      icon: Shield,
      title: "Secure Development",
      description: "Implementation of best security practices to protect your applications",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Fast-loading and efficient PHP applications optimized for performance",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Focus on creating intuitive and user-friendly interfaces",
    },
  ]

  const benefits = [
    "Experienced PHP development team",
    "Laravel and CodeIgniter expertise",
    "Custom solutions for your business",
    "Scalable and maintainable code",
    "24/7 support and maintenance",
    "Cost-effective development",
  ]

  const faqs = [
    {
      question: "What is the expected timeframe for a typical PHP development project?",
      answer:
        "The timeframe varies depending on project complexity. Simple websites take 2-4 weeks, while complex applications may take 2-6 months. We provide detailed timelines after analyzing your requirements.",
    },
    {
      question: "How can I get started with your Company's PHP development services?",
      answer:
        "Getting started is easy! Contact us through our website or call us directly. We'll schedule a consultation to discuss your requirements and provide a detailed proposal.",
    },
    {
      question: "How does you ensure that my PHP-developed website aligns with my business goals?",
      answer:
        "We begin with thorough requirement analysis and maintain regular communication throughout development. Our agile approach ensures your feedback is incorporated at every stage.",
    },
    {
      question: "Can you provide examples of businesses that have benefited from your PHP development services?",
      answer:
        "We've successfully delivered PHP solutions for e-commerce platforms, content management systems, and enterprise applications across various industries. Contact us for specific case studies.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
     

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm text-gray-400">
                <Link href="/" className="hover:text-green-400 transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-green-400">PHP Development</span>
              </nav>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  PHP Development
                </span>
              </motion.h1>

              <motion.p
                className="text-gray-300 text-lg leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                PHP development is a flexible and responsive web development strategy that enables companies to
                construct powerful and scalable online applications. PHP (Hypertext Preprocessor) is a server-side
                scripting language that is commonly used in web development. Our PHP programming services concentrate
                around leveraging the power of PHP to create custom solutions customized to our clients' specific
                requirements.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-8 py-3 rounded-xl font-semibold shadow-lg shadow-green-500/25 group">
                    <span className="flex items-center">
                      Enquire Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
                <img
                  src="/images/dropdown/PhpDev.png"
                  alt="PHP Development Illustration"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Centric Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              User Centric Website{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Customized to your Business
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Illustration */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl"></div>
                <img
                  src="/images/dropdown/PHP.png"
                  alt="Developer Illustration"
                  className="relative z-10 w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    At Riveyra Infotech, our PHP development services go beyond aesthetics. By incorporating robust
                    backend functionalities, we ensure that your website not only looks good but also performs
                    efficiently. PHP's open-source nature allows us to provide cost-effective solutions without
                    compromising on the quality and security of your web applications.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    With a focus on user experience, we leverage PHP's dynamic capabilities to create websites that
                    engage and delight visitors. We understand the importance of user-centric design in enhancing
                    customer satisfaction, and our PHP development process is geared towards creating websites that are
                    intuitive, responsive, and easy to navigate.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-6 py-2 rounded-lg font-semibold">
                      Enquire Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHP Development Service Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                PHP Development Service
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Code Editor Mockup */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-green-500/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="p-6 font-mono text-sm">
                    <div className="text-green-400">&lt;?php</div>
                    <div className="text-blue-400 ml-4">
                      class <span className="text-yellow-400">UserController</span> {`{`}
                    </div>
                    <div className="text-purple-400 ml-8">
                      public function <span className="text-yellow-400">index</span>() {`{`}
                    </div>
                    <div className="text-gray-300 ml-12">$users = User::all();</div>
                    <div className="text-gray-300 ml-12">return view('users.index', compact('users'));</div>
                    <div className="text-purple-400 ml-8">{`}`}</div>
                    <div className="text-blue-400 ml-4">{`}`}</div>
                    <div className="text-green-400">?&gt;</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                Our company takes pride in offering top-notch PHP development services that cater to the diverse needs
                of businesses looking to establish a strong and dynamic online presence. As a leading provider in the
                field, our PHP development team brings machine precision to the forefront of every project.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our approach to PHP development is rooted in creating solutions that align with the unique requirements
                of our clients. Leveraging the power of PHP, a versatile server-side scripting language, we design and
                build robust web applications tailored to meet specific business objectives. Our skilled developers
                utilize frameworks such as Laravel and CodeIgniter to streamline the development process, ensuring
                efficiency and scalability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                PHP Development
              </span>{" "}
              Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                        <feature.icon className="w-6 h-6 text-green-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are Best Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Why we are Best
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-green-500/20 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Opting for our PHP development team signifies choosing a dedicated partner that places your business
                    objectives at the forefront. Through close collaboration with our clients, we gain a deep
                    understanding of their goals, enabling us to create websites that not only mirror their brand
                    identity but also provide a pivotal role in bolstering their online success.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Our unwavering commitment extends beyond mere functionality, emphasizing the delivery of
                    user-friendly solutions. We give priority to the end-user experience, meticulously designing
                    interfaces that are not only intuitive and responsive but also captivating and engaging.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Synonymous with both cost-effectiveness and reliability, our PHP development services ensure that
                    you receive high-quality solutions without compromising your budget. By selecting our team, you're
                    choosing a trusted partner dedicated to translating your business vision into a seamlessly
                    functioning and user-centric online presence.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                FAQ's
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                  <CardContent className="p-0">
                    <button
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-200"
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <span className="text-white font-medium pr-4">{faq.question}</span>
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-green-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === index && (
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CommonCTASection />
    </div>
  )
}
