"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
import styles from "./ProjectsSection.module.css"
import ProjectCard from "./ProjectCard"
import AIProjectShowcase from "./AIProjectShowcase"

const projects = [
  {
    id: 1,
    title: "Fabric Defect Detection using YOLOv5",
    description: "A computer vision system that detects defects in textile fabrics using YOLOv5. The model identifies cuts, holes, thread errors, and stains in real-time, providing visual feedback for quality control.",
    image: "/fabric.webp",
    tags: ["Computer Vision", "YOLOv5", "PyTorch", "OpenCV"],
    repoUrl: "https://github.com/shaiiikh/Fabric-Defect-Detection-using-YOLOv5",
  },
  {
    id: 2,
    title: "Custom Transformer LLM for Text Summarization",
    description: "A custom-built transformer model for text summarization, demonstrating the application of advanced NLP techniques for content compression while maintaining context and meaning.",
    image: "/custom.webp",
    tags: ["NLP", "Transformers", "HuggingFace", "ONNX"],
    repoUrl: "https://github.com/shaiiikh/Custom-Transformer-Based-LLM-for-Text-Summarization",
  },
  {
    id: 3,
    title: "AI-Powered Car Customization Advisor",
    description: "An intelligent system that helps users customize their vehicles using voice or text input. Powered by Generative AI, Whisper AI, and DALL-E for personalized suggestions and visual previews.",
    image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1000&auto=format&fit=crop",
    tags: ["Recommendation Systems", "FastAPI", "React", "TensorFlow"],
    repoUrl: "https://github.com/shaiiikh/AI-Powered-Car-Customization-Advisor",
  },
  {
    id: 4,
    title: "Creative Math Problem Solver",
    description: "An innovative AI system that solves and generates math problems using emojis, making mathematics more engaging and fun while demonstrating practical applications of machine learning.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
    tags: ["Generative AI", "Math OCR", "LaTeX", "Python"],
    repoUrl: "https://github.com/shaiiikh/Creative-Math-Problem-Solver",
  },
  {
    id: 5,
    title: "CodeTransformer",
    description: "A tool that seamlessly translates between pseudocode and C++ code using a custom-trained Seq2Seq transformer model, helping bridge the gap between algorithm design and implementation.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    tags: ["GANs", "Style Transfer", "Flask", "TensorFlow"],
    repoUrl: "https://github.com/shaiiikh/CodeTransformer",
  },
  {
    id: 6,
    title: "Nazam Generator using GRU",
    description: "A deep learning model using GRU (Gated Recurrent Unit) to generate Urdu poetry (Nazam) in Roman script. Features include custom text generation, a web interface for interaction, and comprehensive poetry generation history.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop",
    tags: ["NLP", "BERT", "React", "Python"],
    repoUrl: "https://github.com/shaiiikh/Nazam-Generator-using-GRU",
  },
]

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [showcaseProject, setShowcaseProject] = useState<number | null>(null)

  return (
    <section id="projects" className={`${styles.projects} section`}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        {showcaseProject !== null && (
          <AIProjectShowcase
            project={projects.find((p) => p.id === showcaseProject)!}
            onClose={() => setShowcaseProject(null)}
          />
        )}

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isActive={activeProject === project.id}
              onHover={() => setActiveProject(project.id)}
              onLeave={() => setActiveProject(null)}
              onShowcase={() => setShowcaseProject(project.id)}
            />
          ))}
        </div>

        <motion.div
          className={styles.githubStats}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>GitHub Contributions</h3>
          <div className={styles.statsContainer}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>Repositories</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Contributions</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Stars</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Forks</span>
            </div>
          </div>
          <a href="https://github.com/shaiiikh" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
            <Github size={18} />
            <span>View GitHub Profile</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

