import React from 'react'
import MainInnerList from '../MainInnerList';

const ColumnMap = ({columnOrder, columns, homeIndex}) => {
  return columnOrder.map((columnId, index) => {
                const column = columns[columnId];
                // condition disabling droppable if you move from right to left or try to move furtherer than to the next list
                const isDropDisabled = index < homeIndex || index > homeIndex + 1;
                return (
                  <MainInnerList
                    key={column.id}
                    column={column}
                    isDropDisabled={isDropDisabled}
                    index={index}
                    columns={columns}
                    columnOrder={columnOrder}
                  />
                );
              })
}

export default ColumnMap;
