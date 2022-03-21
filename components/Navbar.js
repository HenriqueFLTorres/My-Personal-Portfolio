import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Navbar.module.css'
import clsx from 'clsx'

import HTLogo from '../SVG/HTLogo'
import Navitems from '../Data/Navitems.json'
import NavitemsEN from '../Data/NavitemsEN.json'
import Brazil from '../Images/Brazil.png'
import Usa from '../Images/USA.png'


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
                  <Image src={Brazil} alt="eng" width={50} height={50} className={styles.Icon}/>
              </div>
            </Link>
            <Link href="/en">
              <div className={ clsx({ [styles.FlagActive]: lang === "en", [styles.Flag]: lang !== "en" }) }>
                  <Image src={Usa} alt="eng" width={50} height={50} className={styles.Icon}/>
              </div>
            </Link>
            </div>
        </div>
  )
}

export default Navbar