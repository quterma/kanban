import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DropdownMenu from './../../Shared/DropdownMenu';
import Button from './../../Shared/Button';
import { reorder } from '../../../utils/reorder';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, selectTasks, setColumn } from '../../../redux/kanbanSlice';

const Container = styled.div`
  position: relative;
  height: 48px;
`;

const ColumnFooter = ({ thisColumn, prevColumn, index }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  // local state and for disabling add task button
  const isPreviousEmpty = index > 0 && prevColumn.taskIds.length < 1;
  const [isDisabled, setIsDisabled] = useState(isPreviousEmpty);
  useEffect(() => { setIsDisabled(isPreviousEmpty) }, [isPreviousEmpty]);

  // local state for toggling button/dropdown menu
  const [isDropdown, setIsDropdown] = useState(false);
  const showDropDown = () => setIsDropdown(true)
  const showButton = () => setIsDropdown(false)

  // create new task in first column
  const createNewTask = () => {
    const created = new Date().toISOString().split('.')[0].replace(/-/g, '.').replace(/t/gi, ' at ');
    dispatch(createTask(created));
  }

  // add task from previous column
  const addTask = data => {
    const id = data.id;
    const start = prevColumn;
    const finish = thisColumn;
    const sourceIndex = prevColumn.taskIds.indexOf(id)
    const destinationIndex = thisColumn.taskIds.length;
    const [startTasksIds, finishTaskIds] = reorder(sourceIndex, destinationIndex, id, start.taskIds, finish.taskIds);
    dispatch(setColumn({ [start.id]: startTasksIds }));
    dispatch(setColumn({ [finish.id]: finishTaskIds }));
    showButton();
  };

  // mapping previous column tasks for dropdown menu
  const mappingData = index > 0 && prevColumn.taskIds.map(taskId => tasks[taskId]);

  return (
    <Container>
      { isDropdown ?
        <DropdownMenu mappingData={mappingData} onSubmit={addTask} onHandleLeave={showButton} right='50%' top='-120px' />
        : <Button
          onHandleClick={index === 0 ? createNewTask : showDropDown}
          disabled={isDisabled}
          name={index === 0 ? 'Create new task' : 'Add task'}
        />
      }
    </Container>
  )
}

export default ColumnFooter;
