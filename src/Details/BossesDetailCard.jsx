import { useQuery } from '@tanstack/react-query';
import {Container,Card, Row, Col, ListGroup} from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom';
// import { useFetch } from '../Hooks/dataHooks';
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const BossesDetailCard = () => {
    const {id} = useParams();
    const history = useNavigate();
    console.log('id',id);
    // const {data: bossesData, isError} = useFetch({baseURL: BASE_URL, id : id});

    if(isError){
      <h1>Error fetching weapon data</h1>
    }

    if(!bossesData){
      return <h1>Bosses could not be found</h1>
    }

    return(
      <Container>
      {/* <Card>
        <div className='backLink' onClick={() => history(-1)}>Back</div>
      <Card.Img variant="top" src={bossesData?.image}/>
    <Card.Body>
      <Card.Title>{bossesData?.name}</Card.Title>
      <p>{bossesData?.healthPoints}</p>
      <Card.Text>
        {bossesData?.description}
      </Card.Text>
      <Card.Text>
        {bossesData?.location} - {bossesData?.region}
      </Card.Text>
      <Card.Text className='text-muted'>
        {bossesData?.drops.map(b => b + " ")}
      </Card.Text>
    </Card.Body>
  </Card> */}
  </Container>
    );
  }

export default BossesDetailCard;