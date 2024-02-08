import { Col, Container, Row } from "react-bootstrap";
import ContentCard from "../Components/Cards/ContentCard";
import { useGetItemIds } from "../Hooks/dataHooks";
import { useState } from "react";
const Data = ({endpoint}) => {
  const endpointStr = endpoint.slice(1);
  const { data: cardsData } = useGetItemIds(endpoint);


  if (!cardsData) {
    return <h1>{endpointStr} could not be found</h1>
  }

  return (
    <>
    <Container>
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