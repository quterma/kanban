import React from "react";
import styles from "./ProfileDataForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CustomInput, TextError } from "../CustomForms/CustomForms";

//Дем компонента
export const ProfileDataForm = props => {
	const initialValues = { 
		fullName: props.profile.fullName || '',
		aboutMe: props.profile.aboutMe || '',
		lookingForAJob: props.profile.lookingForAJob || '',
		lookingForAJobDescription: props.profile.lookingForAJobDescription || '',
		contacts: {
			facebook: props.profile.contacts.facebook || '',
			website: props.profile.contacts.website || '',
			vk: props.profile.contacts.vk || '',
			twitter: props.profile.contacts.twitter || '',
			instagram: props.profile.contacts.instagram || '',
			youtube: props.profile.contacts.youtube || '',
			github: props.profile.contacts.github || '',
			mainLink: props.profile.contacts.mainLink || '',
		}
	};
	const validationSchema = Yup.object().shape({
		fullName: Yup.string().min(2, "Too Short!").max(20, "Too Long!").required("Required!"),
		// aboutMe: Yup.string().max(30, "Too Long!"),
		lookingForAJobDescription: Yup.string().required("Required!"),
		facebook: Yup.string().url(),
		website: Yup.string().url(),
		vk: Yup.string().url(),
		twitter: Yup.string().url(),
		instagram: Yup.string().url(),
		youtube: Yup.string().url(),
		github: Yup.string().url(),
		mainLink: Yup.string().url(),
	});
	
	return (
		<Formik initialValues={initialValues} onSubmit={props.onSubmit} validationSchema={validationSchema}>
			<Form>
				<Field name="fullName" placeholder={initialValues.fullName} component={CustomInput} />
				<ErrorMessage name="fullName" component={TextError} />
				<Field name="aboutMe" placeholder="Enter your aboutMeInfo" component={CustomInput} />
				<ErrorMessage name="aboutMe" component={TextError} />
				<label className={styles.label}>
					<Field type="checkbox" name="lookingForAJob" />
					Look for a job?
				</label>
				<Field name="lookingForAJobDescription" placeholder="Why do you want a job?" component={CustomInput} />
				<ErrorMessage name="lookingForAJobDescription" component={TextError} />
				<Field name="contacts.facebook" placeholder="Enter your facebook link" component={CustomInput} />
				<ErrorMessage name="contacts.facebook" component={TextError} />
				<Field name="contacts.website" placeholder="Enter your website link" component={CustomInput} />
				<ErrorMessage name="contacts.website" component={TextError} />
				<Field name="contacts.vk" placeholder="Enter your vk link" component={CustomInput} />
				<ErrorMessage name="contacts.vk" component={TextError} />
				<Field name="contacts.twitter" placeholder="Enter your twitter link" component={CustomInput} />
				<ErrorMessage name="contacts.twitter" component={TextError} />
				<Field name="contacts.instagram" placeholder="Enter your instagram link" component={CustomInput} />
				<ErrorMessage name="contacts.instagram" component={TextError} />
				<Field name="contacts.youtube" placeholder="Enter your youtube link" component={CustomInput} />
				<ErrorMessage name="contacts.youtube" component={TextError} />
				<Field name="contacts.github" placeholder="Enter your github link" component={CustomInput} />
				<ErrorMessage name="contacts.github" component={TextError} />
				<Field name="contacts.mainLink" placeholder="Enter your mainLink link" component={CustomInput} />
				<ErrorMessage name="contacts.mainLink" component={TextError} />
				<button className={styles.button} type="submit">Submit</button>
			</Form>
		</Formik>
	);
};
