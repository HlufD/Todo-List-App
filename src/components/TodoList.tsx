import { useContext } from "react";
import { Task } from "../types/Task";
import TodoContext from "../context/todoContext";
import Todo from "./Todo";

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <div className="todos">
      {todos.map((todo: Task) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
