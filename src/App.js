import React from 'react';
import { TaskProvider } from './context/TaskContext';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Statistics from './components/Statistics';
import Footer from './components/Footer';

function App() {
  return (
    <TaskProvider>
      <div style={{ 
        maxWidth: '550px', 
        margin: '40px auto', 
        padding: '25px', 
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)', 
        borderRadius: '12px', 
        fontFamily: 'Segoe UI, Roboto, sans-serif', 
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '400px'
      }}>
        <Header />
        <TaskForm />
        <Statistics />
        <TaskList />
        <Footer />
      </div>
    </TaskProvider>
  );
}

export default App;
