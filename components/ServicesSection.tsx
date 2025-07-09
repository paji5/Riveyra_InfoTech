"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Brush, Code, Globe, Smartphone, Palette, ArrowRight, Sparkles } from "lucide-react"

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.1 })

  const services = [
    {
      id: 1,
      title: "Trending Technology",
      icon: TrendingUp,
      description: "Stay informed about tech trends and innovations with cutting-edge solutions",
      features: ["React.js", "Node.js", "Wordpress"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      hoverBorderColor: "hover:border-blue-400/60",
      glowColor: "shadow-blue-500/20",
    },
    {
      id: 2,
      title: "Graphic Design",
      icon: Brush,
      description: "Visual communication that appeals to your audience effectively with tailor-made designs",
      features: ["UI/UX", "Adobe XD", "Figma"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      hoverBorderColor: "hover:border-purple-400/60",
      glowColor: "shadow-purple-500/20",
    },
    {
      id: 3,
      title: "Web Development",
      icon: Code,
      description: "Comprehensive web development services for e-commerce, blogs, portfolios, and personal websites",
      features: ["PHP", ".NET", "Wordpress"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
      hoverBorderColor: "hover:border-green-400/60",
      glowColor: "shadow-green-500/20",
    },
    {
      id: 4,
      title: "Digital Marketing",
      icon: Globe,
      description:
        "Seize paid opportunities for exponential growth with strategic avenues to propel your business forward",
      features: ["SEO", "SMM", "PPC"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/30",
      hoverBorderColor: "hover:border-orange-400/60",
      glowColor: "shadow-orange-500/20",
    },
    {
      id: 5,
      title: "Mobile App Development",
      icon: Smartphone,
      description: "Multidisciplinary app development with designers, developers, and QA teams",
      features: ["Java", "Android-studio", "Flutter"],
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10",
      borderColor: "border-indigo-500/30",
      hoverBorderColor: "hover:border-indigo-400/60",
      glowColor: "shadow-indigo-500/20",
    },
    {
      id: 6,
      title: "UI/UX Design",
      icon: Palette,
      description: "Create intuitive and engaging user experiences with modern design principles",
      features: ["User Research", "Prototyping", "Wireframing"],
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-500/10 to-cyan-500/10",
      borderColor: "border-teal-500/30",
      hoverBorderColor: "hover:border-teal-400/60",
      glowColor: "shadow-teal-500/20",
    },
  ]

  return (
    <section id="services" className="bg-black py-16 md:py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-green-500/8 to-emerald-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-gradient-to-r from-emerald-500/8 to-green-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-green-400/5 to-emerald-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Exclusive{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive digital solutions tailored to transform your business and drive growth
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 border-2 ${service.borderColor} ${service.hoverBorderColor} transition-all duration-500 hover:scale-105 hover:-translate-y-2 backdrop-blur-sm overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(34, 197, 94, 0.1)`,
              }}
            >
              {/* Enhanced Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
              <div
                className={`absolute inset-0 bg-gradient-to-t ${service.bgGradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
              ></div>

              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-green-400/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-emerald-400/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-700"></div>

              {/* Border Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 shadow-lg ${service.glowColor} group-hover:shadow-2xl transition-all duration-500`}
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
                  className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {service.description}
                </motion.p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 + 0.3 }}
                      whileHover={{ x: 5, color: "#10b981" }}
                    >
                      <motion.div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Sparkles */}
                <motion.div
                  className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-green-400/60" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button onClick={() => window.scrollTo({ top: 3800, behavior: "smooth" })}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black font-semibold rounded-xl shadow-2xl shadow-green-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">Explore All Services</span>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
