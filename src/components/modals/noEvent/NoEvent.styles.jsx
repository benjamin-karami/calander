import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 80%;
  max-width: 350px;
  margin: 50px auto 0;
  border: 1px solid #333;
  padding: 15px 10px 20px;
  position: absolute;
  background-color: #fff;
  border-radius: 4px;
  display: none;
  ${({ active }) =>
    active &&
    `
    display: block !important;
  `}
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  h6 {
    font-size: 18px;
    color: #a5a5a5;
    margin: 0;
  }
`;

export const ModalCloseBtn = styled.button`
  background-color: #fff;
  font-size: 18px;
  color: #a5a5a5;
  border: none;
  cursor: pointer;
`;

export const AddEventContainer = styled.div`
  margin: 100px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: #a5a5a5;
    font-size: 25px;
  }
`;

export const AddEventIcon = styled.img`
  max-width: 110px;
`;
