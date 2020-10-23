import React from "react";
import LoginForm from "../Common/Forms/LoginForm/LoginForm";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { login } from "./../../Redux/authReducer";
import { Redirect } from "react-router-dom";

const Login = ({ isAuth,login, error, captchaUrl }) => {
	if (isAuth) return <Redirect to="/profile" />;

	//code for onSubmit process
	const onSubmit = ({ email, password, rememberMe, captcha }) => {
		login(email, password, rememberMe, captcha);
	};

	return (
		<div>
			<h1 className={styles.title}>Login Page</h1>
			<LoginForm onSubmit={onSubmit} error={error} captchaUrl={captchaUrl}/>
		</div>
	);
};

const mstp = state => ({ isAuth: state.auth.isAuth, error: state.auth.error, captchaUrl: state.auth.captchaUrl });
const mdtp = { login };

export default connect(mstp, mdtp)(Login);
