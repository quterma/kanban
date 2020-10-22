import React from "react";
import styled from 'styled-components';

// styling
const AddItem = styled.button`
  background-color: inherit;
  border-radius: 5px;
  border: none;
  outline: none;
  margin: 7px 11px;
  font-size: 18px;
  transition: 0.3s ease;
  color: ${props => props.light ? '#FFFFFF' : '#5E6C84'};
  padding: 6px;
  &:hover {
    background-color: ${props => props.disabled ? 'inherit' : '#FFFFFF'};
    cursor: ${props => props.disabled ? 'inherit' : 'pointer'};
    color: #5E6C84;
  };
`;
const Icon = styled.i`
  margin-right: 4px;
`;

const Button = ({ onHandleClick, disabled, name, light }) => {
  return (
    <AddItem onClick={onHandleClick} disabled={disabled} light={light}>
      <Icon className="fas fa-plus" light={light}></Icon>
      {name}
    </AddItem>
  )
}

export default Button