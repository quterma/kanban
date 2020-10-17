import React from 'react'
import Column from "./Column";

// moved out this mapping for avoiding redundant rendering
const ContainerInnerList = ({ column, taskMap, index, isDropDisabled }) => {
	const tasks = column.taskIds.map(taskId => taskMap[taskId]);
	return <Column column={column} tasks={tasks} index={index} isDropDisabled={isDropDisabled} />;
}

export default ContainerInnerList
