"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import styles from "./SkillsSection.module.css"
import SkillCard from "./SkillCard"
import { Brain, Code, Database, Server, Cpu, Network } from "lucide-react"
import SkillsGraph from "./SkillsGraph"

const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    icon: <Code size={24} />,
    skills: [
      { name: "Python", level: 95 },
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "SQL", level: 80 },
      { name: "Bash", level: 75 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning & Deep Learning",
    icon: <Brain size={24} />,
    skills: [
      { name: "CNNs", level: 90 },
      { name: "RNNs", level: 85 },
      { name: "Transformers", level: 90 },
      { name: "AutoML", level: 80 },
      { name: "Reinforcement Learning", level: 75 },
      { name: "GANs", level: 85 },
    ],
  },
  {
    id: "mlops",
    title: "MLOps & DevOps",
    icon: <Server size={24} />,
    skills: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "AWS", level: 85 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Model Monitoring", level: 75 },
      { name: "MLflow", level: 85 },
    ],
  },
  {
    id: "genai",
    title: "Generative AI & LLMs",
    icon: <Cpu size={24} />,
    skills: [
      { name: "GPT-4", level: 90 },
      { name: "BERT", level: 85 },
      { name: "Stable Diffusion", level: 80 },
      { name: "OpenAI Whisper", level: 75 },
      { name: "LLM Fine-tuning", level: 85 },
      { name: "Prompt Engineering", level: 95 },
    ],
  },
  {
    id: "data",
    title: "Data Engineering & Analytics",
    icon: <Database size={24} />,
    skills: [
      { name: "Pandas", level: 90 },
      { name: "Spark", level: 80 },
      { name: "Hadoop", level: 75 },
      { name: "Data Visualization", level: 85 },
      { name: "ETL Pipelines", level: 80 },
      { name: "Feature Engineering", level: 90 },
    ],
  },
  {
    id: "research",
    title: "Research & Innovation",
    icon: <Network size={24} />,
    skills: [
      { name: "Paper Implementation", level: 85 },
      { name: "Research Methodology", level: 80 },
      { name: "Experimental Design", level: 85 },
      { name: "Literature Review", level: 90 },
      { name: "Hypothesis Testing", level: 80 },
      { name: "Technical Writing", level: 85 },
    ],
  },
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("programming")

  return (
    <section id="skills" className={`${styles.skills} section`}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          className={styles.categories}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span className={styles.categoryTitle}>{category.title}</span>
            </button>
          ))}
        </motion.div>

        <div className={styles.skillsContainer}>
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              className={`${styles.skillsGrid} ${activeCategory === category.id ? styles.active : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeCategory === category.id ? 1 : 0,
                y: activeCategory === category.id ? 0 : 20,
                display: activeCategory === category.id ? "grid" : "none",
              }}
              transition={{ duration: 0.5 }}
            >
              {category.skills.map((skill, index) => (
                <SkillCard key={skill.name} name={skill.name} level={skill.level} delay={index * 0.1} />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.skillsVisual}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SkillsGraph activeCategory={activeCategory} />
        </motion.div>
      </div>
    </section>
  )
}

