import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import ThemeContext from '../../Context/themeContext';

const ContentCard = ({image, name, description, id}) => {
  const {lightTheme} = useContext(ThemeContext)
  const themeClassBg = lightTheme === true ? 'light' : "dark"
  const themeClassText = lightTheme === true ? 'dark' : "light"

    return( 
    <LinkContainer to={id}>
      <Card className="my-3" bg={themeClassBg} text={themeClassText} border="primary" style={{ height: '33rem' }}>
        <Card.Title className='m-3 text-center'>{name}</Card.Title>
        <Card.Img variant="top" className='p-3' src={image} />
        <Card.Body>
          <Card.Text>
          {description.slice(0,description.indexOf('.')) + '...' && description.slice(0,description.indexOf(' ', 100)) + '...'}
          </Card.Text>
        </Card.Body>
        <LinkContainer to={id}>
          <div className='text-center py-4'>
            <Button variant={"primary px-5"}>Details</Button>
          </div>
        </LinkContainer>
      </Card>
    </LinkContainer>
  );
}
export default ContentCard;