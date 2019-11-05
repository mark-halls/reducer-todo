import React, { useContext } from "react";

import TodoItem from "../TodoItem";
import { TodoContext } from "../../contexts";

const TodoList = () => {
  const [list] = useContext(TodoContext);

  return (
    <>
      {list.map(item => (
        <TodoItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default TodoList;
