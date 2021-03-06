import React, { useContext } from "react";

import { TodoContext } from "../../contexts";

const RemoveCompleted = () => {
  const [, dispatch] = useContext(TodoContext);

  return (
    <button
      className="clear-completed"
      onClick={() => dispatch({ type: "REMOVE_COMPLETED" })}
    >
      Remove Completed
    </button>
  );
};

export default RemoveCompleted;
