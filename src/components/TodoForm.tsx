import { useContext, useState } from "react";
import TodoContext from "../context/todoContext";

interface Task {
  id: string;
  task: string;
  category: string;
  isCompleted: boolean;
}

function TodoForm() {
  const [todo, setTodo] = useState<Task>({
    id: "",
    task: "",
    category: "",
    isCompleted: false,
  });
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
    addTodo(todo);
  };

  return (
    <div className="wrapper">
      <form>
        <input
          type="text"
          placeholder="Task"
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
          Create
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
