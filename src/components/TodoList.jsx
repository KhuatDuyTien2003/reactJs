import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

export default function TodoList() {
  const [name, setName] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: new Date().toISOString(),
      name: "Todo",
      done: true,
    },
  ]);
  const getValue = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const addTodo = () => {
    const todo = {
      id: new Date().toISOString(),
      name: name,
      done: false,
    };
    console.log(todoList);
    setTodoList((prev) => {
      return [...prev, todo];
    });
  };
  const changeDone = (e) => {
    setTodoList((prev) => {
      prev.map((todo) => {
        if (e.target.id === todo.id) return { ...todo, done: true };
        return todo;
      });
    });
  };

  return (
    <div>
      <TaskInput getValue={getValue} addTodo={addTodo} value={name} />
      <TaskList todoList={todoList} changeDone={changeDone} />
    </div>
  );
}
