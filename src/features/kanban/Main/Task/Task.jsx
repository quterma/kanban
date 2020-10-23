import React, { useState } from 'react'
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux';
import { setTaskTitle } from '../../kanbanSlice';

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
  outline: none;
`;
const Input = styled.input`
  width: 100%;
`;

const Task = ({ task, index }) => {
  const dispatch = useDispatch();
  // editMode state for setting new column title
  const [editMode, setEditMode] = useState(task.content === '');
  const activateEditMode = () => setEditMode(true);
  // title state for title inpute onChange subscribe and setting value
  const [newTitle, setNewTitle] = useState(task.content);
  const onHandleChange = (e) => setNewTitle(e.currentTarget.value);
  // get newTitle from local state and dispath in store
  const updateTaskTitle = () => {
    dispatch(setTaskTitle({ newTitle: newTitle ? newTitle : 'New Task', id: task.id }));
    setEditMode(false);
  }
  return (
    // Draggable element
    <Draggable draggableId={task.id} index={index} >
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          onDoubleClick={activateEditMode}
        >
        { editMode ?
          <Input
            autoFocus onBlur={updateTaskTitle}
            onChange={onHandleChange}
            value={newTitle}
            name={task.content}
          />
          : task.content
        }
        </Container>
      )}
    </Draggable>
  )
}

export default Task;