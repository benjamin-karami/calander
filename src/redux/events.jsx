export function newEvent(event) {
  return {
    type: "NEW_EVENT",
    payload: event,
  };
}

export function deleteEvent(event) {
  return {
    type: "DELETE_EVENT",
    payload: event,
  };
}

export function editEvent(event) {
  return {
    type: "EDIT_EVENT",
    payload: event,
  };
}

const events = [
  {
    id: 7,
    date: "Sun Feb 28 2021 11:40:08 GMT+0330 (Iran Standard Time)",
    title: "Shrove Tuesday/Mardi Gras",
    description: "Christian Holidays",
    time: "12:00",
  },
  {
    id: 1,
    date: "Sun Feb 14 2021 11:40:08 GMT+0330 (Iran Standard Time)",
    title: "St. David's Day",
    description: "Christian Holidays",
    time: "14:00",
  },
  {
    id: 2,
    date: "Sun Feb 17 2021 11:40:08 GMT+0330 (Iran Standard Time)",
    title: "Revolution Day",
    description: "Holidays in Islamic Republic of Iran",
    time: "18:00",
  },
  {
    id: 3,
    date: "Sun Feb 16 2021 11:40:08 GMT+0330 (Iran Standard Time)",
    title: "dental appointment",
    description: "hello to you16",
    time: "12:00",
  },
  {
    id: 4,
    date: "Sun Feb 18 2021 11:40:08 GMT+0330 (Iran Standard Time)",
    title: "visit ben",
    description: "visiting ben",
    time: "10:00",
  },
  {
    id: 8,
    date: "Sun Feb 18 2021 11:45:08 GMT+0330 (Iran Standard Time)",
    title: "Maundy Thursday",
    description: "Christian Holidays",
    time: "10:00",
  },
  {
    id: 5,
    date: "Sun Apr 18 2021 10:35:08 GMT+0330 (Iran Standard Time)",
    title: "Easter Sunday",
    description: "Christian Holidays",
    time: "12:00",
  },
  {
    id: 6,
    date: "Sun Mar 18 2021 12:40:08 GMT+0330 (Iran Standard Time)",
    title: "Eid al-Fitr",
    description: "Muslim Holidays",
    time: "09:00",
  },
];

export default function eventsReducer(state = events, action) {
  switch (action.type) {
    case "NEW_EVENT":
      return [...state, action.payload];
    case "DELETE_EVENT":
      return (state = action.payload);
    case "EDIT_EVENT":
      return (state = action.payload);
    default:
      return state;
  }
}
