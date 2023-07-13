import React from "react";

function Todo({ todo, dispatch, ACTIONS }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        delete
      </button>
    </div>
  );
}

export default Todo;
