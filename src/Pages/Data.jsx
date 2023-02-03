import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ContentCard from "../Components/Cards/ContentCard";
import PaginationWrapper from "../Components/PaginationWrapper";
import { useGetItemIds } from "../Hooks/dataHooks";

const Data = ({endpoint,setCurrentPage}) => {
  const {currentPage}  = useParams(); // from react-router, this is the `:currentPage` parameter defined on the route. 
  const page = parseInt(currentPage); 
  const navigate = useNavigate();
  const {data: cardsData} = useGetItemIds(endpoint,page);
  const endpointStr = endpoint.slice(1);
  console.log('pagina', page)


  if(!cardsData){
    return <h1>{endpointStr} could not be found</h1>
  }

      return(
        <Container>
          <h1>{endpointStr}</h1>
          <Row>
            <PaginationWrapper setCurrentPage={setCurrentPage} cardsData={cardsData} total={cardsData.total} count={cardsData.count}/>
          </Row>
          <Row className="m-2">
            {cardsData?.data.map(d => <Col xs={12} sm={6} md={4} lg={3} xl={3} key={d.id}>
                <ContentCard {...d}/>
              </Col>)}
            </Row>
            {/* <Row>
              <PaginationWrapper page={page} setPage={setPage} cardsData={cardsData} total={cardsData.total} count={cardsData.count}/>
            </Row> */}
          </Container>
    )
}


export default Data;