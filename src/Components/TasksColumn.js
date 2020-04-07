import React from 'react';
import './TaskColumn.css';

import Task from './Task';

function TaskColumn() {
  return (
    <div className="TaskColumn">
      
      <Task/>
      <Task/>
      <button className="btn-addTask">Add Task</button>
    </div>
  );
}

export default TaskColumn;
