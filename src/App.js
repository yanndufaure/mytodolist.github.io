import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoList from "./Component/TodoList";

import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
