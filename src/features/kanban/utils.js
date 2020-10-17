// this function reorder draggable ids in droppable containers
export const reorder = (source, destination, draggableId, start, finish = start) => {
	// 'splice out' an element with source index
	start.splice(source.index, 1);
	// 'splice in' a draggable element on a 'place' with destination index
	finish.splice(destination.index, 0, draggableId);
	return [start, finish];
};
