import React from 'react';
import '../../styles/list-styles.css';

const TasksList = (state) => {
  return (
    <div className="list-wrapper">
      <ul className="list">
        <li className="list-item">
          <input type="text">
            {state.text}
          </input>
        </li>
      </ul>
    </div>
  )
}

export default TasksList;
