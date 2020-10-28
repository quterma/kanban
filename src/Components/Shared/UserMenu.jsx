import React, { useState } from 'react';
import styled from 'styled-components';
import ava from './../../images/ava.svg';
import arrow from './../../images/arrow.svg';
import DropdownMenu from './DropdownMenu';

const Wrapper = styled.div`
  margin-left: 20px;
  display: inline-block;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover { opacity: 0.8 }
`;
const Frame = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #FFFFFF;
  background-color: #FFFFFF;
  position: relative;
`;
const Avatar = styled.img`
  height: 33px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
const Arrow = styled.img`
  height: 8px;
  transform: ${props => (props.open ? 'matrix(1, 0, 0, -1, 0, 0)' : 'unset')};
  margin-left: 8px;
`;

const UserMenu = () => {

  // for switching button to dropdown menu
  const [isDropdown, setIsDropdown] = useState(false);
  const showDropdown = () => setIsDropdown(true);
  const hideDropdown = () => setIsDropdown(false);

  // ========================   Заглушки   ================
  const dropDownItems = [{ id: 'profile', content: 'Profile' }, { id: 'logout', content: 'Log Out' }];
  const onDropdownSubmit = data => {
    console.log(`Hey! This is currently unavailable. You pressed "${data.id}" item. Good for you! :)`);
    hideDropdown();
  }

  return (
    <Wrapper>
      <Container onClick={showDropdown}>
        <Frame>
          <Avatar src={ava} alt='avatar'/>
        </Frame>
        <Arrow src={arrow} alt='arrow' open={isDropdown}/>
      </Container>
      {isDropdown && <DropdownMenu mappingData={dropDownItems} onSubmit={onDropdownSubmit} onHandleLeave={hideDropdown} right='1%' top='50px'/>}
    </Wrapper>
  )
}

export default UserMenu
