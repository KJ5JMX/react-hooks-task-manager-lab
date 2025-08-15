import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { TaskProvider } from './context/TaskContext.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
);
