import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ThemeContext from '../../Context/themeContext';

const ContentCard = ({image, name, description, id}) => {
  const {lightTheme} = useContext(ThemeContext)
  const themeClassBg = lightTheme === true ? 'light' : "dark"
  const themeClassText = lightTheme === true ? 'dark' : "light"

    return( 
    <Card className="my-3" bg={themeClassBg} text={themeClassText} style={{ height: '33rem' }}>
    <Card.Title className='m-3 text-center'>{name}</Card.Title>
    <Card.Img variant="top" className='p-3' src={image} />
    <Card.Body>
      <Card.Text>
      {description.slice(0,description.indexOf('.')) + '...'}
      </Card.Text>
    </Card.Body>
    <Link to={`${id}`}>
      <div className='d-grid gap-2'>
        <Button variant={"primary"}>Details</Button>
      </div>
    </Link>
  </Card>
  );
}
export default ContentCard;