import React from "react";
import deleteIcon from "../../../assets/img/deleteIcon.png";
import editIcon from "../../../assets/img/editIcon.png";
import { useSelector } from "react-redux";
import {
  WithEventContainer,
  EventIcons,
  EventsContainer,
  EventTitle,
  Event,
  EventIcon,
  AddNewEventBtn,
} from "./WithEvent.styles";
import moment from "moment";

const WithEvent = () => {
  const events = useSelector((state) => state.events);
  const selectedDate = useSelector((state) => state.selectedDate);

  const selectedEvents = events.filter(
    (event) =>
      moment(event.date).format("MMMM D YYYY") ==
      moment(selectedDate).format("MMMM D YYYY")
  );

  return (
    <WithEventContainer>
      <EventsContainer>
        {selectedEvents.map((event) => (
          <Event key={event.id}>
            <EventTitle>{event.title}</EventTitle>
            <EventIcons>
              <EventIcon src={deleteIcon} alt="deleteIcon" />
              <EventIcon src={editIcon} alt="editIcon" />
            </EventIcons>
          </Event>
        ))}
      </EventsContainer>
      <AddNewEventBtn>
        <span>+</span>
        <p>Add Event</p>
      </AddNewEventBtn>
    </WithEventContainer>
  );
};

export default WithEvent;
