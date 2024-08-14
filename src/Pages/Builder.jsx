import React, { useState, useEffect } from 'react';
import { useGetItemIds } from '../Hooks/dataHooks';
import { Card, Container } from "react-bootstrap";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { getAllAppData } from '../Datas/AppData';

const Builder = () => {
  const [endpoint, setEndpoint] = useState("weapons"); // Default endpoint
  const { data: cardsData } = useGetItemIds(endpoint);
  const [items, setItems] = useState(cardsData?.data || []);
  const [droppedItems, setDroppedItems] = useState([]); // State for dropped items
  const allData = getAllAppData();
  const [stats, setStats] = useState(0);


  useEffect(() => {
    if (cardsData) {
      setItems(cardsData.data); // Update items when cardsData changes
    }
  }, [cardsData]);

  const handleClick = (newEndpoint) => {
    setEndpoint(newEndpoint); // Update the endpoint when a button is clicked
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    if (result.destination.droppableId === 'drop-zone') {
      // If the item is dropped into the drop-zone
      const updatedItems = Array.from(items);
      const [movedItem] = updatedItems.splice(result.source.index, 1);

      setItems(updatedItems);
      setDroppedItems(prev => [...prev, movedItem]);
    } else {
      // If the item is reordered within the original list
      const updatedItems = Array.from(items);
      const [reorderedItem] = updatedItems.splice(result.source.index, 1);
      updatedItems.splice(result.destination.index, 0, reorderedItem);

      setItems(updatedItems);
    }
  };

  return (
    <Container>
      <div className='bottom-list'>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          {/* Drop Zone */}
          <Droppable droppableId="drop-zone">
            {(provided) => (
              <div
                className="drop-zone"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  marginBottom: "20px",
                  padding: "20px",
                  border: "2px dashed #ccc",
                  minHeight: "150px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                {droppedItems.length === 0 && (
                  <p style={{ textAlign: "center", color: "#aaa" }}>
                    Drop items here
                  </p>
                )}
                {droppedItems.map((d, index) => (
                  <Draggable key={d.id.toString()} draggableId={d.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="list-item"
                        style={{ marginBottom: "10px" }}
                      >
                        <p>{d.name}</p>
                        <Card.Img className='card-img-mini' src={d.image} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <>
          {allData?.map(d => (
            <button 
              onClick={() => handleClick(d.endpoint)} 
              className="cta-button-secondary" 
              key={d.id.toString()}
            >
              {d.title}
            </button>
          ))}
        </>

          {/* Original List of Items */}
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
                        <p>{d.name}</p>
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
  );
};

export default Builder;