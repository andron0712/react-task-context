import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <p style={{ color: '#95a5a6', textAlign: 'center', fontStyle: 'italic' }}>Задач поки немає.</p>;
  }

  return (
    <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 20px 0' }}>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
