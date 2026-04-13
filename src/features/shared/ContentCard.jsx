import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

const ContentCard = ({image, name, description, id ,gridView}) => {

    return( 
    <LinkContainer to={id}>
      <Card className='mt-4 kaart-grid'>
        {gridView && <Card.Img variant="top" className='kaart-img-small' src={image} /> }
        <Card.Title className='kaart-title'>{name}</Card.Title>
          <Card.Text className='kaart-text'>
          {description.slice(0,description.indexOf('.')) + '...' && description.slice(0,description.indexOf('', 150)) + '...'}
          </Card.Text>
        {gridView && <Button className='button'>Details</Button>}
      </Card>
    </LinkContainer>
  );
}
export default ContentCard;