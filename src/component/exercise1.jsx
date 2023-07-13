import React, { useState, useReducer } from "react";
import joi from "joi-browser";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};
const validationSchema = {
  firstname: joi.string().min(5).required().label("Firstname"),
  lastname: joi.string().min(5).required().label("Lastname"),
  email: joi.string().required().label("Email"),
  password: joi.string().min(5).required().label("Password"),
};
const touched = {
  firstname: false,
  lastname: false,
  email: false,
  password: false,
};
const errors = {};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "update":
      return {
        ...state,
        initialValues: {
          ...state.initialValues,
          [payload.key]: payload.value,
        },
        touched: { ...state.touched, [payload.key]: true },
        errors: { ...state.errors, [payload.key]: payload.errMessage },
      };
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};
function Form(props) {
  let [state, dispatch] = useReducer(reducer, {
    initialValues,
    touched,
    errors,
  });
  const [error, setError] = useState({});

  const validate = () => {
    const { error } = joi.validate(state.initialValues, validationSchema, {
      abortEarly: false,
    });

    if (!error) return null;
    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: validationSchema[name] };
    const { error } = joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  const onChange = ({ currentTarget: Input }) => {
    dispatch({
      type: "update",
      payload: {
        key: Input.name,
        value: Input.value,
        error: state.touched[Input.name] ? Input.value.length === 0 : null,
        errMessage: validateProperty(Input),
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errMessages = validate();

    setError(errMessages);
  };

  console.log(error);

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">FirstName:</label>
        <input
          type="text"
          name="firstname"
          placeholder="enter your firstname"
          value={state.initialValues.firstname}
          onChange={onChange}
        />

        <br />
        <label htmlFor="">LastName:</label>
        <input
          type="text"
          name="lastname"
          placeholder="enter your lastname"
          value={state.initialValues.lastname}
          onChange={onChange}
        />
        <br />
        <label htmlFor="">Email:</label>
        <input
          type="text"
          name="email"
          placeholder="enter your email"
          value={state.initialValues.email}
          onChange={onChange}
        />
        <br />
        <label htmlFor="">Password:</label>
        <input
          type="text"
          name="password"
          placeholder="enter your password"
          value={state.initialValues.password}
          onChange={onChange}
        />
        <br />
        <label htmlFor="">Confirm Password:</label>
        <input
          type="text"
          name="password"
          placeholder="enter your password again"
        />
        <br />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default Form;
