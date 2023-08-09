import React from "react";

export default function TaskInput(props) {
  const { getValue, addTodo, value } = props;
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Search...."
        onChange={getValue}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
