import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import ColumnInnerList from './ColumnInnerList';
import Button from './../Button/Button';

// styling
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  height: 300px;
  width: 282px;
  background-color: #EBECF0;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;
const Title = styled.h3`
  padding: 12px;
  font-size: 18px;
  height: 36px;
`;
const TaskList = styled.div`
  padding: 8px;
  flex-grow: 1;
  min-height: 150px;
  transition: background-color 0.1s ease;
  background-color: ${props => props.isDraggingOver ? '#add8e6c4' : 'inherit'};
`;

const Column = ({ column, tasks, index, isDropDisabled }) => {
    return (
      // Draggable wrapper - makes everything  draggable
      <Draggable draggableId={column.id} index={index}>
        {(provided) => (
          <Container ref={provided.innerRef} {...provided.draggableProps}>
            {/* Title here has draghandling props which makes this element to be a draghandler */}
            <Title {...provided.dragHandleProps}>{column.title}</Title>
            {/* wrapper for droppable element */}
            <Droppable droppableId={column.id} isDropDisabled={isDropDisabled} type='task'>
              {(provided, snapshot) => (
                <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
                >
                  <ColumnInnerList tasks={tasks}/>
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
            <Button />
          </Container>
        )}
      </Draggable>
    )
}

export default Column