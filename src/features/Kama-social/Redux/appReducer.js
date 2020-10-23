import { getAuth } from "./authReducer";

// constants for action types
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

// initial state for first load
const initialState = {
	initialized: false,
};

// get state and action, create COPY of STATE!, change it and return new state (if no changes - returns old one)
const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return { ...state, initialized: true };

		// if action not matched - return old state
		default:
			return state;
	}
};

// action creators - to avoid string typing
const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

// thunk creators
export const initializeApp = () => async dispatch => {
	await dispatch(getAuth());
	dispatch(initializedSuccess());
};

export default appReducer;
