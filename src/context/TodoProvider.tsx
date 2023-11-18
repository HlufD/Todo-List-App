import React, { useState } from "react";
import TodoContext from "./todoContext";
import { v4 as uuid } from "uuid";
import { Task } from "../types/Task";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface props {
  children: React.ReactNode;
}

const TodoProvider: React.FC<props> = ({ children }) => {
  const { storeTodos, getTodos, deleteTodo, editTodo } =
    useLocalStorage("todos");
  const [todos, setTodos] = useState<Task[]>(getTodos() || []);

  const addTodo = (task: Task) => {
    task.id = uuid();
    storeTodos(task);
    setTodos(getTodos());
  };

  const toggleTodo = (id: string) => {
    editTodo(id);
    setTodos(getTodos());
  };

  const removeTodo = (id: string) => {
    deleteTodo(id);
    setTodos(getTodos());
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
