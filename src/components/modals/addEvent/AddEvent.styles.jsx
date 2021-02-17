import styled, { css } from "styled-components";

export const AddEventContainer = styled.div`
    margin-top: 30px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const Button = styled.button`
  padding: 10px 35px;
  font-size: 18px;
  font-weight: 300;
  border: none;
  background-color: transparent;

  ${(props) =>
    props.primary &&
    css`
      background: #00adef;
      color: #fff;
      border: 2px solid #00adef;
    `}
  ${(props) =>
    props.secondary &&
    css`
      background: #fff;
      color: #00adef;
      border: 2px solid #00adef;
    `};
`;
