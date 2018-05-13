import React from 'react';
import '../styles/app-styles.css';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => {
    <div className="todo-wrapper">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
}

export default App;
