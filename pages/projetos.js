import React from 'react'
import BigProjectCard from '../components/BigProjectCard'
import Navbar from '../components/Navbar'

import bigProjects from '../Data/bigProjects.json'

import styles from '../styles/projects.module.css'
import { FaGithubSquare } from 'react-icons/fa'
import WIP from '../components/WIP'

const Projetos = () => {
  return (
    <div className={styles.projetosBackground}>
        <Navbar tab={1}/>
        <h1 className={styles.bigTitle}>Veja alguns projetos!</h1>
        <div className={styles.bigProjectsContainer}>
          {bigProjects.map((project, index) => {
            const { title, date, images, description, technologies, github, linkWeb, changelog } = project

            return <BigProjectCard key={index} title={title} date={date} images={images} description={description} technologies={technologies} github={github} linkWeb={linkWeb} changelog={changelog} />
          })}
        </div>
        <div className={styles.seeMore}>
          <h1>Acesse meu github para mais projetos</h1>
          <FaGithubSquare className={styles.bigGit} href='https://github.com/HenriqueFLTorres' target='_blank'/>
          <h4><a href='https://github.com/HenriqueFLTorres' target="_blank">github.com/HenriqueFLTorres</a></h4>
        </div>
        <WIP/>
    </div>
  )
}

export default Projetos