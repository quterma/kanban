import React, { useEffect, useRef, useState } from 'react'
import { Droppable } from "react-beautiful-dnd";
import MainInnerList from "./MainInnerList";
import styled from "styled-components";
import Button from '../Common/Button/Button';
import { useDispatch } from 'react-redux';
import { createColumn } from '../kanbanSlice';

// styling
const Container = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: ${props => props.scroll ? 'start' :'center'};
  height: 100%;
  padding: 20px 0;
`;
const Wrapper = styled.div`
  overflow-x: auto;
  background-color: #0079BF;
  height: 100%;
  text-align: center;
`;

const Main = ({ columnOrder, columns, homeIndex, tasks }) => {
  // check overflow for jc-center/start
  const ref = useRef(null);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    if (!ref.current) {
      setScroll(false);
      return;
    }
    const isOverflow = ref.current.getBoundingClientRect().width < ref.current.scrollWidth;
    setScroll(isOverflow);
  }, [columnOrder.length]);

  // const Cols = columnOrder && columnOrder.length > 0
  const [isEmpty, setIsEmpty] = useState(columnOrder.length > 0);
  useEffect(() => {
    setIsEmpty(columnOrder.length > 0 ? false : true);
  }, [columnOrder])
  const dispatch = useDispatch();
  // create new column (with index 1)
  const createNewColumn = () => dispatch(createColumn());

  return (
    // wrapper for droppable element ref={provided.innerRef}
    <Wrapper ref={ref}>
      {isEmpty ? <Button onHandleClick={createNewColumn} name='Create new list' light top={'40vh'}/> :
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {provided => (
            <Container ref={provided.innerRef} {...provided.droppableProps} scroll={scroll}>
              {/* map columns */}
              {columnOrder.map((columnId, index) => {
                const column = columns[columnId];
                // condition disabling droppable if you move from right to left or try to move furtherer than to the next list
                const isDropDisabled = index < homeIndex || index > homeIndex + 1;
                return (
                  <MainInnerList
                    key={column.id}
                    column={column}
                    taskMap={tasks}
                    isDropDisabled={isDropDisabled}
                    index={index}
                    columns={columns}
                    columnOrder={columnOrder}
                  />
                );
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      }
      </Wrapper>
  )
}

export default Main;
