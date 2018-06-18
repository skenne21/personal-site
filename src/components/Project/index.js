import React from 'react';
import './styles.css';

const Project = ({ project }) => {
 
  

  const renderProjects = () => {
    return(
      <div>
        <div className='front'>
          <img src={ project.picture }/>
          <h3 className='title'>{project.title}</h3>
        </div>
        <div className='back'>
          <h3>{ project.title }</h3>
          <p>{ project.decription }</p>
          <button>SHOW MORE</button>
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
