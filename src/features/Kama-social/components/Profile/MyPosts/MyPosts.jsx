import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddMessageForm from "./../../Common/Forms/AddMessageForm/AddMessageForm";

// Дем компонента
const MyPosts = props => {
	// мапит из пропс.posts объект из компонент Post
	const postsElements = props.posts.map(post => <Post key={post.id} post={post.post} likes={post.likes} />);

	//code for onSubmit process
	const addNewPost = values => props.addMyPost(values.textarea);

	return (
		<div className={styles.wrapper}>
			<div className={styles.posts}>{postsElements}</div>
			<div className={styles.newPost}>
				<AddMessageForm onSubmit={addNewPost} />
			</div>
		</div>
	);
};

export default MyPosts;
