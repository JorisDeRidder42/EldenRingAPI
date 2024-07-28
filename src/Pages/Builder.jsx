import React, { useState } from 'react'
import { useGetItemIds } from '../Hooks/dataHooks';
import { Card, Container} from "react-bootstrap";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { getAllAppData } from '../Datas/AppData';

const Builder = ({endpoint}) => {
  const { data: cardsData } = useGetItemIds(endpoint);
  const [items, setItems] = useState(cardsData?.data || []);
  const allData = getAllAppData();


  const handleClick = () => {
    console.log('clicked');
  }
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const updatedItems = Array.from(items);
    const [reorderedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, reorderedItem);

    setItems(updatedItems);
  };
  
  return (
      <Container>
        <div className='bottom-list'>
        <>
          {allData?.map(d => <button onClick={handleClick} className="cta-button-secondary" key={d.id.toString()}>{d.title}</button>)}
        </>
        <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="cards" direction="horizontal">
        {(provided) => (
          <div
            className="scrollable-container"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map((d, index) => (
              <Draggable key={d.id.toString()} draggableId={d.id.toString()} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="list-item"
                  >
                    <Card.Img className='card-img-mini' src={d.image} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    </div>
      </Container>
  )
}

export default Builder;
