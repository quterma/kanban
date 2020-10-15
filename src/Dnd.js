import React, { Component } from "react";
import initialData from "./initialData";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
`;

class Dnd extends Component {
	state = initialData;

	onDragEnd = result => {
		const { destination, source, draggableId } = result;

		if (!destination) return;
		if (destination.droppableId === source.droppableIs && destination.index === source.index) return;

		// this is just one of several possible ways for reordering in arrays
		const start = this.state.columns[source.droppableId];
		const finish = this.state.columns[destination.droppableId];

		if (start === finish) {
			const newTaskIds = Array.from(start.taskIds);
			newTaskIds.splice(source.index, 1);
			newTaskIds.splice(destination.index, 0, draggableId);

			// similar for reducer!
			const newColumn = { ...start, taskIds: newTaskIds };
			const newState = { ...this.state, columns: { ...this.state.columns, [newColumn.id]: newColumn } };

			this.setState(newState);
			return;
		}

		// Moving from one list to another
		const startTasksIds = Array.from(start.taskIds);
		startTasksIds.splice(source.index, 1);
		const newStart = { ...start, taskIds: startTasksIds };
		const finishTaskIds = Array.from(finish.taskIds);
		finishTaskIds.splice(destination.index, 0, draggableId);
		const newFinish = { ...finish, taskIds: finishTaskIds };
		const newState = {
			...this.state,
			columns: { ...this.state.columns, [newStart.id]: newStart, [newFinish.id]: newFinish },
		};

		this.setState(newState);
	};

	render() {
		return (
			// DragDropContext - context area for DnD actions
			<DragDropContext onDragEnd={this.onDragEnd}>
				<Container>
					{/* mapping columns and tasks from state */}
					{this.state.columnOrder.map(columnId => {
						const column = this.state.columns[columnId];
						const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
						return <Column key={column.id} column={column} tasks={tasks} />;
					})}
				</Container>
			</DragDropContext>
		);
	}
}

export default Dnd;
