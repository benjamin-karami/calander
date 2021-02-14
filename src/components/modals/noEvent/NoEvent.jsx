import React from "react";
import {
  ModalContainer,
  ModalHeader,
  ModalCloseBtn,
  AddEventContainer,
  AddEventIcon,
} from "./NoEvent.styles";
import addEventIcon from "../../../assets/img/noEventIcon.png";
import { useSelector, useDispatch } from "react-redux";
import { noEventModal } from "../../../redux/modalsStatus";

const NoEvent = () => {
  const modalStatus = useSelector((state) => state.modalStatus);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(noEventModal(!modalStatus));
  };
  return (
    <ModalContainer active={modalStatus.noEvent}>
      <ModalHeader>
        <h6>Events</h6>
        <ModalCloseBtn onClick={handleClose}>X</ModalCloseBtn>
      </ModalHeader>
      <AddEventContainer>
        <AddEventIcon src={addEventIcon} alt="noEventIcon" />
        <h2>ADD EVENT</h2>
      </AddEventContainer>
    </ModalContainer>
  );
};

export default NoEvent;
