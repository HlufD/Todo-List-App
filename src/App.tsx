import { useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useLocalStorage } from "./hooks/useLocalStorage";

import("./styles/main.scss");

function App() {
  const { getTodos, storeTodos } = useLocalStorage("todos");

  useEffect(() => {
    getTodos() == undefined
      ? localStorage.setItem("todos", JSON.stringify([]))
      : null;
  }, [getTodos, storeTodos]);
  return (
    <>
      <div className="wrapper">
        <p className="title">My Todos</p>
        <TodoForm />
        <TodoList />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
