"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowLeft, Menu, Send, Paperclip, Smile, MessageCircle, User } from "lucide-react"

interface ChatWidgetProps {
  isOpen: boolean
  onClose: () => void
}

interface Message {
  id: number
  text: string
  sender: "user" | "support"
  timestamp: Date
  avatar?: string
}

export default function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome to our site! If you need help, simply reply to this message. We are online and ready to help.",
      sender: "support",
      timestamp: new Date(),
      avatar: "/placeholder.svg?height=32&width=32", // Placeholder for support avatar
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        sender: "user",
        timestamp: new Date(),
      }
      setMessages((prevMessages) => [...prevMessages, newMessage])
      setMessage("")
      setIsTyping(true)

      // Simulate support response after 2 seconds
      setTimeout(() => {
        const supportResponse: Message = {
          id: messages.length + 2,
          text: "Thank you for your message! Our team will get back to you shortly. How can we assist you today?",
          sender: "support",
          timestamp: new Date(),
          avatar: "/placeholder.svg?height=32&width=32", // Placeholder for support avatar
        }
        setMessages((prevMessages) => [...prevMessages, supportResponse])
        setIsTyping(false)
      }, 2000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col border border-gray-100"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-3">
              <button onClick={onClose} className="hover:bg-green-700 p-1 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h3 className="font-semibold text-base">Customer Support</h3>
                <p className="text-xs text-green-100 opacity-90">Online now</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="hover:bg-green-700 p-1 rounded-full transition-colors">
                <Menu className="w-5 h-5" />
              </button>
              <button onClick={onClose} className="hover:bg-green-700 p-1 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 custom-scrollbar">
            <div className="space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`flex items-start gap-2 max-w-[75%] ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                  >
                    {msg.sender === "support" && (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {msg.avatar ? (
                          <img
                            src={msg.avatar || "/placeholder.svg"}
                            alt="Support Avatar"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <MessageCircle className="w-4 h-4 text-gray-600" />
                        )}
                      </div>
                    )}
                    {msg.sender === "user" && (
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <User className="w-4 h-4 text-blue-600" />
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-xl text-sm shadow-sm ${
                        msg.sender === "user"
                          ? "bg-blue-500 text-white rounded-br-none"
                          : "bg-white text-gray-800 rounded-bl-none border border-gray-100"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-2 max-w-[75%]">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <MessageCircle className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="p-3 rounded-xl text-sm bg-white text-gray-800 rounded-bl-none border border-gray-100">
                      <div className="flex space-x-1">
                        <motion.span
                          className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                        />
                        <motion.span
                          className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                        />
                        <motion.span
                          className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100 shadow-inner">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  rows={1}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm resize-none overflow-hidden"
                  style={{ minHeight: "40px", maxHeight: "80px" }} // Limit textarea height
                />
              </div>
              <div className="flex items-center space-x-1">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
                  <Paperclip className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
                  <Smile className="w-4 h-4" />
                </button>
                <motion.button
                  onClick={handleSendMessage}
                  className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Powered by */}
            <div className="mt-2 text-center">
              <p className="text-xs text-gray-400">
                Powered by <span className="text-green-600 font-semibold">Riveyra Infotech</span>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
