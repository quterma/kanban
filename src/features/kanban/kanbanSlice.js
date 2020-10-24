import { createSlice } from "@reduxjs/toolkit";

export const kanbanSlice = createSlice({
	name: "kanban",
	initialState: {
		tasks: {
			"task-1": { id: "task-1", content: "Task 111", text: "" },
			"task-2": { id: "task-2", content: "Task 222", text: "" },
			"task-3": { id: "task-3", content: "Task 333", text: "" },
			"task-4": { id: "task-4", content: "Task 444", text: "" },
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
			const id = Object.keys(action.payload)[0];
			const value = Object.values(action.payload)[0];
			state.columns[id].taskIds = value;
		},
		createTask: state => {
			const id = `task-${Object.keys({ ...state.tasks }).length + 1}`;
			state.tasks[id] = { id, content: "" };
			state.columns[state.columnOrder[0]].taskIds.push(id);
		},
		createColumn: state => {
			const totalColumns = Object.keys({ ...state.columns }).length;
			const id = `column-${totalColumns > 0 ? totalColumns + 1 : 0}`;
			state.columns[id] = { id, title: "", taskIds: [] };
			state.columnOrder.splice(1, 0, id);
		},
		deleteColumn: (state, action) => {
			const columnId = action.payload;
			const taskIds = state.columns[columnId].taskIds;
			if (state.columnOrder.indexOf(columnId) === 0) {
				taskIds.forEach(task => delete state.tasks[task]);
			} else {
				state.columns[columnId].taskIds.forEach(task => state.columns[state.columnOrder[0]].taskIds.push(task));
			}
			delete state.columns[columnId];
			state.columnOrder.splice(state.columnOrder.indexOf(columnId), 1);
		},
		setColumnTitle: (state, action) => {
			const columnId = action.payload.id;
			const newTitle = action.payload.newTitle;
			state.columns[columnId].title = newTitle;
		},
		setTaskTitle: (state, action) => {
			const taskId = action.payload.id;
			const newTitle = action.payload.newTitle;
			state.tasks[taskId].content = newTitle;
		},
		setTaskText: (state, action) => {
			const taskId = action.payload.id;
			const newText = action.payload.newText;
			state.tasks[taskId].text = newText;
		},
	},
});

export const {
	setHomeIndex,
	setColumnOrder,
	setColumn,
	createTask,
	createColumn,
	deleteColumn,
	setColumnTitle,
	setTaskTitle,
	setTaskText,
} = kanbanSlice.actions;

// Selectors
export const selectHomeIndex = state => state.kanban.homeIndex && Object.values(state.kanban.homeIndex)[0];
export const selectColumnOrder = state => state.kanban.columnOrder;
export const selectColumns = state => state.kanban.columns;
export const selectTasks = state => state.kanban.tasks;

export default kanbanSlice.reducer;
