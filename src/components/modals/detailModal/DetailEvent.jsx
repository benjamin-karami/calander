import React from "react";
import deleteIcon from "../../../assets/img/deleteIcon.png";
import editIcon from "../../../assets/img/editIcon.png";
import {
  DetailEventContainer,
  RemainingDaysContainer,
  EventDetailContainer,
  Event,
  EventTitle,
  EventIcons,
  EventDesc,
  EventIcon,
  RemainingTimeContainer,
  RemainingTime,
  RemainingTimeLabel,
} from "./DetailEvent.styles";
import countdown from "countdown/countdown";
import momentcountdown from "moment-countdown/dist/moment-countdown";
import moment from "moment";

const DetailEvent = ({
  eventDetailInfo,
  handleDeleteEvent,
  handleEventEdit,
}) => {

  return (
    <DetailEventContainer>
      <RemainingDaysContainer>
        <RemainingTimeContainer>
          <RemainingTime>
            {moment(eventDetailInfo[0].date).countdown().days + (moment(eventDetailInfo[0].date).countdown().months*30)}
          </RemainingTime>
          <RemainingTimeLabel>Days</RemainingTimeLabel>
        </RemainingTimeContainer>
        <RemainingTimeContainer>
          <RemainingTime>
            {moment(eventDetailInfo[0].date).countdown().hours}
          </RemainingTime>
          <RemainingTimeLabel>Hours</RemainingTimeLabel>
        </RemainingTimeContainer>
        <RemainingTimeContainer>
          <RemainingTime>
            {moment(eventDetailInfo[0].date).countdown().minutes}
          </RemainingTime>
          <RemainingTimeLabel>Minutes</RemainingTimeLabel>
        </RemainingTimeContainer>
      </RemainingDaysContainer>
      <EventDetailContainer>
        <Event>
          <EventTitle>{eventDetailInfo[0].title}</EventTitle>
          <EventIcons>
            <EventIcon
              onClick={(e) => handleDeleteEvent(eventDetailInfo[0].id)}
              src={deleteIcon}
              alt="deleteIcon"
            />
            <EventIcon
              onClick={(e) => handleEventEdit(eventDetailInfo[0].id)}
              src={editIcon}
              alt="editIcon"
            />
          </EventIcons>
        </Event>
        <EventDesc>{eventDetailInfo[0].description}</EventDesc>
      </EventDetailContainer>
    </DetailEventContainer>
  );
};

export default DetailEvent;
