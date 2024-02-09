import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import elden from '../assets/404.jpg'
const Home = () => {
  return(
      <>
      <Container>
        <Row>
          <Col  md={4}>
            <Image src={elden} alt={'Dragon from elden ring'}/>
          </Col>
          <Col md={8}>
              <h2 className='text-end mt-5 cta-text'>The Golden Order has been broken.</h2>
          </Col>
        </Row>
      </Container>
      </>
  )
}
export default Home;