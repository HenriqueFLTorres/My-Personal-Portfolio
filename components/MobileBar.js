import React, { useState } from 'react'
import Link from 'next/link'


import styles from '../styles/Mobilebar.module.css'
import clsx from 'clsx'

import HTLogo from '../SVG/HTLogo'
import Navitems from '../Data/Navitems.json'

const MobileBar = ({ tab }) => {
    const [selected, setSelected] = useState(tab)
    const [mobile, setMobile] = useState(false)


  return (
    <div className={ clsx( styles.MobileBar , { [styles.barCollapse]: !mobile } ) }>
        <div className={styles.header}>
            <HTLogo className={styles.Logo}/>
            <div className={ clsx( styles.burguer , { [styles.burguerActive]: mobile } ) } onClick={() => setMobile(!mobile)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className={ clsx( styles.LinksBG , { [styles.HideBG]: !mobile } ) } onClick={() => setMobile(false)} >
            <ul className={ clsx( styles.Navlinks , { [styles.Hide]: !mobile } ) }>
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

    </div>
  )
}

export default MobileBar