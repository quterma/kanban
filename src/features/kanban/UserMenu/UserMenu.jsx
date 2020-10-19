import React from 'react';
import styled from 'styled-components';
import ava from './../../../assets/images/ava.svg';
import arrow from './../../../assets/images/arrow.svg';

// styling
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
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

const UserMenu = ({ top,right }) => {
  return (
    <Container top={top} right={right}>
      <Frame>
        <Avatar src={ava} alt='avatar'/>
      </Frame>
      <Arrow src={arrow} alt='arrow'/>
    </Container>
  )
}

export default UserMenu
