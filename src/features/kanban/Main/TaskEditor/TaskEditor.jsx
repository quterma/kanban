import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams, useHistory } from "react-router-dom";
import styled from 'styled-components';
import Button from '../../Common/Button/Button';
import {createStep, selectTasks, setTaskTitle, deleteTask} from './../../kanbanSlice'
import TaskStepsInnerList from './TaskStepsInnerList';
import { Redirect } from "react-router-dom";

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
  text-align: left;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 5% 10px 5%;
`;
const TitleWrapper = styled.div`
  max-width: 50%;
`;
const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  padding-left: 10px;
`;
const Input = styled.input`
  line-height: 1.4rem;
  font-size: 1.2rem;
  padding-left: 10px;
`;
const Created = styled.h4`
  margin-top: 12px;
  font-weight: 400;
  font-size: 0.8rem;
  padding-left: 10px;
`;
const ButtonsWrapper = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
`;
const Editarea = styled.div`
  width: 90%;
  height: 75%;
  margin: 20px auto;
  padding: 20px 30px;
  font-size: 22px;
  display: block;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: white;
  overflow-y: auto;
`;

const withThisTaskRedirectHOC = Component => {
  const RedirectComponent = () => {
    const params = useParams();
    const tasks = useSelector(selectTasks);
    const thisTask = tasks[params.taskId];
    if (!thisTask) return <Redirect to="/" />;
    return <Component />;
  }
  return RedirectComponent;
}

const TaskEditor = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const tasks = useSelector(selectTasks);

  let history = useHistory();
  const closeEditPage = () => history.push('/');

  const task = tasks[params.taskId];
  const taskId = task.id;
  const title = task.content;
  const stepIds = task.steps;
  const created = task.created;
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

  const createNewStep = () => dispatch(createStep(taskId));
  const deleteThisTask = () => {
    closeEditPage();
    dispatch(deleteTask(taskId));
  }

  return (
    <Wrapper>
      <Container>
        <Header>
          <TitleWrapper>
            {editMode ?
              <Input autoFocus onBlur={updateTaskTitle} onChange={onInputHandleChange} value={newTitle} name='title' />
              : <Title onDoubleClick={activateEditMode}>{title}</Title>
            }
            {created && <Created>{created}</Created>}
          </TitleWrapper>
          <ButtonsWrapper>
            <Button onHandleClick={createNewStep} name='Add step' clear />
            <Button onHandleClick={deleteThisTask} name='Delete task' clear />
            <Button onHandleClick={closeEditPage} name='Close edit' clear />
          </ButtonsWrapper>
        </Header>
        <Editarea>
          <TaskStepsInnerList stepIds={stepIds} taskId={taskId} />
        </Editarea>
      </Container>
    </Wrapper>
  )
}

export default withThisTaskRedirectHOC(withRouter(TaskEditor));
