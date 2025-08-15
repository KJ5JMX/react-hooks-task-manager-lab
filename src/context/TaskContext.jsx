import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

 function addTask(newTitle) {
  const newTask = {
    title: newTitle,
    completed: false,
  };

  return fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  })
    .then((res) => res.json())
    .then((createdTask) => {
      setTasks((prev) => [...prev, createdTask]);
    });
}

  function toggleComplete(id) {
    const target = tasks.find((task) => task.id === id);
    if (!target) return;

    const updatedTask = { ...target, completed: !target.completed };

    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: updatedTask.completed }),
    })
      .then((res) => res.json())
      .then(() => {
        setTasks((prev) =>
          prev.map((task) =>
            task.id === id ? { ...task, completed: updatedTask.completed } : task
          )
        );
      });
  }

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Failed to fetch tasks:", err));
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, toggleComplete, addTask }}>
      {children}
    </TaskContext.Provider>
  );
}