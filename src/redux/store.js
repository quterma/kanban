import { configureStore } from "@reduxjs/toolkit";
import throttle from "lodash/throttle";
import kanbanReducer from "./kanbanSlice";
import { loadState, saveState } from "./../utils/localStorage";

// get state from localStorage
const persistedState = loadState();

export const store = configureStore({
	reducer: {
		kanban: kanbanReducer,
	},
	preloadedState: persistedState,
});

// subscribes for setting state into localStorage
store.subscribe(
	throttle(() => {
		saveState(store.getState());
	}),
	1000
);
