import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mstp = state => ({ isAuth: state.auth.isAuth });

export const withAuthRedirect = Component => {
	class RedirectComponent extends React.Component {
		render() {
			// if not authorized - redirect to login
			if (!this.props.isAuth) return <Redirect to="/login" />;
			return <Component {...this.props} />;
		}
	}

	const ConnectedAuthRedirectComponent = connect(mstp)(RedirectComponent);
	return ConnectedAuthRedirectComponent;
};
