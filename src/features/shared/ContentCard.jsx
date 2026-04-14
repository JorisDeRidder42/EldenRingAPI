import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

const ContentCard = ({image, name, description, id ,gridView}) => {

    return( 
    <LinkContainer to={id}>
      <Card className='mt-4 card-grid'>
        {gridView && <Card.Img variant="top" className='card-img-small' src={image} /> }
        <Card.Title className='card-title'>{name}</Card.Title>
          <Card.Text className='card-text'>
          {description.slice(0,description.indexOf('.')) + '...' && description.slice(0,description.indexOf('', 150)) + '...'}
          </Card.Text>
        {gridView && <Button className='button'>Details</Button>}
      </Card>
    </LinkContainer>
  );
}
export default ContentCard;