import {Container} from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import hero from '../assets/parallax/hero.png';
import bg from '../assets/parallax/Bg-parallax.jpg';
import LanguageContext from '../Context/languageContext';
import useLanguage from '../Hooks/useLanguage';
import { useContext } from 'react';
import { Parallax } from 'react-parallax';
import HomeAbout from './HomeAbout';

const Home = () => {
  const {text} = useLanguage()
    const {selectedLanguage} = useContext(LanguageContext)
  return(
      <div className="bg-img">
      <Parallax className="bg-img" strength={200} blur={1} bgImage={bg} bgImageAlt="the bg">
        <div className='center'>
          <h1 className='text-white title'>The Golden Order has been broken.</h1>
          <img src={hero} alt='hero' className='hero'/>
        </div>
      </Parallax>
      <HomeAbout/>
      </div>
  )
}
export default Home;