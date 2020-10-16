import { createSlice } from "@reduxjs/toolkit";

export const kanbanSlice = createSlice({
	name: "kanban",
	initialState: {
		tasks: {
			"task-1": { id: "task-1", content: "Task 1" },
			"task-2": { id: "task-2", content: "Task 2" },
			"task-3": { id: "task-3", content: "Task 3" },
			"task-4": { id: "task-4", content: "Task 4" },
		},
		columns: {
			"column-1": {
				id: "column-1",
				title: "Backlog",
				// this property shows an affiliation to the column and an order in it
				taskIds: ["task-1", "task-2", "task-3", "task-4"],
			},
			"column-2": {
				id: "column-2",
				title: "Ready",
				// this property shows an affiliation to the column and an order in it
				taskIds: [],
			},
			"column-3": {
				id: "column-3",
				title: "In Progress",
				// this property shows an affiliation to the column and an order in it
				taskIds: [],
			},
			"column-4": {
				id: "column-4",
				title: "Finished",
				// this property shows an affiliation to the column and an order in it
				taskIds: [],
			},
		},
		// Facilitate reordering of the columns
		columnOrder: ["column-1", "column-2", "column-3", "column-4"],
	},
	reducers: {
		setHomeIndex: (state, action) => {
			state.homeIndex = action.payload;
		},
		setColumnOrder: (state, action) => {
			state.columnOrder = action.payload;
		},
		setColumn: (state, action) => {
			// const { id, value } = action.payload;
			const id = Object.keys(action.payload)[0];
			const value = Object.values(action.payload)[0];
			state.columns[id] = value;
		},
		setColumns: (state, action) => {
			state.columns = action.payload;
		},
	},
});

export const { setHomeIndex, setColumnOrder, setColumn, setColumns } = kanbanSlice.actions;

// Selectors
export const selectHomeIndex = state => state.kanban.homeIndex && Object.values(state.kanban.homeIndex)[0];
export const selectColumnOrder = state => state.kanban.columnOrder;
export const selectColumns = state => state.kanban.columns;
export const selectTasks = state => state.kanban.tasks;

export default kanbanSlice.reducer;
