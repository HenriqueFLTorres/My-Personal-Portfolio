import React, { useState } from 'react'
import Link from 'next/link'


import styles from '../styles/Navbar.module.css'
import clsx from 'clsx'

import HTLogo from '../SVG/HTLogo'
import Navitems from '../Data/Navitems.json'
import NavitemsEN from '../Data/NavitemsEN.json'
import Brazil from '../SVG/Brazil.js'
import USA from '../SVG/USA.js'


const Navbar = ({ tab, lang }) => {
  const [selected, setSelected] = useState(tab)

  return (
        <div className={styles.Navbar}>
            <HTLogo className={styles.Logo}/>
            <ul className={styles.Navlinks}>
              {( lang === "en" ? NavitemsEN : Navitems).map((navLink, index) => {
                const { title, redirect } = navLink
                return (
                  <li key={index} className={clsx({ [styles.linkActive]: selected === index })}>
                    <Link href={redirect} >
                      <a onClick={() => setSelected(index)} >{title}</a>
                    </Link>
                  </li>
                )
              })}
              
            </ul>
            <div className={styles.language}>
            <Link href="/">
              <div className={ clsx({ [styles.FlagActive]: lang !== "en", [styles.Flag]: lang === "en" }) }>
                  <Brazil className={styles.Icon}/>
              </div>
            </Link>
            <Link href="/en">
              <div className={ clsx({ [styles.FlagActive]: lang === "en", [styles.Flag]: lang !== "en" }) }>
                  <USA className={styles.Icon}/>
              </div>
            </Link>
            </div>
        </div>
  )
}

export default Navbar