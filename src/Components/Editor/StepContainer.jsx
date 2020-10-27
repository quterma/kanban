import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStep, updateStep, selectSteps } from './../../redux/kanbanSlice';
import Step from './Step';

const StepContainer = ({ stepId, taskId }) => {
  const dispatch = useDispatch();
  const steps = useSelector(selectSteps);
  const step = steps[stepId];
  const content = step.content;
  const isCompleted = step.isCompleted;

  // local state for content div/input toggling
  const [editMode, setEditMode] = useState(content === '');
  const activateEditMode = () => setEditMode(true);

  // local state for step.content
  const [newContent, setNewContent] = useState(content);
  const onHandleChange = (e) => setNewContent(e.currentTarget.value);
  useEffect(() => setNewContent(content), [content]);

  // change step.isCompleted and step.content property in store state
  const onHandleToggle = () => dispatch(updateStep({ id: step.id, isCompleted: !isCompleted }));
  const updateContent = () => {
    dispatch(updateStep({ id: step.id, content: newContent ? newContent : 'new step' }));
    setEditMode(false);
  }
  
  const deleteThisStep = () => dispatch(deleteStep({ taskId, stepId }));

  return (
    <Step 
      onHandleToggle={onHandleToggle}
      updateThisStep={updateContent}
      onHandleChange={onHandleChange}
      activateEditMode={activateEditMode}
      deleteThisStep={deleteThisStep}
      newContent={newContent}
      isCompleted={isCompleted}
      content={content}
      editMode={editMode}
    />
  )
}

export default StepContainer;
