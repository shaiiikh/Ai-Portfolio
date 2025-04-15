"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, FileText, ArrowDown, Facebook, Instagram, Youtube } from "lucide-react"
import styles from "./HeroSection.module.css"
import AnimatedBackground from "./AnimatedBackground"
import AIModelVisualizer from "./AIModelVisualizer"

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className={styles.hero} ref={sectionRef}>
      <AnimatedBackground />
      <div className={styles.aiModelContainer}>
        <AIModelVisualizer />
      </div>

      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.intro}
        >
          <h1 className={styles.name}>Muhammad Ali Shaikh</h1>
          <h2 className={styles.title}>AI/ML Engineer | Generative AI Specialist | MLOps Enthusiast</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.cta}
        >
          <a 
            href="https://drive.google.com/file/d/1XT68FZq5PKG8AMbbyrTLTF0YCvBncqsP/view?usp=sharing" 
            className={`${styles.button} ${styles.primary}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText size={18} />
            <span>View CV</span>
          </a>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com/shaiiikh"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-shaiiikh/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.facebook.com/alishaiiikh"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/alishaiiikh/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.youtube.com/c/shaiiikh"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>

          <button onClick={handleScrollDown} className={`${styles.button} ${styles.secondary}`}>
            <span>See My Work</span>
            <ArrowDown size={18} />
          </button>
        </motion.div>
      </div>

      <div className={styles.scrollIndicator} onClick={handleScrollDown}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <div className={styles.arrows}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

