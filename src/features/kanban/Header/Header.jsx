import React from 'react'
import styled from 'styled-components';
import UserMenu from '../UserMenu/UserMenu';

// styling
const Container = styled.div`
  display: flex;
  height: 55px;
  background: #0067A3;
  position: relative;
`;

const Title = styled.h2`
  font-size: 28px;
  line-height: 33px;
  color: #FFFFFF;
  padding: 11px 0 18px 20px;
`;

function Header() {
  return (
    <Container>
      <Title>Awesome Kanban Board</Title>
      <UserMenu top='8px' right='22px'/>
    </Container>
  )
}

export default Header
