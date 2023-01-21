import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContentCard from "../Components/Cards/ContentCard";
import PaginationWrapper from "../Components/PaginationWrapper";
import { useGetItemIds } from "../Hooks/dataHooks";

const Data = ({endpoint,page}) => {
      const [pageNumber, setPageNumber] = useState(0);
      const {data: cardsData} = useGetItemIds(endpoint, page = pageNumber);
      console.log("pageNR", page)

      return(
        <Container>
          <Row className="m-2">
            {cardsData?.map(d => <Col xs={12} sm={6} md={4} lg={3} xl={3} key={d.id}>
                <ContentCard {...d}/>
              </Col>)}
            </Row>
            <Row>
              <PaginationWrapper page={pageNumber} setPageNumber={setPageNumber}/>
            </Row>
          </Container>
    )
}


export default Data;