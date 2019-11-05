import React from "react";

import TodoList from "./components/TodoList";
import { TodoProvider } from "./contexts";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
