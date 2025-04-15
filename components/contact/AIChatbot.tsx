"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Bot, User, ChevronRight } from "lucide-react"
import styles from "./AIChatbot.module.css"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

interface QuestionOption {
  id: string
  text: string
  response: string
  followUpQuestions?: string[]
}

export default function AIChatbot() {
  const initialQuestions = [
    "What AI/ML technologies do you specialize in?",
    "Tell me about your experience with generative AI",
    "What projects have you worked on?",
    "What's your approach to MLOps?",
    "How can we collaborate on a project?",
  ]

  const questionResponses: Record<string, QuestionOption> = {
    "What AI/ML technologies do you specialize in?": {
      id: "q1",
      text: "What AI/ML technologies do you specialize in?",
      response:
        "I specialize in deep learning frameworks like TensorFlow and PyTorch, computer vision (CNNs, object detection, segmentation), NLP with transformer architectures, and generative models including GANs and diffusion models. I'm also experienced with MLOps tools like Docker, Kubernetes, and various cloud platforms for model deployment.",
      followUpQuestions: [
        "Tell me more about your computer vision experience",
        "What NLP projects have you worked on?",
        "How do you optimize model performance?",
      ],
    },
    "Tell me about your experience with generative AI": {
      id: "q2",
      text: "Tell me about your experience with generative AI",
      response:
        "I've worked extensively with generative AI models including GANs, VAEs, and diffusion models. I've implemented custom architectures for image generation, style transfer, and text-to-image synthesis. I'm also experienced with fine-tuning large language models like GPT for specific domains and building applications that leverage these capabilities.",
      followUpQuestions: [
        "What's your favorite generative AI project?",
        "How do you handle ethical concerns in generative AI?",
        "What tools do you use for LLM fine-tuning?",
      ],
    },
    "What projects have you worked on?": {
      id: "q3",
      text: "What projects have you worked on?",
      response:
        "I've worked on a diverse range of projects including a fabric defect detection system using computer vision, custom transformer-based language models for domain-specific applications, an AI-powered car customization advisor, and a creative math problem solver that uses OCR and generative AI to solve and explain complex math problems step-by-step.",
      followUpQuestions: [
        "Tell me more about the fabric defect detection",
        "How did you implement the math problem solver?",
        "What challenges did you face in these projects?",
      ],
    },
    "What's your approach to MLOps?": {
      id: "q4",
      text: "What's your approach to MLOps?",
      response:
        "My MLOps approach focuses on automation, reproducibility, and monitoring. I implement CI/CD pipelines for model training and deployment, use containerization with Docker and orchestration with Kubernetes, and set up comprehensive monitoring for both model performance and infrastructure. I also emphasize version control for both code and data, and implement A/B testing frameworks for safe model updates.",
      followUpQuestions: [
        "What monitoring tools do you prefer?",
        "How do you handle model versioning?",
        "What's your approach to feature stores?",
      ],
    },
    "How can we collaborate on a project?": {
      id: "q5",
      text: "How can we collaborate on a project?",
      response:
        "I'm always open to collaboration opportunities! You can reach out to me via email at m7alishaikhx@gmail.com or connect with me on LinkedIn. I'm interested in projects related to computer vision, NLP, generative AI, and MLOps. I can contribute to all stages of the ML lifecycle from data preparation to model deployment and monitoring.",
      followUpQuestions: [
        "What's your availability for new projects?",
        "Do you prefer contract or full-time work?",
        "What industries have you worked with?",
      ],
    },
    // Follow-up questions for "What AI/ML technologies do you specialize in?"
    "Tell me more about your computer vision experience": {
      id: "q1-1",
      text: "Tell me more about your computer vision experience",
      response:
        "In computer vision, I've implemented object detection systems using YOLO and Faster R-CNN, segmentation models with U-Net and Mask R-CNN, and classification systems with various CNN architectures. I've worked on real-time video processing, medical image analysis, and industrial quality control applications. I'm also experienced with OpenCV for traditional computer vision techniques.",
      followUpQuestions: [],
    },
    "What NLP projects have you worked on?": {
      id: "q1-2",
      text: "What NLP projects have you worked on?",
      response:
        "My NLP projects include sentiment analysis systems for social media monitoring, custom chatbots for customer service, document classification and information extraction pipelines, and fine-tuned language models for domain-specific text generation. I've worked with BERT, RoBERTa, GPT, and other transformer architectures, and I'm experienced with frameworks like Hugging Face Transformers.",
      followUpQuestions: [],
    },
    "How do you optimize model performance?": {
      id: "q1-3",
      text: "How do you optimize model performance?",
      response:
        "I optimize model performance through a combination of techniques: hyperparameter tuning using Bayesian optimization, model pruning and quantization for deployment efficiency, knowledge distillation for smaller models, and neural architecture search for optimal structures. I also focus on data quality improvements and feature engineering to get the most from the available data.",
      followUpQuestions: [],
    },
    // Follow-up questions for "Tell me about your experience with generative AI"
    "What's your favorite generative AI project?": {
      id: "q2-1",
      text: "What's your favorite generative AI project?",
      response:
        "My favorite generative AI project was developing a style transfer system that could apply the artistic style of any reference image to user photos while preserving identity and structural integrity. It combined GANs with perceptual losses and achieved impressive results even with limited training data. The project also included a web interface that made it accessible to non-technical users.",
      followUpQuestions: [],
    },
    "How do you handle ethical concerns in generative AI?": {
      id: "q2-2",
      text: "How do you handle ethical concerns in generative AI?",
      response:
        "I approach ethical concerns in generative AI by implementing content filters to prevent harmful outputs, using watermarking techniques for generated content, ensuring diverse and representative training data, and building transparency into the generation process. I also stay informed about the latest research in AI ethics and incorporate best practices into my work.",
      followUpQuestions: [],
    },
    "What tools do you use for LLM fine-tuning?": {
      id: "q2-3",
      text: "What tools do you use for LLM fine-tuning?",
      response:
        "For LLM fine-tuning, I primarily use Hugging Face's Transformers library along with techniques like LoRA (Low-Rank Adaptation) and QLoRA for efficient adaptation. I use PEFT (Parameter-Efficient Fine-Tuning) methods to reduce computational requirements, and tools like DeepSpeed or Accelerate for distributed training. For evaluation, I use frameworks like HELM and custom metrics relevant to the specific task.",
      followUpQuestions: [],
    },
    // Additional follow-up questions can be added for other main questions
    "Tell me more about the fabric defect detection": {
      id: "q3-1",
      text: "Tell me more about the fabric defect detection",
      response:
        "The fabric defect detection system used a custom YOLOv5 model trained on a dataset of fabric images with various defects like holes, stains, and thread issues. It achieved 98% accuracy in real-time detection and was deployed on edge devices in a manufacturing setting. The system included a user interface for quality control operators and integrated with the factory's production management system.",
      followUpQuestions: [],
    },
    "How did you implement the math problem solver?": {
      id: "q3-2",
      text: "How did you implement the math problem solver?",
      response:
        "The math problem solver combined OCR (using Tesseract and a custom CNN) to recognize mathematical expressions, a symbolic math engine (SymPy) for solving equations, and a fine-tuned GPT model to generate step-by-step explanations. The system could handle a wide range of problems from algebra to calculus and provided visual breakdowns of the solution process using LaTeX rendering.",
      followUpQuestions: [],
    },
    "What challenges did you face in these projects?": {
      id: "q3-3",
      text: "What challenges did you face in these projects?",
      response:
        "The main challenges included dealing with limited labeled data (solved using data augmentation and semi-supervised learning), optimizing models for deployment on resource-constrained devices (addressed through quantization and pruning), and ensuring robustness to real-world variations in input data. Integration with existing systems and creating intuitive user interfaces were also significant challenges.",
      followUpQuestions: [],
    },
    // MLOps follow-ups
    "What monitoring tools do you prefer?": {
      id: "q4-1",
      text: "What monitoring tools do you prefer?",
      response:
        "For ML monitoring, I prefer using Prometheus and Grafana for infrastructure metrics, MLflow for experiment tracking, Weights & Biases for model performance visualization, and custom dashboards built with Streamlit for business metrics. I also implement data drift detection using tools like Evidently AI and set up automated alerting systems for performance degradation.",
      followUpQuestions: [],
    },
    "How do you handle model versioning?": {
      id: "q4-2",
      text: "How do you handle model versioning?",
      response:
        "For model versioning, I use a combination of Git LFS for code, DVC for data versioning, and MLflow or custom registries for model artifacts. Each model is tagged with metadata including training parameters, dataset versions, and performance metrics. I implement a promotion workflow where models move from development to staging to production after passing appropriate validation tests.",
      followUpQuestions: [],
    },
    "What's your approach to feature stores?": {
      id: "q4-3",
      text: "What's your approach to feature stores?",
      response:
        "I approach feature stores as a critical component of ML infrastructure that ensures consistency between training and inference. I've worked with tools like Feast and Tecton to implement feature stores that support both batch and real-time features. I focus on proper feature documentation, access control, and monitoring for feature drift to maintain system reliability.",
      followUpQuestions: [],
    },
    // Collaboration follow-ups
    "What's your availability for new projects?": {
      id: "q5-1",
      text: "What's your availability for new projects?",
      response:
        "I'm currently available for new projects and can dedicate 20-30 hours per week depending on the scope and requirements. I'm flexible with scheduling and can adjust my availability for critical project phases. I prefer projects with a timeline of at least 3-6 months to allow for proper development and refinement.",
      followUpQuestions: [],
    },
    "Do you prefer contract or full-time work?": {
      id: "q5-2",
      text: "Do you prefer contract or full-time work?",
      response:
        "I'm open to both contract and full-time opportunities. For contract work, I prefer project-based engagements with clear deliverables and milestones. For full-time positions, I'm interested in roles that allow me to work on challenging problems and continue growing my skills in AI/ML. Remote work is preferred, but I'm open to hybrid arrangements.",
      followUpQuestions: [],
    },
    "What industries have you worked with?": {
      id: "q5-3",
      text: "What industries have you worked with?",
      response:
        "I've worked with clients in manufacturing, healthcare, finance, e-commerce, and education. Each industry has unique challenges and requirements for AI/ML solutions. I enjoy learning about new domains and adapting my technical knowledge to solve industry-specific problems. I'm particularly interested in applications that have positive social or environmental impact.",
      followUpQuestions: [],
    },
  }

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! I'm Muhammad's AI assistant. What would you like to know about my AI/ML expertise?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])

  const [availableQuestions, setAvailableQuestions] = useState<string[]>(initialQuestions)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSelectQuestion = (question: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    // Get response from questionResponses
    const questionData = questionResponses[question]

    // Simulate AI response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now().toString(),
        text: questionData.response,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)

      // Update available questions to follow-ups if they exist
      if (questionData.followUpQuestions && questionData.followUpQuestions.length > 0) {
        setAvailableQuestions(questionData.followUpQuestions)
      } else {
        // Reset to initial questions if no follow-ups
        setAvailableQuestions(initialQuestions)
      }
    }, 1500)
  }

  return (
    <motion.div
      className={styles.chatbot}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.chatHeader}>
        <Bot size={20} />
        <span>AI Assistant</span>
      </div>

      <div className={styles.chatMessages}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${styles.message} ${message.sender === "bot" ? styles.botMessage : styles.userMessage}`}
          >
            <div className={styles.messageContent}>
              <div className={styles.messageIcon}>
                {message.sender === "bot" ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div className={styles.messageText}>{message.text}</div>
            </div>
            <div className={styles.messageTime}>
              {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className={`${styles.message} ${styles.botMessage}`}>
            <div className={styles.messageContent}>
              <div className={styles.messageIcon}>
                <Bot size={16} />
              </div>
              <div className={styles.typingIndicator}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className={styles.questionOptions}>
        {availableQuestions.map((question) => (
          <button
            key={question}
            className={styles.questionButton}
            onClick={() => handleSelectQuestion(question)}
            disabled={isTyping}
          >
            <ChevronRight size={16} />
            <span>{question}</span>
          </button>
        ))}
      </div>
    </motion.div>
  )
}

