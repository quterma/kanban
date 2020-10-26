import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams, useHistory } from "react-router-dom";
import styled from 'styled-components';
import Button from '../../Common/Button/Button';
import {createTaskStep, selectTasks, setTaskTitle} from './../../kanbanSlice'
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
  padding: 20px 5%;
`;
const Title = styled.h3``;
const Created = styled.h4``;
const Input = styled.input`
  width: 400px;
  line-height: 32px;
  font-size: 21px;
`;
const Editarea = styled.div`
  width: 90%;
  height: 75%;
  margin: 20px auto;
  padding: 40px;
  font-size: 22px;
  display: block;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: white;
  overflow-y: auto;
`;
const Buttons = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
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

  const thisTask = tasks[params.taskId];
  const thisTaskId = thisTask.id;
  const title = thisTask.content;
  const steps = thisTask.steps;
  const created = thisTask.created;

  // editMode state for setting new column title
  const [editMode, setEditMode] = useState(false);
  const activateEditMode = () => setEditMode(true);

  // title input state and handlers
  const [newTitle, setNewTitle] = useState(title);
  const onInputHandleChange = (e) => setNewTitle(e.currentTarget.value)
  const updateTaskTitle = () => {
    dispatch(setTaskTitle({ newTitle: newTitle ? newTitle : 'New Task', id: thisTaskId }));
    setEditMode(false);
  }

  const addStep = () => dispatch(createTaskStep(thisTaskId));

  let history = useHistory();
  const closeEdit = () => history.push('/');

  return (
    <Wrapper>
      <Container>
        <Header>
          {editMode ? <Input autoFocus onBlur={updateTaskTitle} onChange={onInputHandleChange} value={newTitle} name='title' />
            : <div>
                <Title onDoubleClick={activateEditMode}>{title}</Title>
              {created && <Created>{created}</Created>}
              </div>
          }
          <Buttons>
            <Button onHandleClick={addStep} name='Add step' clear />
            <Button onHandleClick={closeEdit} name='Close edit' clear />
          </Buttons>
        </Header>
        <Editarea>
          <TaskStepsInnerList steps={steps} thisTaskId={thisTaskId}/>
        </Editarea>
      </Container>
    </Wrapper>
  )
}

export default withThisTaskRedirectHOC(withRouter(TaskEditor));
