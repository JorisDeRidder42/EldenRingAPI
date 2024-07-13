import {Container} from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import hero from '../assets/parallax/charachter.png';
import LanguageContext from '../Context/languageContext';
import useLanguage from '../Hooks/useLanguage';
import { useContext } from 'react';
import { Parallax } from 'react-scroll-parallax';

const Home = () => {
  const {text} = useLanguage()
    const {selectedLanguage} = useContext(LanguageContext)
  return(
      <>
      <div className='bg-img'>
          {/* <Parallax speed={10}> */}
            <Image src={hero} className='hero' alt={'background'}/>
          {/* </Parallax> */}
      </div>
      </>
  )
}
export default Home;