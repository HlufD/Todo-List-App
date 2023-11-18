import { useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useLocalStorage } from "./hooks/useLocalStorage";

import("./styles/main.scss");

function App() {
  const { getTodos } = useLocalStorage("todos");

  useEffect(() => {
    if (getTodos() == undefined) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
  }, [getTodos]);
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
