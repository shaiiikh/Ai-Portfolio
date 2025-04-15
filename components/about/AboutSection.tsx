"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Briefcase, Code, Brain } from "lucide-react"
import styles from "./AboutSection.module.css"
import AIBrainAnimation from "./AIBrainAnimation"

export default function AboutSection() {
  return (
    <section id="about" className={`${styles.about} section`}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className={styles.content}>
          <motion.div
            className={styles.bio}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.bioTitle}>My Journey in AI & ML</h3>
            <p>
              I'm an AI/ML Engineer with a passion for developing cutting-edge solutions using artificial intelligence
              and machine learning. My expertise spans across various domains including computer vision, natural
              language processing, and generative AI.
            </p>
            <p>
              With a strong foundation in both theoretical concepts and practical implementation, I strive to bridge the
              gap between research and real-world applications. My goal is to create AI systems that are not only
              technically robust but also ethically sound and user-friendly.
            </p>
            <p>
              When I'm not training models or optimizing algorithms, you can find me exploring the latest research
              papers, contributing to open-source projects, or mentoring aspiring data scientists and ML engineers.
            </p>

            <div className={styles.aiQuote}>
              <Brain className={styles.quoteIcon} />
              <blockquote>
                "The development of full artificial intelligence could spell the end of the human race... or it could be
                the best thing that ever happened to us."
              </blockquote>
              <cite>— Stephen Hawking</cite>
            </div>
          </motion.div>

          <motion.div
            className={styles.timeline}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.timelineTitle}>Education & Certifications</h3>

            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <GraduationCap size={20} />
              </div>
              <div className={styles.timelineContent}>
                <h4>BS Computer Science</h4>
                <p>FAST NUCES</p>
                <span className={styles.timelinePeriod}>2021 - 2025</span>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <Award size={20} />
              </div>
              <div className={styles.timelineContent}>
                <h4>Artifical Intelligence</h4>
                <p>HackerRank</p>
                <span className={styles.timelinePeriod}>2022</span>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <Code size={20} />
              </div>
              <div className={styles.timelineContent}>
                <h4>Data Science</h4>
                <p>CodSoft</p>
                <span className={styles.timelinePeriod}>2023</span>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <Briefcase size={20} />
              </div>
              <div className={styles.timelineContent}>
                <h4>Machine Learning</h4>
                <p>Prodigy InfoTech</p>
                <span className={styles.timelinePeriod}>2024</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.aiVisualization}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AIBrainAnimation />
          <div className={styles.funFact}>
            <h3>Did you know?</h3>
            <p>
              GPT-4 has approximately 1.76 trillion parameters, making it one of the largest language models ever
              created!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

