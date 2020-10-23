import React from "react";
import styles from "./MyMessage.module.css";
import AddMessageForm from "./../../Common/Forms/AddMessageForm/AddMessageForm";

// Дем компонента
const MyMessage = props => {
	//code for onSubmit process
	const addNewMessage = values => props.addMyMessage(values.textarea);

	return (
		<div className={styles.wrapper}>
			<AddMessageForm onSubmit={addNewMessage} />
		</div>
	);
};

export default MyMessage;
