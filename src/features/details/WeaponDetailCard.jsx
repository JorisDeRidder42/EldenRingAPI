import { useContext } from 'react';
import { Suspense } from 'react';
import {Card, Row, Col, ListGroup, Button, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CardLoader from '../../loader/CardLoader';
import { FaWeightHanging } from "react-icons/fa";
import { PiSword,PiShield, PiHand,PiHandFist, PiArrowLeft,PiArrowRight  } from "react-icons/pi";
import { useItems } from '../builder/hooks/useItems';

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
    const {data: weaponData} = useItems(endpoint, id);
    
    if(!weaponData){
        return <h1>Weapon could not be found, try again later</h1>
    }
    
    return(
      <Container>
        <Col md={4}>
            <button className='btn text-white' onClick={() => history(-1)}>
              <h6><PiArrowLeft/>Back</h6>
            </button>
            </Col>
        <Row>
            <h3 className='text-white text-center'>{weaponData?.data.name}</h3>
            <Row className="d-flex justify-content-center align-items-center">
              <Col md={2} className="d-flex justify-content-center">
                <Card.Img variant="top" src={weaponData?.data.image} className="img-fluid"/>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">
              <Col md={6} className="text-white flex justify-center">
                <p className="text-center d-flex justify-content-around detail-text">  
                  <span><FaWeightHanging /> {weaponData?.data.weight}kg</span>

                  <span><PiSword />{weaponData?.data.category}</span>
                </p>  
                <Card.Body>
                      <Card.Text className='text-white'>
                        {weaponData?.data.description}
                      </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
          </Row>

          <Row className="mb-5">
          <Col md={4} xs={12}>
          <h5 className='text-white'><PiSword/>Attack</h5>
          <ListGroup variant="flush">
            {weaponData?.data.attack.map(a => <ListGroup.Item key={a.name} action>{a.name} - {a.amount}</ListGroup.Item>)}
          </ListGroup>
          </Col>
          <Col md={4} xs={12}>
            <h6 className='text-white mt-3'><PiHand/>Required</h6>
            <ListGroup variant="flush">
            {weaponData?.data.requiredAttributes.map(r => <ListGroup.Item key={r.name}>{r.name} - {r.amount}</ListGroup.Item>)}
            </ListGroup>
          <Col md={12} className='mt-3'>
            <h6 className='text-white'><PiHandFist/>Scales</h6>
          <ListGroup variant="flush">
          {weaponData?.data.scalesWith.map(s => <ListGroup.Item key={s.name}>{s.name} - {s.scaling}</ListGroup.Item>)}
          </ListGroup>
          </Col>
          </Col>
          <Col md={4} xs={12}>
          <h5 className='text-white'><PiShield/>Guard</h5>
          <ListGroup variant="flush">
          {weaponData?.data.defence.map(d => <ListGroup.Item key={d.name} action>{d.name} - {d.amount}</ListGroup.Item>)}
          </ListGroup>
          </Col>
          </Row>
          <Row className='text-white'>
          <Col md={4}>
            <button className='btn text-white' onClick={() => history(-1)}>
              <h6><PiArrowLeft/>Back</h6>
            </button>
            </Col>
          </Row>
          </Container>
    )
  }
export default WeaponDetailCard;