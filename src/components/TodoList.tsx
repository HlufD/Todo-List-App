import { useContext, useState } from "react";
import { Task } from "../types/Task";
import TodoContext from "../context/todoContext";
import Todo from "./Todo";
import("../styles/TodoList.scss");
function TodoList() {
  const [filterValue, setfilterValue] = useState<string>("All");
  const { todos } = useContext(TodoContext);
  const categories = [...new Set(todos.map((todo) => todo.category))];

  const filterdTodos =
    filterValue != "All"
      ? todos.filter((todo) => todo.category == filterValue)
      : todos;

  return (
    <div className="todos">
      <select
        className="select"
        name="filterValue"
        id=""
        value={filterValue}
        onChange={(e) => setfilterValue(e.target.value)}
      >
        <option value="All">All</option>
        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>

      {filterdTodos.map((todo: Task) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
