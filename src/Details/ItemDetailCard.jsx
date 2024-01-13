import { useContext } from 'react';
import { Suspense } from 'react';
import {Card, Row, Col, ListGroup} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useGetItem } from '../Hooks/dataHooks';
import CardLoader from '../Loader/CardLoader';

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
        return <h1>data could not be found</h1>
    }
    
    return(
    <Card className={"mx-4"}>
        <div className='backLink' onClick={() => history(-1)}>Back</div>
      <Card.Img variant="top" src={itemData?.image} className="w-25 center"/>
    <Card.Body>
      <Card.Title>{itemData?.name}</Card.Title>
      <Card.Text>
        {itemData?.description}

      </Card.Text>
        <Row>
          <Col xs={12} sm={6} md={3}>
          <ListGroup.Item>Cost: {itemData?.cost}</ListGroup.Item>
          <ListGroup.Item>slots: {itemData?.slots}</ListGroup.Item>
          <ListGroup>
            {itemData?.requires.map(d => <ListGroup.Item key={d.name}>{d.name} - {d.amount}</ListGroup.Item>)}
          </ListGroup>
          </Col>
          {/* <Col xs={12} sm={6} md={3}>
          <p>Defence</p>
          <ListGroup>
          {weaponData?.defence.map(d => <ListGroup.Item key={d.name} action variant={`${themeClassBg}`}>{d.name} - {d.amount}</ListGroup.Item>)}
          </ListGroup>
          </Col> */}
      </Row>
    {/*  <Row>
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
      </Row> */}
    </Card.Body>
  </Card>
    )
  }
export default ItemDetailCard;