import React from "react";
import styles from "./Dialogs.module.css";
import Person from "./Person/Person";
import Message from "./Message/Message";
import MyMessageContainer from "./MyMessage/MyMessageContainer";
import { Redirect } from "react-router-dom";

// Дем компонента
const Dialogs = props => {
	// мапит из пропс.persons объект из компонент Person
	const personsElements = props.persons.map(person => (
		<Person name={person.name} key={person.id} id={person.id} avatar={person.avatar} />
	));

	// мапит из пропс.messages объект из компонент Message
	const messagesElements = props.messages.map(message => {
		let place = "left";
		if (message.id % 2 === 0) {
			place = "right";
		}
		return <Message key={message.id} id={message.id} message={message.message} place={place} />;
	});

	// if not authorized - redirect to login
	if (!props.isAuth) return <Redirect to="/login" />;

	return (
		<div className={styles.wrapper}>
			<div className={styles.persons}>{personsElements}</div>
			<div className={styles.chat}>{messagesElements}</div>
			<MyMessageContainer />
		</div>
	);
};

export default Dialogs;
