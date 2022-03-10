import React, { useState } from 'react'
import Link from 'next/link'


import styles from '../styles/Navbar.module.css'
import clsx from 'clsx'

import HTLogo from '../SVG/HTLogo'
import Navitems from '../Data/Navitems.json'


const Navbar = ({ tab }) => {
  const [selected, setSelected] = useState(tab)

  const headerStyle = clsx({
    [styles.linkActive]: selected === 0,
    [styles.linkOff]: selected != 0,
  });

  console.log(selected);

  return (
    <div className={styles.Navbar}>
        <HTLogo className={styles.Logo}/>
        <ul className={styles.Navlinks}>
          {Navitems.map((navLink, index) => {
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
    </div>
  )
}

export default Navbar