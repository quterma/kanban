import MyPosts from "./MyPosts";
import { addMyPostAC } from "../../../Redux/profileReducer";
import { connect } from "react-redux";

// берет стейт из редакс стора и возвращает ветку profilePage
const mapStateToProps = state => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	};
};

// берет нужные диспатч методы из редакс стора
const mapDispatchToProps = dispatch => {
	return {
		addMyPost: newPostText => {
			dispatch(addMyPostAC(newPostText));
		},
	};
};

// передает пропсы (из mapStateToProps) в компоненту MyPosts, и вызывает MyPosts (React-Redux)
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
