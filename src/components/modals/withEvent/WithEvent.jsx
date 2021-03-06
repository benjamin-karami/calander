import React from "react";
import deleteIcon from "../../../assets/img/deleteIcon.png";
import editIcon from "../../../assets/img/editIcon.png";
import { useSelector, useDispatch } from "react-redux";
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
import {
  noEventModal,
  withEventModal,
  addEventModal,
  editEventModal,
} from "../../../redux/modalsStatus";
import { deleteEvent } from "../../../redux/events";

const WithEvent = ({ handleEventEdit, handleEventDetail }) => {
  const events = useSelector((state) => state.events);
  const selectedDate = useSelector((state) => state.selectedDate);
  const dispatch = useDispatch();

  const selectedEvents = events.filter(
    (event) =>
      moment(event.date).format("MMMM D YYYY") ===
      moment(selectedDate).format("MMMM D YYYY")
  );

  const handleAdd = () => {
    dispatch(noEventModal(false));
    dispatch(withEventModal(false));
    dispatch(addEventModal(true));
    dispatch(editEventModal(false));
  };

  const handleDelete = (id) => {
    const afterDeleteEvents = events.filter((e) => e.id !== id);
    dispatch(deleteEvent(afterDeleteEvents));
  };

  return (
    <WithEventContainer>
      <EventsContainer>
        {selectedEvents.map((event) => (
          <Event key={event.id}>
            <EventTitle onClick={(e) => handleEventDetail(event.id)}>
              {event.title}
            </EventTitle>
            <EventIcons>
              <EventIcon
                onClick={(e) => handleDelete(event.id)}
                src={deleteIcon}
                alt="deleteIcon"
              />
              <EventIcon
                onClick={(e) => handleEventEdit(event.id)}
                src={editIcon}
                alt="editIcon"
              />
            </EventIcons>
          </Event>
        ))}
      </EventsContainer>
      <AddNewEventBtn onClick={handleAdd}>
        <span>+</span>
        <p>Add Event</p>
      </AddNewEventBtn>
    </WithEventContainer>
  );
};

export default WithEvent;
