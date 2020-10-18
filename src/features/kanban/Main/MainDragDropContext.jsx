import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	setHomeIndex,
	setColumnOrder,
	setColumn,
	selectHomeIndex,
	selectColumnOrder,
	selectColumns,
	selectTasks,
} from "../kanbanSlice";
import { reorder } from "../utils";
import { DragDropContext } from "react-beautiful-dnd";
import Main from "./Main/Main";

// Component with main drag-n-drop logic
const MainDragDropContext = () => {
  const dispatch = useDispatch();
	const columnOrder = useSelector(selectColumnOrder);
	const columns = useSelector(selectColumns);
	const tasks = useSelector(selectTasks);
	const homeIndex = useSelector(selectHomeIndex);

	// ===== A drag has started. DnD use this responder to block updates to all <Draggable /> and <Droppable /> components during a drag.
	const onDragStart = useCallback(
		start => {
			// Setting a start column index into state
			const homeIndex = columnOrder.indexOf(start.source.droppableId);
			dispatch(setHomeIndex({ homeIndex }));
		},
		[columnOrder, dispatch]
	);

	// ===== A drag has ended. DnD use this responder to synchronously apply changes that has resulted from the drag.
	const onDragEnd = useCallback(
		result => {
			// Nullifying a start column index in state
			dispatch(setHomeIndex({ homeIndex: null }));

			// Destination: location (droppableId (column id or 'all-columns) and draggable element index) of where
			// the dragging item is now(after dragging). Could be null if the user is currently not dragging over any < Droppable />
			// Source: the location (droppableId and index) of where the dragging item has started within a <Droppable />.
			// DraggableId: draggable id
			// type of dragged element - 'task' or 'columns'
			const { destination, source, draggableId, type } = result;

			// Check - if a Draggable has been moved to the previous position - return, else - move further
			if (!destination) return;
			if (destination.droppableId === source.droppableIs && destination.index === source.index) return;

			// =====  Columns moving logic starts here ======================================
			if (type === "column") {
				// Creating a new column order array
				const newColumnOrder = reorder(source, destination, draggableId, [...columnOrder])[0];
				// Setting new columnOrder into state
				dispatch(setColumnOrder(newColumnOrder));
				return;
			}

			// Source and destination droppable colums objects
			const start = columns[source.droppableId];
			const finish = columns[destination.droppableId];

			// =====  Tasks moving within same column logic starts here ======================================
			if (start === finish) {
				// Creating a new taskIds array
				const newTaskIds = reorder(source, destination, draggableId, [...start.taskIds])[0];
				// Creating a copy of start object with new taskIds
				const newColumn = { ...start, taskIds: newTaskIds };
				// Setting new column into state
				dispatch(setColumn({ [newColumn.id]: newColumn }));
				return;
			}

			// =====  Tasks moving from one column to another logic starts here ======================================
			// Creating a new taskIds arrays
			const [startTasksIds, finishTaskIds] = reorder(
				source,
				destination,
				draggableId,
				[...start.taskIds],
				[...finish.taskIds]
			);
			// Creating copies of start and finish objects with new taskIds
			const newStart = { ...start, taskIds: startTasksIds };
			const newFinish = { ...finish, taskIds: finishTaskIds };
			// Setting new columns into state
			dispatch(setColumn({ [newStart.id]: newStart }));
			dispatch(setColumn({ [newFinish.id]: newFinish }));
		},
		// dependencies
		[columnOrder, columns, dispatch]
  );
  
  return (
			// DragDropContext - context area for DnD actions
			<DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
				<Main columnOrder={columnOrder} columns={columns} homeIndex={homeIndex} tasks={tasks} />
			</DragDropContext>
  )
}

export default MainDragDropContext;