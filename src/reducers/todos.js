const todos = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.todos;
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          completed: false
        }
      ];
    default:
      return state;
  }
};

export default todos;
