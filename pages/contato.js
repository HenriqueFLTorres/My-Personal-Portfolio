import React from 'react'
import Navbar from '../components/Navbar'
import WIP from '../components/WIP'

import styles from '../styles/contato.module.css'

import Github from '../SVG/Github.js'
import Paper from '../SVG/Paper.js'
import LinkedIn from '../SVG/LinkedIn.js'

const contato = () => {
  return (
    <div className={styles.contatoBG}>
        <Navbar tab={2}/>
        <div style={styles.contact}>
          <div style={styles.basics}>
          <Github/>
          </div>
        </div>
        <WIP/>
    </div>
  )
}

export default contato