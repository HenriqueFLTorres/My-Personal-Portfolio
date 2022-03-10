import React from 'react'
import BigProjectCard from '../components/BigProjectCard'
import Navbar from '../components/Navbar'

import bigProjects from '../Data/bigProjects.json'

import styles from '../styles/projects.module.css'

const Projetos = () => {
  return (
    <div className={styles.projetosBackground}>
        <Navbar tab={1}/>
        <div className={styles.bigProjectsContainer}>
          {bigProjects.map((project, index) => {
            const { title, date, images, description, technologies } = project

            return <BigProjectCard key={index} title={title} date={date} images={images} description={description} technologies={technologies} />
          })}
        </div>
    </div>
  )
}

export default Projetos