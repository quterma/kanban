import React from "react";
import styles from "./Users.module.css";
import { Paginator } from "../Common/Paginator/Paginator";
import { User } from './User/User';

//Dem component
export const Users = props => {

	return (
		<div className={styles.wrapper}>
			<Paginator onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount}
				pageSize={props.pageSize} currentPage={props.currentPage} />
			{props.users.map(user => <User key={user.id} user={user} isFollowingInProcess={props.isFollowingInProcess}
				unfollow={props.unfollow} follow={props.follow} />)}
		</div>
	)
};
