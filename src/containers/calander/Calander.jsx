import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { useDispatch } from "react-redux";

import { userSelectedDate } from "../../redux/userSelectedDate";

const Calander = () => {
  const dispatch = useDispatch();

  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
    dispatch(userSelectedDate(dateState));
  };
  return (
    <>
      <Calendar value={dateState} onChange={changeDate} />
      <p>
        Current selected date is{" "}
        <b>{moment(dateState).format("MMMM D YYYY")}</b>
      </p>
    </>
  );
};

export default Calander;
