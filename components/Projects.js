import React from 'react'
import BigProjectCard from '../components/BigProjectCard'

import bigProjects from '../Data/bigProjects.json'

import styles from '../styles/projects.module.css'
import { FaGithubSquare } from 'react-icons/fa'
import Polygons from './Polygons'

const Projects = () => {
  return (
    <div className={styles.projetosBackground} id="Projects">
      <Polygons/>
        <h1 className={styles.bigTitle}>Veja alguns projetos!</h1>
        <div className={styles.bigProjectsContainer}>
          {bigProjects.map((project, index) => {
            const { title, date, images, description, technologies, github, linkWeb, changelog } = project

            return <BigProjectCard key={index} title={title} date={date} images={images} description={description} technologies={technologies} github={github} linkWeb={linkWeb} changelog={changelog} />
          })}
        </div>
        <div className={styles.seeMore}>
          <h1>Acesse meu github para mais projetos</h1>
          <FaGithubSquare className={styles.bigGit} rel="noreferrer" href='https://github.com/HenriqueFLTorres' target='_blank'/>
          <h4><a rel="noreferrer" href='https://github.com/HenriqueFLTorres' target="_blank">github.com/HenriqueFLTorres</a></h4>
        </div>
    </div>
  )
}

export default Projects