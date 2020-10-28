import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux';
import { setTaskTitle } from './../../../redux/kanbanSlice';

const Container = styled.div`
  background: #FFFFFF;
  border-radius: 5px;
  width: 100%;
  padding: 0 8px;
  height: 2.5rem;
  margin: 0 auto 15px auto;
  background-color: ${props => props.isDragging ? '#9ae455' : 'white'};
  outline: none;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  line-height: 2.4rem;
  font-size: 1.1rem;
`;
const Title = styled.h3`
  line-height: 2.5rem;
  font-size: 1.1rem;
`;

const Task = ({ task, index }) => {
  const dispatch = useDispatch();
  // editMode state for setting new column title
  const [editMode, setEditMode] = useState(task.content === '');
  // title state for title inpute onChange subscribe and setting value
  const [newTitle, setNewTitle] = useState(task.content);
  const onHandleChange = (e) => setNewTitle(e.currentTarget.value);
  // get newTitle from local state and dispath in store
  const updateTaskTitle = () => {
    dispatch(setTaskTitle({ id: task.id, newTitle: newTitle ? newTitle : 'New Task' }));
    setEditMode(false);
  }

  let history = useHistory();
  const handleDoubleClick = () => history.push(`/editor/${task.id}`);

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
        { editMode ?
          <Input
            autoFocus onBlur={updateTaskTitle}
            onChange={onHandleChange}
            value={newTitle}
            name={task.content}
          />
            : <Title onDoubleClick={handleDoubleClick}>{task.content}</Title>
        }
        </Container>
      )}
    </Draggable>
  )
}

export default Task;