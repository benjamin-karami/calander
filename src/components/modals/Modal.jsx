import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  modalOpen,
  withEventModal,
  editEventModal,
  eventDetailModal,
} from "../../redux/modalsStatus";
import AddEvent from "./addEvent/AddEvent";
import { ModalContainer, ModalHeader, ModalCloseBtn } from "./Modal.styles";
import NoEvent from "./noEvent/NoEvent";
import WithEvent from "./withEvent/WithEvent";
import EditEvent from "./editEvent/EditEvent";
import DetailEvent from "./detailModal/DetailEvent";
import { deleteEvent } from "../../redux/events";
import {editDetailinfo} from "../../redux/editDetailInfo"

const Modal = () => {
  const modalStatus = useSelector((state) => state.modalStatus);
  const events = useSelector((state) => state.events);
  const editOrDetailInfo = useSelector((state) => state.editOrDetailInfo);
  const dispatch = useDispatch();

  const handleEventEdit = (id) => {
    dispatch(editDetailinfo(events.filter((e) => e.id === id)));
    dispatch(editEventModal(true));
    dispatch(withEventModal(false));
    dispatch(eventDetailModal(false));
  };

  const handleEventDetail = (id) => {
    dispatch(editDetailinfo(events.filter((e) => e.id === id)));
    dispatch(eventDetailModal(true));
    dispatch(withEventModal(false));
  };

  const handleDeleteEvent = (id) => {
    const afterDeleteEvents = events.filter((e) => e.id !== id);
    dispatch(deleteEvent(afterDeleteEvents));
    dispatch(eventDetailModal(false));
    dispatch(withEventModal(true));
  };

  const handleCloseBtn = () => {
    dispatch(editEventModal(false));
    dispatch(withEventModal(false));
    dispatch(modalOpen(false));
    dispatch(eventDetailModal(false));
  };
  return (
    <>
      <ModalContainer active={modalStatus.modalOpen}>
        <ModalHeader>
          <h6>Events</h6>
          <ModalCloseBtn onClick={handleCloseBtn}>X</ModalCloseBtn>
        </ModalHeader>
        {modalStatus.noEvent ? <NoEvent /> : null}
        {modalStatus.withEvent ? (
          <WithEvent
            handleEventEdit={handleEventEdit}
            handleEventDetail={handleEventDetail}
          />
        ) : null}
        {modalStatus.addEvent ? <AddEvent /> : null}
        {modalStatus.editEvent ? (
          <EditEvent
            editEventModal={editEventModal}
            editEventInfo={editOrDetailInfo}
          />
        ) : null}
        {modalStatus.eventDetail ? (
          <DetailEvent
            eventDetailInfo={editOrDetailInfo}
            handleEventEdit={handleEventEdit}
            handleDeleteEvent={handleDeleteEvent}
          />
        ) : null}
      </ModalContainer>
    </>
  );
};

export default Modal;
