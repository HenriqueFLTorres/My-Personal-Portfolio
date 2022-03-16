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
        <a rel="noreferrer" href='github.com/HenriqueFLTorres' target='_blank'>
          <Github className={styles.icon}/>
        </a>
        <a rel="noreferrer" href="www.linkedin.com/in/henriquefltorres/" target="_blank">
          <LinkedIn className={styles.icon}/>
        </a>
        <a href='/components/Mir4ccSS1.png' target='_blank'>
          <Paper className={styles.icon}/>
        </a>  
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