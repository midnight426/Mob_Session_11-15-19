const giphy = (state = [], action) => {
  switch (action.type) {
    case "FETCH_GIPHS":
      return action.giphs;
    case "DELETE_GIPH":
      return state.filter(giph => {
        return giph !== action.giph;
      });
    default:
      return state;
  }
};
export default giphy;
