import React from 'react'
import { Droppable } from "react-beautiful-dnd";
import MainInnerList from "./MainInnerList";
import styled from "styled-components";

// styling
const Container = styled.div`
  display: flex;
  background-color: #0079BF;
  height: 100%;
  justify-content: center;
  padding: 20px;
  overflow-x: auto;

  &::-webkit-scrollbar {
	height: 9px;
	width: 9px;
	}
  &::-webkit-scrollbar-track {
    border-radius: 6px;
    background-color: rgb(14, 43, 38, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: rgba(255, 254, 214, 0.6);
	}
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
