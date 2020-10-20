import React from "react";
import styled from 'styled-components';
import plus from './../../../../assets/images/plus.svg';

// styling
const AddCard = styled.button`
  width: 102px;
  height: 29px;
  background-color: inherit;
  border-radius: 5px;
  border: none;
  outline: none;
  margin: 7px 11px;
  font-size: 18px;
  color: #5E6C84;
  padding: 4px;
  transition: background-color 0.1s ease;
  &:hover {
    background-color: ${props => props.disabled ? 'inherit' : '#FFFFFF'};
    cursor: ${props => props.disabled ? 'inherit' : 'pointer'};
  };
`;

const Plus = styled.img`
  height: 14px;
  width: 14px;
  padding-right: 4px;
`;

const Button = ({onHandleClick, disabled}) => {
  return (
    <AddCard onClick={onHandleClick} disabled={disabled}><Plus src={plus}/>Add card</AddCard>
  )
}

export default Button
