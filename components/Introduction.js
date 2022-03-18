import React from 'react'

import styles from '../styles/introduction.module.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

const Introduction = ({ lang }) => {
  return (
      <div className={styles.marginTop} id="Introduction">
    <div className={styles.introDiv} > 
      <div className={styles.introduction}>
        { lang === "en" ? 

            <h3>
            Hi, I'm <div className={styles.highlighted}>Henrique Torres</div>, <br/>
            a <div className={styles.highlighted}>front-end react</div> <br/>
            developer.
            </h3>
            :
            <h3>
            Olá, eu sou<div className={styles.highlighted}> Henrique Torres</div>, <br/>
            um desenvolvedor <div className={styles.highlighted}>front-end </div>  <br/>
            de <div className={styles.highlighted}>react</div>.
            </h3>

        }
        
        <div className={styles.skillsIcon}>
          <AiFillHtml5 className={styles.htmlIcon}/>
          <DiCss3 className={styles.cssIcon}/>
          <IoLogoJavascript className={styles.jsIcon}/>
          <FaReact className={styles.reactIcon}/>
          <SiNextdotjs className={styles.nextIcon}/>
        </div>
      </div>
      <div className={styles.about}>

      { lang === "en" ? 

      <h5>A person <div className={styles.highlighted}>fascinated</div> and <div className={styles.highlighted}>curious</div> about the world of <div className={styles.highlighted}>programming</div>, 
      and even with only a few months studying, I can say with certainty that it is my <div className={styles.highlighted}>passion</div>.</h5>
      :
      <h5>Uma pessoa <div className={styles.highlighted}>fascinada</div> e <div className={styles.highlighted}>curiosa</div> sobre o mundo da <div className={styles.highlighted}>programação</div>,
      e mesmo com apenas alguns meses estudando, posso dizer com toda certeza que é a minha <div className={styles.highlighted}>paixão</div>.</h5>

      }

      </div>
    </div>
    </div>
  )
}

export default Introduction