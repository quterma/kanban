import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "./../../Redux/authReducer";

// class component - container
class HeaderApiContainer extends Component {

	render() {
		return <Header {...this.props} />;
	}
}

const mstp = state => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	id: state.auth.id,
	photo: state.auth.photo,
});

export const HeaderContainer = connect(mstp, { logout })(HeaderApiContainer);
