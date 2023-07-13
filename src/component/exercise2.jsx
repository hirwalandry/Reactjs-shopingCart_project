import React, { useReducer, useState } from "react";
import Todo from "./todo";

const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
};

const newTodo = (name) => {
  return { id: Date.now(), name, complete: false };
};
const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};
function Exercise2(props) {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            dispatch={dispatch}
            ACTIONS={ACTIONS}
          />
        );
      })}
    </div>
  );
}

export default Exercise2;
