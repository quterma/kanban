import React, { useCallback } from "react";
import Column from "./features/kanban/Column";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
	setHomeIndex,
	setColumnOrder,
	setColumn,
	selectHomeIndex,
	selectColumnOrder,
	selectColumns,
	selectTasks,
} from "./features/kanban/kanbanSlice";

// component styling with 'styled-components'
const Container = styled.div`
	display: flex;
`;

const InnerList = props => {
	const { column, taskMap, index, isDropDisabled } = props;
	const tasks = column.taskIds.map(taskId => taskMap[taskId]);
	return <Column column={column} tasks={tasks} index={index} isDropDisabled={isDropDisabled} />;
};

// main Component
const App = () => {
	const dispatch = useDispatch();
	const columnOrder = useSelector(selectColumnOrder);
	const columns = useSelector(selectColumns);
	const tasks = useSelector(selectTasks);
	const homeIndex = useSelector(selectHomeIndex);

	// A drag has started. We use this f() to block updates to all <Draggable /> and <Droppable /> components during a drag.
	const onDragStart = useCallback(
		start => {
			// Here we set an index of a home column into state
			const homeIndex = columnOrder.indexOf(start.source.droppableId);
			dispatch(setHomeIndex({ homeIndex }));
		},
		[columnOrder, dispatch]
	);

	// A drag has ended. It is the responsibility of this responder to synchronously apply changes that has resulted from the drag.
	const onDragEnd = useCallback(
		result => {
			// Nullifying of an index in state after drag end
			dispatch(setHomeIndex({ homeIndex: null }));

			// destination: the location (droppableId and index) of where the dragging item is now.
			// This can be null if the user is currently not dragging over any < Droppable />
			// source: the location (droppableId and index) of where the dragging item has started within a <Droppable />.
			// draggableId: draggable task (element) id
			const { destination, source, draggableId, type } = result;

			// Check - if a Draggable element has been moved to the previous position - stops, else - move further
			if (!destination) return;
			if (destination.droppableId === source.droppableIs && destination.index === source.index) return;

			// moving columns
			if (type === "column") {
				// make copy of columnOrder array, reorder columns in it, set into state
				const newColumnOrder = Array.from(columnOrder);
				newColumnOrder.splice(source.index, 1);
				newColumnOrder.splice(destination.index, 0, draggableId);

				dispatch(setColumnOrder(newColumnOrder));
				return;
			}

			// this is just one of several possible ways for reordering in arrays - note for me for possible refactoring

			// columns ids
			const start = columns[source.droppableId];
			const finish = columns[destination.droppableId];

			// if element moved within same column
			if (start === finish) {
				// make a copy of taskIds, reorder Ids
				const newTaskIds = Array.from(start.taskIds);
				newTaskIds.splice(source.index, 1);
				newTaskIds.splice(destination.index, 0, draggableId);

				// kind of reducer in redux - make copy of state, change inside taskIds in droppable column
				const newColumn = { ...start, taskIds: newTaskIds };

				dispatch(setColumn({ [newColumn.id]: newColumn }));
				// this.setState(newState);
				return;
			}

			// Moving from one list to another
			// make copy of home list and remove draggableId
			const startTasksIds = Array.from(start.taskIds);
			startTasksIds.splice(source.index, 1);
			const newStart = { ...start, taskIds: startTasksIds };
			// make copy of finish list and add draggableId
			const finishTaskIds = Array.from(finish.taskIds);
			finishTaskIds.splice(destination.index, 0, draggableId);
			const newFinish = { ...finish, taskIds: finishTaskIds };
			// make copy of state and add necessary changes

			dispatch(setColumn({ [newStart.id]: newStart }));
			dispatch(setColumn({ [newFinish.id]: newFinish }));
		},
		[columnOrder, columns, dispatch]
	);

	return (
		// DragDropContext - context area for DnD actions
		<DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
			<Droppable droppableId="all-columns" direction="horizontal" type="column">
				{provided => (
					<Container ref={provided.innerRef} {...provided.droppableProps}>
						{columnOrder.map((columnId, index) => {
							const column = columns[columnId];

							// condition disabling droppable if you move from right to left or try to move furtherer than to the next list
							const isDropDisabled = index < homeIndex || index > homeIndex + 1;

							return (
								<InnerList
									key={column.id}
									column={column}
									taskMap={tasks}
									isDropDisabled={isDropDisabled}
									index={index}
								/>
							);
						})}
						{provided.placeholder}
					</Container>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default App;
