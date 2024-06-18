import React from 'react';
import './Skills.css';
import skillsData from './Skills_data.js';

const Skills = () => {
  return (
    <div id='skill' className='skill'>
      <div className="skill-title">
        <h1>Skills</h1>
      </div>
      <div className="skill-content">
        {skillsData.map((category, index) => (
          <div className="skill-card" key={index}>
            <h2>{category.category}</h2>
            <div className="card-icons">
              {category.skills.map((skill, idx) => (
                <div className="icons-text" data-level={skill.level} key={idx}>
                  <img src={skill.icon} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
