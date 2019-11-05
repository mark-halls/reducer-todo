import React from "react";

const TodoItem = props => {
  return (
    <div classList={props.completed ? "complete" : ""} onClick={props.dispatch}>
      {props.item}
    </div>
  );
};

export default TodoItem;
