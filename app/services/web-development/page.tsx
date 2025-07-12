"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, CheckCircle, ArrowRight, Shield, Target } from "lucide-react"
import CommonCTASection from "@/components/CommonCTASection"
import { useRouter } from "next/navigation"

gsap.registerPlugin(ScrollTrigger)

export default function WebDevelopmentPage() {
  const router = useRouter()

  useEffect(() => {
    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener("resize", handleResize)

    // Hero section animation
    gsap.fromTo(".hero-content", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })

    // Stagger animation for feature cards
    gsap.fromTo(
      ".feature-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Code blocks animation
    gsap.fromTo(
      ".code-block",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".development-sections",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Services animation
    gsap.fromTo(
      ".service-item",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    return () => {
      window.removeEventListener("resize", handleResize)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const handleMoreDetails = () => {
    router.push("/contact")
  }

  const frontEndTechnologies = [
    "HTML (HyperText Markup Language): Backbone of your website's structure",
    "CSS (Cascading Style Sheets): For styling and layout that captivates",
    "JavaScript: To add interactivity and dynamic features",
  ]

  const services = [
    {
      icon: <Award className="w-full h-full" />,
      title: "Reliable Service",
      description: "Consistent and dependable web development solutions",
    },
    {
      icon: <Users className="w-full h-full" />,
      title: "Trusted by People",
      description: "Proven track record with satisfied clients",
    },
    {
      icon: <Target className="w-full h-full" />,
      title: "Complete Technical Competency",
      description: "Full-stack expertise in modern technologies",
    },
    {
      icon: <Shield className="w-full h-full" />,
      title: "Friendly & Cordial in Nature",
      description: "Professional yet approachable team",
    },
    {
      icon: <Clock className="w-full h-full" />,
      title: "Best Quality Delivered on Time",
      description: "Timely delivery without compromising quality",
    },
  ]

  const faqs = [
    {
      question: "Which is the best website development company in Kanpur?",
      answer:
        "Riveyra Infotech is recognized as one of the leading web development companies in Kanpur, offering comprehensive solutions with over 8 years of experience.",
    },
    {
      question: "What are the various web development services?",
      answer:
        "We offer front-end development, back-end development, full-stack development, responsive design, e-commerce solutions, and custom web applications.",
    },
    {
      question: "What technologies are commonly used in web development in Kanpur?",
      answer:
        "We use modern technologies including HTML5, CSS3, JavaScript, React, Node.js, PHP, Python, and various databases like MySQL and MongoDB.",
    },
    {
      question: "How can SEO and digital marketing be integrated into web design in Kanpur?",
      answer:
        "We integrate SEO best practices from the ground up, including optimized code structure, fast loading times, mobile responsiveness, and content optimization strategies.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white w-full overflow-x-hidden">
      {/* Fixed padding top for navbar */}
      <div className="pt-16 sm:pt-20 lg:pt-24 w-full">
        {/* Breadcrumb */}
        <div className="w-full px-4 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 text-sm text-gray-400 overflow-x-auto whitespace-nowrap">
              <span className="flex-shrink-0">Home</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
              <span className="text-green-400 flex-shrink-0">Best Web Design Company in Kanpur</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="w-full px-4 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="hero-content">
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 lg:mb-12 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent text-center lg:text-left leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Best Web Design Company in Kanpur
              </motion.h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="order-2 lg:order-1"
                >
                  <div className="relative w-full">
                    <img
                      src="/images/dropdown/web-dev.jpg"
                      alt="Web Development Professional"
                      className="w-full h-auto max-w-full rounded-xl lg:rounded-2xl shadow-2xl border border-green-500/20 object-cover"
                      style={{ aspectRatio: "4/3" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl lg:rounded-2xl"></div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-4 sm:space-y-6 order-1 lg:order-2"
                >
                  <div className="space-y-4">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                      Web design and development is one of the most popular services offered by us. Being Riveyra
                      Infotech, the best website design company in Kanpur, we aim to cater to all our clients with their
                      customized preferences and choices. At Riveyra, we offer a wide range of website design services
                      including corporate websites, business websites, blog websites, portfolio websites, personal
                      websites, and so on. Our web design company guarantees to deliver a 24/7 online presence along
                      with expanded global reach.
                    </p>

                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                      Our web development process is customized to deliver solutions that look impressive and perform
                      seamlessly across various devices. Key features of our services include:
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        <strong className="text-green-400">Exceptional UI/UX:</strong> Engaging and user-friendly
                        designs
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        <strong className="text-green-400">Reliability:</strong> Building trust through professional
                        websites
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        <strong className="text-green-400">Marketing and Branding:</strong> Strategies to elevate your
                        brand presence
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={handleMoreDetails}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-6 sm:px-8 py-3 rounded-lg font-semibold shadow-lg shadow-green-500/25 text-sm sm:text-base w-full sm:w-auto transition-all duration-300 hover:scale-105"
                  >
                    More Details
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-4 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                If you are looking for your brand to give wings, contact us and get the best benefits from
                <span className="text-green-400"> Kanpur Website Development Company.</span>
              </h2>
            </motion.div>
          </div>
        </section>

        {/* Development Aspects Section */}
        <section className="development-sections w-full px-4 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 leading-tight"
            >
              Aspects of Best Web Development Company in Kanpur
            </motion.h2>

            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
              {/* Front-End Development */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400">Front-End Development</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                      A visually appealing front-end is crucial to attract viewers and increase the footfall on your
                      website. Maintaining a reliable and user-friendly website with quality content, creative graphics,
                      and animations, you can enhance user experience, generate traffic, and keep viewers on your site
                      longer. This not only promotes your brand but also builds trust and credibility among your
                      audience.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                      But to achieve this, you need the best web design company that not only makes stunning front-end
                      but is potent, friendly as well. At Riveyra Infotech, we utilize leading technologies to develop
                      and enhance your brand's online presence.
                    </p>
                  </div>
                  <div className="space-y-3">
                    {frontEndTechnologies.map((tech, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm sm:text-base">{tech}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="code-block"
                >
                  <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
                    <CardContent className="p-4 sm:p-6">
                      <div className="bg-black rounded-lg p-4 font-mono text-xs sm:text-sm overflow-x-auto">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <pre className="text-green-400 whitespace-pre overflow-x-auto">
                          {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Riveyra Infotech</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Riveyra Infotech</h1>
    </div>
</body>
</html>`}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Responsive Web Design */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="lg:order-2 space-y-4 sm:space-y-6"
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400">
                    Responsive Web Design Company in Kanpur
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                    Our team of web developers ensures that websites are fully responsive and adaptable. Our designed
                    websites never fail to adapt to different screen sizes and devices. For our experts, it's a must
                    outcome to generate a positive user experience.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="code-block lg:order-1"
                >
                  <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
                    <CardContent className="p-4 sm:p-6">
                      <div className="bg-black rounded-lg p-4 font-mono text-xs sm:text-sm overflow-x-auto">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <pre className="text-blue-400 whitespace-pre overflow-x-auto">
                          {`@media screen and (max-width: 768px) {
    .container {
        width: 100%;
        padding: 10px;
    }
    
    .header {
        font-size: 24px;
        text-align: center;
    }
    
    .navigation {
        display: flex;
        flex-direction: column;
    }
    
    .content {
        margin: 20px 0;
    }
}`}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Back-End Development */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400">Back-End Development</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                      Yet another critical aspect of the best web development company is it's connection with databases
                      and servers. Just set up your front-end, we help in developing good back-end as well. We mainly
                      use PHP, Python, Ruby, and Node.js to provide a robust back-end. As the Best Website Development
                      Company in Kanpur, we never fail to discuss our client's expectations.
                    </p>

                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400">Full Stack Development</h4>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                      If you are looking for a company for full-stack development then don't look for more. Riveyra's
                      full-stack developers are skilled in both front-end and back- end development. They have a
                      complete understanding of the web development process and can handle all aspects of a web
                      application very well.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="code-block"
                >
                  <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
                    <CardContent className="p-4 sm:p-6">
                      <div className="bg-black rounded-lg p-4 font-mono text-xs sm:text-sm overflow-x-auto">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <pre className="text-yellow-400 whitespace-pre overflow-x-auto">
                          {`var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);

// Node.js`}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="services-section w-full px-4 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16"
            >
              Our Services
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-green-500/20 backdrop-blur-sm h-full hover:border-green-400/40 transition-all duration-300">
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black flex-shrink-0">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-white leading-tight flex-shrink-0">{service.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed flex-grow">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full px-4 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16"
            >
              F&Q
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-green-500/20 backdrop-blur-sm hover:border-green-400/40 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3 text-green-400 leading-tight">
                        {index + 1}. {faq.question}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
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
    </div>
  )
}