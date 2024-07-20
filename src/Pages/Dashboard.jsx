import { Col, Container, Row } from "react-bootstrap";
import ContentCard from "../Components/Cards/ContentCard";
import { useGetItemIds } from "../Hooks/dataHooks";
import { useState } from "react";
import { BsListUl,BsFillGrid3X3GapFill } from "react-icons/bs";

const Dashboard = ({endpoint}) => {
  const [gridView, setGridView] = useState(true);
  {console.log('gridView 1',gridView)}
  
  const { data: cardsData } = useGetItemIds(endpoint);
  const IconStyle = { color: "white", fontSize: '1.5em'};
  const strEndpoint = endpoint.slice(1);

    return(
      <>
        <Container> 
            <h2 className="header text-white">All {strEndpoint}</h2>
            <button className="button-tertiairy" onClick={() => { setGridView(!gridView)}}>{gridView ? <BsListUl style={IconStyle} /> : <BsFillGrid3X3GapFill style={IconStyle} /> }</button>
            {gridView ? 
            (<Row>
                  {cardsData?.data.map(d => <Col xs={12} sm={6} md={4} lg={3} key={d.id}>
                <ContentCard {...d} gridView={gridView}/>
                  </Col>)}
            </Row>)
            :
            (
              <>
                {cardsData?.data.map(d => <div key={d.id} className="list">
                  <ContentCard {...d}/>
                </div>)}
              </>
            )}
          </Container>
          </>
    )
}
export default Dashboard;