import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContentCard from "../Components/Cards/ContentCard";
import PaginationWrapper from "../Components/PaginationWrapper";
import { useGetItemIds } from "../Hooks/dataHooks";

const Data = ({endpoint, page}) => {
      const [pageNumber, setPageNumber] = useState(0)
      const {data: cardsData, isLoading} = useGetItemIds(endpoint,page = pageNumber);

      console.log(cardsData)
      console.log("page",page)
      console.log('endpoint',endpoint)

      if(isLoading){
        return <h1>Loading....</h1>
      }

      return(
        <Container>
          <Row className="m-2">
            {cardsData?.map(d => <Col xs={12} sm={6} md={3} lg={3} xl={3} key={d.id}>
            <ContentCard {...d}/>
              </Col>)}
            </Row>
            <Row>
                <PaginationWrapper page={pageNumber} setPageNumber={setPageNumber} data={cardsData}/>
            </Row>
          </Container>
    )
}


export default Data;