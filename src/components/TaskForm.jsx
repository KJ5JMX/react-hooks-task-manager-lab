
import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [input, setInput] = useState("");
  const { addTask } = useContext(TaskContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim()) {
      addTask(input.trim()); 
      setInput(""); 
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;