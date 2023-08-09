import React from "react";

export default function TaskList(props) {
  const { todoList, changeDone } = props;
  let unFinshed = [];
  let Finshed = [];
  todoList.forEach((todo) => {
    if (todo.done === false) {
      unFinshed.push(
        <div key={todo.id}>
          <input type="checkbox" id={todo.id} onChange={changeDone} />
          <p>{todo.name}</p>
          <button>Edit</button>
        </div>
      );
    }
    if (todo.done === true) {
      Finshed.push(
        <div key={todo.id}>
          <input type="checkbox" id={todo.id} onChange={changeDone} />
          <p>{todo.name}</p>
          <button>Edit</button>
        </div>
      );
    }
  });

  return (
    <div>
      <h1>Chưa hoàn thành</h1>
      {unFinshed}
      <h1>Hoàn thành</h1>
      {Finshed}
    </div>
  );
}
