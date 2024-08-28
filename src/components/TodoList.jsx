import React, { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo.jsx";
import Edit from "./Edit.jsx";
uuidv4();
const TodoList = () => {
  // const [todo,todoValue] = useState([]);
  const [todos, setTodos] = useState([]);
  const createTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, isEditing: false }]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="rounded-md flex gap-2 flex-col">
      <Form createTodo={createTodo} />
      {todos.length > 0 && (
        <div className="rounded-md flex gap-2 flex-col bg-teal-200 p-8 w-auto ">
          {todos.map((todo, idx) =>
            todo.isEditing ? (
              <Edit key={idx} editTodo={editTask} task={todo} />
            ) : (
              <Todo
                task={todo}
                key={idx}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default TodoList;
