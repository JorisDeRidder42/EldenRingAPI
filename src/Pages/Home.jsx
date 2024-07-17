
import hero from '../assets/parallax/charachter.png';
import bg from '../assets/parallax/Bg-parallax.jpg';
import LanguageContext from '../Context/languageContext';
import useLanguage from '../Hooks/useLanguage';
import { useContext } from 'react';
import { Parallax } from 'react-parallax';
import HomeAbout from './HomeAbout';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Home = () => {
  const {text} = useLanguage()
    const {selectedLanguage} = useContext(LanguageContext)
  return(
      <div className='bg-img'>
      <Parallax blur={2} bgImage={bg} strength={-200}>
        <div className='center'>
        <h1 className='text-white title'>The Golden Order has been broken.</h1>
        <img src={hero} className='hero' alt="hero" />
        </div>
        <div className='icon'>
          <p>Scroll <MdKeyboardDoubleArrowDown /></p>
        </div>
      </Parallax>
      <HomeAbout/>
    </div>
  ) 
}
export default Home;