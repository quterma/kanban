import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import incognito from "./../../../assets/images/incognito.png";
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import { ProfileData } from './ProfileData/ProfileData';
import { ProfileDataForm } from "../../Common/Forms/ProfileDataForm/ProfileDataForm";

//Дем компонента
const ProfileInfo = props => {
	const onAvatarSelected = (event) => {
		if (event.target.files) props.savePhoto(event.target.files[0]);
	}

	const [editMode, setEditMode] = useState(false);
	const activateEditMode = () => setEditMode(true);

	const onSubmit = (data) => {
		props.saveProfile(data);
		setEditMode(false);
	}
		
	
	return (
		<div className={styles.wrapper}>
			<div className={styles.avatarWrapper}>
				<img className={styles.avatar} alt="avatar" src={props.profile.photos.large || incognito} />
			</div>
			{props.isOwner && <input type='file' onChange={onAvatarSelected}/>}
			<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} />
			{editMode ? <ProfileDataForm onSubmit={onSubmit} profile={props.profile}/>
				: <ProfileData contacts={props.profile.contacts} fullName={props.profile.fullName}
				aboutMe={props.profile.aboutMe} lookingForAJob={props.profile.lookingForAJob}
				lookingForAJobDescription={props.profile.lookingForAJobDescription} isOwner={props.isOwner} activateEditMode={activateEditMode}/>}
		</div>
	);
};

export default ProfileInfo;
