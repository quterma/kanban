import profileReducer, { addMyPostAC, deletePost } from "./profileReducer";

// 1. state
const state = {
	posts: [
		{ id: 1, post: "Hi, how r u?", likes: 15 },
		{ id: 2, post: "it is my 1st post", likes: 20 },
	],
};

test("posts array length should increase", () => {
	// 2. action
	const action = addMyPostAC("test - 1");
	// 3. testing
	const newState = profileReducer(state, action);
	// 3. expected
	expect(newState.posts.length).toBe(3);
});

test("new post should be 'test - 1'", () => {
	// 2. action
	const action = addMyPostAC("test - 1");
	// 3. testing
	const newState = profileReducer(state, action);
	// 3. expected
	expect(newState.posts[2].post).toBe("test - 1");
});

test("posts array length should decrease", () => {
	// 2. action
	const action = deletePost(1);
	// 3. testing
	const newState = profileReducer(state, action);
	// 3. expected
	expect(newState.posts.length).toBe(1);
});
