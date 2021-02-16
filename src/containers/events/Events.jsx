import React, { useState } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import _ from "underscore";
import deleteIcon from "../../assets/img/deleteIcon.png";
import editIcon from "../../assets/img/editIcon.png";

import {
  EventIcons,
  EventTitle,
  Event,
  EventIcon,
  EventsContainer,
  EventMonth,
  Main,
} from "./Events.styles";
import {
  modalOpen,
  withEventModal,
  editEventModal,
  eventDetailModal,
} from "../../redux/modalsStatus";
import { deleteEvent } from "../../redux/events";

const Events = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const [editEventInfo, setEditEvent] = useState();
  const [eventDetailInfo, setEventDetail] = useState();

  const upcomingEvents = events.filter(
    (e) => moment(e.date) >= moment(new Date())
  );

  let grouped_items = _.groupBy(upcomingEvents, (b) =>
    moment(b.date).startOf("month").format("MMMM")
  );

  _.values(grouped_items).forEach((arr) =>
    arr.sort((a, b) => moment(a.date).day() - moment(b.modDate).day())
  );

  const items = Object.keys(grouped_items).map(function (k) {
    const titles = grouped_items[k].map((i) => {
      return <p key={i.id}>{i.title}</p>;
    });
    const obj = {
      name: k,
      title: titles,
    };
    return obj;
  });

  const handleEventEdit = (id) => {
    setEditEvent(events.filter((e) => e.id === id));
    dispatch(editEventModal(true));
    dispatch(modalOpen(true));
    dispatch(withEventModal(false));
    dispatch(eventDetailModal(false));
  };

  const handleEventDetail = (id) => {
    setEventDetail(events.filter((e) => e.id === id));
    dispatch(eventDetailModal(true));
    dispatch(modalOpen(true));
    dispatch(withEventModal(false));
  };

  const handleDeleteEvent = (id) => {
    const afterDeleteEvents = events.filter((e) => e.id !== id);
    dispatch(deleteEvent(afterDeleteEvents));
    dispatch(eventDetailModal(false));
    dispatch(withEventModal(true));
  };

  return (
    <Main>
      {items.map((item, i) => {
        return (
          <EventsContainer key={i}>
            <EventMonth>{item.name}</EventMonth>
            <Event>
              <EventTitle onClick={(e) => handleEventDetail(item.id)}>
                {item.title}
              </EventTitle>
              <EventIcons>
                <EventIcon
                  onClick={(e) => handleDeleteEvent(item.id)}
                  src={deleteIcon}
                  alt="deleteIcon"
                />
                <EventIcon
                  onClick={(e) => handleEventEdit(item.id)}
                  src={editIcon}
                  alt="editIcon"
                />
              </EventIcons>
            </Event>
          </EventsContainer>
        );
      })}
    </Main>
  );
};

export default Events;
