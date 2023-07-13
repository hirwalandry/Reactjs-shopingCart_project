import React, { useReducer } from "react";

const initialValues = {
  value: "",
  touched: false,
  error: null,
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "update":
      return {
        value: payload.value,
        touched: true,
        error: payload.error,
      };
    case "reset":
      return initialValues;
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};
function Exercise4(props) {
  const [state, dispatch] = useReducer(reducer, initialValues);
  console.log(state);
  return (
    <div>
      <input
        style={{
          borderColor: state.error ? "red" : "",
          outlineColor: state.error ? "red" : "",
        }}
        value={state.value}
        onChange={(e) =>
          dispatch({
            type: "update",
            payload: {
              value: e.target.value,
              error: state.touched ? e.target.value.length === 0 : null,
            },
          })
        }
      />
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default Exercise4;
