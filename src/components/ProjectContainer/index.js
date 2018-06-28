import React from 'react';
import Project from '../Project';
import { projects }from '../../data/projects.js';
import './styles.css';

const ProjectContainer = () => {
  const createProjects = () => {
    return projects.map(( project, index ) => {
      return (
        <Project 
          key={ index } 
          project={ project }
        />
      );
    });
  }

  return(
    <section className='ProjectContainer' id='ProjectContainer'>
      <h2>PORTFOLIO</h2>
      <div className='container'>
       { createProjects() }
      </div>
    </section>
  )
}

export default ProjectContainer;