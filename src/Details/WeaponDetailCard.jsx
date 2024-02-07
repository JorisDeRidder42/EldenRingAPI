import { useContext } from 'react';
import { Suspense } from 'react';
import {Card, Row, Col, ListGroup, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ThemeContext from '../Context/themeContext';
import { useGetItem } from '../Hooks/dataHooks';
import CardLoader from '../Loader/CardLoader';

const WeaponDetailCard = ({endpoint}) => {
    return(
      <Suspense fallback={<CardLoader/>}>
        <WeaponDetailContent endpoint={endpoint}/>
      </Suspense>
    );
  }

  const WeaponDetailContent = ({endpoint}) => {
    const {lightTheme} = useContext(ThemeContext)
    const themeClassBg = lightTheme === true ? 'light' : "dark"
    const themeClassText = lightTheme === true ? 'dark' : "light"
    const {id} = useParams();
    const history = useNavigate();
    const {data: weaponData} = useGetItem(endpoint, id);
    
    if(!weaponData){
        return <h1>Weapons could not be found, try again later</h1>
    }
    
    return(
    <Card className={"mx-4"} bg={`${themeClassBg}`} variant={`${themeClassText}`}>
        <div className='backLink' onClick={() => history(-1)}>Back</div>
      <Card.Img variant="top" src={weaponData?.image} className="w-25 center"/>
    <Card.Body>
      <Card.Title>{weaponData?.name}</Card.Title>
      <Card.Text>
        {weaponData?.description}
      </Card.Text>
      <Row>
          <Col xs={12} sm={6} md={3}>
          <p>Attack</p>
          <ListGroup>
            {weaponData?.attack.map(a => <ListGroup.Item key={a.name} action variant={`${themeClassBg}`}>{a.name} - {a.amount}</ListGroup.Item>)}
          </ListGroup>
          </Col>
          <Col xs={12} sm={6} md={3}>
          <p>Defence</p>
          <ListGroup>
          {weaponData?.defence.map(d => <ListGroup.Item key={d.name} action variant={`${themeClassBg}`}>{d.name} - {d.amount}</ListGroup.Item>)}
          </ListGroup>
          </Col>
      </Row>
      <Row>
          <Col xs={12} sm={6} md={3}>
          <p>scalesWith</p>
          <ListGroup>
          {weaponData?.scalesWith.map(s => <ListGroup.Item key={s.name}>{s.name} - {s.scaling}</ListGroup.Item>)}
          </ListGroup>
          </Col>
          <Col xs={12} sm={6} md={3}>
          <p>requiredAttributes</p>
          <ListGroup>
          {weaponData?.requiredAttributes.map(r => <ListGroup.Item key={r.name}>{r.name} - {r.amount}</ListGroup.Item>)}
          </ListGroup>
          </Col>
      </Row>
    </Card.Body>
  </Card>
    )
  }
export default WeaponDetailCard;