import React from "react";
import styles from "./CustomForms.module.css";

export const TextError = props => {
	return <div className={styles.textError}>{props.children}</div>;
};

export const CustomTextarea = ({
	field, // { name, value, onChange, onBlur }
	form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
	...props
}) => (
	<div className={styles.textareaWrapper}>
		<textarea {...field} {...props} className={`${styles.textarea} ${touched[field.name] && errors[field.name] && styles.textareaError}`} />
		{/* {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>} */}
	</div>
);

export const CustomInput = ({
	field, // { name, value, onChange, onBlur }
	form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
	...props
}) => (
	<div className={styles.inputWrapper}>
		<label className={styles.label}>
			{field.name.toUpperCase() + ":"}
			<input {...field} {...props} className={`${styles.input} ${touched[field.name] && errors[field.name] && styles.inputError}`} />
		</label>
	</div>
);
