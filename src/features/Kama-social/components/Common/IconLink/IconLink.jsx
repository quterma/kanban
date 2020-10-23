import React from "react";
import styles from "./IconLink.module.css";

export const IconLink = props => {
	const icons = {
		facebook: "fab fa-facebook-f",
		website: "fab fa-internet-explorer",
		vk: "fab fa-vk",
		twitter: "fab fa-twitter",
		instagram: "fab fa-instagram",
		youtube: "fab fa-youtube",
		github: "fab fa-github",
		mainLink: "fab fa-internet-explorer",
	};
	const iconClass = icons[props.network];
	return (
		<a href={props.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
			<i className={iconClass + " " + styles.icon}></i>
		</a>
	);
};
