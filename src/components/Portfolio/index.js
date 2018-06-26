import React from 'react';
import Project from '../Project';
import { projects }from '../../data/projects.js';
import './styles.css';

const Portfolio = () => {
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
    <section className='Portfolio' id='Portfolio'>
      <h2>PORTFOLIO</h2>
      <div className='container'>
       { createProjects() }
      </div>
    </section>
  )
}

export default Portfolio;