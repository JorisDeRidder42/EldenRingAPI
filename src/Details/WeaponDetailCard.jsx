
import { useContext } from 'react';
import {Container,Card, Row, Col, ListGroup} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../Themes/themeContext';
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const WeaponDetailCard = () => {
    const history = useNavigate();
    // const {data: weaponData, isError} = useFetch({baseURL: BASE_URL, id : id});

    if(isError){
      <h1>Error fetching weapon data</h1>
    }

    if(!weaponData){
      return <h1>Weapon could not be found</h1>
    }

    return(
      <Container>
      {/* <Card className={selectedTheme}>
        <div className='backLink' onClick={() => history(-1)}>Back</div>
      <Card.Img variant="top" src={weaponData?.image} className="w-25"/>
    <Card.Body>
      <Card.Title>{weaponData?.name}</Card.Title>
      <Card.Text>
        {weaponData?.description}
      </Card.Text>
      <Row>
          <Col>
          <p>Attack</p>
          <ListGroup>
            {weaponData?.attack.map(a => <ListGroup.Item key={a.name} variant={selectedTheme}>{a.name} - {a.amount}</ListGroup.Item>)}
          </ListGroup>
          </Col>
          <Col>
          <p>Defence</p>
          <ListGroup>
          {weaponData?.defence.map(d => <ListGroup.Item key={d.name} variant={selectedTheme}>{d.name} - {d.amount}</ListGroup.Item>)}
          </ListGroup>
          </Col>
      </Row>
      <Row>
          <Col>
          <p>scalesWith</p>
          <ListGroup>
          {weaponData?.scalesWith.map(s => <ListGroup.Item key={s.name} variant={console.log(selectedTheme)}>{s.name} - {s.scaling}</ListGroup.Item>)}
          </ListGroup>
          </Col>
          <Col>
          <p>requiredAttributes</p>
          <ListGroup>
          {weaponData?.requiredAttributes.map(r => <ListGroup.Item key={r.name} variant={selectedTheme}>{r.name} - {r.amount}</ListGroup.Item>)}
          </ListGroup>
          </Col>
      </Row>
    </Card.Body>
    </Card> */}
  </Container>
    );
  }

export default WeaponDetailCard;