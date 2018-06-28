import React from 'react';
import './styles.css';


const ProjectsSections = ({ projectDetails }) => {
  let target;

  if (projectDetails.title === 'NSRDB REDESIGN') {
    target = true;
  }

  const linkTags = () => {
    return (
      <div>
        <a className='links' target="_blank" href={projectDetails.url}>LIVE SITE</a>
        <a className='links' target="_blank" href={projectDetails.repo.repo1}>SEE THE CODE</a>
      </div>
    )
  }

  const nsrdbTags = () => {
    return (
      <div>
        <a className='links' target="_blank" href={projectDetails.repo.repo1}>SEE CODE FOR DESGIN</a>
        <a className='links' target="_blank" href={projectDetails.repo.repo2}>SEE CODE FOR VISUALIZATION</a>
      </div>
    )
  }
 
  return (
    <div className='projectDetails' id={projectDetails.name}>
      <div className='part1'>
        <h2>{ projectDetails.title }</h2>
        <h4>{ projectDetails.headline }</h4>
        <p className='short_dec'>{ projectDetails.decription }</p>
        <img className='gif' src={ projectDetails.gif } />
      </div>
      <div className='part2'>
        <div className='img_box'>
          <img className='img_project' src={ projectDetails.pictureColor } />
        </div>
        <div className='long_dec_box'>
          <p className='project_longDec'>{ projectDetails.longDeription} </p>
          <p className='project_longDec'>{ projectDetails.longDeription2 }</p>
          { target ? nsrdbTags() : linkTags() }
        </div>
        <br className='break'/>
      </div>
    </div>

  )
}

export default ProjectsSections;
