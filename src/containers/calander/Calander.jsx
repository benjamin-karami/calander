import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { RecentEvent, Event } from "./Calander.styles";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  modalOpen,
  noEventModal,
  withEventModal,
  addEventModal,
} from "../../redux/modalsStatus";
import { userSelectedDate } from "../../redux/userSelectedDate";

const Calander = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const [dateState, setDateState] = useState(new Date());
  const [dates, setDate] = useState([]);
  const [recentDate, setRecentDate] = useState("");

  useEffect(() => {
    let dates = [];
    events.map((event) => {
      dates = [...dates, moment(event.date).format("MMMM D YYYY")];
    });
    setDate(dates);

    const sortEvents = dates.sort((a, b) => {
      return moment(a).diff(b);
    });

    const upComingEvent = events.filter(
      (event) =>
        moment(event.date).format("MMMM DD YYYY") ===
        moment(
          sortEvents.filter(
            (e) => e >= moment(new Date()).format("MMMM DD YYYY")
          )[0]
        ).format("MMMM DD YYYY")
    );
    setRecentDate(upComingEvent[0].title);

    console.log(upComingEvent);
  }, [events]);

  const changeDate = (e) => {
    setDateState(e);
    dispatch(userSelectedDate(e));
    const formatedSelectedDate = moment(e).format("MMMM D YYYY");
    dispatch(modalOpen(true));
    if (dates.includes(formatedSelectedDate)) {
      dispatch(withEventModal(true));
      dispatch(noEventModal(false));
      dispatch(addEventModal(false));
    } else {
      dispatch(withEventModal(false));
      dispatch(noEventModal(true));
      dispatch(addEventModal(false));
    }
  };

  return (
    <>
      <Calendar value={dateState} onClickDay={changeDate} />
      <RecentEvent>
        <Event>{recentDate}</Event>
      </RecentEvent>
    </>
  );
};

export default Calander;
