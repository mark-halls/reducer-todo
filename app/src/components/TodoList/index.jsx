import React, { useContext } from "react";

import TodoItem from "../TodoItem";
import { TodoContext } from "../../contexts";

const TodoList = () => {
  const [list, dispatch] = useContext(TodoContext);

  return (
    <>
      {list.map(item => (
        <TodoItem
          dispatch={() => {
            dispatch({ type: "TOGGLE_COMPLETED", payload: { ...item } });
          }}
          key={item.id}
          {...item}
        />
      ))}
    </>
  );
};

export default TodoList;
