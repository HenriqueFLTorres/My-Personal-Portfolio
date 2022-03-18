import React from 'react'
import Link from 'next/link'

import styles from '../styles/MainContent.module.css'
import HTLogo from '../SVG/HTLogo'

import Github from '../SVG/Github'
import LinkedIn from '../SVG/LinkedIn'
import Paper from '../SVG/Paper'

const MainContent = ({ lang }) => {

  return (
    <div className={styles.mainBackground}>
      <HTLogo className={styles.bigLogo}/>
      <section className={styles.textSection}>
      { lang === "en" ? 

        <p className={styles.mainText}>
        <span className={styles.highlighted}>self-taught</span> programmer <br/>
        motivated by the<br/>
        <span className={styles.highlighted}>curiosity </span>to <span className={styles.highlighted}>learn</span>
        </p> 

        : 

        <p className={styles.mainText}>
        Programador <span className={styles.highlighted}>autodidata </span> <br/>
        motivado pela <br/> <span className={styles.highlighted}>curiosidade</span> de <span className={styles.highlighted}>aprender</span>
        </p> 
        
      }
            
        <div className={styles.icons}>
        <a rel="noreferrer" href='https://github.com/HenriqueFLTorres' target='_blank'>
          <Github className={styles.icon}/>
        </a>
        <a rel="noreferrer" href="https://www.linkedin.com/in/henriquefltorres/" target="_blank">
          <LinkedIn className={styles.icon}/>
        </a>
        <a href={ lang === "en" ? '../static/ResumeEN.pdf' : '../static/ResumePT.pdf' }
          alt="alt text"
          target="_blank"
          download="HenriqueToresCV">
          <Paper className={styles.icon}/>
        </a>  
        </div>
      </section>   
    </div>
  )
}

export default MainContent