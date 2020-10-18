import React from 'react'
import Column from "../Column/Column";

// moved out this mapping for avoiding redundant rendering
const MainInnerList = ({ column, taskMap, index, isDropDisabled }) => {
	// map tasks inside a column
	const tasks = column.taskIds.map(taskId => taskMap[taskId]);
	return <Column column={column} tasks={tasks} index={index} isDropDisabled={isDropDisabled} />;
}

export default MainInnerList
