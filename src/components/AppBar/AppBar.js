import React from 'react';
import '../../styles/appbar-styles.css';

const AppBar = () => {
  return (
      <nav className='box'>
         <button className='btn btn-select-all'>
          <i className="fa fa-list" aria-hidden="true"></i>
        </button>
        <button className='btn btn-trash'>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
        <button className='btn btn-undo'>
          <i className="fa fa-undo" aria-hidden="true"></i>
        </button>
      </nav>
    );
}

export default AppBar;
