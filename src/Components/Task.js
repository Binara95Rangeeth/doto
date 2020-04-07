import React from 'react';
import './Task.css';

import { MdDeleteForever } from "react-icons/md";


function Task(props) {
  return (
    <div className="Task">
      <div className="col1">
        <input type="checkbox"/>
      </div>
      <div className="col2">
        <h2>Some Title</h2>
        <p>on Tuesday 2020/04/03  @ 8.00PM</p>
      </div>
      <div className="col3">
        <MdDeleteForever style={{width:"25px",height:"25px",margin:"10px",}}/>
      </div>
    </div>
  );
}

export default Task;
