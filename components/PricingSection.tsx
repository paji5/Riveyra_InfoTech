"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState } from "react"

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Free Forever",
      price: "$0",
      period: "/m",
      features: [
        "Basic AI-generated designs",
        "Access to customization tools",
        "Standard templates library",
        "5 projects per month",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$14.99",
      period: "/m",
      features: [
        "Advanced AI-generated designs",
        "Full access to customization tools",
        "Premium templates library",
        "Unlimited projects",
        "Real-time collaboration",
        "Priority email support",
      ],
      buttonText: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$29.99",
      period: "/m",
      features: [
        "All features included Pro Plan",
        "Dedicated account manager",
        "Custom AI model training",
        "Advanced analytics and reporting",
        "24/7 priority support",
        "Secure cloud storage",
      ],
      buttonText: "Get Started",
      popular: false,
    },
  ]

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Affordable Plans for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Every Need
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Choose the perfect plan that fits your creative workflow and budget. Our pricing tiers are designed to offer
            flexibility and value, ensuring you get the most out of our AI-powered design assistant.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isYearly ? "text-white" : "text-gray-400"}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-12 h-6 bg-gray-700 rounded-full transition-colors duration-200 focus:outline-none"
            >
              <div
                className={`absolute top-1 left-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-transform duration-200 ${isYearly ? "translate-x-6" : ""}`}
              ></div>
            </button>
            <span className={`text-sm ${isYearly ? "text-white" : "text-gray-400"}`}>Yearly</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-800 rounded-2xl p-8 scroll-animate tilt-card transform-gpu hover:scale-105 transition-all duration-300 ${plan.popular ? "ring-2 ring-purple-500 bg-gradient-to-b from-purple-900/20 to-gray-800" : ""}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-purple-500/25"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
