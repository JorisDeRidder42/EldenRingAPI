import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ContentCard from "../Components/Cards/ContentCard";
import PaginationWrapper from "../Components/PaginationWrapper";
import { useGetItemIds } from "../Hooks/dataHooks";
import { useState } from "react";

const Data = ({endpoint}) => {
  const [query, setQuery] = useState("");
  const endpointStr = endpoint.slice(1);
  const { data: cardsData } = useGetItemIds(endpoint);


  if (!cardsData) {
    return <h1>{endpointStr} could not be found</h1>
  }

  return (
    <>
    <Container>
    {/* <Form>
        <Form.Control type="text" placeholder="Search weapon" value={query} onChange={() => setQuery(event.target.value)} />
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form> */}
      <h1>All {endpointStr}</h1>
      <Row className="m-2">
        {cardsData?.data.map(d => <Col xs={12} sm={6} md={4} lg={3} key={d.id}>
          <ContentCard {...d} />
        </Col>)}
      </Row>
      <Row>
      </Row>
    </Container>
    </>
  )
}


export default Data;