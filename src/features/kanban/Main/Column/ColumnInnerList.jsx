import React from 'react';
import Task from "./../Task/Task";

// moved out this mapping for avoiding redundant rendering
const ColumnInnerList = ({ tasks, thisColId }) =>
  tasks.map((task, index) => <Task key={task.id} task={task} index={index} thisColId={thisColId} />);

export default ColumnInnerList;