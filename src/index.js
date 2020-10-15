import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Dnd from "./Dnd";
import store from "./app/store";
import { Provider } from "react-redux";
import "@atlaskit/css-reset";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Dnd />
			{/* <App /> */}
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
