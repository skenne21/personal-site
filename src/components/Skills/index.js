import React from 'react';
import './styles.css';

const Skills = () => {
  return(
    <section className='Skills'>
      <h2>SKILLS</h2>
      <div className='FE-skills'>
        <h3>FRONT END</h3>
        <ul>
          <li>JavaScript ES6</li>
          <li>React</li>
          <li>React Router 4</li>
          <li>Redux</li>
          <li>jQuery</li>
          <li>JSON</li>
          <li>REST API</li>
          <li>Data Visualization</li>
          <li>HTML5</li>
          <li>HTML Canvas</li>
          <li>CSS3</li>
          <li>SASS</li>
          <li>Version Control/Git</li>
          <li>Responsive Design</li>
          <li>Testing using Mocha/Chai/Jest/Enzyme</li>
          <li>Accessibility</li>
          <li>Working in an Agile Environment</li>
        </ul>
      </div>
      <div className='BE-skills'>
        <h3>BACK END</h3>
        <ul>
          <li>Node.js</li>
          <li>Express with Knex</li>
          <li>PostgreSQL</li>
          <li>Deploying to Heroku</li>
          <li>WebSocket</li>
          <li>OAuth</li>
          <li>PWAs</li>
          <li>JWTS</li>
          <li>Server-Side Testing</li>
        </ul>
      </div>
    </section>
  )
}

export default Skills;