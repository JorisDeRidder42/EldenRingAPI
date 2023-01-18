import { Col, Container, Row } from "react-bootstrap";
import ContentCard from "../Components/Cards/ContentCard";
import { useGetItemIds } from "../Hooks/dataHooks";

const Data = ({endpoint}) => {
      const {data: cardsData, isLoading} = useGetItemIds(endpoint);

      if(isLoading){
        return <h1>Loading....</h1>
      }

      return(
        <Container>
          <Row className="m-2">
            {cardsData?.map(d => <Col xs={12} sm={6} md={4} lg={3} xl={3} key={d.id}>
                <ContentCard {...d}/>
              </Col>)}
            </Row>
          </Container>
    )
}


export default Data;