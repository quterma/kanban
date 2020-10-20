import React, { useEffect, useState } from "react";
import styles from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = props => {
	// hook for edit mode state and it's toggling
	const [editMode, setEditMode] = useState(false);

	// hook for status editing
	const [status, setStatus] = useState(props.status);

	// f() for activating edit mode (toggling editMode state in true)
	const activateEditMode = () => props.isOwner && setEditMode(true);
	
	// f() for deactivating edit mode (toggling editMode state in false and status 'dispatching' into store)
	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}

	// f() for parsing status value 'from event' to status
	const onStatusChange = (event) => {
		setStatus(event.currentTarget.value);
	}

	// hook subscribing for props.status
	useEffect(() => { setStatus(props.status) }, [props.status]);
	
		return (
			<div>
				{ !editMode &&
					<div onDoubleClick={activateEditMode} className={styles.status}>
						Status: {props.status}
					</div>}
				{editMode && (
					<input
						autoFocus={true}
						className={styles.input}
						onBlur={deactivateEditMode}
						onChange={onStatusChange}
						value={status}
					/>
				)}
			</div>
		);
}

export default ProfileStatusWithHooks;
