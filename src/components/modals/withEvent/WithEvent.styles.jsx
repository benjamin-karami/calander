import styled from "styled-components";

export const WithEventContainer = styled.div`
  margin: 30px 5px;
`;

export const EventTitle = styled.h2`
  font-size: 18px;
  color: #808080;
`;

export const EventsContainer = styled.div`
  margin-bottom: 20px;
`;

export const Event = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  border-bottom: 3px solid #dadada;
`;

export const EventIcons = styled.div`
  width: 20%;
`;

export const EventIcon = styled.img`
  width: 20px;
  height: 25px;
  :last-child {
    margin-left: 10px;
  }
`;

export const AddNewEventBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: start;
  align-items: center;
  color: #19b3e2;
  cursor: pointer;
  font-size: 18px;
  transition: 0.4s;

  :hover {
    color: #1899c0;
  }

  span {
    font-size: 28px;
    display: inline-block;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #19b3e2;
  }
`;
