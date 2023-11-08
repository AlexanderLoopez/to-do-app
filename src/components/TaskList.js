import React, { useState } from 'react';
import TaskForm from './TaskForm';
import '../style sheets/TaskList.css';
import Task from './Task';

function TaskList() {

  const [tasks, setTask] = useState([]);

  const addTask = task => {
    console.log('Tarea agregada');
    console.log(task);
  }

  return (
    <>
      <TaskForm />
      <div className='task-list-container'>
        {
          tasks.map((task) =>
            <Task 
              text={task.text}
              completed={task.completed}
            />
          )
        }
      </div>
    </>
  );
};

export default TaskList;