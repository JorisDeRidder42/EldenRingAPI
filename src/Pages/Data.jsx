import { Button, Col, Container, Row } from "react-bootstrap";
import ContentCard from "../Components/Cards/ContentCard";
import PaginationWrapper from "../Components/PaginationWrapper";
import { useGetItemIds } from "../Hooks/dataHooks";

const Data = ({ currentPage, endpoint, setCurrentPage}) => {
  const page = parseInt(currentPage);
  const endpointStr = endpoint.slice(1);
  const { data: cardsData } = useGetItemIds(endpoint, page);
  const amount = 20;
  const result = cardsData.total / amount;
  const lastPage = Math.floor(result);


  if (!cardsData) {
    return <h1>{endpointStr} could not be found</h1>
  }

  return (
    <Container>
      <h1>All {endpointStr}</h1>
      <Row>
        <PaginationWrapper currentPage={currentPage} setCurrentPage={setCurrentPage} lastPage={lastPage} />
      </Row>
      <Row className="m-2">
        {cardsData?.data.map(d => <Col xs={12} sm={6} md={4} lg={3} key={d.id}>
          <ContentCard {...d} />
        </Col>)}
      </Row>
      <Row>
        <PaginationWrapper currentPage={currentPage} setCurrentPage={setCurrentPage} lastPage={lastPage} />
      </Row>
    </Container>
  )
}


export default Data;