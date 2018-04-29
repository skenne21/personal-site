import React from 'react';
import About  from '../About';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import WorkExperience from '../WorkExperience';
import Contact from '../Contact';

const Main = () => {
  return(
    <main>
      <About />
      <Skills />
      <Portfolio/>
      <WorkExperience />
      <Contact />
    </main>
  )
}

export default Main;