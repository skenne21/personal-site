import React from 'react';
import Header from '../Header/';
import Footer from '../Footer/';
import Nav from '../Nav/';


const About = () => {
  return(
    <div className='About'>
      <Nav />
      <Header />
      <div>
        <h3>WHO AM I AS A PERSON?</h3>
        <p>As a Colorado Native, I love spending my free time in the mountains
         no matter the activity or the type of shoes I have on my feet. I also love
         a great cup of coffee, a good book, or listening to a great podcast.
        </p>
        <p>My path as a Front-End Developer has lead me to focus on Javascript. I love
        the diversity and flexibility that Javascript allows when I am innovating my
        ideas into reality with code.
        </p>
        <p>I was driven towards a career in web development because I love the challenge
        and the reward of figuring out a problem or learning a new language.
        As a former Trainer, I loved working with clients and helping them solve
        there own barriers with fitness and nutrition. I was invested into their
        goals, I bookmarked my own success by seeing and driving my clients to reach
         their goals. I bring this same drive and passion into the code I create. I
         bookmark a completion of a project as a personal win and get fully invested
         into seeing the full lifecycle of a project or idea. I am driven to create
         and innovate code that makes a meaningful impact on community and individuals
         lives.
         </p>
      </div>
      <div className='picture-collage'>
        <article className='pic-1'></article>
        <article className='pic-2'></article>
        <article className='pic-3'></article>
        <article className='pic-4'></article>
        <article className='pic-5'></article>
        <article className='pic-6'></article>
      </div>
      <div>
        <h3>What I have Done & What I can Do?</h3>
        <p>Feel Free to take a deeper look at what I have done over the years!</p>
        <button>VIEW MY RESUME</button>
        <p>Take a look into some of the Projects I have done!</p>
        <button> VIEW MY PORTFOLIO</button>
      </div>
      <div>
        <h3>LETS TALK!</h3>
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
      </div>
      <Footer />
    </div>
  )
}

export default About;
