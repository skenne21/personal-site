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
    console.log(project.picture)
    return(
      <div>
        <div className='front'>
          <img src={project.picture}/>
          <h3 className='title'>{project.title}</h3>
        </div>
        <div className='back'>
          <h3 className='projectHeadline'>{ project.title }</h3>
          <p>{ project.decription }</p>
          <button className='project_button'>SHOW MORE</button>
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
