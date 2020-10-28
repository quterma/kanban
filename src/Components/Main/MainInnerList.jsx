import React from 'react'
import { useSelector } from 'react-redux';
import { selectTasks } from '../../redux/kanbanSlice';
import Column from "./Column/Column";

// moved out this mapping for avoiding redundant rendering
const MainInnerList = ({ column, index, isDropDisabled, columns, columnOrder }) => {
	const taskMap = useSelector(selectTasks);
	// map tasks inside a column
	const tasks = column.taskIds.map(taskId => taskMap[taskId]);
	return (
		<Column
			column={column}
			tasks={tasks}
			taskMap={taskMap}
			index={index}
			isDropDisabled={isDropDisabled}
			columns={columns}
			columnOrder={columnOrder}
		/>
	)
}

export default MainInnerList
