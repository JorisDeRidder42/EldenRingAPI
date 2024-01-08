import { Container, Image } from 'react-bootstrap';
import { Parallax } from 'react-parallax';


const Home = () => {
  return(
      <>
        <Parallax blur={0} bgImage="../assets/parallax/full.png" bgImageAlt="background" strength={-200}>
          <div className='content'>
            <span className='img-txt'>JOURNEY THROUGH THE LANDS BETWEEN</span>
            <img src="../assets/parallax/hero.png" alt='hero' className='hero'/>
          </div>
        </Parallax>
        <div className='bg-dark h-screen'>
         
        </div>
      </>
  )
}
export default Home;