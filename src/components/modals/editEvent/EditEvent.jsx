import React, { useState } from "react";
import TimePicker from "react-time-picker";
import {
  AddEventContainer,
  ButtonsContainer,
  Button,
} from "../addEvent/AddEvent.styles";
import { TextInput, TextArea } from "../../inputs/inputs";
import { editEvent } from "../../../redux/events";
import { useSelector, useDispatch } from "react-redux";
import {
  modalOpen,
  addEventModal,
  editEventModal,
} from "../../../redux/modalsStatus";

const EditEvent = ({ editEventInfo }) => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  const [eventTime, onChange] = useState(
    editEventInfo[0].time ? editEventInfo[0].time : "12:00"
  );
  const [eventTitle, setTitle] = useState(
    editEventInfo[0].title ? editEventInfo[0].title : ""
  );
  const [eventDesc, setDesc] = useState(
    editEventInfo[0].description ? editEventInfo[0].description : ""
  );

  const handleTextInput = (e) => {
    setTitle(e.target.value);
  };

  const handleTextArea = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = () => {
    const newEvents = events.filter((e) => e.id !== editEventInfo[0].id);
    dispatch(
      editEvent([
        ...newEvents,
        {
          id: editEventInfo[0].id,
          date: editEventInfo[0].date,
          time: eventTime,
          title: eventTitle,
          description: eventDesc,
        },
      ])
    );
    handleCancel();
  };

  const handleCancel = () => {
    dispatch(modalOpen(false));
    dispatch(addEventModal(false));
    dispatch(editEventModal(false));
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

export default EditEvent;
