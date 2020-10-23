import React from 'react';
import { withRouter } from "react-router-dom";
import styled from 'styled-components';
import Button from '../../Common/Button/Button';

// styling
const Container = styled.div`
  border: 1px solid lightgrey;
  width: 90%;
  height: 80%;
  background-color: #EBECF0;
  border-radius: 10px;
  text-align: left;
`;
const Header = styled.div``;
const Title = styled.h3``;
const Textarea = styled.textarea``;

const TaskEditor = ({ title }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Button/>
      </Header>
      <Textarea/>
    </Container>
  )
}

export default withRouter(TaskEditor);
