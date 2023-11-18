import { createContext } from "react";
import { Task } from "../types/Task";

interface TodoState {
  todos: Task[];
  addTodo: (task: Task) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoContext = createContext<TodoState>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  removeTodo: () => {},
});

export default TodoContext;
