import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "node-uuid";

export const kanbanSlice = createSlice({
	name: "kanban",
	initialState: {
		steps: {
			// 'stepId': {id: stepId (string), content: string, isCompleted: boolean}
		},
		tasks: {
			"task-1": { id: "task-1", content: "One", steps: [] },
			"task-2": { id: "task-2", content: "Two", steps: [] },
			"task-3": { id: "task-3", content: "Three", steps: [] },
			"task-4": { id: "task-4", content: "Four", steps: [] },
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

		createColumn: state => {
			const id = v4();
			state.columns[id] = { id, title: "", taskIds: [] };
			state.columnOrder.splice(1, 0, id);
		},
		setColumn: (state, action) => {
			const id = Object.keys(action.payload)[0];
			const value = Object.values(action.payload)[0];
			state.columns[id].taskIds = value;
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
			// expected { columnId, newTitle }
			const { columnId, newTitle } = action.payload;
			state.columns[columnId].title = newTitle;
		},

		createTask: (state, action) => {
			const created = action.payload;
			const id = v4();
			state.tasks[id] = { id, content: "", steps: [], created };
			const firstColumnId = state.columnOrder[0];
			state.columns[firstColumnId].taskIds.push(id);
		},
		deleteTask: (state, action) => {
			// expected taskId
			const taskId = action.payload;
			for (let columnId in state.columns) {
				const taskIndex = state.columns[columnId].taskIds.findIndex(el => el === taskId);
				if (taskIndex >= 0) state.columns[columnId].taskIds.splice(taskIndex, 1);
			}
			delete state.tasks[taskId];
		},
		setTaskTitle: (state, action) => {
			// expected { id, newTitle }
			const { id, newTitle } = action.payload;
			state.tasks[id].content = newTitle;
		},

		createStep: (state, action) => {
			// expected taskid - string
			const taskId = action.payload;
			const id = v4();
			state.steps[id] = { id, content: "", isCompleted: false };
			state.tasks[taskId].steps.push(id);
		},
		updateStep: (state, action) => {
			// expected step - {id, content, isCompleted}}
			const { id, content, isCompleted } = action.payload;
			state.steps[id] = { id, content, isCompleted };
		},
		deleteStep: (state, action) => {
			// expected { taskId, stepId }
			const { taskId, stepId } = action.payload;
			state.tasks[taskId].steps.splice(state.tasks[taskId].steps.indexOf(stepId), 1);
			delete state.steps[stepId];
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
	createStep,
	updateStep,
	deleteStep,
	deleteTask,
} = kanbanSlice.actions;

// Selectors
export const selectHomeIndex = state => state.kanban.homeIndex && Object.values(state.kanban.homeIndex)[0];
export const selectColumnOrder = state => state.kanban.columnOrder;
export const selectColumns = state => state.kanban.columns;
export const selectTasks = state => state.kanban.tasks;
export const selectSteps = state => state.kanban.steps;

export default kanbanSlice.reducer;
