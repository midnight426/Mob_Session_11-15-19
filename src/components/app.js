import React from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import TodosList from "./todosList";
import { Link } from "react-router-dom";

class App extends React.Component {
  state = {
    todoInputText: ""
  };

  componentDidMount() {
    this.props.fetchTodosFromService();
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.addTodo(this.state.todoInputText);
    this.setState({ todoInputText: "" });
  };
  handleChange = e => {
    this.setState({ todoInputText: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <p>
          <Link to="/giphs">Giphs</Link>
        </p>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.todoInputText}
            onChange={this.handleChange}
          />
          <button>Add todo</button>
        </form>
        <TodosList todos={this.props.todos} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  actions
)(App);
