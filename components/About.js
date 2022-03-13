import React from 'react'
import Link from 'next/link'

import styles from '../styles/About.module.css'



const About = () => {
  return (
      <section className={styles.aboutSection}>
          <div className={styles.aboutBG}>
              <h1 className={styles.aboutTitle}>Quem Sou?</h1>
              <h5 className={styles.aboutText}>Uma pessoa fascinada e curiosa sobre o mundo da programação, e mesmo com apenas alguns meses estudando, posso dizer com toda certeza que é a minha paixão.</h5>
          </div>
          <div className={styles.aboutBG}></div>
          <div className={styles.aboutBG}></div>
      </section>
  )
}

export default About