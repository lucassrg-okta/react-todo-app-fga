import './Todo.css';

import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import 'flowbite/dist/flowbite.css';
import { Button, Navbar } from 'flowbite-react';

function Todo() {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    const user = 'john.doe@atko.email';
    try {
      const response = await fetch(`http://localhost:8000/todos/${user}`);
      const json = await response.json();
      console.log(json);
      setTodos(json);
    }
    catch (err) {
      console.error(err);
    }
  }

  // Load todos 
  useEffect(() => getData, []);

  const addTodo = async (todo) => {
    try {
      const response = await fetch(`http://localhost:8000/todos`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
      });
      console.log("Add response = ", response);
    } catch (error) {
      console.error(error);
    }
    setTodos([...todos, todo]);
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${id}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
      });
      console.log("Delete response = ", response);
    } catch (error) {
      console.error(error);
    }

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updatePriority = async (id, updatedPriority) => {
    try {
      const response = await fetch(`http://localhost:8000/todos/priority/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPriority)
      });
      setTodos(todos.map(todo => todo.id === id ? updatedPriority : todo));
      console.log("Update response = ", response);
    }
    catch (error) {
      console.error(error);
    }
  };

  const updateStatus = async (id, updatedStatus) => {
    try {
      const response = await fetch(`http://localhost:8000/todos/status/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedStatus)
      });
      setTodos(todos.map(todo => todo.id === id ? updatedStatus : todo));
      console.log("Update response = ", response);
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} updatePriority={updatePriority} updateStatus={updateStatus} />
    </div>
  );
}

export default Todo;
