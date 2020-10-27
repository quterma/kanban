import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams, useHistory } from "react-router-dom";
import {createStep, selectTasks, setTaskTitle, deleteTask} from './../../redux/kanbanSlice'
import { Redirect } from "react-router-dom";
import Editor from './Editor';

// redirect HOC checks if taskId in URL exists
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

const EditorContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const tasks = useSelector(selectTasks);
  const task = tasks[params.taskId];
  const taskId = task.id;
  const title = task.content;
  const stepIds = task.steps;
  const created = task.created;

  let history = useHistory();
  const closeEditPage = () => history.push('/');

  // // local state for title div/input toggling
  const [editMode, setEditMode] = useState(false);
  const activateEditMode = () => setEditMode(true);

  // local state for task.content (newTitle)
  const [newTitle, setNewTitle] = useState(title);
  const onInputHandleChange = (e) => setNewTitle(e.currentTarget.value);

  // change task.content (title) property in store state
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
    <Editor
      updateTaskTitle={updateTaskTitle}
      onInputHandleChange={onInputHandleChange}
      activateEditMode={activateEditMode}
      createNewStep={createNewStep}
      deleteThisTask={deleteThisTask}
      closeEditPage={closeEditPage}
      editMode={editMode}
      created={created}
      newTitle={newTitle}
      title={title}
      stepIds={stepIds}
      taskId={taskId}
    />
  )
}

export default withThisTaskRedirectHOC(withRouter(EditorContainer));
