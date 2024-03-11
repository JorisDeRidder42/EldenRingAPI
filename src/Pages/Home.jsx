import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import elden from '../assets/404.jpg'
import LanguageContext from '../Context/languageContext';
import useLanguage from '../Hooks/useLanguage';
import { useContext } from 'react';

const Home = () => {
  const {text} = useLanguage()
    const {selectedLanguage} = useContext(LanguageContext)
  return(
      <>
      <Container>
        <Row>
          <Col  md={4}>
            <Image src={elden} alt={'Knight fighting a dragon'}/>
          </Col>
          <Col md={8}>
              <h2 className='text-end mt-5 cta-text'>{text['intro']}</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col  md={4}>
            <h2 className='text-end mt-5 cta-text'>{text['eldenLord']}</h2>
          </Col>
          <Col md={8}>
              <h2 className='text-end mt-5 cta-text'>{text['intro']}</h2>
          </Col>
        </Row>
      </Container>
      </>
  )
}
export default Home;