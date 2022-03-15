import React from 'react'

import styles from '../styles/introduction.module.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

const Introduction = () => {
  return (
    <div className={styles.introDiv}>
      <h3>
        Olá, eu sou<div className={styles.highlighted}> Henrique Torres</div>, <br/>
        um desenvolvedor <div className={styles.highlighted}>front-end </div>  <br/>
        de <div className={styles.blue}>react</div>.
        </h3>
      <div className={styles.skillsIcon}>
        <AiFillHtml5 className={styles.htmlIcon}/>
        <DiCss3 className={styles.cssIcon}/>
        <IoLogoJavascript className={styles.jsIcon}/>
        <FaReact className={styles.reactIcon}/>
        <SiNextdotjs className={styles.nextIcon}/>
      </div>
    </div>
  )
}

export default Introduction