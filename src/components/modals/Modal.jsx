import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  modalOpen,
  addEventModal,
  withEventModal,
  editEventModal,
} from "../../redux/modalsStatus";
import AddEvent from "./addEvent/AddEvent";
import { ModalContainer, ModalHeader, ModalCloseBtn } from "./Modal.styles";
import NoEvent from "./noEvent/NoEvent";
import WithEvent from "./withEvent/WithEvent";
import EditEvent from "./editEvent/EditEvent";

const Modal = () => {
  const modalStatus = useSelector((state) => state.modalStatus);
  const events = useSelector((state) => state.events);
  const [editEventInfo, setEditEvent] = useState();
  const dispatch = useDispatch();

  const handleEventEdit = (id) => {
    setEditEvent(events.filter((e) => e.id == id));
    dispatch(editEventModal(true));
    dispatch(withEventModal(false));
  };
  return (
    <>
      <ModalContainer active={modalStatus.modalOpen}>
        <ModalHeader>
          <h6>Events</h6>
          <ModalCloseBtn onClick={() => dispatch(modalOpen(!modalStatus))}>
            X
          </ModalCloseBtn>
        </ModalHeader>
        {modalStatus.noEvent ? <NoEvent /> : null}
        {modalStatus.withEvent ? (
          <WithEvent handleEventEdit={handleEventEdit} />
        ) : null}
        {modalStatus.addEvent ? <AddEvent /> : null}
        {modalStatus.editEvent ? (
          <EditEvent editEventModal={editEventModal} editEventInfo={editEventInfo} />
        ) : null}
      </ModalContainer>
    </>
  );
};

export default Modal;
