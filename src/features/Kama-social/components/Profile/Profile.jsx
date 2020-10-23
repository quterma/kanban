import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import { Preloader } from "./../Common/Preloader/Preloader";

//Дем компонента
const Profile = props => {
	// if (!props.profile) return <Preloader />;
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}></div>
			<MyPostsContainer />
			<ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
				updateStatus={props.updateStatus} savePhoto={props.savePhoto} saveProfile={props.saveProfile} />
		</div>
	);
};

export default Profile;
