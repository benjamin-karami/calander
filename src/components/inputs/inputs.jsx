import React from "react";
import { InputContainer, Label, TextAreaInput, InputText } from "./inputs.styles";

export const TextInput = (props) => {
  return (
    <InputContainer>
      <Label>{props.label}</Label>
      <InputText type="text" value={props.value} onChange={props.onChange} />
    </InputContainer>
  );
};

export const TextArea = (props) => {
  return (
    <InputContainer>
      <Label>{props.label}</Label>
      <TextAreaInput
        onChange={props.onChange}
        value={props.value}
        cols="20"
        rows="7"
      ></TextAreaInput>
    </InputContainer>
  );
};
