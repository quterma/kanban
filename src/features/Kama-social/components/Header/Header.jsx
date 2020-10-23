import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import incognito from "./../../assets/images/incognito.png";
import logo from "./../../assets/images/react.png";

// Дем компонента
const Header = props => {
	return (
		<header className={styles.wrapper}>
			<img className={styles.logo} src={logo} alt="logo" />
			<a className={styles.apiLink} target="_blank" rel="noopener noreferrer" href="https://social-network.samuraijs.com">
				SamuraiJS Social Network API
			</a>
			<a className={styles.apiLink} target="_blank" rel="noopener noreferrer" href="https://quterma.github.io/kama-social">
				https://quterma.github.io/kama-social
			</a>
			<div className={styles.loginWrapper}>
				{props.isAuth ? (
					<>
						<div>
							<img className={styles.avatar} src={props.photo ? props.photo : incognito} alt="ava" />
						</div>
						<div>{props.login}</div>
						<button onClick={props.logout}>Logout</button>
					</>
				) : (
					<NavLink to={"/login"}>Login</NavLink>
				)}
			</div>
		</header>
	);
};

export default Header;
