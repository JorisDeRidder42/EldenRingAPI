import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import ContentCard from "../Components/Cards/ContentCard";
import PaginationWrapper from "../Components/PaginationWrapper";
import { useGetItemIds } from "../Hooks/dataHooks";
import CardSlider from "../Components/Cards/CardSlider";
import SearchCard from "../Components/SearchCard";
import { Navigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Data = ({ currentPage, endpoint, setCurrentPage, limit, setLimit}) => {
  const page = parseInt(currentPage);
  const endpointStr = endpoint.slice(1);
  const { data: cardsData } = useGetItemIds(endpoint, page, limit);
  const result = cardsData.total / limit;
  const lastPage = Math.floor(result);


  if (!cardsData) {
    return <h1>{endpointStr} could not be found</h1>
  }

  return (
    <Container>
      <CardSlider limit={limit} setLimit={setLimit}/>
      <h1>All {endpointStr}</h1>
      <Row>
        <PaginationWrapper currentPage={currentPage} setCurrentPage={setCurrentPage} lastPage={lastPage} />
      </Row>
      <Row className="m-2">
        <LinkContainer to={'/add'}>
          <Button>Add Item</Button>
        </LinkContainer>
        {cardsData?.data.map(d => <Col xs={12} sm={6} md={4} lg={3} xl={3} key={d.id}>
          <ContentCard {...d} />
        </Col>)}
      </Row>
      {/* <Row>
              <PaginationWrapper page={page} setPage={setPage} cardsData={cardsData} total={cardsData.total} count={cardsData.count}/>
            </Row> */}
    </Container>
  )
}


export default Data;