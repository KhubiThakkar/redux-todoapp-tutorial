// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import TodoApp from "./TodoApp";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// 	<Provider store={store}>
// 		<TodoApp />
// 	</Provider>
// );

import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./TodoApp";

import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	rootElement
);
