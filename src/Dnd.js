import React, { Component } from "react";
import initialData from "./initialData";
import Column from "./Column";

class Dnd extends Component {
	state = initialData;
	render() {
		return this.state.columnOrder.map(columnId => {
			const column = this.state.columns[columnId];
			const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

			return <Column key={column.id} column={column} tasks={tasks} />;
		});
	}
}

export default Dnd;
