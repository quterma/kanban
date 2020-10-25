import React from 'react';
import Step from './Step';

// moved out this mapping for avoiding redundant rendering
const TaskStepsInnerList = ({ steps, thisTaskId }) => 
  steps.map(step => <Step key={step.id} step={step} thisTaskId={thisTaskId} />);

export default TaskStepsInnerList;