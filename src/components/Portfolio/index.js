import React from 'react';
import Header from '../Header';
import NavBar from '../Nav';
import Footer from '../Footer';
import ProjectsSections from '../ProjectsSections';
import { projects } from '../../data/projects.js';
import './styles.css';

const Portfolio = (props) => {
  const { history } = props;

  const createProjects = () => {
    return projects.map((project, index) => {
      return (
        <ProjectsSections 
          key={index}
          className='ProjectsSections'
          projectDetails={ project } 
        > 
        </ProjectsSections>
      )
    })
  }

  return (
    <div className='Portfolio'>
      <NavBar history={ history } />
      <Header />
      <section>
        { createProjects() }
      </section>
      <Footer />
    </div>
  )
}

export default Portfolio;