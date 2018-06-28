import React from 'react';
import './styles.css';


const ProjectsSections = ({ projectDetails }) => {
  console.log(projectDetails)
 
  return (
    <div className='projectDetails'>
      <div className='part1'>
        <h2>{ projectDetails.title }</h2>
        <h4>{ projectDetails.headline }</h4>
        <p className='short_dec'>{ projectDetails.decription }</p>
        <img className='gif' src={ projectDetails.gif } />
      </div>
      <div className='part2'>
        <div className='img_box'>
          <img className='img_project' src={ projectDetails.picture } />
        </div>
        <div className='long_dec_box'>
          <p className='project_longDec'>{ projectDetails.longDeription} </p>
          <p className='project_longDec'>{ projectDetails.longDeription2 }</p>
          <button>LIVE SITE</button>
          <button>SEE THE CODE</button>
        </div>
        <br className='break'/>
      </div>
    </div>

  )
}

export default ProjectsSections;
