
import hero from '../assets/parallax/charachter.png';
import bg from '../assets/parallax/Bg-parallax.jpg';
import { useContext } from 'react';
import { Parallax } from 'react-parallax';
import HomeAbout from './HomeAbout';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import HomeText from './HomeText';
import useLanguage from "../i18n/useLanguage";

const Home = () => {
  const {text} = useLanguage()
  return(
      <>
      <Parallax blur={2} bgImage={bg} strength={-200}>
        <div className='center'>
        <h1 className='text-white title'>{text['intro']}</h1>
        <img src={hero} className='hero' alt="hero" />
        </div>
        <div className='icon'>
          <p>Scroll <MdKeyboardDoubleArrowDown /></p>
        </div>
      </Parallax>
      <HomeAbout/>
      <HomeText/>
    </>
  ) 
}
export default Home;