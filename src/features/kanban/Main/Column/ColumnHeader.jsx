import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownMenu from './../../Common/DropdownMenu/DropdownMenu';
import Button from './../../Common/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteColumn, setColumnTitle } from '../../kanbanSlice';

const Title = styled.h3`
  padding: 12px;
  font-size: 18px;
`;
const RelativeContainer = styled.div`
  position: relative;
`;
const Input = styled.input`
  margin-left: 12px;
  width: 160px;
  line-height: 21px;
`;

const ColumnHeader = ({ title, thisColId }) => {
  const dispatch = useDispatch();
  // editMode state for setting new column title
  const [editMode, setEditMode] = useState(title === '');
  const activateEditMode = () => setEditMode(true);
  // title state for title inpute onChange subscribe and setting value
  const [newTitle, setNewTitle] = useState(title);
  const onHandleChange = (e) => setNewTitle(e.currentTarget.value.substring(0, 18))
  // get newTitle from local state and dispath in store
  const updateColumnTitle = () => {
    dispatch(setColumnTitle({ newTitle: newTitle ? newTitle : 'New Column', id: thisColId }));
    setEditMode(false);
  }
  // data for dropdownMenu mapping
  const mappingData = [{ id: 'delete column', content: 'Delete Column' }, { id: 'rename column', content: 'Rename column' }];
  // state for toggling Button('...') | Dropdown('delete column', 'rename column')
  const [isDropdown, setisDropdown] = useState(false);
  //get data from dropdownMenu and choose action
  const execDropdownCommand = data => {
    switch (data.id) {
      case 'delete column':
        dispatch(deleteColumn(thisColId));
        setisDropdown(false);
        break;
      case 'rename column':
        activateEditMode();
        setisDropdown(false);
        break;
      default: return;
    }
  }

  return (
    <>
      {editMode ?
        <Input autoFocus onBlur={updateColumnTitle} onChange={onHandleChange} value={newTitle} name={title}/>
        : <Title onDoubleClick={activateEditMode}>{title}</Title>}
      {isDropdown ?
        <RelativeContainer>
          <DropdownMenu
            mappingData={mappingData}
            onSubmit={execDropdownCommand}
            onHandleLeave={() => setisDropdown(false)}
            right='-4%' top='15px' />
        </RelativeContainer>
        : <Button
          onHandleClick={() => setisDropdown(true)}
          name={'. . .'}
          clear
        />
      }
    </>
  )
}

export default ColumnHeader
