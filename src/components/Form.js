import React from "react";

const Form = (props) => (
  <form onSubmit={props.getCountry}>
    <button>Search</button> <input type="text" name="nameCountry" />
  </form>
);

export default Form;
