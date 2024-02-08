import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

const CardLoader = () => {
    return(
        <Card className={`m-2 p-2 h-100`}>
            <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={2} />
            </Placeholder>
        <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={5} />
            <Placeholder xs={6} />
            <Placeholder xs={9} />
            <Placeholder xs={4} />
            </Placeholder>
            <div className='d-grid gap-2'>
            <Placeholder.Button variant="primary" xs={6} />
            </div>
            </Card.Body>
        </Card> 
    )
}
export default CardLoader;