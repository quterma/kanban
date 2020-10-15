import React, { Component } from "react";
import initialData from "./initialData";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

class Dnd extends Component {
	state = initialData;

	onDragEnd = result => {
		const { destination, source, draggableId } = result;

		if (!destination) return;
		if (destination.droppableId === source.droppableIs && destination.index === source.index) return;

		// this is just one of several possible ways for reordering in arrays
		const column = this.state.columns[source.droppableId];
		const newTaskIds = Array.from(column.taskIds);
		newTaskIds.splice(source.index, 1);
		newTaskIds.splice(destination.index, 0, draggableId);

		// similar for reducer!
		const newColumn = { ...column, taskIds: newTaskIds };
		const newState = { ...this.state, columns: { ...this.state.columns, [newColumn.id]: newColumn } };

		this.setState(newState);
	};

	render() {
		return (
			// DragDropContext - context area for DnD actions
			<DragDropContext onDragEnd={this.onDragEnd}>
				{/* mapping columns and tasks from state */}
				{this.state.columnOrder.map(columnId => {
					const column = this.state.columns[columnId];
					const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
					return <Column key={column.id} column={column} tasks={tasks} />;
				})}
			</DragDropContext>
		);
	}
}

export default Dnd;
