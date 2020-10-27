import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { createColumn } from './../../redux/kanbanSlice';
import MainInnerList from "./MainInnerList";
import Button from './../Shared/Button';
import { useWindowSize } from "./../../utils/useWindowSize";

const Container = styled.main`
  display: flex;
  align-items: flex-start;
  flex-wrap: ${props => props.width < 780 ? 'wrap' : 'nowrap'};
  justify-content: ${props => props.isOverflow ? 'start' :'center'};
  padding: 20px 0;
`;
const Wrapper = styled.div`
  overflow-x: auto;
  background-color: #0079BF;
  height: 100%;
  text-align: center;
`;

const Main = ({ columnOrder, columns, homeIndex, tasks }) => {
  const width = useWindowSize()[0];

  // check overflow for jc-center/start
  const ref = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);
  useEffect(() => ref.current && setIsOverflow(ref.current.getBoundingClientRect().width < ref.current.scrollWidth));

  // const Cols = columnOrder && columnOrder.length > 0
  const [isEmpty, setIsEmpty] = useState(columnOrder.length > 0);
  useEffect(() => setIsEmpty(columnOrder.length > 0 ? false : true), [columnOrder]);

  const dispatch = useDispatch();
  // create new column (with index 1)
  const createNewColumn = () => dispatch(createColumn());
  
  return (
    // wrapper for droppable element ref={provided.innerRef}
    <Wrapper ref={ref} >
      {isEmpty ? <Button onHandleClick={createNewColumn} name='Create new list' light top={'40vh'}/> :
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {provided => (
            <Container ref={provided.innerRef} {...provided.droppableProps} isOverflow={isOverflow} width={width}>
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
