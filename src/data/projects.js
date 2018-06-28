import nsrdbPhoto from '../assest/nsrdb-bw.png';
import gameTime from '../assest/gametimeBW.png';
import skyWatch from '../assest/skywatchBW.png';
import palettePicker from '../assest/palette-pickeBW.png';
import comp2 from '../assest/static-comp-2BW.png';
import comp3 from '../assest/static-comp-3BW.png';
import nsrdb from '../assest/nsrdbsite.gif';
import comp3Gif from '../assest/comp3site.gif';
import comp2Gif from '../assest/comp2site.gif';
import pickerGif from '../assest/picker.gif';
import game from '../assest/game.gif';
import sky from '../assest/sky.gif';
import nsrdbColor from '../assest/nsrdb-color.png';
import comp2Color from '../assest/color-comp2.png';
import comp3Color from '../assest/colorComp3.png';
import gameColor from '../assest/game-color.png';
import paletteColor from '../assest/palettePicker-color.png';
import skyColor from '../assest/skywatch-color.png';



export const projects = [
  {
    title: 'NSRDB REDESIGN',
    url: '',
    decription: 'Worked with NREL on creating and redesigning NSRDB site. We Implemented design concepts, created content and a layout using HTML5 and CSS3. Built a PostgreSQL and Express database to create data visualization to showcase database.',
    longDeription: 'For this project, my partner and I Collaborated with NREL (National Renewable Energy Laboratory) located in Golden CO. We were asked to redesign their website for one of their databases. They wanted to build a modern website that was easier to navigate, they wanted to keep all original content but presented in a modern and user-friendly way. This project took us about 6 months to work on, the project grow over time and took many iterations for the design and layout of the site. We built the site with static pages with HTML5, CSS3, and javascript. The site was built responsively, Aria standards, and works across-browsers. We were responsible for all stages of the development and design of this project.',
    longDeription2: 'The Second part of the redesign of this project was to build a data visualization with NREL Solar radiation measurements.  We built a  platform that is interactive for users and helps give user\'s light on the database. The platform was built using a PostgreSQL database with express and knex. Data visualization was built using Leaflet geoJson and timelapse extensions, with jQuery.',
    picture: nsrdbPhoto,
    pictureColor: nsrdbColor,
    repo: {
      repo1:'https://github.com/mmdberg/nsrdb--redesign',
      repo2: 'https://github.com/skenne21/nsrdb--data-visualization'
    },
    headline: 'Collaborated with NREL to design a modern web application for database.',
    gif: nsrdb,
    link: '/portfolio#nsrdb',
    name: 'nsrdb'
  },
  {
    title: 'SKY WATCH',
    url: 'http://skenne21-sky-watch.surge.sh/',
    decription: 'Built a Educational app using Modular React components with ES6 and React-Router. This app was built to populate information with SpaceX API and YouTube API, to allow users a tool to learn about SpaceX new technologies. This app was Built using OAuth and Firebase for user authentication. It was tested using Enzyme and Jest.',
    longDeription: 'This project is one of my favorites, As a personal project, I wanted to build an application that was built using React, Redux and 3rd party API\'s. As a lover of space and exploration, I was inspired by the SpaceX API to build an application that could be used as an educational tool for indivdual\'s interested in learning more about SpaceX. For this project, I also pulled in the YouTube API to show the most recent launches of SpaceX.',
    longDeription2: '',
    picture: skyWatch,
    pictureColor: skyColor,
    repo: {
      repo1: 'https://github.com/skenne21/sky-watch'
    },
    headline: 'A SpaceX educational app built with React, Redux, and React-Router',
    gif: sky,
    link: '/portfolio#skyWatch',
    name: 'skyWatch'
  },
  {
    title: 'PALETTE PICKER',
    url: 'skenne21-palette-picker.herokuapp.com',
    decription: `Project was created to learn one-to-many data structures. The database was built with Node.js, PostgreSQL, and Express with knex.  The Frontend of the application was built using  jQuery, HTML, CSS3. The server was tested using Mocha and Chai libraries.`,
    longDeription:'The inspiration for this project came from the site coolors, I used this project as a learning tool to build an application that required a one-to-many database. The database was built with PostgreSQL with express and knex. The application lets users randomly generate color palettes, to pick their favorite colors. If the user finds the perfect color combination user can save palette to one of their projects.',
    longDeription2: '',
    picture: palettePicker,
    pictureColor: paletteColor,
    repo: {
      repo1: 'https://github.com/skenne21/Palette-Picker'
    },
    headline: 'An App to help with determining color schemes for your next project',
    gif: pickerGif,
    link: '/portfolio#palette',
    name: 'palette'
  },
  {
    title: 'GAME TIME',
    url: 'http://skenne21-game-time.surge.sh/',
    decription: 'Recreated the game Break Out using Canvas and ES6 OOP Classes, The game was tested using Mocha and Chai.',
    picture: gameTime,
    pictureColor: gameColor,
    longDeription: 'This classic game was built using Canvas and ES6 javascript using OPP design. This project was a fun endeavor in understanding OPP, we built this game to have multiple levels to make it harder for the user to win as the game goes on. If You\'re interested in beating our high score play online!',
    longDeription2:'',
    repo: {
      repo1: 'https://github.com/skenne21/game-time'
    },
    headline: 'Breakout, revitalized using OOP and Canvas',
    gif: game,
    link: '/portfolio#gameTime',
    name: 'gameTime'
  }, 
  {
    title: 'UX UI CHALLENGE',
    url: 'https://skenne21.github.io/SK-1711-static-comp-2/',
    decription: `This static comp challenge was part of a series of three challenges to build CSS and HTML muscles. I was asked to recreate a static comp and wire frame to pixel perfect detail, I was given a bit of creative license, however the objective of this project was to build comp that respects the integrity of the original design and wireframe.`,
    longDeription: 'This Challenge was built using pure CSS3 and HTML5. It was built responsively and looks great on a mobile layout. The inspiration for the creative license on this comp came from my deep love for plants and botanical medicine. The style and integrity of the design stayed true to the original design.',
    longDeription2: '',
    picture: comp2,
    pictureColor: comp2Color,
    repo: {
      repo1:'https://github.com/skenne21/SK-1711-static-comp-2'
    },
    headline: 'UX UI Challenge',
    gif: comp2Gif,
    link: '/portfolio#comp2',
    name: 'comp2'
  }, 
  {
    title: 'UX UI CHALLENGE',
    url: 'https://skenne21.github.io/SK-1711-static-comp-3/',
    decription: `This static comp challenge was part of a series of three challenges to build CSS and HTML muscles. I was asked to recreate a static comp and wire frame to pixel perfect detail, I was given a bit of creative license, however the objective of this project was to build comp that respects the integrity of the original design and wireframe.`,
    longDeription: 'This Challenge was built using pure CSS3 and HTML5. It was built responsively and looks great on a mobile layout. The design for this comp was an inspiration by Napoleon Dynamite, the color and photos keep to the art of this design choice but the style and integrity of the design stayed true to the original design of the challenge.',
    longDeription2: '',
    picture: comp3,
    pictureColor: comp3Color,
    repo: {
      repo1:'https://github.com/skenne21/SK-1711-static-comp-3'
    },
    headline: 'UX UL Challenge',
    gif: comp3Gif,
    link: '/portfolio#comp3',
    name: 'comp3'
  }
]