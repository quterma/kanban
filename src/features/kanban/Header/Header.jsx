import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '../Common/Button/Button';
import UserMenu from '../Common/UserMenu/UserMenu';
import { createColumn } from '../kanbanSlice';
import DropdownMenu from './../Common/DropdownMenu/DropdownMenu';

// styling
const Container = styled.header`
  height: 55px;
  background: #0067A3;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-right: 150px;
`;

const Title = styled.h2`
  font-size: 28px;
  line-height: 33px;
  color: #FFFFFF;
  padding: 11px 0 18px 20px;
`;

function Header() {
  // for switching button to dropdown menu
  const [isDropdown, setIsDropdown] = useState(false);
  const showDropdown = () => setIsDropdown(true);
  const hideDropdown = () => setIsDropdown(false);

  // ========================   Заглушки!!!   ================
  const dropDownItems = [{ id: '1', content: 'Profile' }, { id: '2', content: 'Log Out' }];
  const onDropdownSubmit = data => {
    console.log(`Hey! This is currently unavailable. You pressed "${data.innerHTML}" item. Good for you! :)`);
    hideDropdown();
  }
  const dispatch = useDispatch();
  // create new column (with index 1)
  const createNewColumn = () => dispatch(createColumn());

  return (
    <Container>
      <Title>Awesome Kanban Board</Title>
      <Button
        onHandleClick={createNewColumn}
        name='Create new list'
        light
      />
      <UserMenu top='8px' right='22px' onHandleClick={showDropdown} open={isDropdown}/>
      {isDropdown && <DropdownMenu mappingData={dropDownItems} onSubmit={onDropdownSubmit} onHandleLeave={hideDropdown} right='1%' top='50px'/>}
    </Container>
  )
}

export default Header
