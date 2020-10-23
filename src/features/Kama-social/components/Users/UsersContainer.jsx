import React, { Component } from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, getUsersThunk } from "../../Redux/usersReducer";
import { Users } from "./Users";
import { Preloader } from "../Common/Preloader/Preloader";
import { compose } from "redux";
import { getpageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFollowingInProcess } from './../../Redux/usersSelectors';

// Class component - container for ajax requests
class UsersApiComponent extends Component {
	constructor(props) {
		super(props);
		this.onPageChanged = this.onPageChanged.bind(this);
	}
	componentDidMount() {
		this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged(pageNumber) {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsersThunk(pageNumber, this.props.pageSize);
	}

	render() {
		if (this.props.isFetching) {
			return <Preloader />;
		}

		return (
			<>
				{/* {this.props.isFetching && <Preloader />} */}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					users={this.props.users}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					onPageChanged={this.onPageChanged}
					isFollowingInProcess={this.props.isFollowingInProcess}
				/>
			</>
		);
	}
}

const mstp = state => {
	return {
		users: getUsers(state),
		pageSize: getpageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFollowingInProcess: getIsFollowingInProcess(state),
	};
};

// берет нужные диспатч методы из редакс стора
const mdtp = {
	follow,
	unfollow,
	setCurrentPage,
	getUsersThunk,
};

// compose (from redux) объединяет несколько Хоков и прочих надстроек - аргументы в обратной очередности от вызова
export default compose(connect(mstp, mdtp))(UsersApiComponent);
