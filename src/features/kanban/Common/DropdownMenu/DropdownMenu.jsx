import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  position: absolute;
  background-color: #FFFFFF;
  min-width: 258px;
  min-height: 70px;
  max-height: 170px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 10;
  padding: 5px;
  overflow-y: auto;
`;
const Unit = styled.li`
  font-size: 18px;
  line-height: 21px;
  padding: 8px;
  display: block;
  cursor: pointer;
  border-radius: 5px;

  &:hover { background-color: #DEDEDE }
`;

const DropdownMenu = ({ addTask, onHandleLeave, tasks }) => {

  const onHandleClick = (event) => {
    addTask(event.currentTarget.id);
  }

  const InnerList = tasks.map(task => <Unit key={task.id} id={task.id} onClick={onHandleClick}>{task.content}</Unit>);
  return (
    <Container autoFocus={true} onMouseLeave={onHandleLeave}>
      {InnerList}
    </Container>
  )
}

export default DropdownMenu;
