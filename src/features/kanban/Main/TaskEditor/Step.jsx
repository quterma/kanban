import React from 'react'



const Step = ({ step, thisTaskId }) => {
  // // Step input state and handlers
  // const [newStep, setNewStep] = useState('');
  // const onStepHandleChange = (e) => setNewStep(e.currentTarget.value)
  // const updateText = () => {
  //   dispatch(setTaskText({ newText, id: taskId }));
  //   setEditMode(false);
  // }

  return (
    <div>
      thisTaskId: {thisTaskId}; stepId: {step.id}; stepContent: {step.content}; stepIsCompleted: {step.isCompleted ? 'true' : 'false'}
    </div>
  )
}

export default Step
