import React, { useState, useEffect } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Đi chơi' },
    { id: 2, title: 'Đi chợ' },
    { id: 3, title: 'Đi học' },
  ])

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function featchPostList() {
      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data } = responseJSON;
        setPostList(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    featchPostList();
  }, [])

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id == todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList)
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList)
  }
  return (
    <div className="app">
      <h1>React hooks</h1>
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      <PostList posts={postList} />
    </div>
  );
}

export default App;
