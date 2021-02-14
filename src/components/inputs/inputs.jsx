import React from "react";

export const TextInput = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input type="text" value={props.value} onChange={props.onChange} />
    </div>
  );
};

export const TextArea = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <textarea
        onChange={props.onChange}
        value={props.value}
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};
