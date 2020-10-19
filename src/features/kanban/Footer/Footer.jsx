import React from 'react'
import styled from 'styled-components';

// styling
const Container = styled.div`
  height: 55px;
  background: #0067A3;
  position: relative;
  padding: 0 20px;
`;
const Info = styled.div`
  display: inline-block;
  font-size: 18px;
  line-height: 55px;
  color: #FFFFFF;
  margin-left: ${props => props.left};
  float: ${props => props.float};
`;

const activeCount = '4';
const finishedCount = '0';
const userName = 'NAME';
const date = '01.01.2020';

const Footer = () => {
  return (
    <Container>
      <Info>Active tasks: {activeCount}</Info>
      <Info left='36px'>Finished tasks: {finishedCount}</Info>
      <Info float='right'>Kanban board by: {userName}, {date}</Info>
    </Container>
  )
}

export default Footer;
