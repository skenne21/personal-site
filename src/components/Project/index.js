import React from 'react';
import './styles.css';

const Project = ({ project }) => {
  
  const imageStyle = {
    backgroundImage: `url(${project.picture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-Repeat'

  }
  

  const renderProjects = () => {
    return(
      <div className='project'>
        <div className='front'>
          <img src={project.picture}/>
          <h3 className='title'>{project.title}</h3>
        </div>
        <div className='back'>
          <h3 className='projectHeadline'>{ project.title }</h3>
          <p>{ project.decription }</p>
          <a href={project.link} className='link' id="link">SHOW MORE</a>
        </div>
      </div>
    )
  }

  return(
    <div className='Project'>
     { renderProjects()}
    </div>
  )
}

export default Project;
