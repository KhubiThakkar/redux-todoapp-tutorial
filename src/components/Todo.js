import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => (
	<li
		className="todo-item"
		onClick={
			() => {
				console.log("hello: ", todo);
				toggleTodo(todo.id);
				// here you are not using this.props because
				// this is a functional component
				// when using class components you do not need to pass
				// the action, you can access them using this.props.action
				// refer AddTodo for this
			} /** dispatches action to toggle todo */
		}
	>
		{todo && todo.completed ? "👌" : "👋"}{" "}
		<span
			className={cx(
				"todo-item__text",
				todo && todo.completed && "todo-item__text--completed"
			)}
		>
			{todo.content}
		</span>
	</li>
);

export default connect(null, { toggleTodo })(Todo);
