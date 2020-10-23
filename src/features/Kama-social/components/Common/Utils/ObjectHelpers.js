export const updateObjectInArray = (items, itemId, objPropName, newProps) => {
	return items.map(user => (user[objPropName] === itemId ? { ...user, ...newProps } : user));
};
