import { Col, Container, Row } from "react-bootstrap";
import ContentCard from "../Components/Cards/ContentCard";
import { useGetItemIds } from "../Hooks/dataHooks";
import { useState } from "react";

const Dashboard = ({endpoint}) => {
  console.log('endpoint', endpoint)
  const { data: cardsData } = useGetItemIds(endpoint);
  const strEndpoint = endpoint.slice(1);

    return(
        <Container>
          <h2>{strEndpoint}</h2>
            <Row>
                <div className="card-deck" style={{ overflowX: 'auto' }}>
                  {cardsData?.data.map(d => <Col xs={12} sm={6} md={4} lg={3} key={d.id}>
                <ContentCard {...d} />
                  </Col>)}
                </div>
            </Row>
          </Container>
    )
}
export default Dashboard;