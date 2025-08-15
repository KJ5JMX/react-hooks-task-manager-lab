import React, { useState } from "react";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";
import { TaskProvider } from "../context/TaskContext";

function App() {
  const [query, setQuery] = useState("");

  return (
    <TaskProvider>
      <div>
        <h1>Task Manager</h1>
        <TaskForm />
        <SearchBar query={query} setQuery={setQuery} />
        <TaskList query={query} />
      </div>
    </TaskProvider>
  );
}

export default App;