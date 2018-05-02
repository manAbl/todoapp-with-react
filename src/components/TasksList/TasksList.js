import React from 'react';
import '../../styles/list-styles.css';

const TasksList = (state) => {
  return (
    <div className="list-wrapper">
      <ul className="list">
      <form>
        <input type="text" placeholder="Do you have something to do?"/>
        <button className='btn btn-add-task'>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </form>
        <li className="list-item">
            {state.text}
        </li>
      </ul>
    </div>
  )
}

export default TasksList;
