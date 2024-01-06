import { Container } from 'react-bootstrap';
import { Parallax } from 'react-parallax';

const Home = () => {
  return(
      <>
      <Parallax className="w-full" blur={0} bgImage="../assets/parallax/full.png" bgImageAlt="background" strength={200}>
      <h1>Home</h1>
      </Parallax>
      </>
  )
}
export default Home;