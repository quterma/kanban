const initialData = {
	tasks: {
		"task-1": { id: "task-1", content: "Task 1" },
		"task-2": { id: "task-2", content: "Task 2" },
		"task-3": { id: "task-3", content: "Task 3" },
		"task-4": { id: "task-4", content: "Task 4" },
	},
	columns: {
		"column-1": {
			id: "column-1",
			title: "To do",
			// this property shows an affiliation to the column and an order in it
			taskIds: ["task-1", "task-2", "task-3", "task-4"],
		},
		"column-2": {
			id: "column-2",
			title: "In Progress",
			// this property shows an affiliation to the column and an order in it
			taskIds: [],
		},
		"column-3": {
			id: "column-3",
			title: "Finished",
			// this property shows an affiliation to the column and an order in it
			taskIds: [],
		},
	},

	// Facilitate reordering of the columns
	columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
