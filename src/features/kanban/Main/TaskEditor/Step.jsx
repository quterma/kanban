import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStep, updateStep, selectSteps } from '../../kanbanSlice';
import styled from 'styled-components';
import Button from '../../Common/Button/Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 8px;
`;
const InputsWrapper = styled.div`

`;
const CheckBox = styled.input``;
const Content = styled.p`
  font-size: 21px;
`;
const Input = styled.input`
  line-height: 20px;
`;

const Step = ({ stepId, taskId }) => {
  const dispatch = useDispatch();
  const steps = useSelector(selectSteps);
  const step = steps[stepId];

  const [isCompleted, setIsCompleted] = useState(step.isCompleted);
  const onHandleToggle = (e) => setIsCompleted(e.currentTarget.value);

  const [editMode, setEditMode] = useState(step.content === '');
  const activateEditMode = () => setEditMode(true);

  const [content, setContent] = useState(step.content);
  const onHandleChange = (e) => setContent(e.currentTarget.value);

  const updateThisStep = () => {
    dispatch(updateStep({ id: step.id, content: content ? content : 'new step', isCompleted }));
    setEditMode(false);
  }

  const deleteThisStep = () => dispatch(deleteStep({ taskId, stepId }));

  return (
    <Container>
      <InputsWrapper>
        <CheckBox type='checkbox' onChange={onHandleToggle} value={isCompleted} name='checkbox'/>
        {editMode ?
          <Input autoFocus onBlur={updateThisStep} onChange={onHandleChange} value={content} name='content' />
          : <Content onDoubleClick={activateEditMode}>{step.content}</Content>
        }
      </InputsWrapper>
      <Button onHandleClick={deleteThisStep} name='Delete step' clear/>
    </Container>
  )
}

export default Step
