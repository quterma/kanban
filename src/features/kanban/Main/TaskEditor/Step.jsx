import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStep, updateStep, selectSteps } from '../../kanbanSlice';
import styled from 'styled-components';
import Button from '../../Common/Button/Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 6px;
`;
const InputsWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 2px;
`;
const CheckboxContainer = styled.div`
  padding: 2px 9px;
  height: 40px;
`;
const InputContainer = styled.div`
  padding: 2px 8px;
  height: 40px;
  width: 100%;
`;
const CheckBox = styled.input`
  -ms-transform: scale(1.5); /* IE */
  -moz-transform: scale(1.5); /* FF */
  -webkit-transform: scale(1.5); /* Safari and Chrome */
  -o-transform: scale(1.5); /* Opera */
  transform: scale(1.5);
  margin: 0;
`;
const Content = styled.p`
  font-size: 21px;
  margin: 0;
  padding: 0;
  height: 100%;
  text-decoration: ${props => props.isCompleted && 'line-through #0000ffa9'};
`;
const Input = styled.input`
  width: 100%;
  flex: 1;
  height: 100%;
  padding: 0;
  font-size: 21px;
  margin: 0;
`;

const Step = ({ stepId, taskId }) => {
  const dispatch = useDispatch();
  const steps = useSelector(selectSteps);
  const step = steps[stepId];
  const [isCompleted, setIsCompleted] = useState(!step.isCompleted);

  const onHandleToggle = (e) => {
    setIsCompleted(!e.currentTarget.checked);
    updateThisStep();
  }

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
        <CheckboxContainer>
          <CheckBox type='checkbox' onChange={onHandleToggle} name='checkbox' checked={!isCompleted}/>
        </CheckboxContainer>
        <InputContainer>
          {editMode ?
          <Input autoFocus onBlur={updateThisStep} onChange={onHandleChange} value={content} name='content' />
          : <Content onDoubleClick={activateEditMode} isCompleted={!isCompleted}>{step.content}</Content>
          }
        </InputContainer>
      </InputsWrapper>
      <Button onHandleClick={deleteThisStep} name='Delete step' clear dark/>
    </Container>
  )
}

export default Step
