import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";

// компонента (Dem) рендерит навлинки меню (надо загнать в подкомпоненты) и компоненту FriendsContainer (Cont)
const Navbar = () => {
	return (
		<nav className={styles.wrapper}>
			<div className={styles.item}>
				<NavLink className={styles.link} activeClassName={styles.active} to="/Profile">
					Profile
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink className={styles.link} activeClassName={styles.active} to="/Dialogs">
					Dialogs
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink className={styles.link} activeClassName={styles.active} to="/Users">
					Users
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink className={styles.link} activeClassName={styles.active} to="/News">
					News
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink className={styles.link} activeClassName={styles.active} to="/Music">
					Music
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink className={styles.link + " " + styles.margin50} activeClassName={styles.active} to="/Settings">
					Settings
				</NavLink>
			</div>
			<div className={styles.item}>
				<FriendsContainer />
			</div>
		</nav>
	);
};

export default Navbar;
