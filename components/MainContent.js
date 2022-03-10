import React from 'react'
import Link from 'next/link'

import styles from '../styles/MainContent.module.css'
import HTLogo from '../SVG/HTLogo'

import Github from '../SVG/Github'
import LinkedIn from '../SVG/LinkedIn'
import Paper from '../SVG/Paper'

const MainContent = () => {
  return (
    <div className={styles.mainBackground}>
      <HTLogo className={styles.bigLogo}/>
     
      <section className={styles.textSection}>
        <p className={styles.mainText}>
          Programador <span className={styles.highlighted}>autodidata </span> <br/>
          movido pela <br/> <span className={styles.highlighted}>curiosidade</span> de <span className={styles.highlighted}>aprender</span>
        </p>
        <div className={styles.icons}>
          <Github className={styles.icon}/>
          <LinkedIn className={styles.icon}/>
          <Paper className={styles.icon}/>
        </div>
      </section>

      <div className={styles.blurCircle}></div>
      <div className={styles.blurCircle}></div>
      <div className={styles.blurCircle}></div>
      <div className={styles.blurCircle}></div>
      <div className={styles.blurCircle}></div>
      <div className={styles.blurCircle}></div>
      <div className={styles.blurCircle}></div>

    </div>
  )
}

export default MainContent