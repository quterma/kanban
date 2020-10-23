import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";
import { CustomInput, TextError } from "../CustomForms/CustomForms";

const initialValues = { email: "", password: "", rememberMe: false, captcha: '' };
const validationSchema = Yup.object().shape({
	email: Yup.string().email().required("Required!"),
	password: Yup.string().min(8, "Too Short!").max(20, "Too Long!").required("Required!"),
});

// Formik Form Component
const LoginForm = ({onSubmit, error, captchaUrl}) => {
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			<Form>
				<Field type="email" name="email" placeholder="Enter your email" component={CustomInput} />
				<ErrorMessage name="email" component={TextError} />
				<Field type="password" name="password" placeholder="Enter your password" component={CustomInput} />
				<ErrorMessage name="password" component={TextError} />
				<label className={styles.label}>
					<Field type="checkbox" name="rememberMe" />
					Remember Me
				</label>
				{captchaUrl &&
					<>
					<img src={captchaUrl} alt='captcha' />
					<Field name='captcha' component={CustomInput} />
					</>
				}
				{error && <h3 className={styles.error}>{error}</h3>}
				<button className={styles.button} type="submit">
					Login
				</button>
			</Form>
		</Formik>
	);
};

export default LoginForm;
