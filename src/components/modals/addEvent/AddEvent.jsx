import React, { useState } from "react";
import TimePicker from "react-time-picker";
import { AddEventContainer, ButtonsContainer, Button } from "./AddEvent.styles";
import { TextInput, TextArea } from "../../inputs/inputs";
import { newEvent } from "../../../redux/events";
import { useSelector, useDispatch } from "react-redux";
import { modalOpen, addEventModal } from "../../../redux/modalsStatus";

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

  const handleSubmit = () => {
    dispatch(
      newEvent({
        id: new Date().getTime(),
        date: `${selectedDate}`,
        time: eventTime,
        title: eventTitle,
        description: eventDesc,
      })
    );
  };

  const handleCancel = () => {
    dispatch(modalOpen(false));
    dispatch(addEventModal(false));
  };

  return (
    <AddEventContainer>
      <TimePicker
        clearIcon={false}
        onChange={onChange}
        value={eventTime}
        disableClock={true}
      />
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
      <ButtonsContainer>
        <Button primary onClick={handleSubmit}>
          Submit
        </Button>
        <Button onClick={handleCancel} secondary>
          Cancel
        </Button>
      </ButtonsContainer>
    </AddEventContainer>
  );
};

export default AddEvent;
