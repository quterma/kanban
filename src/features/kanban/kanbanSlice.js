import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "node-uuid";

export const kanbanSlice = createSlice({
	name: "kanban",
	initialState: {
		tasks: {
			"task-1": {
				id: "task-1",
				content: "Move this task from 'backlog' to 'finished' (1 column per 1 movement",
				steps: [
					{ id: "task-1-step-1", content: "move from 'backlog' to 'ready'", isCompleted: false },
					{ id: "task-1-step-2", content: "move from 'ready' to 'in progress'", isCompleted: false },
					{ id: "task-1-step-3", content: "move from to 'in progress' to 'finished'", isCompleted: false },
				],
			},
			"task-2": {
				id: "task-2",
				content: "double click on me and investigate",
				steps: [
					{ id: "task-2-step-1", content: "rename task", isCompleted: false },
					{ id: "task-2-step-2", content: "add new step", isCompleted: false },
					{ id: "task-2-step-3", content: "update step", isCompleted: false },
				],
			},
			"task-3": { id: "task-3", content: "Task 333", steps: [] },
			"task-4": { id: "task-4", content: "Task 444", steps: [] },
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
		createTask: (state, action) => {
			const created = action.payload;
			const id = v4();
			state.tasks[id] = { id, content: "", steps: [], created };
			state.columns[state.columnOrder[0]].taskIds.push(id);
		},
		createColumn: state => {
			const id = v4();
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
		createTaskStep: (state, action) => {
			// expected taskid - string
			const taskId = action.payload;
			const id = v4();
			const newStep = { id, content: "", isCompleted: false };
			state.tasks[taskId].steps.push(newStep);
		},
		updateTaskStep: (state, action) => {
			// expected step - object {taskid, step: {id, content, isCompleted}}
			const taskId = action.payload.taskid;
			const step = {
				id: action.payload.step.id,
				content: action.payload.step.content,
				isCompleted: action.payload.step.content,
			};
			state.tasks[taskId].steps.push(step);
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
	createTaskStep,
	updateTaskStep,
} = kanbanSlice.actions;

// Selectors
export const selectHomeIndex = state => state.kanban.homeIndex && Object.values(state.kanban.homeIndex)[0];
export const selectColumnOrder = state => state.kanban.columnOrder;
export const selectColumns = state => state.kanban.columns;
export const selectTasks = state => state.kanban.tasks;

export default kanbanSlice.reducer;
