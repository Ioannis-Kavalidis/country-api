import React from "react";

const Form = (props) => (
  <form onSubmit={props.getCountry}>
    <button>Search</button>{" "}
    <input type="text" name="nameCountry" placeholder="type country..." />
  </form>
);

export default Form;
