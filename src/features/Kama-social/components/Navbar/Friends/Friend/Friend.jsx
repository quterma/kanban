import React from "react";
import styles from "./Friend.module.css";
import { NavLink } from "react-router-dom";

// Дем компонента
const Friend = props => {
	const path = "/dialogs/" + props.id;
	return (
		<div className={styles.item}>
			<img className={styles.avatar} src={props.avatar} alt="avatar" />
			<NavLink
				className={styles.name}
				activeClassName={styles.active}
				to={path}
			>
				{props.name}
			</NavLink>
		</div>
	);
};

export default Friend;
