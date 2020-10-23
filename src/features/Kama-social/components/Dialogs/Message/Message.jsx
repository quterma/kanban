import React from "react";
import styles from "./Message.module.css";

// Message вызывается из Dialogs.js (с пропсами).
// Message отрисовывает 1элемент Message
const Message = (props) => {
	return (
		<div className={styles.itemWrapper + " " + styles[props.place]}>
			<p className={styles.item}>{props.message}</p>
		</div>
	);
};

export default Message;
