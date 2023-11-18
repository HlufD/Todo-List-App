import { useContext } from "react";
import TodoContext from "../context/todoContext";
import { FaTrash } from "react-icons/fa";
import { Task } from "../types/Task";
import("../styles/Todo.scss");
import classNames from "classnames";
import { toast } from "react-toastify";
function Todo({ todo }: { todo: Task }) {
  const { removeTodo, toggleTodo } = useContext(TodoContext);

  const onDeletHandler = (id: string) => {
    removeTodo(id);
    toast.success("Task deleted");
  };

  const onChacked = (id: string) => {
    toggleTodo(id);
  };
  return (
    <div key={todo.id} className="todo">
      <div className="todo-chekeck">
        <input
          type="checkbox"
          name=""
          checked={todo.isCompleted}
          onChange={() => onChacked(todo.id)}
        />
        <p>{todo.task}</p>
        <div
          className={classNames({ "straight-line": todo.isCompleted })}
        ></div>
      </div>
      <div className="acctions">
        <FaTrash
          onClick={() => onDeletHandler(todo.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Todo;
