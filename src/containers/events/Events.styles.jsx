import styled from "styled-components";

export const Main = styled.div`
  margin: 30px 0 0;
  width: 100%;
`;

export const EventTitle = styled.div`
  font-size: 18px;
  color: #808080;
`;

export const EventsContainer = styled.div`
  margin: 0 0 40px;
  width: 100%;
  border-bottom: 2px solid #c0c0c0
`;

export const EventMonth = styled.h3`
  margin: 0;
`;

export const Event = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EventIcons = styled.div``;

export const EventIcon = styled.img`
  width: 15px;
  height: 20px;
  :last-child {
    margin-left: 10px;
  }
`;
