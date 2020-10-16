import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 300px;
  background-color: white;
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
  transition: background-color 0.2s ease;
  background-color: ${props => props.isDraggingOver ? 'lightblue' : 'inherit'};
`;

export default class Column extends Component {
  render() {
    return (
      // Draggable wrapper - makes everything  draggable
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided) => (
          <Container ref={provided.innerRef} {...provided.draggableProps}>
            {/* Title here has draghandling props which makes this element draghandler */}
            <Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
            {/* wrapper for droppable element */}
            <Droppable droppableId={this.props.column.id} isDropDisabled={this.props.isDropDisabled} type='task'>
              {(provided, snapshot) => (
                <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
                >
                  {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    )

  }
}

