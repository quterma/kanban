import { connect } from "react-redux";
import Friends from "./Friends";

// берет стейт из редакс стора и возвращает ветку persons
const mapStateToProps = state => {
	return {
		persons: state.dialogsPage.persons,
	};
};

// передает пропсы (из mapStateToProps) в компоненту Friends, и вызывает Friends (React-Redux)
const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;
