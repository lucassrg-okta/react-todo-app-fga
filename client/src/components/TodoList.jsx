import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, updatePriority, updateStatus }) => {
  return (
    <div className="mt-4">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updatePriority={updatePriority}
          updateStatus={updateStatus}
        />
      ))}
    </div>
  );
};

export default TodoList;
