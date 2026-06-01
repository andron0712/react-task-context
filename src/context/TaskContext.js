import React, { createContext, useState } from 'react';

// Створення контексту
export const TaskContext = createContext();

// Компонент провайдера, який огортатиме весь застосунок
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // Функція додавання задачі
  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  // Функція перемикання статусу виконано/невиконано
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Функція видалення задачі
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
