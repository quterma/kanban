import React from 'react';
import { useSelector } from "react-redux";
import { selectColumnOrder,	selectColumns } from "./../kanbanSlice";
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

const userName = 'NAME';
const date = '01.01.2020';

const Footer = () => {
  const columnOrder = useSelector(selectColumnOrder);
  const columns = useSelector(selectColumns);
  const activeCount = columns[columnOrder[0]].taskIds.length;
  const finishedCount = columns[columnOrder[columnOrder.length - 1]].taskIds.length;

  return (
    <Container>
      <Info>Active tasks: {activeCount}</Info>
      <Info left='36px'>Finished tasks: {finishedCount}</Info>
      <Info float='right'>Kanban board by: {userName}, {date}</Info>
    </Container>
  )
}

export default Footer;
