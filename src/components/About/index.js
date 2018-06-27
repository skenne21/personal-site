import React from 'react';
import Header from '../Header/';
import Footer from '../Footer/';
import Nav from '../Nav/';
import './styles.css';
import { Link } from 'react-router-dom';
import image1 from '../../assest/moutian.jpg';
import image2 from '../../assest/tree.JPG';
import image3 from '../../assest/snowMout.JPG';
import image4 from '../../assest/fall.jpg';
import image5 from '../../assest/utah.jpeg';
import image6 from '../../assest/snowmout2.JPG';


const About = (props) => {
  const { history } = props
  return(
    <div className='About'>
      <Nav history={ history }/>
      <Header />
      <section className='whoAmI'>
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
      </section>
      <section className='picture-collage'>
        <section className='main__collage' >
          <img className='main__collage__image main-image1' src={ image1 } />
          <img className='main__collage__image main-image2' src={ image2 } />
          <img className='main__collage__image main-image3' src={ image3 } />
          <img className='main__collage__image main-image4' src={ image4 } />
          <img className='main__collage__image main-image5' src={ image5 } />
          <img className='main__collage__image main-image6' src={ image6 } />
        </section>
      </section>
      <section className='whatHaveIDone'>
        <h3>What I have Done & What I can Do?</h3>
        <p>Feel Free to take a deeper look at what I have done over the years!</p>
        <Link
        className="about_me_button"
        to="/resume"
        >VIEW MY RESUME
        </Link>
        <p>Take a look into some of the Projects I have done!</p>
        <Link
        className="about_me_button"
        to="/portfolio"
        >VIEW MY PORTFOLIO
        </Link>
      </section>
      <section className='contact'>
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
      </section>
      <Footer />
    </div>
  )
}

export default About;
