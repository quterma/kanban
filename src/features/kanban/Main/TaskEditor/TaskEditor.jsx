import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams, useHistory } from "react-router-dom";
import styled from 'styled-components';
import Button from '../../Common/Button/Button';
import {selectTasks, setTaskTitle, setTaskText} from './../../kanbanSlice'

// styling
const Wrapper = styled.div`
  background-color: #0079BF;
  width: 100%;
  min-width: 400px;
  height: 100%;
  min-height: 600px;
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  border: 1px solid lightgrey;
  width: 100%;
  height: 100%;
  background-color: #EBECF0;
  border-radius: 10px;
  text-align: center;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 5%;
`;
const Title = styled.h3``;
const Input = styled.input`
  width: 400px;
  line-height: 32px;
  font-size: 21px;
`;
const Textarea = styled.textarea`
  width: 90%;
  height: 70%;
  margin: 20px auto;
  padding: 20px;
  font-size: 22px;
  display: block;
`;

const TaskEditor = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const taskId = tasks[params.taskId].id;
  const title = tasks[params.taskId].content;
  const text = tasks[params.taskId].text;

  // editMode state for setting new column title
  const [editMode, setEditMode] = useState(false);
  const activateEditMode = () => setEditMode(true);

  // title input state and handlers
  const [newTitle, setNewTitle] = useState(title);
  const onInputHandleChange = (e) => setNewTitle(e.currentTarget.value)
  const updateTaskTitle = () => {
    dispatch(setTaskTitle({ newTitle: newTitle ? newTitle : 'New Task', id: taskId }));
    setEditMode(false);
  }

  // textarea input state and handlers
  const [newText, setNewText] = useState(text);
  const onTextareaHandleChange = (e) => setNewText(e.currentTarget.value)
  const updateText = () => {
    dispatch(setTaskText({ newText, id: taskId }));
    setEditMode(false);
  }

  let history = useHistory();
  const closeEdit = () => history.push('/');

  return (
    <Wrapper>
      <Container>
        <Header>
          {editMode ? <Input autoFocus onBlur={updateTaskTitle} onChange={onInputHandleChange} value={newTitle} name='title' />
            : <Title onDoubleClick={activateEditMode}>{title}</Title>
          }
          <Button onHandleClick={closeEdit} name='Close edit' clear />
        </Header>
        <Textarea name='textarea' value={newText} onChange={onTextareaHandleChange} />
        <Button onHandleClick={updateText} name='Save text' clear />
      </Container>
    </Wrapper>
  )
}

export default withRouter(TaskEditor);
