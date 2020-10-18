import React from 'react'
import { Droppable } from "react-beautiful-dnd";
import MainInnerList from "./MainInnerList";
import styled from "styled-components";

// styling
const Container = styled.div`
	display: flex;
`;

const Main = ({ columnOrder, columns, homeIndex, tasks }) => {
  return (
    // wrapper for droppable element
    <Droppable droppableId="all-columns" direction="horizontal" type="column">
      {provided => (
        <Container ref={provided.innerRef} {...provided.droppableProps}>
          {/* map columns */}
          {columnOrder.map((columnId, index) => {
            const column = columns[columnId];
            // condition disabling droppable if you move from right to left or try to move furtherer than to the next list
            const isDropDisabled = index < homeIndex || index > homeIndex + 1;
            return (
              <MainInnerList
                key={column.id}
                column={column}
                taskMap={tasks}
                isDropDisabled={isDropDisabled}
                index={index}
              />
            );
          })}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  )
}

export default Main;
