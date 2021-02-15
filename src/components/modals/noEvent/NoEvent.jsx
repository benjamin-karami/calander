import React from "react";
import { NoEventContainer, AddEventIcon } from "./NoEvent.styles";
import addEventIcon from "../../../assets/img/noEventIcon.png";

import { useDispatch } from "react-redux";
import {
  noEventModal,
  withEventModal,
  addEventModal,
} from "../../../redux/modalsStatus";

const NoEvent = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(noEventModal(false));
    dispatch(withEventModal(false));
    dispatch(addEventModal(true));
  };

  return (
    <NoEventContainer onClick={handleAdd}>
      <AddEventIcon src={addEventIcon} alt="noEventIcon" />
      <h2>ADD EVENT</h2>
    </NoEventContainer>
  );
};

export default NoEvent;
