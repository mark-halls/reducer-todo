const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "TOGGLE_COMPLETED":
      return state.map(item => {
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
