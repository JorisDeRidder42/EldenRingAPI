import { Parallax, Background } from 'react-parallax';

const Home = () => {
  return(
      <>
      <Parallax className="bg" blur={1} bgImage="../assets/parallax/full.png" bgImageAlt="background" strength={200}>
                <h2 className='text-dark intro mb-5'>Journey through the Lands Between</h2> 
                {/* <img src="../assets/parallax/hero.png" alt="hero" className='hero'/> */}
                <img src="../assets/parallax/foreground.png" alt="foreground" className='foreg' />  
      </Parallax>
      <Parallax className="bg" blur={2} bgImage="../assets/parallax/full.png" bgImageAlt="background" strength={200}>
                <h2 className='text-dark intro mb-5'>Journey through the Lands Between</h2> 
                {/* <img src="../assets/parallax/hero.png" alt="hero" className='hero'/> */}
                <img src="../assets/parallax/foreground.png" alt="foreground" className='foreg' />  
      </Parallax>
      </>
  )
}
export default Home;