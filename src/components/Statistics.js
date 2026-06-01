import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function Statistics() {
  const { tasks } = useContext(TaskContext);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const incompleteTasks = totalTasks - completedTasks;

  return (
    <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '6px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
      <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#4a5568' }}>Статистика:</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
        <span>Усього задач: <strong>{totalTasks}</strong></span>
        <span style={{ color: '#2ecc71' }}>Виконано: <strong>{completedTasks}</strong></span>
        <span style={{ color: '#e74c3c' }}>Невиконано: <strong>{incompleteTasks}</strong></span>
      </div>
    </div>
  );
}

export default Statistics;
