import React, { useCallback } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import {
	setHomeIndex,
	setColumnOrder,
	setColumn,
	selectHomeIndex,
	selectColumnOrder,
	selectColumns,
	selectTasks,
} from "./kanbanSlice";

const dispatch = useDispatch();
const columnOrder = useSelector(selectColumnOrder);
const columns = useSelector(selectColumns);
const tasks = useSelector(selectTasks);
const homeIndex = useSelector(selectHomeIndex);

// A drag has started. We use this f() to block updates to all <Draggable /> and <Droppable /> components during a drag.
export const DragStart = start => {
	// Here we set an index of a home column into state
	const homeIndex = columnOrder.indexOf(start.source.droppableId);
	dispatch(setHomeIndex({ homeIndex }));
};
