import React, { useState } from "react";
import TodoContext from "./todoContext";
import { v4 as uuid } from "uuid";
import { Task } from "../types/Task";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface props {
  children: React.ReactNode;
}

const TodoProvider: React.FC<props> = ({ children }) => {
  const { storeTodos, getTodos, deleteTodo } = useLocalStorage("todos");
  const [todos, setTodos] = useState<Task[]>(getTodos() || []);
  const addTodo = (task: Task) => {
    task.id = uuid();
    setTodos([...todos, task]);
    storeTodos(task);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      })
    );
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    deleteTodo(id);
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
