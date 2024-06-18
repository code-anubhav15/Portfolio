import React from 'react';
import './Project.css';
import title_pattern from '../../assets/img/theme_pattern.svg';
import project_data from './ProjectData.js';

const Project = () => {
  return (
    <div id='project' className='project'>
      <div className="project-title">
        <h1>PROJECTS</h1>
        <img src={title_pattern} alt="Pattern"/>
      </div>
      <div className="project-container">
        {project_data.map((project, index) => (
          <img key={index} src={project.imgUrl} alt={`Project ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Project;
