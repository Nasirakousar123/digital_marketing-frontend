"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-gray-600">Thank you for reaching out. We'll get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formState.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <Input
                id="company"
                name="company"
                value={formState.company}
                onChange={handleChange}
                placeholder="Your Company"
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell us about your project and how we can help..."
              required
              className="w-full min-h-[120px]"
            />
          </div>

          <div className="flex items-center">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              required
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
              I agree to the{" "}
              <a href="#" className="text-purple-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  )
}
