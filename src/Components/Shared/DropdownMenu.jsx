import React from 'react';
import styled from 'styled-components';
import OutsideDetector from './../../utils/outsideDetector';

const Container = styled.ul`
  position: absolute;
  background-color: #FFFFFF;
  min-width: 258px;
  min-height: 70px;
  max-height: 170px;
  right: ${props => props.right};
  transform: translateX(${props => props.right});
  top: ${props => props.top};

  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  padding: 5px;
  overflow-y: auto;
`;
const Unit = styled.li`
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4rem;
  padding: 8px;
  display: block;
  cursor: pointer;
  border-radius: 5px;

  &:hover { background-color: #DEDEDE }
`;

const DropdownMenu = ({ onSubmit, onHandleLeave, mappingData, right, top }) => {

  const onHandleClick = (event) => onSubmit(event.currentTarget);

  const InnerList = mappingData.map(el => <Unit key={el.id} id={el.id} onClick={onHandleClick}>{el.content}</Unit>);
  return (
    <Container onMouseLeave={onHandleLeave} right={right} top={top}>
      <OutsideDetector onHandleOutsideClicks={onHandleLeave}>
        {InnerList}
      </OutsideDetector>
      </Container>
  )
}

export default DropdownMenu;
