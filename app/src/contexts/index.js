import React, { createContext, useReducer } from "react";

import reducer from "../reducers";

const initialState =
  JSON.parse(window.localStorage.getItem("state")) ||
  [
    // {
    //   item: "Learn about reducers",
    //   completed: false,
    //   id: 3892987589
    // }
  ];

export const TodoContext = createContext();

export const TodoProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {props.children}
    </TodoContext.Provider>
  );
};
