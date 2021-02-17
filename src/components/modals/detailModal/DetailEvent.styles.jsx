import styled from "styled-components";

export const DetailEventContainer = styled.div`
  margin-top: 30px;
`;

export const RemainingDaysContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EventDetailContainer = styled.div`
  margin-top: 30px;
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
`;

export const EventIcons = styled.div`
  width: 20%;
`;

export const EventIcon = styled.img`
  width: 15px;
  height: 20px;
  :last-child {
    margin-left: 10px;
  }
`;

export const EventDesc = styled.p``;

export const RemainingTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :nth-child(2) {
    margin: 0 30px;
  }
`;
export const RemainingTime = styled.p`
  background-color: #00adef;
  color: #fff;
  font-weight: 600;
  font-size: 28px;
  border-radius: 4px;
  width: 43px;
  height: 53px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RemainingTimeLabel = styled.p`
  color: #00adef;
  font-weight: 600;
  font-size: 16px;
`;
