import React from "react";
import deleteIcon from "../../../assets/img/deleteIcon.png";
import editIcon from "../../../assets/img/editIcon.png";
import {
  WithEventContainer,
  EventIcons,
  EventsContainer,
  EventTitle,
  Event,
  EventIcon,
  AddNewEventBtn,
} from "./WithEvent.styles";

const WithEvent = () => {
  return (
    <WithEventContainer>
      <EventsContainer>
        <Event>
          <EventTitle>Moms birthDay</EventTitle>
          <EventIcons>
            <EventIcon src={deleteIcon} alt="deleteIcon" />
            <EventIcon src={editIcon} alt="editIcon" />
          </EventIcons>
        </Event>
        <Event>
          <EventTitle>Moms birthDay</EventTitle>
          <EventIcons>
            <EventIcon src={deleteIcon} alt="deleteIcon" />
            <EventIcon src={editIcon} alt="editIcon" />
          </EventIcons>
        </Event>
        <Event>
          <EventTitle>Moms birthDay</EventTitle>
          <EventIcons>
            <EventIcon src={deleteIcon} alt="deleteIcon" />
            <EventIcon src={editIcon} alt="editIcon" />
          </EventIcons>
        </Event>
      </EventsContainer>

      <AddNewEventBtn>
        <span>+</span>
        <p>Add Event</p>
      </AddNewEventBtn>
    </WithEventContainer>
  );
};

export default WithEvent;
