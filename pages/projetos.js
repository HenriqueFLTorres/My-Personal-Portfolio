import React from 'react'
import BigProjectCard from '../components/BigProjectCard'
import Navbar from '../components/Navbar'

import bigProjects from '../Data/bigProjects.json'

import styles from '../styles/projects.module.css'

const Projetos = () => {
  return (
    <div className={styles.projetosBackground}>
        <Navbar tab={1}/>
        <h1 className={styles.bigTitle}>Veja alguns projetos!</h1>
        <div className={styles.bigProjectsContainer}>
          {bigProjects.map((project, index) => {
            const { title, date, images, description, technologies, github, linkWeb } = project

            return <BigProjectCard key={index} title={title} date={date} images={images} description={description} technologies={technologies} github={github} linkWeb={linkWeb} />
          })}
        </div>
        <div className={styles.seeMore}></div>
    </div>
  )
}

export default Projetos