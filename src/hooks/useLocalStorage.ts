import { Task } from "../types/Task";

export const useLocalStorage = (key: string) => {
  const storeTodos = (value: Task | Task[]) => {
    localStorage.setItem(key, JSON.stringify([...getTodos(), value]));
  };

  const deleteTodo = (id: string) => {
    const todos = getTodos().filter((todo: Task) => todo.id != id);
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getTodos = () => {
    const todos = localStorage.getItem(key);
    return todos ? JSON.parse(todos) : null;
  };
  return { getTodos, storeTodos, deleteTodo };
};
