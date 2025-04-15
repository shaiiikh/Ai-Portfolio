"use client"

import { motion } from "framer-motion"
import styles from "./SkillCard.module.css"

interface SkillCardProps {
  name: string
  level: number
  delay?: number
}

export default function SkillCard({ name, level, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
    >
      <h3 className={styles.name}>{name}</h3>

      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <motion.div
            className={styles.progressFill}
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + 0.3 }}
          />
        </div>
        <span className={styles.level}>{level}%</span>
      </div>
    </motion.div>
  )
}

