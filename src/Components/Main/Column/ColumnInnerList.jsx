import React from 'react';
import Task from "./Task";

// moved out this mapping for avoiding redundant rendering
const ColumnInnerList = ({ tasks }) =>
  tasks.map((task, index) => <Task key={task.id} task={task} index={index} />);

export default ColumnInnerList;