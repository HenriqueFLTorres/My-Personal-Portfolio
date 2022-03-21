import React from 'react'

import styles from '../styles/contato.module.css'


import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { BsDiscord } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

const contato = ({ lang }) => {
  return (
    <div className={styles.contatoBG} id="Contact">
        <div className={styles.contact}>
          <div className={styles.basics}>
            <a className={styles.github} rel="noreferrer" href='https://github.com/HenriqueFLTorres' target='_blank'>
              <AiFillGithub />
              <h1>Github</h1>
              <h4>github.com/HenriqueFLTorres</h4>
            </a>
            <a className={styles.linkedIn} rel="noreferrer" href="https://www.linkedin.com/in/henriquefltorres/" target="_blank">
              <BsLinkedin/>
              <h1>LinkedIn</h1>
              <h4>linkedin.com/in/henriquefltorres/</h4>
            </a>
            <a className={styles.discord} rel="noreferrer" href='https://www.discord.com/users/514829262902132754' target="_blank">
              <BsDiscord/>
              <h1>Discord</h1>
              <h4>Treffy#4964</h4>
            </a>
          </div>

          <div className={styles.sendEmail}>
            <SiGmail className={styles.emailIcon}/>
            <div className={styles.info}>
              <h1>Gmail</h1>
              <a href="mailto:henriquefltorres@gmail.com" target="_blank" className={styles.emailButton}>{ lang === "en" ? "Send an Email" : "Envie um Email" }</a>
            </div>
            
          </div>

        </div>
    </div>
  )
}

export default contato