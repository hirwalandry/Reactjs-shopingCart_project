import React, { useReducer } from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};
let values = {
  errors: {},
  touched: { name: false, email: false, password: false },
};
const validationSchema = Yup.object({
  name: Yup.string().min(6).required("required"),
  email: Yup.string().email().required("required"),
  password: Yup.string().min(6).required("required"),
});
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "update":
      return {
        ...state,
        initialValues: { ...state.initialValues, [payload.key]: payload.value },
        values: {
          ...state.values,
          errors: { ...state.values.errors, [payload.key]: payload.error },
          touched: { ...state.values.touched, [payload.key]: true },
        },
      };
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};
console.log(values.errors);
function Exercise3(props) {
  const [state, dispatch] = useReducer(reducer, { initialValues, values });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name</label>:{" "}
        <input
          type="text"
          name="name"
          value={state.initialValues.name}
          style={{
            boderColor: state.values.errors.name ? "red" : {},
            outlineColor: state.values.errors.name ? "red" : {},
          }}
          onChange={(e) => {
            dispatch({
              type: "update",
              payload: {
                key: e.currentTarget.name,
                value: e.currentTarget.value,
                error: state.values.touched.name
                  ? e.currentTarget.value.length === 0
                  : {},
                errMessage: validationSchema.name,
              },
            });
          }}
        />
        <br />
        <label>email</label>:{" "}
        <input
          type="email"
          name="email"
          value={state.initialValues.email}
          onChange={(e) => {
            dispatch({
              type: "update",
              payload: {
                key: e.currentTarget.name,
                value: e.currentTarget.value,
              },
            });
          }}
        />
        <br />
        <label>password</label>:{" "}
        <input
          type="password"
          name="password"
          value={state.initialValues.password}
          onChange={(e) => {
            dispatch({
              type: "update",
              payload: {
                key: e.currentTarget.name,
                value: e.currentTarget.value,
              },
            });
          }}
        />
        <br />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default Exercise3;
