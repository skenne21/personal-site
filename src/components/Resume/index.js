import React from 'react';
import Header from '../Header';
import NavBar from '../Nav';
import Footer from '../Footer';
import './styles.css';

const Resume = (props) => {
  const { history } = props;

  return(
    <div className='Resume'>
      <NavBar history={ history } />
      <Header />
      <a href='https://www.turing.io/sites/default/files/resumes/Sabrina_Kennedy_resume.pdf' target='_blank' className='pdf_button'>VIEW PDF FORMAT</a>
      <section>
        <h3>TECHNOLOGIES</h3>
         <ul className='skills-list'>
          <p className='skills-headers'>DAY-TO-DAY COMFORT: FRONT END</p>
          <li>JavaScript ES6/ jQuery</li>
          <li>React</li>
          <li>React Router 4</li>
          <li>Redux</li>
          <li>REST API</li>
          <li>Data Visualization</li>
          <li>HTML5</li>
          <li>HTML Canvas</li>
          <li>CSS3 / SASS</li>
          <li>Version Control/Git</li>
          <li>Responsive Design</li>
          <li>Mobile First Thinking</li>
          <li>Testing using Mocha/Chai/Jest/Enzyme</li>
          <li>Accessibility</li>
          <li>Agile Methodology</li>
        </ul>
        <ul className='skills-list'>
          <p className='skills-headers'>EXPERIENCE WITH: BACK END</p>
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
        <ul className='skills-list'>
          <p className='skills-headers'>DAY-TO-DAY COMFORT: OTHER SKILLS</p>
          <li>Management</li>
          <li>Working with Clients</li>
          <li>Communcation</li>
          <li>Time Management</li>
          <li>Scheduling</li>
          <li>Team/ Pair Programing</li>
          <li>Learning New Technologies Fast</li>
        </ul>
      </section>
      <section>
        <h3>WORK EXPERIENCE</h3>
        <article className='job'>
          <h3>Lead Trainer / Administrative Coordinator
            <span className='date'>07/2015 to 10/2017</span>
          </h3>
          <h4>Feed Your Soul Fitness
            <span>Denver, CO</span>
          </h4>
          <p>Saucer at id cultivar, decaffeinated café au lait acerbic aroma french press. Kopi-luwak, saucer cup macchiato turkish grounds coffee sugar.

            Cappuccino barista, bar arabica, sweet doppio, so cultivar to go kopi-luwak organic. Flavour carajillo, café au lait, carajillo, coffee ut macchiato grounds irish percolator ut arabica.

            Viennese extra percolator eu saucer foam steamed plunger pot. Coffee seasonal, half and half crema carajillo chicory half and half.

            Wings, robust, sweet chicory cortado macchiato whipped half and half. Whipped mocha carajillo, frappuccino cultivar est flavour to go sweet.
          </p>
        </article>
        <article className='job'>
          <h3>Office Manager/ Recruiter
            <span className='date'>10/2012 to 03/2015</span>
          </h3>
          <h4>Integrative Earth Medicine
            <span>Englewood, CO</span>
          </h4>
          <p>Saucer at id cultivar, decaffeinated café au lait acerbic aroma french press. Kopi-luwak, saucer cup macchiato turkish grounds coffee sugar.

            Cappuccino barista, bar arabica, sweet doppio, so cultivar to go kopi-luwak organic. Flavour carajillo, café au lait, carajillo, coffee ut macchiato grounds irish percolator ut arabica.

            Viennese extra percolator eu saucer foam steamed plunger pot. Coffee seasonal, half and half crema carajillo chicory half and half.

            Wings, robust, sweet chicory cortado macchiato whipped half and half. Whipped mocha carajillo, frappuccino cultivar est flavour to go sweet.</p>
        </article>
        <article className='job'>
          <h3>Produce Manager
            <span className='date'>07/2007 – 09/2012</span>
          </h3>
          <h4>Natural Groceries by Vitamin Cottage
            <span>Denver, CO</span>
          </h4>
          <p>Saucer at id cultivar, decaffeinated café au lait acerbic aroma french press. Kopi-luwak, saucer cup macchiato turkish grounds coffee sugar.

            Cappuccino barista, bar arabica, sweet doppio, so cultivar to go kopi-luwak organic. Flavour carajillo, café au lait, carajillo, coffee ut macchiato grounds irish percolator ut arabica.

            Viennese extra percolator eu saucer foam steamed plunger pot. Coffee seasonal, half and half crema carajillo chicory half and half.

            Wings, robust, sweet chicory cortado macchiato whipped half and half. Whipped mocha carajillo, frappuccino cultivar est flavour to go sweet.</p>
        </article>
      </section>
      <section >
        <h3 className='main-header'>EDUCATION</h3>
        <article>
          <h3 className='education'>Turing School of Software & Design</h3>
          <h4 className='degree'>Software Engineer</h4>
        </article>
        <article>
          <h3 className='education'>Metropolitan State University of Denver</h3>
          <h4 className='degree'>BS Arts and Science</h4>
        </article>
      </section>
      <section id='contact_section'>
        <h3>CONTACT</h3>
        <ul className='contact_info'>
          <li>
            <a>
            LOCATED:<span>Denver, CO</span>
            </a>
          </li>
          <li>
            <a href='mailto:skenne21@gmail.com' target="_blank">
            SEND ME AN EMAIL:<span>skenne21@gamil.com</span>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/sabrina-kennedy/' target="_blank">
              FIND ME ON LINKEDIN@<span>sabrina-kennedy</span></a>
          </li>
          <li>
            <a href='https://github.com/skenne21' target="_blank">
            FOLLOW ME ON GITHUB@<span>skenne21</span>
            </a>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  )
}

export default Resume;