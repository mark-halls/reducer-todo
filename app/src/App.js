import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import RemoveCompleted from "./components/RemoveCompleted";

import { TodoProvider } from "./contexts";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoList />
        <TodoForm />
        <RemoveCompleted />
      </TodoProvider>
    </div>
  );
}

export default App;
