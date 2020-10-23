import React from "react";
import styles from "./ProfileData.module.css";
import { IconLink } from "../../../Common/IconLink/IconLink";

//Дем компонента
export const ProfileData = props => {
	const contacts = Object.entries(props.contacts);
	const socialElements = contacts.map((contact, i) => (contact[1] ? <IconLink key={i} network={contact[0]} link={contact[1]} /> : null));
	
	return (
		<>
			{props.isOwner && <button onClick={props.activateEditMode}>edit mode</button>}
			<div className={styles.name}>Fullname: {props.fullName}</div>
			<div className={styles.aboutMe}>About me: {props.aboutMe}</div>
			<div className={styles.lookingForAJobContainer}>
				<i className={`${styles.lookingForAJob} ${props.lookingForAJob ? "fas fa-gamepad" : "fas fa-user-tie"}`} />
				<div className={styles.lookingForAJobDescription}>LFJ description: {props.lookingForAJobDescription}</div>
			</div>
			<div className={styles.socialContainer}>{socialElements}</div>
		</>
	);
};
