"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { backOut } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUp,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/RiveyraInfotech/", color: "hover:text-blue-500" },
    { icon: Twitter, href: "https://x.com/RiveyraInfotech", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/riveyrainfotechp/", color: "hover:text-blue-600" },
    { icon: Instagram, href: "https://www.instagram.com/RiveyraInfotech/", color: "hover:text-pink-500" },
    { icon: Youtube, href: "https://www.youtube.com/@riveyrainfotech", color: "hover:text-red-500" },
  ]

  const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Projects", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Career", href: "/career" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact us", href: "/contact" },
  ]

  const [showGoToTop, setShowGoToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const openWhatsApp = () => {
    window.open("https://wa.me/919919888269", "_blank")
  }

  const openChat = () => {
    // Add your chat functionality here
    console.log("Chat opened")
  }

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-emerald-500/5 to-green-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Additional Background Elements */}
      <div className="absolute inset-0 opacity-30">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-green-500/20 rotate-45 animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/3 w-12 h-12 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/2 w-8 h-8 border-2 border-blue-500/20 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Additional Gradient Orbs */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl"></div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-48 sm:w-60 h-12 sm:h-14 bg-transparent rounded-xl flex items-center justify-center">
                <motion.img
                  src="/logo.png"
                  alt="Riveyra Infotech Logo"
                  className="w-full h-full object-contain"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: backOut,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Services and Consulting company with over 8 years of proven excellence in the offshore IT industry. Our
              specialization lies in offering a comprehensive range of services, encompassing both Digital Marketing and
              Development.
            </p>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:bg-green-500/20`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Kanpur, Uttar Pradesh</h4>
                  <p className="text-gray-300 text-sm">
                    STP1,8th floor,A-1/4 UPSIDC Complex,
                    <br />
                    Lakhanpur, 208024.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-gray-300 text-sm">+91 9919888269</p>
                  <p className="text-gray-300 text-sm">+91 9219934954</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-gray-300 text-sm">hr@riveyrainfotch.com</p>
                  <p className="text-gray-300 text-sm">sales@riveyrainfotch.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h4 className="text-white font-semibold mb-2">Company Useful Links</h4>
              <div className="w-16 h-1 bg-blue-500 rounded-full mb-6"></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {usefulLinks.map((link, index) => (
                <motion.div key={index} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-green-400 transition-colors duration-300 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Reviews - Updated with Images */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div>
              <h4 className="text-white font-semibold mb-2">Read More Reviews</h4>
              <div className="w-16 h-1 bg-blue-500 rounded-full mb-6"></div>
            </div>
            <div className="space-y-4">
              {/* Review Image 1 */}
              <img
                src="/images/footer/review1.png"
                alt="Review Platform 1"
                className="w-full h-20 object-contain"
              />

              {/* Review Image 2 */}
              <img
                src="/images/footer/review2.png"
                alt="Review Platform 2"
                className="w-full h-20 object-contain"
              />

              {/* Review Image 3 */}
              <img
                src="/images/footer/review3.png"
                alt="Review Platform 3"
                className="w-full h-20 object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Copyright © 2023-24, All Right Reserved Made With <span className="text-red-500">❤️</span> in INDIA
          </p>
        </motion.div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
        {/* WhatsApp Button - Left Bottom */}
        <motion.button
          onClick={openWhatsApp}
          className="fixed bottom-6 left-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 pointer-events-auto group"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <svg
            className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </motion.button>

        {/* Chat Button - Right Side, Above Go to Top */}
        <motion.button
          onClick={openChat}
          className="fixed bottom-24 left-6 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 pointer-events-auto group"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </motion.button>

        {/* Go to Top Button - Right Bottom */}
        {showGoToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 pointer-events-auto group"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </motion.button>
        )}
      </div>
    </footer>
  )
}
