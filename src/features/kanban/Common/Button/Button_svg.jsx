import React, { useState } from "react";
import styled from 'styled-components';
import Plus from './../../../../assets/images/Plus';

// styling
const AddItem = styled.button`
  background-color: inherit;
  border-radius: 5px;
  border: none;
  outline: none;
  margin: 7px 11px;
  font-size: 18px;
  color: ${props => props.light ? '#FFFFFF' : '#5E6C84'};
  padding: 6px;
  transition: 0.2s ease;
  &:hover {
    background-color: ${props => props.disabled ? 'inherit' : '#FFFFFF'};
    cursor: ${props => props.disabled ? 'inherit' : 'pointer'};
    color: #5E6C84;
  };
`;

// const Plus = styled.img`
//   height: 14px;
//   width: 14px;
//   padding-right: 4px;
// `;

const Button = ({ onHandleClick, disabled, name, light }) => {
  const [isHovered, setIsHovered] = useState(false);
  const onHandleMouseEnter = () => setTimeout(() => setIsHovered(true), 20);
  const onHandleMouseLeave = () => setTimeout(() => setIsHovered(false), 20);
  const theme = {
    light: isHovered ? '#FFFFFF' :'#5E6C84',
    normal: isHovered ? '#FFFFFF' :'#5E6C84'
  }

  return (
    <AddItem onClick={onHandleClick} disabled={disabled} light={light} onMouseEnter={onHandleMouseEnter} onMouseLeave = { onHandleMouseLeave }>
      <Plus fill={theme.light} width={14} style={{ marginRight: '4px' }}/>
      {name}
    </AddItem>
  )
}

export default Button