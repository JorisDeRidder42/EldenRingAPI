import { Parallax, Background } from 'react-parallax';

const Home = () => {
  return(
      <>
      <Parallax className="bg" blur={2} bgImage="../assets/parallax/full.png" bgImageAlt="background" strength={200}>
                <img src="../assets/parallax/foreground.png" alt="foreground" className='foreg' /> 
                <img src="../assets/parallax/hero.png" alt="hero" className='hero' />
      </Parallax>
      </>
  )
}
export default Home;