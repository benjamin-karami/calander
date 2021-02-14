import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { RecentEvent, Event } from "./Calander.styles";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { noEventModal, withEventModal } from "../../redux/modalsStatus";

import { userSelectedDate } from "../../redux/userSelectedDate";

const Calander = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const [dateState, setDateState] = useState(new Date());
  const [dates, setDate] = useState([]);

  useEffect(() => {
    let dates = [];
    events.map((event) => {
      dates = [...dates, moment(event.date).format("MMMM D YYYY")];
    });
    setDate(dates);
  }, []);

  const changeDate = (e) => {
    setDateState(e);
    dispatch(userSelectedDate(dateState));
    const formatedSelectedDate = moment(e).format("MMMM D YYYY");
    dispatch(
      !dates.includes(formatedSelectedDate)
        ? withEventModal(true)
        : noEventModal(true),
    );
  };
  return (
    <>
      <Calendar value={dateState} onClickDay={changeDate} />
      <RecentEvent>
        <Event>Recent Event is here</Event>
      </RecentEvent>
    </>
  );
};

export default Calander;
