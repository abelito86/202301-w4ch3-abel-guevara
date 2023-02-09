import React, { useState } from 'react';
import './App.css';
import TaskCreator from './TaskCreator/TaskCreator';

function App() {
  const [currentInput, setCurrentInput] = useState('');
  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = event.currentTarget.task.value;
    console.log(setCurrentInput(inputValue));
  };

  return (
    <>
      <section className="task-creator">
        <TaskCreator task={handleClick} />
      </section>
      <div>{currentInput}</div>
    </>
  );
}

export default App;
