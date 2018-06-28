import React from 'react';
import Intro  from '../Intro';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import ProjectContainer from '../ProjectContainer';
import WorkExperience from '../WorkExperience';
import Contact from '../Contact';

const Main = () => {
  return(
    <main>
      <Intro />
      <ProjectContainer />
      <Skills />
      <Contact />
    </main>
  )
}

export default Main;