import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <li style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '12px', 
      marginBottom: '8px',
      borderRadius: '4px',
      border: '1px solid #eee',
      background: task.completed ? '#ecf0f1' : '#fff'
    }}>
      <span style={{ 
        textDecoration: task.completed ? 'line-through' : 'none',
        color: task.completed ? '#7f8c8d' : '#2c3e50',
        fontSize: '15px'
      }}>
        {task.title}
      </span>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button 
          onClick={() => toggleTask(task.id)}
          style={{ padding: '6px 12px', background: '#2ecc71', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
        >
          {task.completed ? 'Скасувати' : 'Виконано'}
        </button>
        <button 
          onClick={() => deleteTask(task.id)}
          style={{ padding: '6px 12px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
        >
          Видалити
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
