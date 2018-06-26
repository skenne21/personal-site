import nsrdbPhoto from '../assest/nsrdb-bw.png';
import gameTime from '../assest/gametimeBW.png';
import skyWatch from '../assest/skywatchBW.png';
import palettePicker from '../assest/palette-pickeBW.png';
import comp2 from '../assest/static-comp-2BW.png';
import comp3 from '../assest/static-comp-3BW.png';


export const projects = [
  {
    title: 'NSRDB',
    url: '',
    decription: 'Worked with NREL on creating and redesigning NSRDB site. We Implemented design concepts, created content and a layout using HTML5 and CSS3. Built a PostgreSQL and Express database to create data visualization to showcase database.',
    picture: nsrdbPhoto,
    repo: 'github.com/mmdberg/nsrdb--redesign',
    headline: 'Collaborated with NREL to design a modern web application for database.'
  },
  {
    title: 'Sky Watch',
    url: '',
    decription: 'Built a Educational app using Modular React components with ES6 and React-Router. This app was built to populate information with SpaceX API and YouTube API, to allow users a tool to learn about SpaceX new technologies. This app was Built using OAuth and Firebase for user authentication. It was tested using Enzyme and Jest.',
    picture: skyWatch,
    repo: 'github.com/skenne21/sky-watch',
    headline: 'A SpaceX educational app built with React, Redux, and React-Router'
  },
  {
    title: 'Palette Picker',
    url: 'skenne21-palette-picker.herokuapp.com',
    decription: `Project was created to learn one-to-many data structures. The database was built with Node.js, PostgreSQL, and Express with knex.  The Frontend of the application was built using  jQuery, HTML, CSS3. The server was tested using Mocha and Chai libraries.`,
    picture: palettePicker,
    repo: 'github.com/skenne21/Palette-Picker',
    headline: 'An App to help with determining color schemes for your next project' 
  },
  {
    title: 'GameTime',
    url: 'http://skenne21-game-time.surge.sh/',
    decription: 'Recreated the game Break Out using Canvas and ES6 OOP Classes, The game was tested using Mocha and Chai.',
    picture: gameTime,
    repo: 'https://github.com/skenne21/game-time',
    headline: 'Breakout, revitalized using OOP and Canvas'
  }, 
  {
    title: 'UX UI Challenge',
    url: 'https://skenne21.github.io/SK-1711-static-comp-2/',
    decription: `This static comp challenge was part of a series of three challenges to build CSS and HTML muscles. I was asked to recreate a static comp and wire frame to pixel perfect detail, I was given a bit of creative license, however the objective of this project was to build comp that respects the integrity of the original design and wireframe.`,
    picture: comp2,
    repo: 'https://github.com/skenne21/SK-1711-static-comp-2',
    headline: 'UX UI Challenge',
  }, 
  {
    title: 'UX UI Challenge',
    url: 'https://skenne21.github.io/SK-1711-static-comp-3/',
    decription: `This static comp challenge was part of a series of three challenges to build CSS and HTML muscles. I was asked to recreate a static comp and wire frame to pixel perfect detail, I was given a bit of creative license, however the objective of this project was to build comp that respects the integrity of the original design and wireframe.`,
    picture: comp3,
    repo: 'https://github.com/skenne21/SK-1711-static-comp-3',
    headline: 'UX UL Challenge'
  }
]