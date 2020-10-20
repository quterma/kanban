import React from 'react'
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  background: #FFFFFF;
  border-radius: 5px;
  width: 100%;
  padding: 4px 8px;
  min-height: 34px;
  line-height: 26px;
  margin: 0 auto 15px auto;
  font-size: 18px;
  background-color: ${props => props.isDragging ? '#9ae455' : 'white'};
`;

const Task = ({ task, index}) => {
    return (
      // Draggable element
      <Draggable draggableId={task.id} index={index} >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {task.content}
          </Container>
        )}
      </Draggable>
    )
}

export default Task;