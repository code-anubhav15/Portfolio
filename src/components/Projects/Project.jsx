import React from 'react'
import './Project.css'
import title_pattern from '../../assets/img/theme_pattern.svg'
import project_data from './ProjectData.js'

const Project = () => {
  return (
    <div id='project' className='project'>
      <div className="project-title">
        <h1>PROJECTS</h1>
        <img src={title_pattern} alt=""/>
      </div>
      <div className="project-container">
        {project_data.map((project,index)=>{
            return <img key={index} src={project.imgUrl} alt=""/>
        })}
      </div>
    </div>
  )
}

export default Project
