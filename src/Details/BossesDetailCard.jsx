import { Suspense } from 'react';
import {Container,Card} from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom';
import { useGetItem } from '../Hooks/dataHooks';
import PageLoader from '../Loader/PageLoader';

const BossesDetailCard = ({endpoint}) => {
   return(
    <Suspense fallback={<PageLoader/>}>
      <BossesDetailCardContent endpoint={endpoint}/>
    </Suspense>
   )
  }

  const BossesDetailCardContent = ({endpoint}) => {
    const {id} = useParams();
    const history = useNavigate();
    console.log('id',id);
    const {data: bossesData} = useGetItem(endpoint, id);

    if(!bossesData){
      return <h1>Bosses could not be found</h1>
    }

    return(
      <Container>
      <Card>
        <div className='backLink' onClick={() => history(-1)}>Back</div>
      <Card.Img className='w-50' variant="top" src={bossesData?.image}/>
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
  </Card>
  </Container>
    )
  }

export default BossesDetailCard;