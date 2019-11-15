import React from "react";
import PropTypes from "prop-types";

const TodosList = ({ todos }) => {
  const renderTodos = todos => {
    return todos.map(todo => <li key={todo.id}>{todo.title}</li>);
  };
  return <ol>{renderTodos(todos)}</ol>;
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf({
    id: PropTypes.number,
    title: PropTypes.string
  })
};

export default TodosList;
