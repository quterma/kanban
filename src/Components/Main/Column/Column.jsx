import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { createTask, setColumn } from "./../../../redux/kanbanSlice";
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import ColumnInnerList from './ColumnInnerList';
import Button from './../../Shared/Button';
import DropdownMenu from './../../Shared/DropdownMenu';
import { reorder } from './../../../utils/reorder';
import ColumnHeader from './ColumnHeader';

// styling
const Container = styled.div`
  border: 1px solid lightgrey;
  min-width: 282px;
  max-height: 95%;
  background-color: #EBECF0;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  text-align: left;
  margin: 20px;
`;
const TaskList = styled.div`
  padding: 12px;
  align-self: stretch;
  flex-grow: 1;
  min-height: 140px;
  max-width: 280px;
  transition: background-color 0.1s ease;
  background-color: ${props => props.isDraggingOver ? '#add8e6c4' : 'inherit'};
  overflow-y: auto;
`;
const RelativeContainer = styled.div`
  position: relative;
  height: 48px;
  width: 100%;
`;
const Wrapper = styled.div`
  padding: 0 20px;
  height: 100%;
`;
const ColumnHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  width: 100%;
  outline: none;
`;

const Column = ({ column, tasks, index, isDropDisabled, columns, columnOrder, taskMap }) => {
  const dispatch = useDispatch();
  const prevCol = columns[columnOrder[index - 1]];
  const thisCol = columns[columnOrder[index]];

  // create new task in first column
  const createNewTask = () => {
    const created = new Date().toISOString().split('.')[0].replace(/-/g, '.').replace(/t/gi, ' at ');
    dispatch(createTask(created));
  }

  // for disabling add task button
  const isPreviousEmpty = index > 0 && prevCol.taskIds.length < 1;
  const [addTaskDisabled, setAddTaskDisabled] = useState(isPreviousEmpty);

  useEffect(() => { setAddTaskDisabled(isPreviousEmpty) }, [isPreviousEmpty]);

  // for switching button to dropdown menu
  const [isDropdown, setIsDropdown] = useState(false);
  
  // getting and setting new tasklists for previous and this column after moving task
  const addTask = data => {
    const id = data.id;
    const start = prevCol;
    const finish = thisCol;
    const sourceIndex = prevCol.taskIds.indexOf(id)
    const destinationIndex = thisCol.taskIds.length;
    const [startTasksIds, finishTaskIds] = reorder(sourceIndex, destinationIndex, id, start.taskIds, finish.taskIds);
    dispatch(setColumn({ [start.id]: startTasksIds }));
    dispatch(setColumn({ [finish.id]: finishTaskIds }));
    setIsDropdown(false);
  };

  // mapping previous column tasks for dropdown menu
  const dropDownTasks = index > 0 && prevCol.taskIds.map(taskId => taskMap[taskId]);
  return (
    <Wrapper>
    {/* Draggable wrapper - makes everything  draggable */}
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Container ref={provided.innerRef} {...provided.draggableProps}>
          {/* Title here has draghandling props which makes this element to be a draghandler */}
          <ColumnHeaderContainer {...provided.dragHandleProps}>
            <ColumnHeader
                title={column.title}
                thisColId={columnOrder[index]}
            />
          </ColumnHeaderContainer>
          {/* wrapper for droppable element */}
          <Droppable droppableId={column.id} isDropDisabled={isDropDisabled} type='task' top='100px'>
            {(provided, snapshot) => (
              <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
              >
                <ColumnInnerList tasks={tasks} />
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
          <RelativeContainer>
            {isDropdown ?
                <DropdownMenu mappingData={dropDownTasks} onSubmit={addTask} onHandleLeave={() => setIsDropdown(false)} right='50%' top='-100px'/>
              : <Button
                onHandleClick={index === 0 ? createNewTask : () => setIsDropdown(true)}
                disabled={addTaskDisabled}
                name={index === 0 ? 'Create new task' : 'Add task'}
              />
            }
          </RelativeContainer>
        </Container>
      )}
      </Draggable>
      </Wrapper>
  )
}

export default Column