import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from "react-redux";
import { createTask} from "./../../kanbanSlice";
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import ColumnInnerList from './ColumnInnerList';
import Button from './../Button/Button';

// styling
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  min-width: 282px;
  height: 500px;
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
  padding: 12px;
  flex-grow: 1;
  min-height: 150px;
  transition: background-color 0.1s ease;
  background-color: ${props => props.isDraggingOver ? '#add8e6c4' : 'inherit'};
  // =====  rbdnd still not correctrly supports nested scrolling containers - so this should be tested ===== //
  overflow-y: auto;
`;

const Column = ({ column, tasks, index, isDropDisabled, columns, columnOrder }) => {
  const dispatch = useDispatch();
  // create new task in first column
  const createNewTask = () => dispatch(createTask());
  // checks if previous (left) column is empty (and not first)
  const isPreviousEmpty = useCallback(
    () => {
      if (index === 0) return false;
      const previous = columns[columnOrder[index - 1]];
      return previous.taskIds.length < 1;
    }, [columns, columnOrder, index]);
  // set disable state for add task buttin
  const [addTaskDisabled, setAddTaskDisabled] = useState(isPreviousEmpty());
  useEffect(() => { setAddTaskDisabled(isPreviousEmpty()) }, [isPreviousEmpty]);
  // const disableAddTask = () => setAddTaskDisabled(true); 


  const addTask = () => {
    console.log(index);
  };


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
          <Button onHandleClick={index === 0 ? createNewTask : addTask} disabled={addTaskDisabled}/>
        </Container>
      )}
    </Draggable>
  )
}

export default Column