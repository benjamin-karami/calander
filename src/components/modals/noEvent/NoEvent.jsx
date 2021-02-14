import React from "react";
import {
  NoEventContainer,
  AddEventIcon,
} from "./NoEvent.styles";
import addEventIcon from "../../../assets/img/noEventIcon.png";


const NoEvent = () => {
  return (
      <NoEventContainer>
        <AddEventIcon src={addEventIcon} alt="noEventIcon" />
        <h2>ADD EVENT</h2>
      </NoEventContainer>
  );
};

export default NoEvent;
