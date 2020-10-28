import React from 'react';
import styled from 'styled-components';
import Button from './../Shared/Button';

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
  min-height: 40px;
`;
const InputContainer = styled.div`
  min-height: 40px;
  width: 100%;
  padding-left: 10px;
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
  font-size: 1.2rem;
  line-height: 2rem;
  margin: 0;
  padding: 0;
  text-decoration: ${props => props.isCompleted && 'line-through #0000ffa9'};
`;
const Input = styled.input`
  width: 100%;
  flex: 1;
  line-height: 2rem;
  padding: 0;
  font-size: 1.2rem;
  border: none;
  margin: 0;
  text-decoration: underline;
`;

const Step = ({ onHandleToggle, updateThisStep, onHandleChange, activateEditMode,
  deleteThisStep, newContent, isCompleted, content, editMode }) => {

  return (
    <Container>
      <InputsWrapper>
        <CheckboxContainer>
          <CheckBox type='checkbox' onChange={onHandleToggle} name='checkbox' checked={isCompleted}/>
        </CheckboxContainer>
        <InputContainer>
          {editMode ?
          <Input autoFocus onBlur={updateThisStep} onChange={onHandleChange} value={newContent} name='content' />
          : <Content onDoubleClick={activateEditMode} isCompleted={isCompleted}>{content}</Content>
          }
        </InputContainer>
      </InputsWrapper>
      <Button onHandleClick={deleteThisStep} name='Delete step' clear dark/>
    </Container>
  )
}

export default Step
