import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

// берет стейт из редакс стора и возвращает ветку persons
const mstp = state => {
	return {
		persons: state.dialogsPage.persons,
		messages: state.dialogsPage.messages,
	};
};

// compose (from redux) объединяет несколько Хоков и прочих надстроек - аргументы в обратной очередности от вызова
export default compose(connect(mstp), withAuthRedirect)(Dialogs);
