export const fetchTodos = () => {
  const incompleteTodos =
    "https://jsonplaceholder.typicode.com/todos?completed=false";
  return fetch(incompleteTodos)
    .then(res => res.json())
    .then(fullTodoList => {
      let sampleSize = [];
      for (let i = 0; i < 10; i++) {
        sampleSize.push(fullTodoList[i]);
      }
      return sampleSize;
    });
};
