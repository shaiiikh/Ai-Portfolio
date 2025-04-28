import Link from "next/link"
import { Heart, Github, Linkedin, Facebook, Instagram, Youtube, Mail } from "lucide-react"
import styles from "./Footer.module.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link href="/">
              <span className={styles.logoText}>MAS</span>
            </Link>
            <p className={styles.tagline}>AI/ML Engineer & Generative AI Specialist</p>
          </div>

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
            <a href="mailto:m7alishaikhx@gmail.com" className={styles.socialLink} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>

          <div className={styles.copyright}>
            <p>© {currentYear} Muhammad Ali Shaikh. All rights reserved.</p>
          </div>

          <div className={styles.links}>
            <Link href="#home" className={styles.link}>
              Home
            </Link>
            <Link href="#about" className={styles.link}>
              About
            </Link>
            <Link href="#skills" className={styles.link}>
              Skills
            </Link>
            <Link href="#projects" className={styles.link}>
              Projects
            </Link>
            <Link href="#experience" className={styles.link}>
              Experience
            </Link>
            <Link href="#contact" className={styles.link}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

