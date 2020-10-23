// constants for action types
const ADD_MY_MESSAGE = "ADD_MY_MESSAGE";

// initial state for first load
const initialState = {
	persons: [
		{
			id: 1,
			name: "person-1",
			avatar: "https://picsum.photos/45",
			isFriend: false,
		},
		{
			id: 2,
			name: "person-2",
			avatar: "https://picsum.photos/46",
			isFriend: true,
		},
		{
			id: 3,
			name: "person-3",
			avatar: "https://picsum.photos/47",
			isFriend: true,
		},
		{
			id: 4,
			name: "person-4",
			avatar: "https://picsum.photos/48",
			isFriend: false,
		},
		{
			id: 5,
			name: "person-5",
			avatar: "https://picsum.photos/49",
			isFriend: true,
		},
	],
	messages: [
		{ id: 1, message: "Hi !" },
		{ id: 2, message: "How are you?" },
		{ id: 3, message: "Yo !" },
		{ id: 4, message: "Yo" },
		{ id: 5, message: "Yo" },
	],
};

// get state and action, make COPY of state!, change it and return new state (if no changes - returns old one)
const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		// вызывается в Dialogs для добавления мессаги в стейт с последующей переотрисовкой UI
		case ADD_MY_MESSAGE:
			if (action.newMessageText === "") return state;

			const newMessage = {
				id: 10,
				message: action.newMessageText,
			};

			return { ...state, messages: [...state.messages, newMessage] };

		// if action not matched - return old state
		default:
			return state;
	}
};

// action creators
export const addMyMessageAC = newMessageText => ({ type: ADD_MY_MESSAGE, newMessageText });

export default dialogsReducer;
