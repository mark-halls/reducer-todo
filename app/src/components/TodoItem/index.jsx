import React from "react";

const TodoItem = props => {
  return (
    <div
      className={`item ${props.completed ? "complete" : ""}`}
      onClick={props.dispatch}
    >
      {props.item}
    </div>
  );
};

export default TodoItem;
