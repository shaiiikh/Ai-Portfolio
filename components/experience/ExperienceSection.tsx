"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import styles from "./ExperienceSection.module.css"

const experiences = [
  {
    "id": 1,
    "role": "Machine Learning Engineer",
    "company": "Fiverr",
    "period": "Oct 2022 - Aug 2024",
    "description": "Designed and deployed AI-driven solutions for real-world clients, with a focus on computer vision, natural language processing, and speech recognition. Built end-to-end pipelines including data preprocessing, model training, evaluation, and deployment using tools like PyTorch, YOLOv8, Hugging Face, and Streamlit.",
    "achievements": [
      "Developed a YOLOv8-based fabric defect detection system with 98% accuracy",
      "Built an AI-powered virtual speech therapist using NLP and Whisper API",
      "Optimized deep learning models to reduce inference time by 40%",
      "Delivered 10+ client projects with 5-star ratings and custom AI integrations"
    ]
  },
  {
    "id": 2,
    "role": "NLP Research Assistant",
    "company": "FAST-NUCES (Under PostDoc Associate Professor)",
    "period": "Mar 2021 - Dec 2022",
    "description": "Conducted research on sentiment analysis using Reddit data under the supervision of a PostDoc Associate Professor. Focused on social media data mining, natural language processing, and model evaluation for behavioral analysis in online communities.",
    "achievements": [
      "Built a sentiment analysis model achieving 92% accuracy on Reddit data",
      "Automated data collection using Reddit API (PRAW) and performed text preprocessing with NLP techniques",
      "Analyzed user sentiment trends and linguistic patterns for social discourse analysis",
      "Contributed significantly to the supervisor's peer-reviewed research paper, including experimentation and results analysis"
    ]
  },
  {
    "id": 3,
    "role": "Teaching Associate (TA)",
    "company": "FAST-NUCES",
    "period": "Sep 2024 – Present",
    "description": "Assisted in teaching core Computer Science courses including Object-Oriented Programming and Operating Systems. Provided lab support, graded assignments, and guided students through hands-on programming exercises and conceptual understanding.",
    "achievements": [
      "Led lab sessions and helped students grasp key concepts in memory management, process synchronization, and file systems",
      "Clarified complex OOP topics such as polymorphism, inheritance, and encapsulation through one-on-one student mentoring",
      "Provided feedback on student projects and supported exam preparation sessions",
      "Contributed to curriculum improvement by suggesting updated lab activities and coding challenges"
    ]
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className={`${styles.experience} section`}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.timelineContent}>
                <div className={styles.header}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.company}>{exp.company}</span>
                </div>

                <div className={styles.period}>
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>

                <p className={styles.description}>{exp.description}</p>

                <div className={styles.achievements}>
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

