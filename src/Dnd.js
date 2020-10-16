import React, { Component, PureComponent } from "react";
import initialData from "./initialData";
import Column from "./Column";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

// component styling with 'styled-components'
const Container = styled.div`
	display: flex;
`;

class InnerList extends PureComponent {
	render() {
		const { column, taskMap, index, isDropDisabled } = this.props;
		const tasks = column.taskIds.map(taskId => taskMap[taskId]);
		return <Column column={column} tasks={tasks} index={index} isDropDisabled={isDropDisabled} />;
	}
}

class Dnd extends Component {
	state = initialData;

	// A drag has started. We use this f() to block updates to all <Draggable /> and <Droppable /> components during a drag.
	onDragStart = start => {
		// Here we set an index of a home column into state
		const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);
		this.setState({ homeIndex });
	};

	// A drag has ended. It is the responsibility of this responder to synchronously apply changes that has resulted from the drag.
	onDragEnd = result => {
		// Nullifying of an index in state after drag end
		this.setState({ homeIndex: null });

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
			const newColumnOrder = Array.from(this.state.columnOrder);
			newColumnOrder.splice(source.index, 1);
			newColumnOrder.splice(destination.index, 0, draggableId);

			const newState = { ...this.state, columnOrder: newColumnOrder };
			this.setState(newState);
			return;
		}

		// this is just one of several possible ways for reordering in arrays - note for me for possible refactoring

		// columns ids
		const start = this.state.columns[source.droppableId];
		const finish = this.state.columns[destination.droppableId];

		// if element moved within same column
		if (start === finish) {
			// make a copy of taskIds, reorder Ids
			const newTaskIds = Array.from(start.taskIds);
			newTaskIds.splice(source.index, 1);
			newTaskIds.splice(destination.index, 0, draggableId);

			// kind of reducer in redux - make copy of state, change inside taskIds in droppable column
			const newColumn = { ...start, taskIds: newTaskIds };
			const newState = { ...this.state, columns: { ...this.state.columns, [newColumn.id]: newColumn } };

			this.setState(newState);
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
		const newState = {
			...this.state,
			columns: { ...this.state.columns, [newStart.id]: newStart, [newFinish.id]: newFinish },
		};

		this.setState(newState);
	};

	render() {
		return (
			// DragDropContext - context area for DnD actions
			<DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
				<Droppable droppableId="all-columns" direction="horizontal" type="column">
					{provided => (
						<Container ref={provided.innerRef} {...provided.droppableProps}>
							{this.state.columnOrder.map((columnId, index) => {
								const column = this.state.columns[columnId];

								// condition disabling droppable if you move from right to left or try to move furtherer than to the next list
								const isDropDisabled = index < this.state.homeIndex || index > this.state.homeIndex + 1;

								return (
									<InnerList
										key={column.id}
										column={column}
										taskMap={this.state.tasks}
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
	}
}

export default Dnd;
