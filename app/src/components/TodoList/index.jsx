import React, { useContext } from "react";

import TodoItem from "../TodoItem";
import { TodoContext } from "../../contexts";

const TodoList = () => {
  const [list, dispatch] = useContext(TodoContext);

  return (
    <div className="todolist">
      {list.map(item => (
        <TodoItem
          dispatch={() => {
            dispatch({ type: "TOGGLE_COMPLETED", payload: { ...item } });
          }}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default TodoList;
