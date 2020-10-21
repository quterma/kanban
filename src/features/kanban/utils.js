// this function reorder draggable ids in droppable containers
export const reorder = (sourceIndex, destinationIndex, movedElementId, start, finish) => {
	// 'splice out' movedElement with source index
	const newStart = [...start];
	newStart.splice(sourceIndex, 1);
	// 'splice in' movedElement on a 'place' with destination index
	const newFinish = finish ? [...finish] : newStart;
	newFinish.splice(destinationIndex, 0, movedElementId);
	return [newStart, newFinish];
};
