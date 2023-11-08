import React, { useState } from 'react';
import '../style sheets/TaskForm.css';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const manageChange = e => {
    console.log('Writing...')
  }

  const manageShipping = e => {
    const newTask = {
      id: '34545',
      text: 'Hi'
    }
  }

  return (
    <form className='task-form'>
      <input 
        className='task-input'
        type='text'
        placeholder='Write a Task'
        name='text'
        onChange={manageChange}
      />
      <button className='task-button'>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;