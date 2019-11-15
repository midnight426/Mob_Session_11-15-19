import uuid from "uuid/v4";
import { fetchTodos } from "../services/todos";
import { fetchGiphy } from "../services/giphy";

export const fetchTodosFromService = () => {
  return dispatch => {
    fetchTodos().then(todos => {
      dispatch({
        type: "FETCH_TODOS",
        todos
      });
    });
  };
};

export const addTodo = title => ({
  type: "ADD_TODO",
  id: uuid(),
  isCompleted: false,
  title
});

export const fetchGifysFromService = () => {
  return async dispatch => {
    console.log("got em");
    const giphs = await fetchGiphy();
    dispatch({
      type: "FETCH_GIPHS",
      giphs
    });
  };
};

export const deleteGiph = giph => {
  return {
    type: "DELETE_GIPH",
    giph
  };
};
