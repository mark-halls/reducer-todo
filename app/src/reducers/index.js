const updateLocalStorage = state => {
  window.localStorage.setItem("state", JSON.stringify(state));
  return state;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (action.payload.length > 0) {
        return updateLocalStorage([
          ...state,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]);
      } else {
        return state;
      }

    case "TOGGLE_COMPLETED":
      return updateLocalStorage(
        state.map(item => {
          if (item.id !== action.payload.id) {
            return item;
          }

          return {
            ...item,
            completed: !action.payload.completed
          };
        })
      );

    case "REMOVE_COMPLETED":
      return updateLocalStorage(state.filter(item => !item.completed));

    default:
      return state;
  }
};

export default reducer;
