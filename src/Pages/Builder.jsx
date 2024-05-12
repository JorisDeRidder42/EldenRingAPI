import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ContentCard from '../Components/Cards/ContentCard';
import { useGetItemIds } from '../Hooks/dataHooks';
import { Col, Row } from 'react-bootstrap';
import { getAllAppData } from '../Datas/AppData';
import { end } from '@popperjs/core';


const Builder = ({endpoint}) => {
  const [show, setShow] = useState(false);
  const { data: cardsData } = useGetItemIds(endpoint);
  const endpoints = getAllAppData();
  
  return (
    <>
    {endpoints.map((o) => {
      return <Button className="m-2 cta-button" onClick={() => setShow(true)} key={o.id}>{o.title}</Button>
    })} 
      <Offcanvas show={show} onHide={() => setShow(false)}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{"Weapons"}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
          {cardsData?.data.map(d => <Col md={4} lg={3} key={d.id}>
            <ContentCard {...d} />
              </Col>)}
      </Offcanvas.Body>
    </Offcanvas>
      </>
  )
}

export default Builder;
