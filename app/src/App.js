import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import { TodoProvider } from "./contexts";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoList />
        <TodoForm />
      </TodoProvider>
    </div>
  );
}

export default App;
