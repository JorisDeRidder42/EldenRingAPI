import { Container, Row, Col } from "react-bootstrap";
import dragon from '../assets/dragon.jpg';
import { FaShoppingCart,FaXbox,FaSteam, } from "react-icons/fa";
import { SiPlaystation4,SiPlaystation5 } from "react-icons/si";
import useLanguage from "../i18n/useLanguage";

const HomeAbout = () => {
    const {text} = useLanguage()
    const logoStyle = { color: 'var(--gray)', fontSize: '2em', marginLeft: '1em' };
    const psStyle = { color: 'var(--gray)', fontSize: '3em', marginLeft: '1em' };
    return(
        <>
        <Container>
            <Row>
                <Col md={6}>
                    <h3 className="about-title mt-5">{text['eldenLord']}</h3>
                    <p className="card-text mt-3">{text['textIntro']}</p>
                    <div className="logo-container">
                        <a href='https://en.bandainamcoent.eu/elden-ring/elden-ring/shop-now#shop-now' target="_blank" className="cta-button">{text['buyNow']}<FaShoppingCart /></a>
                        <a href='https://en.bandainamcoent.eu/elden-ring/elden-ring/shop-now#shop-now' target="_blank" className="button"><FaXbox style={logoStyle} /></a>
                        <a href='https://en.bandainamcoent.eu/elden-ring/elden-ring/shop-now#shop-now' target="_blank" className="button"><FaSteam style={logoStyle} /></a>
                        <a href='https://en.bandainamcoent.eu/elden-ring/elden-ring/shop-now#shop-now' target="_blank" className="button"><SiPlaystation4 style={psStyle} /></a>
                        <a href='https://en.bandainamcoent.eu/elden-ring/elden-ring/shop-now#shop-now' target="_blank" className="button"><SiPlaystation5 style={psStyle} /></a>
                    </div>
                </Col>
                <Col md={6}>
                    <img className="my-5 w-100 images" src={dragon} alt="knight fighting a dragon" />
                </Col>
            </Row>
        <div className="line"></div>
        </Container>
        </>
    )
}
export default HomeAbout;