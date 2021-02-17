import styled from "styled-components";

export const CalanderSection = styled.div`
  background-color: #ededed;
  width: 100%;
  height: 100vh;
  padding-top: 30px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export const RecentEvent = styled.div`
  margin-top: 40px;
  background-color: #ffb75f;
  box-shadow: 0 2px 12px rgba(245, 166, 71, 0.5);
  color: #fff;
  border-radius: 4px;
  width: 200px;
  max-width: 250px;
  position: absolute;
  right: 12px;
  bottom: 30px;
`;

export const Event = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;

export const CalendarTitle = styled.p`
  font-size: 20px;
  margin: 0 0 20px;
  color: #9e9e9e;
  font-weight: 600;
`;
