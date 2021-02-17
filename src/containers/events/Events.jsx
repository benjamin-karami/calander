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
import { editDetailinfo } from "../../redux/editDetailInfo";

const Events = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const upcomingEvents = events.filter(
    (e) =>
      moment(e.date).format("MMMM DD") >= moment(new Date()).format("MMMM DD")
  );

  let grouped_items = _.groupBy(upcomingEvents, (b) =>
    moment(b.date).startOf("day").format("MMMM DD")
  );

  _.values(grouped_items).forEach((arr) =>
    arr.sort((a, b) => moment(a.date).day() - moment(b.modDate).day())
  );

  const items = Object.keys(grouped_items).map(function (k) {
    const items = grouped_items[k].map((i) => {
      return i;
    });
    const obj = {
      name: k,
      title: items,
    };
    return obj;
  });

  const sortedArray = items.sort(
    (a, b) =>
      new moment(a.name).format("YYYYMMDD") -
      new moment(b.name).format("YYYYMMDD")
  );

  if (moment().format("MMMM DD") === sortedArray[0].name) {
    sortedArray[0].name = "Today Events";
  }

  const handleEventEdit = (id) => {
    console.log(id);
    dispatch(editDetailinfo(events.filter((e) => e.id === id)));
    dispatch(editEventModal(true));
    dispatch(modalOpen(true));
    dispatch(withEventModal(false));
    dispatch(eventDetailModal(false));
  };

  const handleEventDetail = (id) => {
    dispatch(editDetailinfo(events.filter((e) => e.id === id)));
    dispatch(eventDetailModal(true));
    dispatch(modalOpen(true));
    dispatch(withEventModal(false));
    dispatch(editEventModal(false));
  };

  const handleDeleteEvent = (id) => {
    const afterDeleteEvents = events.filter((e) => e.id !== id);
    dispatch(deleteEvent(afterDeleteEvents));
    dispatch(eventDetailModal(false));
    dispatch(withEventModal(true));
  };

  return (
    <Main>
      {sortedArray.map((item, i) => {
        return (
          <EventsContainer key={i}>
            <EventMonth className={item.name}>{item.name}</EventMonth>
            {item.title.map((e) => {
              return (
                <Event key={e.id}>
                  <EventTitle onClick={(event) => handleEventDetail(e.id)}>
                    {e.title}
                  </EventTitle>
                  <EventIcons>
                    <EventIcon
                      onClick={(event) => handleDeleteEvent(e.id)}
                      src={deleteIcon}
                      alt="deleteIcon"
                    />
                    <EventIcon
                      onClick={(event) => handleEventEdit(e.id)}
                      src={editIcon}
                      alt="editIcon"
                    />
                  </EventIcons>
                </Event>
              );
            })}
          </EventsContainer>
        );
      })}
    </Main>
  );
};

export default Events;
