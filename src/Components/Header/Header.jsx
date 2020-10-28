import React from 'react'
import { useDispatch } from 'react-redux';
import { withRouter, useLocation } from "react-router-dom";
import styled from 'styled-components';
import Button from './../Shared/Button';
import UserMenu from './../Shared/UserMenu';
import { createColumn } from './../../redux/kanbanSlice';
import { useWindowSize } from '../../utils/useWindowSize';

const Container = styled.header`
  background: #0067A3;
  display: flex;
  justify-content: ${props => props.width > 600 ? 'space-between' : 'flex-end'};
  align-items: center;
  padding: 5px 30px;
`;
const Title = styled.h2`
  font-size: 1.8rem;
  color: #FFFFFF;
`;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SmallContainer = styled.div`
  background: #0079BF;
  width: 100%;
  display: block;
  text-align: right;
  padding: 10px 20px;
`;

function Header() {
  const width = useWindowSize()[0];
  
  const isEditor = useLocation().pathname.startsWith('/editor');

  const dispatch = useDispatch();

  const createNewColumn = () => dispatch(createColumn());

  if (width < 480) {
    return (
      <SmallContainer>
        <UserMenu />
      </SmallContainer>
    )
  }

  return (
    <Container width={width}>
      {width > 600 && <Title>Awesome Kanban Board</Title>}
      <Right>
        {isEditor ||
        <Button
          onHandleClick={createNewColumn}
          name='Create new list'
          light
        />
        }
        <UserMenu />
      </Right>
    </Container>
  )
}

export default withRouter(Header);
