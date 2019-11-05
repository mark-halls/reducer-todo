const initialState = [
  //   {
  //     item: "Learn about reducers",
  //     completed: false,
  //     id: 3892987589
  //   }
];

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
      throw new Error(`Could not find action type: ${action.type}`);
  }
};

export default reducer;
