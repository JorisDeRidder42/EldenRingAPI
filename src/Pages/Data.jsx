import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContentCard from "../Components/Cards/ContentCard";
import PaginationWrapper from "../Components/PaginationWrapper";
import { useGetItemIds } from "../Hooks/dataHooks";

const Data = ({endpoint, page, setPage}) => {
  const {data: cardsData} = useGetItemIds(endpoint,page);
      return(
        <Container>
          <Row>
            <PaginationWrapper page={page} setPage={setPage} cardsData={cardsData} total={cardsData.total} count={cardsData.count}/>
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