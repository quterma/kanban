import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./AddMyMessageForm.module.css";
import { CustomTextarea, TextError } from "../CustomForms/CustomForms";

const initialValues = { textarea: "" };
const validationSchema = Yup.object().shape({ textarea: Yup.string().max(50, "Too Long!").required("Required!") });

// Formik Form Component
const AddMessageForm = props => {
	return (
		<Formik initialValues={initialValues} onSubmit={props.onSubmit} validationSchema={validationSchema}>
			<Form>
				<Field as="textarea" className={styles.textarea} name="textarea" placeholder="Enter your post" component={CustomTextarea} />
				<ErrorMessage name="textarea" component={TextError} />
				<button className={styles.button} type="submit">
					Add message
				</button>
			</Form>
		</Formik>
	);
};

export default AddMessageForm;
