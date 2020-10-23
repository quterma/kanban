export const getUsers = state => {
	return state.usersPage.users;
};

export const getpageSize = state => {
	return state.usersPage.pageSize;
};

export const getTotalUsersCount = state => {
	return state.usersPage.totalUsersCount;
};

export const getCurrentPage = state => {
	return state.usersPage.currentPage;
};

export const getIsFollowingInProcess = state => {
	return state.usersPage.isFollowingInProcess;
};
