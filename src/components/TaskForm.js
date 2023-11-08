import React, { useState } from 'react';
import '../style sheets/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const manageChange = e => {
    setInput(e.target.value);
  }

  const manageShipping = e => {

    /*Preventing the page from reloading */
    
    e.preventDefault();

    /*Giving the task an id*/
    
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    };

    props.onSubmit(newTask);
  };

  return (
    <form 
    className='task-form'
    onSubmit={manageShipping}>
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