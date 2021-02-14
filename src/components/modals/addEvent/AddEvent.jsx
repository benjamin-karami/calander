import React, { useState } from "react";
import TimePicker from "react-time-picker";
import { AddEventContainer } from "./AddEvent.styles";
import { TextInput, TextArea } from "../../inputs/inputs";
import { newEvent } from "../../../redux/events";
import { useSelector, useDispatch } from "react-redux";

const AddEvent = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.selectedDate);
  const [eventTime, onChange] = useState("12:00");
  const [eventTitle, setTitle] = useState("");
  const [eventDesc, setDesc] = useState("");

  const handleTextInput = (e) => {
    setTitle(e.target.value);
  };

  const handleTextArea = (e) => {
    setDesc(e.target.value);
  };

  const handleClick = () => {
    dispatch(
      newEvent({
        id: 10,
        date: `${selectedDate}`,
        time: eventTime,
        title: eventTitle,
        description: eventDesc,
      })
    );
  };

  return (
    <AddEventContainer>
      <TimePicker onChange={onChange} value={eventTime} disableClock={true} />
      <TextInput
        value={eventTitle}
        label={"Title"}
        onChange={handleTextInput}
      />
      <TextArea
        value={eventDesc}
        label={"Description"}
        onChange={handleTextArea}
      />

      <button onClick={handleClick}>button</button>
    </AddEventContainer>
  );
};

export default AddEvent;
