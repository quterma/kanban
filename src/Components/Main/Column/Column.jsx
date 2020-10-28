import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import ColumnInnerList from './ColumnInnerList';
import ColumnHeader from './ColumnHeader';
import ColumnFooter from './ColumnFooter';

const Container = styled.div`
  border: 1px solid lightgrey;
  min-width: 282px;
  max-height: 78vh;
  background-color: #EBECF0;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  text-align: left;
  margin: 20px;
`;
const TaskList = styled.div`
  padding: 12px;
  align-self: stretch;
  flex-grow: 1;
  min-height: 140px;
  max-width: 280px;
  transition: background-color 0.1s ease;
  background-color: ${props => props.isDraggingOver ? '#add8e6c4' : 'inherit'};
  overflow-y: auto;
`;
const ColumnHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  width: 100%;
  outline: none;
`;

const Column = ({ column, tasks, index, isDropDisabled, columns, columnOrder }) => {
  const prevColumn = columns[columnOrder[index - 1]];
  const thisColumn = columns[columnOrder[index]];

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Container ref={provided.innerRef} {...provided.draggableProps}>
          <ColumnHeaderContainer {...provided.dragHandleProps}>
            <ColumnHeader title={column.title} thisColId={columnOrder[index]} />
          </ColumnHeaderContainer>
          <Droppable droppableId={column.id} isDropDisabled={isDropDisabled} type='task' top='100px'>
            {(provided, snapshot) => (
              <TaskList ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                <ColumnInnerList tasks={tasks} />
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
          <ColumnFooter thisColumn={thisColumn} prevColumn={prevColumn} index={index}/>
        </Container>
      )}
      </Draggable>
  )
}

export default Column