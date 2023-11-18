import { useContext } from "react";
import TodoContext from "../context/todoContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Task } from "../types/Task";

function Todo({ todo }: { todo: Task }) {
  const { removeTodo } = useContext(TodoContext);

  const onDeletHandler = (id: string) => {
    removeTodo(id);
  };

  const onEditHandler = (id: string) => {
    console.log(id);
  };
  const onChacked = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div key={todo.id} className="todo">
      <div className="todo-chekeck">
        <input type="checkbox" name="" onChange={(e) => onChacked(e)} />
        <p>{todo.task}</p>
      </div>
      <div className="acctions">
        <FaEdit
          onClick={() => onEditHandler(todo.id)}
          style={{ color: "green", cursor: "pointer" }}
        />
        <FaTrash
          onClick={() => onDeletHandler(todo.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Todo;
