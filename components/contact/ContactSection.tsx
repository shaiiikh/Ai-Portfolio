"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Github, Linkedin, Facebook, Instagram, Youtube } from "lucide-react"
import styles from "./ContactSection.module.css"
import AIChatbot from "./AIChatbot"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)
  const [showChatbot, setShowChatbot] = useState(false)

  const particlesRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }
  }

  // Particles effect
  useEffect(() => {
    if (!particlesRef.current) return

    const container = particlesRef.current
    const particles: HTMLDivElement[] = []
    const numParticles = 50

    // Create particles
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div")
      particle.className = styles.particle

      // Random position
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`

      // Random size
      const size = Math.random() * 5 + 1
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`

      // Random color
      const colors = ["#00f5ff", "#b14aed", "#39ff14"]
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

      // Random animation duration
      const duration = Math.random() * 20 + 10
      particle.style.animation = `float ${duration}s linear infinite`

      container.appendChild(particle)
      particles.push(particle)
    }

    return () => {
      particles.forEach((particle) => {
        if (container.contains(particle)) {
          container.removeChild(particle)
        }
      })
    }
  }, [])

  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div ref={particlesRef} className={styles.particlesContainer}></div>

      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <div className={styles.contactContainer}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className={styles.contactLinks}>
              <a href="mailto:m7alishaikhx@gmail.com" className={styles.contactLink}>
                <Mail size={20} />
                <span>m7alishaikhx@gmail.com</span>
              </a>
              <a
                href="https://github.com/shaiiikh"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <Github size={20} />
                <span>github.com/shaiiikh</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ali-shaiiikh/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <Linkedin size={20} />
                <span>linkedin.com/in/ali-shaiiikh</span>
              </a>
              <a
                href="https://www.facebook.com/alishaiiikh"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <Facebook size={20} />
                <span>facebook.com/alishaiiikh</span>
              </a>
              <a
                href="https://www.instagram.com/alishaiiikh/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <Instagram size={20} />
                <span>instagram.com/alishaiiikh</span>
              </a>
              <a
                href="https://www.youtube.com/c/shaiiikh"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <Youtube size={20} />
                <span>youtube.com/c/shaiiikh</span>
              </a>
            </div>

            <div className={styles.chatbotToggle}>
              <button className={styles.chatbotButton} onClick={() => setShowChatbot(!showChatbot)}>
                {showChatbot ? "Hide AI Assistant" : "Talk to AI Assistant"}
              </button>

              {showChatbot && <AIChatbot />}
            </div>
          </motion.div>

          <motion.form
            className={styles.contactForm}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows={5}
              />
            </div>

            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={18} />
            </button>

            {submitStatus === "success" && (
              <div className={styles.successMessage}>Message sent successfully! I'll get back to you soon.</div>
            )}

            {submitStatus === "error" && (
              <div className={styles.errorMessage}>Something went wrong. Please try again later.</div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

