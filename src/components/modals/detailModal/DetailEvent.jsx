import React, { useEffect } from "react";
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
} from "./DetailEvent.styles";


import moment from "moment";

const DetailEvent = ({ eventDetailInfo, handleDeleteEvent, handleEventEdit }) => {
  return (
    <DetailEventContainer>
      <RemainingDaysContainer>helloe</RemainingDaysContainer>
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
