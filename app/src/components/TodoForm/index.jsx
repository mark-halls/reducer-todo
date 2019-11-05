import React, { useState, useContext } from "react";

import { TodoContext } from "../../contexts";

const TodoForm = () => {
  const [item, setItem] = useState("");
  const [, dispatch] = useContext(TodoContext);

  const handleTextChange = event => {
    setItem(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: "ADD", payload: item });
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="item"
        placeholder="Todo..."
        value={item}
        onChange={handleTextChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
