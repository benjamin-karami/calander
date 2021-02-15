import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  margin-top: 20px;
`;
export const Label = styled.label`
  color: #808080;
  font-size: 18px;
  margin-bottom: 4px;
  font-weight: 600;
`;
export const InputText = styled.input`
  border: none;
  border-bottom: 2px solid #19bef0;
  padding: 5px 0;
  outline: none;
  font-size: 16px;
  color: #333;
  width: 100%;

  ::placeholder {
    color: #333;
    font-size: 16px;
  }
`;
export const TextAreaInput = styled.textarea`
  border: none;
  border-bottom: 2px solid #19bef0;
  padding: 5px 0;
  outline: none;
  font-size: 16px;
  color: #333;
  width: 100%;

  ::placeholder {
    color: #333;
    font-size: 16px;
  }
`;
