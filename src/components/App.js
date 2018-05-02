import React from 'react';
import '../styles/app-styles.css';
import AppBar from './AppBar/AppBar';
import TasksList from './TasksList/TasksList';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      text: 'old text',
    }
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd() {
    this.setState({
      text: 'new text',
    })
  }
  render() {
    const props = {
      add: this.handleAdd,
    };
    return (
      <div className="todo-wrapper">
        <TasksList/>
        <AppBar handleAdd={props.add} />
      </div>
    );
  }
}

export default TodoApp;
