import React from 'react';
import Intro  from '../Intro';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import WorkExperience from '../WorkExperience';
import Contact from '../Contact';
import { projects }from '../../data/projects.js';

const Main = () => {
  return(
    <main>
      <Intro />
      <Skills />
      <Portfolio
        projects={ projects }
      />
      <WorkExperience />
      <Contact />
    </main>
  )
}

export default Main;