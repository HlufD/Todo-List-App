import { Task } from "../types/Task";

export const useLocalStorage = (key: string) => {
  const storeTodos = (value: Task | Task[]) => {
    localStorage.setItem(key, JSON.stringify([...getTodos(), value]));
  };

  const deleteTodo = (id: string) => {
    const todos = getTodos().filter((todo: Task) => todo.id !== id);
    localStorage.setItem(key, JSON.stringify(todos));
  };

  const getTodos = () => {
    const todos = localStorage.getItem(key);
    return todos ? JSON.parse(todos) : null;
  };

  const editTodo = (id: string) => {
    const todos = getTodos();
    if (todos) {
      const updatedTodos = todos.map((todo: Task) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      });

      localStorage.setItem(key, JSON.stringify(updatedTodos));
    }
  };
  return { getTodos, storeTodos, deleteTodo, editTodo };
};
