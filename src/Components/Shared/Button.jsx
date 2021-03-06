import React from "react";
import styled from 'styled-components';

// styling
const AddItem = styled.button`
  background-color: inherit;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1.2rem;
  transition: 0.2s ease;
  color: ${props => props.light ? '#FFFFFF' : '#5E6C84'};
  padding: 6px;
  &:hover {
    background-color: ${props => props.disabled ? 'inherit' : props.dark ? '#EBECF0' : '#FFFFFF'};
    cursor: ${props => props.disabled ? 'inherit' : 'pointer'};
    color: #5E6C84;
  };
  margin: 7px 11px;
  margin-top: ${props => props.top && props.top};
`;
const Icon = styled.i`
  margin-right: 4px;
`;

const Button = ({ onHandleClick, disabled, name, light, clear, top, dark }) => {
  return (
    <AddItem onClick={onHandleClick} disabled={disabled} light={light} top={top} dark={dark}>
      {!clear && <Icon className="fas fa-plus" light={light} ></Icon>}
      {name}
    </AddItem>
  )
}

export default Button