// {
//   item: "Learn about reducers",
//   completed: false,
//   id: 3892987589
// }

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (action.payload.length > 0) {
        return [
          ...state,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ];
      } else {
        return state;
      }

    case "TOGGLE_COMPLETED":
      return state.map(item => {
        console.log(item);
        console.log(action);
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          completed: !action.payload.completed
        };
      });

    case "REMOVE_COMPLETED":
      return state.filter(item => !item.completed);

    default:
      return state;
  }
};

export default reducer;
