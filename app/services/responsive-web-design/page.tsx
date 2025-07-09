"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Tablet, Smartphone, Code, Palette, Zap, ShoppingCart, ChevronDown, CheckCircle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function ResponsiveWebDesignPage() {
  useEffect(() => {
    // Hero animations
    gsap.fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 })
    gsap.fromTo(".hero-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.4 })
    gsap.fromTo(
      ".hero-devices",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, delay: 0.6, ease: "back.out(1.7)" },
    )

    // Floating animation for devices
    gsap.to(".floating-device", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    })

    // Scroll-triggered animations
    gsap.utils.toArray(".scroll-animate").forEach((element: any, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Code animation
    gsap.fromTo(
      ".code-block",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".code-section",
          start: "top 70%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const services = [
    {
      icon: Monitor,
      title: "Landing Page Redesign",
      description: "Modern, conversion-focused landing pages",
    },
    {
      icon: Palette,
      title: "Redesigning Existing Website",
      description: "Transform your current site with fresh design",
    },
    {
      icon: Code,
      title: "Custom WordPress Website Services",
      description: "Tailored WordPress solutions",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Website Development",
      description: "Complete online store solutions",
    },
    {
      icon: Zap,
      title: "Content Migration",
      description: "Seamless content transfer services",
    },
  ]

  const reasons = [
    {
      number: "01",
      title: "Gives a Fresh Look",
      description:
        "Creating a unique design is a difficult and complex task, and our team of designers and developers work hard to give you the best design that will make your website stand out from the crowd and bring more business to you.",
    },
    {
      number: "02",
      title: "Redesign that Connects",
      description:
        "Our website is not all about getting fancy fonts and new features only, being fresh and modern themes clearly show your business and services in a way that connects directly with your target audience.",
    },
    {
      number: "03",
      title: "Improves Branding",
      description:
        "Redesigning your website will help you stand out and make you grow your branding through all the aspects of your website and business. Our team of experts will help you to create a brand that pleases your to improve branding with new design.",
    },
    {
      number: "04",
      title: "Drive Sales Growth",
      description:
        "We ensure that your online presence will not only attract but also convert visitors to customers. Our redesigned website will be optimized to drive more business and bring for your online business.",
    },
    {
      number: "05",
      title: "Optimize Marketing Costs",
      description:
        "With the new site that built in your business, achieving marketing goals from it becomes easy. Our redesigned website will be optimized for search engines and social media, which is very reduce your marketing costs.",
    },
    {
      number: "06",
      title: "Optimized for SEO",
      description:
        "While redesigning that one best of our website is to get optimized for SEO factors along with the design. Our team of experts will ensure that your website is search engine optimization-friendly.",
    },
  ]

  const industries = [
    {
      number: "01",
      title: "Healthcare",
      description:
        "Specialized in developing out-of-the-box healthcare website development, engaging layouts reflecting your business that helps business to increase their patient base.",
    },
    {
      number: "02",
      title: "Retail & eCommerce",
      description:
        "As a supply chain, retail business is a giant ball game. We help you to create a seamless experience and enable smart identity to help you to increase the business conversion.",
    },
    {
      number: "03",
      title: "Travel & Tourism",
      description:
        "Helps you travel to your destination reducing the cost and time with the help of our website business operations with creative designs, engaging content, and more.",
    },
    {
      number: "04",
      title: "Professional Business",
      description:
        "Our designing services will help you grow up business and reach new heights with the help of our professional business website with increased operational efficiency for all your business needs.",
    },
    {
      number: "05",
      title: "Education",
      description:
        "With the power of experience, we transform educational learning experience and highly engaging and interactive learning that will help them feel interactive and more useful.",
    },
    {
      number: "06",
      title: "Media & Entertainment",
      description:
        "Our customized layouts will bring together all the best entertainment experiences that are more user-friendly and engaging for the entertainment purpose of entertainment for your audience.",
    },
  ]

  const faqs = [
    {
      question: "How does Responsive Web Design affect SEO?",
      answer:
        "Responsive design significantly improves SEO by providing better user experience, faster loading times, and mobile-friendly design that search engines favor.",
    },
    {
      question: "Can Riveyra InfoTech update an existing website to make it responsive?",
      answer:
        "Yes, we specialize in converting existing websites to responsive designs while maintaining all functionality and improving user experience.",
    },
    {
      question: "Will my responsive website be compatible with all browsers?",
      answer:
        "We ensure cross-browser compatibility and test on all major browsers including Chrome, Firefox, Safari, and Edge.",
    },
    {
      question: "Is responsive design more expensive than traditional web design?",
      answer:
        "While initial costs may be slightly higher, responsive design is more cost-effective long-term as it eliminates the need for separate mobile sites.",
    },
  ]

  // Predefined positions for floating particles to avoid hydration mismatch
  const particlePositions = [
    { left: "75.23%", top: "13.38%" },
    { left: "11.41%", top: "80.30%" },
    { left: "35.81%", top: "62.91%" },
    { left: "63.25%", top: "72.40%" },
    { left: "67.90%", top: "25.07%" },
    { left: "33.68%", top: "1.86%" },
    { left: "93.04%", top: "14.06%" },
    { left: "58.13%", top: "94.67%" },
    { left: "3.26%", top: "46.86%" },
    { left: "55.53%", top: "12.01%" },
    { left: "35.47%", top: "51.65%" },
    { left: "77.33%", top: "75.60%" },
    { left: "69.26%", top: "64.49%" },
    { left: "57.61%", top: "2.85%" },
    { left: "57.00%", top: "30.02%" },
  ]

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 h-32 sm:w-72 sm:h-72 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-green-400/30 rounded-full"
              style={{
                left: pos.left,
                top: pos.top,
              }}
              animate={{
                y: [-20, 20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + (i % 5) * 0.4,
                repeat: Number.POSITIVE_INFINITY,
                delay: (i % 5) * 0.4,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <motion.div
                className="hero-title"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Responsive
                  </span>
                  <br />
                  Web Design
                </h1>
              </motion.div>

              <motion.p
                className="hero-subtitle text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A website goes without saying that a modern website needs to be responsive. If you want your business to
                have a digital presence, then you need to make sure that users can get responsive website design that is
                optimized on desktop computers and mobile devices. Whether you are looking to create a new website or
                want to get a redesign, we can help.
              </motion.p>

              <motion.p
                className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                That's what we do at Riveyra Infotech Limited, we design and develop websites that work on mobile and
                desktop devices. We work with you to create a website that is not only responsive but also looks great.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center lg:justify-start"
              >
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg shadow-green-500/25">
                  More Details
                </Button>
              </motion.div>
            </div>

            {/* Right Content - Devices */}
            <motion.div
              className="hero-devices relative mt-8 lg:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}


            >
              <div className="relative flex justify-center">
                {/* Desktop */}
                <motion.div
                  className="floating-device relative z-10"
                  animate={{ y: [-10, 10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  <div className="bg-gray-800 rounded-lg p-3 sm:p-4 shadow-2xl border border-green-500/20">
                    <div className="bg-black rounded-md h-32 sm:h-48 w-48 sm:w-64 flex items-center justify-center">
                      <Monitor className="w-12 h-12 sm:w-16 sm:h-16 text-green-400" />
                    </div>
                  </div>
                </motion.div>

                {/* Tablet */}
                <motion.div
                  className="floating-device absolute -right-4 sm:-right-8 top-8 sm:top-12 z-20"
                  animate={{ y: [-15, 15] }}
                  transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
                >
                  <div className="bg-gray-800 rounded-lg p-2 sm:p-3 shadow-2xl border border-green-500/20">
                    <div className="bg-black rounded-md h-20 w-16 sm:h-32 sm:w-24 flex items-center justify-center">
                      <Tablet className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                    </div>
                  </div>
                </motion.div>

                {/* Mobile */}
                <motion.div
                  className="floating-device absolute -left-3 sm:-left-6 top-12 sm:top-20 z-30"
                  animate={{ y: [-20, 20] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
                >
                  <div className="bg-gray-800 rounded-lg p-1 sm:p-2 shadow-2xl border border-green-500/20">
                    <div className="bg-black rounded-md h-16 w-8 sm:h-24 sm:w-12 flex items-center justify-center">
                      <Smartphone className="w-4 h-4 sm:w-6 sm:h-6 text-green-400" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Various Aspects Section */}
      <section className="py-12 sm:py-16 md:py-20 relative code-section">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <motion.div
            className="text-center mb-12 sm:mb-16 scroll-animate"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Various <span className="text-green-400">Aspects</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 scroll-animate order-2 lg:order-1">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-3 sm:mb-4">Front-End Development</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  Front-end development, often referred to as client-side development, is the process of creating the
                  visual and interactive elements of a website or web application that users see and interact with
                  directly. Front-end developers are responsible for designing, coding, and optimizing the user
                  interface, ensuring a positive and engaging user experience. Here are the main key aspects of
                  front-end development:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0" />
                    HTML (HyperText Markup Language)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0" />
                    CSS (Cascading Style Sheets)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0" />
                    JavaScript
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0" />
                    Responsive Web Design
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-3 sm:mb-4">Responsive Web Design</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Web developers ensure that websites are responsive, meaning they adapt to different screen sizes and
                  devices. This is essential for a positive user experience.
                </p>
              </div>
            </div>

            {/* Right Content - Code Block */}
            <motion.div
              className="code-block bg-gray-900 rounded-lg p-4 sm:p-6 border border-green-500/20 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <Badge variant="outline" className="text-green-400 border-green-400 text-xs sm:text-sm">
                  CSS
                </Badge>
              </div>
              <pre className="text-xs sm:text-sm text-green-400 overflow-x-auto">
                <code>{`/* Media Queries for Responsive Design */
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    padding: 0 15px;
  }
  
  .header {
    flex-direction: column;
    text-align: center;
  }
  
  .navigation {
    display: none;
  }
  
  .mobile-menu {
    display: block;
  }
}

@media screen and (min-width: 769px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}`}</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900/50">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <motion.div
            className="text-center mb-12 sm:mb-16 scroll-animate"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Professional Responsive Website Development Services
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto">
              Web developers ensure that websites are responsive, meaning they adapt to different screen sizes and
              devices. This is essential for a positive user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="scroll-animate"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 group h-full">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <motion.div
            className="text-center mb-12 sm:mb-16 scroll-animate"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Reasons to help you to make a <span className="text-green-400">Decision</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-4xl mx-auto">
              When our team looks into your website and redesigns it, we don't just change the look and feel, but we
              also do things by that, which is why some of the biggest brands across the nation have worked alongside
              us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="scroll-animate"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 h-full group">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <span className="text-black font-bold text-sm sm:text-lg">{reason.number}</span>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">{reason.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900/50">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <motion.div
            className="text-center mb-12 sm:mb-16 scroll-animate"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Industries We <span className="text-green-400">Serve</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-4xl mx-auto">
              Riveyra Infotech is dedicated to serving a diverse range of industries, striving to provide excellent
              services across the board. Our commitment extends to delivering exceptional solutions and we take pride in
              our comprehensive approach to cater to the unique needs of each industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="scroll-animate"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 h-full group">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <span className="text-black font-bold text-sm sm:text-lg">{industry.number}</span>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">{industry.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{industry.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
          <motion.div
            className="text-center scroll-animate"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
              Let's Start a New Project <span className="text-green-400">Together</span>
            </h2>
            <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg shadow-green-500/25">
              Call Us Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900/50">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <motion.div
            className="text-center mb-12 sm:mb-16 scroll-animate"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">FAQ's</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="scroll-animate"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start justify-between">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white pr-4 leading-relaxed">
                        {faq.question}
                      </h3>
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 mt-3 sm:mt-4 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}