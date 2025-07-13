"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Upload, MapPin, Clock } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

gsap.registerPlugin(ScrollTrigger)

export default function JobApplicationPage() {
  const searchParams = useSearchParams()
  const jobTitle = searchParams.get("job") || "Laravel Developer"
  const experience = searchParams.get("experience") || "1 year"
  const location = searchParams.get("location") || "Kanpur"
  const type = searchParams.get("type") || "Full Time"

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentEmployer: "",
    designation: "",
    qualification: "",
    appliedFor: jobTitle,
    expYear: "",
    expMonth: "",
    currentSalary: "",
    expectedSalary: "",
    message: "",
    resume: null as File | null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Page animations
    gsap.fromTo(".page-header", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
    gsap.fromTo(".job-details", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.4 })
    gsap.fromTo(".application-form", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.6 })
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, resume: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Here you would typically send the data to your API
    console.log("Form submitted:", formData)

    setIsSubmitting(false)
    alert("Application submitted successfully!")
  }

  const jobDetails = {
    "Laravel Developer": {
      description:
        "Riveyra Infotech Private Limited is seeking a talented Laravel Developer with 1 year of experience to join our team. You'll play a key role in developing robust web applications, leveraging the power of Laravel framework. If you are passionate about coding and eager to grow in a dynamic environment, we'd love to hear from you!",
      responsibilities: [
        "Develop and maintain web applications using Laravel framework.",
        "Collaborate with frontend developers to integrate user-facing elements.",
        "Implement security and data protection measures.",
        "Ensure code quality through testing and debugging.",
        "Assist in the deployment and maintenance of applications.",
      ],
      skills: [
        "Proficiency in PHP and Laravel framework.",
        "Strong understanding of MVC architecture and RESTful APIs.",
        "Familiarity with front-end technologies such as HTML, CSS, and JavaScript.",
        "Experience with database management systems, preferably MySQL.",
        "Excellent problem-solving and communication skills.",
      ],
    },
    "PHP Developer": {
      description:
        "Riveyra Infotech Private Limited is seeking a skilled PHP Developer with 2-3 years of experience to join our development team. You'll be responsible for creating dynamic web applications and maintaining existing systems.",
      responsibilities: [
        "Develop and maintain PHP-based web applications.",
        "Write clean, well-documented code following best practices.",
        "Collaborate with cross-functional teams to deliver projects.",
        "Optimize applications for maximum speed and scalability.",
        "Troubleshoot and debug applications.",
      ],
      skills: [
        "Strong proficiency in PHP programming.",
        "Experience with PHP frameworks (Laravel, CodeIgniter, etc.).",
        "Knowledge of MySQL and database design.",
        "Understanding of web technologies (HTML, CSS, JavaScript).",
        "Experience with version control systems (Git).",
      ],
    },
    "React Developer": {
      description:
        "Riveyra Infotech Private Limited is looking for a talented React Developer with 2-3 years of experience to build user interfaces for our web applications.",
      responsibilities: [
        "Develop user interface components using React.js.",
        "Build reusable components and front-end libraries.",
        "Translate designs and wireframes into high-quality code.",
        "Optimize components for maximum performance.",
        "Collaborate with backend developers and designers.",
      ],
      skills: [
        "Strong proficiency in JavaScript and React.js.",
        "Experience with popular React workflows (Redux, Context API).",
        "Familiarity with modern front-end build pipelines and tools.",
        "Knowledge of RESTful APIs and modern authorization mechanisms.",
        "Experience with common front-end development tools.",
      ],
    },
  }

  const currentJobDetails = jobDetails[jobTitle as keyof typeof jobDetails] || jobDetails["Laravel Developer"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

     

      {/* Main Content */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <motion.div
            className="page-header mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/career"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Job Openings
            </Link>
          </motion.div>

          {/* Job Details Card */}
          <motion.div
            className="job-details bg-white rounded-2xl p-8 mb-8 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Job Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {jobTitle} - {experience}
                </h1>
                <div className="flex items-center text-gray-600 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{type}</span>
                  </div>
                </div>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">Apply Now</Button>
            </div>

            {/* Company Description */}
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">{currentJobDetails.description}</p>
            </div>

            {/* Roles and Responsibilities */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Roles and Responsibilities</h2>
              <ul className="space-y-2">
                {currentJobDetails.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>

            {/* Required Skills */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Required Skills</h2>
              <ul className="space-y-2">
                {currentJobDetails.skills.map((skill, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            className="application-form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Apply Now!
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 rounded-lg h-12"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 rounded-lg h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 rounded-lg h-12"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone No"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 rounded-lg h-12"
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="currentEmployer"
                    placeholder="Current Employer"
                    value={formData.currentEmployer}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 rounded-lg h-12"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 rounded-lg h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="qualification"
                    placeholder="Highest Qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 rounded-lg h-12"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="appliedFor"
                    placeholder="Applied For"
                    value={formData.appliedFor}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 rounded-lg h-12"
                  />
                </div>
              </div>

              {/* Experience */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="number"
                    name="expYear"
                    placeholder="Exp. Year"
                    value={formData.expYear}
                    onChange={handleInputChange}
                    min="0"
                    max="50"
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 rounded-lg h-12"
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    name="expMonth"
                    placeholder="Exp. Month"
                    value={formData.expMonth}
                    onChange={handleInputChange}
                    min="0"
                    max="11"
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 rounded-lg h-12"
                  />
                </div>
              </div>

              {/* Salary Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="currentSalary"
                    placeholder="Current Salary"
                    value={formData.currentSalary}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 rounded-lg h-12"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="expectedSalary"
                    placeholder="Expected Salary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 rounded-lg h-12"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 rounded-lg resize-none"
                />
              </div>

              {/* Resume Upload and Submit */}
              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1">
                  <label className="block text-gray-300 mb-2">Upload Resume (CV)</label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="flex items-center justify-center w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full cursor-pointer transition-colors duration-200"
                    >
                      <Upload className="w-6 h-6" />
                    </label>
                    {formData.resume && <p className="text-sm text-gray-400 mt-2">Selected: {formData.resume.name}</p>}
                  </div>
                </div>
                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

    
    </div>
  )
}
