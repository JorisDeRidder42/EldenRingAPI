import { Container, Row, Col } from "react-bootstrap";
import dragon from '../assets/dragon.jpg';
import { FaShoppingCart,FaXbox,FaSteam, } from "react-icons/fa";
import { SiPlaystation4,SiPlaystation5 } from "react-icons/si";

const HomeAbout = () => {
    const logoStyle = { color: 'var(--gray)', fontSize: '2em', marginLeft: '1em' };
    const psStyle = { color: 'var(--gray)', fontSize: '3em', marginLeft: '1em' };
    return(
        <>
        <Container>
            <Row>
                <Col md={6}>
                    <h3 className="about-title mt-5">Become the Elden Lord.</h3>
                    <p className="card-text mt-3">In the Lands Between ruled by Queen Marika the Eternal, the Elden Ring, the source of the Erdtree, has been shattered.
                    Marika's offspring, demigods all, claimed the shards of the Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. A war that meant abandonment by the Greater Will.
                    And now the guidance of grace will be brought to the Tarnished who were spurned by the grace of gold and exiled from the Lands Between. Ye dead who yet live, your grace long lost, follow the path to the Lands Between beyond the foggy sea to stand before the Elden Ring.</p>
                    <div className="logo-container">
                        <a href='https://en.bandainamcoent.eu/elden-ring/elden-ring/shop-now#shop-now' target="_blank" className="cta-button">Buy now <FaShoppingCart /></a>
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