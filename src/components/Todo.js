import React from 'react'
import PropTypes from 'prop-types'
import '../styles/list-styles.css'

const Todo = ({ onClick, completed, text }) => (
    <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      opacity: completed ? .5 : 1
    }}
    className="list-item"
  >
    {text}
    </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
