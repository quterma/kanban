import React from 'react';
import styled from 'styled-components';
import OutsideDetecter from '../outsideDetector';

const Container = styled.ul`
  position: absolute;
  background-color: #FFFFFF;
  min-width: 258px;
  min-height: 70px;
  max-height: 170px;
  right: ${props => props.align};
  transform: translateX(${props => props.align});
  top: ${props => props.top};

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

const DropdownMenu = ({ onSubmit, onHandleLeave, mappingData, align, top }) => {

  const onHandleClick = (event) => {
    onSubmit(event.currentTarget);
  }

  const location = {
    right: '1%',
    center: '50%'
    }

  const InnerList = mappingData.map(el => <Unit key={el.id} id={el.id} onClick={onHandleClick}>{el.content}</Unit>);
  return (
    
    <Container onMouseLeave={onHandleLeave} align={location[align]} top={top}>
      <OutsideDetecter onHandleOutsideClicks={onHandleLeave}>
        {InnerList}
      </OutsideDetecter>
      </Container>
  )
}

export default DropdownMenu;
