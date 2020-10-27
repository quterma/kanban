import React from 'react';
import { useSelector } from "react-redux";
import { selectColumnOrder,	selectColumns } from "./../../redux/kanbanSlice";
import styled from 'styled-components';

// styling
const Container = styled.footer`
  height: 55px;
  background: #0067A3;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
`;
const InfoWrapper = styled.div`
  padding: 5px;
`;
const Info = styled.div`
  font-size: 1.3rem;
  display: inline-block;
  color: #FFFFFF;
  margin: 0 10px;
  text-align: center;
`;

// заглушка =====
const userName = 'NAME'; 
const date = new Date().toISOString().split('T')[0].replace(/-/g, '.');

const Footer = () => {
  const columnOrder = useSelector(selectColumnOrder);
  const columns = useSelector(selectColumns);
  const activeCount = columnOrder.length === 0 ? 0 : columns[columnOrder[0]].taskIds.length;
  const finishedCount = columnOrder.length === 0 ? 0 : columns[columnOrder[columnOrder.length - 1]].taskIds.length;

  return (
    <Container>
      <InfoWrapper>
        <Info>Active tasks:  {activeCount}</Info>
        <Info>Finished tasks:  {finishedCount}</Info>
      </InfoWrapper>
      <InfoWrapper>
        <Info>Kanban board by:  {userName}</Info>
        <Info>{date}</Info>
      </InfoWrapper>
    </Container>
  )
}

export default Footer;
