import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onClick }) => {
  return (
    <ul>
      { todos.map(todo => {
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    Proptypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: Proptypes.text.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
