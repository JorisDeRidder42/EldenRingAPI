import { Container, Row, Col } from "react-bootstrap";
import screen1 from '../assets/images/screen1.png';
import screen2 from '../assets/images/screen2.png';
import screen3 from '../assets/images/screen3.png';
import useLanguage from "../Hooks/useLanguage";

const HomeText = () => {
    const {text} = useLanguage();
    return(
        <>
        <Container>
            <Row>
                <h3 className="about-title text-center mt-5">{text['tarnished']}</h3>
                <p className="kaart-text mt-3">{text['tarnishedText']}</p>
                <Row>
                    <Col md={4}>
                        <img className="my-5 w-100 images" src={screen1} alt="boss 'monster' with a giant hammer" />
                    </Col>
                    <Col md={4}>
                        <img className="my-5 w-100 images" src={screen2} alt="person riding a horse away from a monster" />
                    </Col>
                    <Col md={4}>
                        <img className="my-5 w-100 images" src={screen3} alt="person using magic on a monster" />
                    </Col>
                </Row>
            </Row>
        </Container>
        </>
    )
}
export default HomeText;