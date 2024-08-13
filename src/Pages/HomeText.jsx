import { Container, Row, Col } from "react-bootstrap";
import screen1 from '../assets/images/screen1.png';
import screen2 from '../assets/images/screen2.png';
import screen3 from '../assets/images/screen3.png';

const HomeText = () => {
    return(
        <>
        <Container>
            <Row>
                <h3 className="about-title text-center mt-5">Tarnished of the Lands Between</h3>
                <p className="card-text mt-3">The Golden Order has been shattered. Throughout the Lands Between, Demigods holding shards of the Elden Ring squabble and make war over the ruins of a perfect realm, now abandoned by the golden guidance of the Greater Will.
                As the echoes of this conflict thunder in the distance, an outcast arrives. Once, their ancestors called the Lands Between home, but the blessed light of grace was lost to their tribe long ago and they were expelled from the kingdom. They are the Tarnished, and they have returned to claim the Elden Lordship promised to them by legend.
                This is the world of ELDEN RING. As a Tarnished, the Lands Between await your exploration. You will ride through the vast fields, gallop over rolling hills, and leap to the top of rocky crags on your ephemeral steed, revealing a world teeming with life and danger.
                In the grand fields where your journey begins, mythic creatures prowl the veldts, ineffable horrors lurk in the bogs and marshes, and all manner of soldiers and itinerant warriors are waiting for those who wander unawares. Shy creatures nibble on sweet grasses or scuttle through the underbrush.
                Those few inhabitants who are not mad or hostile linger near the broken remnants of cities left behind by the Shattering. They may have answers for you, if you help them. Above them all, ensconced in vast legacies bristling with traps, secrets, and guardians, the Demigods – warped Lords who began as members of a royal and noble family – rule their domains with the unyielding power granted by shards of the Elden Ring.</p>
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