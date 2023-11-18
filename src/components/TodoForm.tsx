import { useContext, useState } from "react";
import TodoContext from "../context/todoContext";
import { Task } from "../types/Task";
import { toast } from "react-toastify";
import("../styles/TodoForm.scss");

function TodoForm() {
  const intialState = {
    id: "",
    task: "",
    category: "",
    isCompleted: false,
  };
  const [todo, setTodo] = useState<Task>(intialState);

  const { addTodo } = useContext(TodoContext);

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (todo.category && todo.task) {
      addTodo(todo);
      toast.success("Todo added");
      setTodo(intialState);
    } else {
      toast.error("Task ad Category can't be empty!");
    }
  };

  return (
    <div className="form-wrapper">
      <form>
        <input
          type="text"
          placeholder="New Task"
          onChange={onChangeHandler}
          name="task"
          value={todo.task}
        />
        <input
          type="text"
          placeholder="Category"
          onChange={onChangeHandler}
          name="category"
          value={todo.category}
        />

        <button type="submit" onClick={onSubmitHandler}>
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
