import React from 'react';
import styled from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';
import Button from './../Shared/Button';
import StepsInnerList from './StepsInnerList';

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
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.h3`
  font-size: 1.3rem;
  height: 1.5rem;
  font-weight: 700;
  padding-left: 10px;
`;
const Input = styled.input`
  line-height: 1.4rem;
  font-size: 1.3rem;
  padding-left: 10px;
  border: none;
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  max-width: 40%;
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

const Editor = ({ updateTaskTitle, onInputHandleChange, activateEditMode, createNewStep, deleteThisTask, closeEditPage,
  editMode, created, newTitle, title, stepIds, taskId }) => {

  const width = useWindowSize()[0];

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
          <StepsInnerList stepIds={stepIds} taskId={taskId} />
        </Editarea>
      </Container>
    </Wrapper>
  )
}

export default Editor;
