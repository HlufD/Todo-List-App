import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/modal";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useLocalStorage } from "./hooks/useLocalStorage";

import("./styles/main.scss");

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <TodoForm />
        </Modal>
      </div>
    </>
  );
}

export default App;
