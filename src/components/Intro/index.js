import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Intro = () => {
  return(
    <section className='Intro'>
      <h3>Milk bar lungo dark wings, turkish robusta, saucer latte breve frappuccino café au lait. Wings, et, viennese at in french press froth, affogato cream ristretto percolator caffeine. Seasonal, a cappuccino cultivar turkish cortado caramelization sugar.</h3>
      <Link
        className="about_me_button"
        to="/about"
      >LEARN MORE ABOUT ME
      </Link>
    </section>
  )
}

export default Intro;