import { Parallax, Background } from 'react-parallax';

const Home = () => {
  return(
      <>
      <Parallax className="bg" blur={1} bgImage="../assets/parallax/full.png" bgImageAlt="background" strength={400}>
                <h2 className='text-dark intro'>Take a journey into the lands of between</h2> 
        <Background className="custom-bg">
                <img src="../assets/parallax/foreground.png" alt="foreground" className='foreg' />  
                <img src="../assets/parallax/hero.png" alt="hero" className='hero' />
        </Background>
      </Parallax>
      {/* <div className='bg-dark'>
        <h2 className='text-light'>Welcome to the lands between</h2>
      </div> */}
      </>
  )
}
export default Home;