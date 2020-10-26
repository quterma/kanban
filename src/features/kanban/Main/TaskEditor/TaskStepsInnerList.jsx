import React from 'react';
import Step from './Step';

// moved out this mapping for avoiding redundant rendering
const TaskStepsInnerList = ({ stepIds, taskId }) => 
  stepIds.map(stepId => {
    return <Step key={stepId} stepId={stepId} taskId={taskId} />
  });

export default TaskStepsInnerList;