import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchGifysFromService, deleteGiph } from "../actions";
import { connect } from "react-redux";

class GiphyPage extends Component {
  componentDidMount() {
    console.log("start loading");
    this.props.fetchGifysFromService().then(() => {
      console.log("stop loading");
    });
  }
  render() {
    return (
      <main>
        <p>
          <Link to="/">Todos</Link>
        </p>
        <h1>Giphy Page</h1>
        {this.props.giphs.map(giph => (
          <img
            src={giph}
            alt=""
            key={giph}
            onClick={() => this.props.deleteGiph(giph)}
          />
        ))}
        Todo Count: {this.props.todos.length}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    giphs: state.giphs,
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { fetchGifysFromService, deleteGiph }
)(GiphyPage);

//export default GiphyPage;
