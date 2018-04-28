import React from 'react';
import Project from '../Project';
import './styles.css';

const Portfolio = () => {
  return(
    <section className='Portfolio'>
      <h2>PORTFOLIO</h2>
      <div className='container'>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  )
}

export default Portfolio;