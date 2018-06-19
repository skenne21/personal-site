import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Intro = () => {
  return(
    <section className='Intro'>
      <h3>Hi, I am a Front End Engineer that loves solving problems with javascript. As a Former Trainer, I am passionate about personal growth and lifelong learning. I love ushering my passion, drive, and creativity alive with javascript.</h3>
      <Link
        className="about_me_button"
        to="/about"
      >LEARN MORE ABOUT ME
      </Link>
    </section>
  )
}

export default Intro;