import React from 'react'
import BigProjectCard from '../components/BigProjectCard'

import bigProjects from '../Data/bigProjects.json'
import bigProjectsEN from '../Data/bigProjectsEN.json'

import styles from '../styles/projects.module.css'
import { FaGithubSquare } from 'react-icons/fa'

const Projects = ({ lang }) => {
  return (
    <div className={styles.marginTop} id="Projects">
      <div className={styles.projetosBackground}>
          { lang === "en" ? <h1 className={styles.bigTitle}>See some projects!</h1> : <h1 className={styles.bigTitle}>Veja alguns projetos!</h1> }
          <div className={styles.bigProjectsContainer}>
            { (lang === "en" ? bigProjectsEN : bigProjects).map((project, index) => {
              const { title, date, images, description, technologies, github, linkWeb, changelog } = project

              return <BigProjectCard key={index} title={title} date={date} images={images} description={description} technologies={technologies} github={github} linkWeb={linkWeb} changelog={changelog} />
            })}
          </div>
          <div className={styles.seeMore}>
            { lang === "en" ? <h1>Visit my github for more projects</h1> : <h1>Acesse meu github para mais projetos</h1> }
            <FaGithubSquare className={styles.bigGit} />
            <h4><a rel="noreferrer" href='https://github.com/HenriqueFLTorres' target="_blank">github.com/HenriqueFLTorres</a></h4>
          </div>
      </div>
    </div>
  )
}

export default Projects