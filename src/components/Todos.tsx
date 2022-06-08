import React, { useReducer, useState } from "react";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.payload, completed: false }],
        todoCount: state.todoCount + 1,
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((t: any, idx: number) =>
          idx === action.payload ? { ...t, completed: !t.completed } : t
        ),
        todoCount: state.todoCount,
      };
    default:
      return state;
  }
};

export const Todos = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [
      { text: "one", complete: false },
      { text: "two", complete: true },
    ],
    todoCount: 2,
  });
  const [text, setText] = useState<string>("");

  return (
    <div className="todo-wrap">
      <h4>Number of todos: {todoCount}</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-todo", payload: text });
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
      {todos.map((t: any, idx: number) => (
        <div
          key={idx}
          onClick={() => dispatch({ type: "toggle-todo", payload: idx })}
          style={{ textDecoration: t.completed ? "line-through" : "" }}
        >
          {t.text}
        </div>
      ))}
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
    </div>
  );
};
