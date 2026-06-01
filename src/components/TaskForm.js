import React, { useRef, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
  const inputRef = useRef(null);
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskTitle = inputRef.current.value.trim();
    
    if (!taskTitle) {
      inputRef.current.focus(); // Якщо порожньо — ставимо фокус назад на інпут
      return;
    }

    addTask(taskTitle); // Додаємо задачу через функцію з контексту
    inputRef.current.value = ''; // Очищаємо інпут за допомогою useRef
    inputRef.current.focus(); // Повертаємо фокус користувачу
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input 
        type="text"
        ref={inputRef}
        placeholder="Яку задачу потрібно виконати?"
        style={{ flex: '1', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px' }}
      />
      <button type="submit" style={{ padding: '10px 20px', background: '#3498db', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
        Додати
      </button>
    </form>
  );
}

export default TaskForm;
