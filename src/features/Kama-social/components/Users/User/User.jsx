import React from "react";
import styles from "./User.module.css";
import avatar from "./../../../assets/images/incognito.png";
import { NavLink } from "react-router-dom";

//Dem component
export const User = ({user, isFollowingInProcess, unfollow, follow}) => {

	return (
				<div key={user.id}>
					<span>
						{/* avatar */}
						<NavLink to={"/Profile/" + user.id}>
							<div>
								<img className={styles.avatar} src={user.photos.small != null ? user.photos.small : avatar} alt="" />
							</div>
						</NavLink>
						{/* button toggler follow/unfollow */}
						<div>
							{user.followed ? (
								<button
									disabled={isFollowingInProcess.some(id => id === user.id)}
									onClick={() => unfollow(user.id)}
								>
									Unfollow
								</button>
							) : (
								<button
									disabled={isFollowingInProcess.some(id => id === user.id)}
									onClick={() => follow(user.id)}
								>
									Follow
								</button>
							)}
						</div>
					</span>
					<span>
						{/* user's name and status */}
						<span>
							<div>{user.name}</div>
							<div>{user.status}</div>
						</span>
						{/* user's location */}
						<span>
							<div>{"user.location.country"}</div>
							<div>{"user.location.city"}</div>
						</span>
					</span>
		</div>
	)
};
