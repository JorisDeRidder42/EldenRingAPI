import React from 'react'
import { useGetItemIds } from '../Hooks/dataHooks';
import { Col, Container, Row} from "react-bootstrap";
import ContentCard from '../Components/Cards/ContentCard';


const Builder = ({endpoint}) => {
  const { data: cardsData } = useGetItemIds(endpoint);
  
  return (
      <Container>
      <h2>Builder</h2>
      </Container>
  )
}

export default Builder;
