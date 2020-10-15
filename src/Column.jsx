import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 300px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  flex-grow: 1;
  min-height: 150px;
`;

export default class Column extends Component {
  render() {
    return (
    <Container>
        <Title>{this.props.column.title}</Title>
        {/* Droppable - 'mother' container for DnD elements */}
        <Droppable droppableId={this.props.column.id} >
          {(provided) => (
            <TaskList ref={provided.innerRef} {...provided.droppableProps} >
              {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
    </Container>
    )

  }
}

