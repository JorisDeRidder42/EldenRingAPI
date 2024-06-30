import { useContext } from 'react';
import { Suspense } from 'react';
import {Card, Row, Col, ListGroup, Button, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
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
    const {id} = useParams();
    const history = useNavigate();
    const {data: weaponData} = useGetItem(endpoint, id);
    
    if(!weaponData){
        return <h1>Weapon could not be found, try again later</h1>
    }
    
    return(
    <Card className={"mx-4"}>
        <div className='backLink' onClick={() => history(-1)}>Back</div>
        <Container>
          <Row>
            <Col xs={12} sm={6} md={3}>
            <h3 className='text-white'>{weaponData?.data.name}</h3>
              <Card.Img variant="top" src={weaponData?.data.image} className="w-50 center"/>
              <Card.Body>
                <Card.Text className='text-white'>
                  {weaponData?.data.description}
                </Card.Text>
            </Card.Body>
            </Col>
           <Col xs={12} sm={6} md={3}>
          <h5 className='text-white'>Attack</h5>
          <ListGroup>
            {weaponData?.data.attack.map(a => <ListGroup.Item key={a.name} action>{a.name} - {a.amount}</ListGroup.Item>)}
          </ListGroup>
          </Col>
          <Col xs={12} sm={6} md={3}>
          <h5 className='text-white'>Defence</h5>
          <ListGroup>
          {weaponData?.data.defence.map(d => <ListGroup.Item key={d.name} action>{d.name} - {d.amount}</ListGroup.Item>)}
          </ListGroup>
          </Col>
          <Col xs={12} sm={6} md={3}>
          <h6 className='text-white'>ScalesWith</h6>
          <ListGroup>
          {weaponData?.data.scalesWith.map(s => <ListGroup.Item key={s.name}>{s.name} - {s.scaling}</ListGroup.Item>)}
          </ListGroup>
          <Col xs={12} sm={6} md={12}>
          <h6 className='text-white mt-3'>requiredAttributes</h6>
          <ListGroup>
          {weaponData?.data.requiredAttributes.map(r => <ListGroup.Item key={r.name}>{r.name} - {r.amount}</ListGroup.Item>)}
          </ListGroup>
          </Col>
          </Col>
          </Row>
      </Container>
    </Card>
    )
  }
export default WeaponDetailCard;