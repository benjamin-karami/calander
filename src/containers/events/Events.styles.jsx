import styled from "styled-components";

export const Main = styled.div`
  margin: 30px 0 0;
  width: 95%;
  max-width: 500px;
`;

export const EventTitle = styled.h6`
  font-size: 18px;
  color: #bbb;
  margin: 0 0 10px;
`;

export const EventsContainer = styled.div`
  margin: 0 0 20px;
  width: 100%;
  h3.Today{
    color: #ff9100;
    font-size: 22px;
  }
`;

export const EventMonth = styled.h3`
  margin: 0 0 20px;
  color: #777;

`;

export const Event = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c0c0c0;
  margin-bottom: 10px;
`;

export const EventIcons = styled.div``;

export const EventIcon = styled.img`
  width: 15px;
  height: 20px;
  :last-child {
    margin-left: 10px;
  }
`;
