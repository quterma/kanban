import React, { Component, Suspense } from "react";
import styles from "./App.module.css";
import "./css/reset.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch, withRouter } from "react-router-dom";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./Redux/appReducer";
import { Preloader } from "./components/Common/Preloader/Preloader";

// lazy imports of all routed components
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const LoginPage = React.lazy(() => import("./components/Login/Login"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));
const Music = React.lazy(() => import("./components/Music/Music"));
const News = React.lazy(() => import("./components/News/News"));

// верхняя компонента
class App extends Component {
	handleAllUnhandledErrors = (reason, promise) => {
		// вместо алерта надо сделать санку, которая будет диспатчить в стор ошибку, а потом сделать вывод окошка, к примеру
		alert("some error");
		// console.error(promiseRejectionEvent);
	};

	componentDidMount() {
		this.props.initializeApp();

		window.addEventListener("unhandledrejection", this.handleAllUnhandledErrors);
	}

	componentWillUnmount() {
		window.removeEventListener("unhandledrejection", this.handleAllUnhandledErrors);
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />;
		}

		return (
			<div className={styles.wrapper}>
				<HeaderContainer />
				<Navbar />
				<div className={styles.gridContent}>
					<Suspense fallback={<Preloader />}>
						<Switch>
							<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
							<Route path="/dialogs" render={() => <DialogsContainer />} />
							<Route path="/users" render={() => <UsersContainer />} />
							<Route path="/login" render={() => <LoginPage />} />
							<Route path="/news" component={News} />
							<Route path="/music" component={Music} />
							<Route path="/settings" component={Settings} />
						</Switch>
					</Suspense>
				</div>
			</div>
		);
	}
}

const mstp = state => ({ initialized: state.app.initialized, userId: state.auth.id });
const mdtp = { initializeApp };

export default compose(withRouter, connect(mstp, mdtp))(App);
