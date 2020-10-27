import React from 'react';
import StepContainer from './StepContainer';

// moved out this mapping for avoiding redundant rendering
const StepsInnerList = ({ stepIds, taskId }) => stepIds.map(stepId => <StepContainer key={stepId} stepId={stepId} taskId={taskId} />);

export default StepsInnerList;