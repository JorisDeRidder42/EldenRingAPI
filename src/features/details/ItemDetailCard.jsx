import { useContext } from 'react';
import { Suspense } from 'react';
import {Card, Row, Col, ListGroup, Container, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useGetItem } from '../Hooks/dataHooks';
import CardLoader from '../Loader/CardLoader';
import { FaWeightHanging } from "react-icons/fa";
import { PiSword,PiShield, PiHand,PiHandFist, PiArrowLeft,PiArrowRight  } from "react-icons/pi";
import { FaCircleDollarToSlot } from "react-icons/fa6";

const ItemDetailCard = ({endpoint}) => {
    return(
      <Suspense fallback={<CardLoader/>}>
        <ItemDetailContent endpoint={endpoint}/>
      </Suspense>
    );
  }

  const ItemDetailContent = ({endpoint}) => {
    const {id} = useParams();
    const history = useNavigate();
    const {data: itemData} = useGetItem(endpoint, id);
    
    if(!itemData){
        return <h1>data could not be found, try again later</h1>
    }
    
    return(
      <Container>
        {console.log(itemData.data)}
        <Col md={4}>
            <button className='btn text-white' onClick={() => history(-1)}>
              <h6><PiArrowLeft/>Back</h6>
            </button>
            </Col>
        <Row>
            <h3 className='text-white text-center'>{itemData?.data.name}</h3>
            <Row className="d-flex justify-content-center align-items-center">
              <Col md={2} className="d-flex justify-content-center">
                <Card.Img variant="top" src={itemData?.data.image} className="img-fluid"/>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">
              <Col md={6} className="text-white flex justify-center">
                <p className="text-center d-flex justify-content-around detail-text">  
                  <span><FaCircleDollarToSlot /> {itemData?.data.cost} cost</span>

                  <span><PiSword />{itemData?.data.type}</span>
                </p>  
                <Card.Body>
                      <Card.Text className='text-white'>
                        {itemData?.data.description}
                      </Card.Text>
                      <Card.Text className='text-white'> 
                        {itemData?.data.effects}
                        </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
          </Row>
          <Row className="mt-5 d-flex justify-content-center">
              <Col md={4} xs={12}>
              <h5 className='text-white'>Stats</h5>
                <ListGroup variant="flush">
                  {itemData?.data.requires.map(a => <ListGroup.Item key={a.name} action>{a.name} - {a.amount}</ListGroup.Item>)}
                </ListGroup>
              </Col>
            </Row>
            
          </Container>
    );
  }
export default ItemDetailCard;