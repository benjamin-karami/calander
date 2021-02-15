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

const events = [
  {
    id: 7,
    date: "Sun Feb 28 2021 11:40:08 GMT+0330 (Iran Standard Time)",
    title: "hello30",
    description: "hello to you30",
  },
  {
    id: 1,
    date: "Sun Feb 14 2021 11:40:08 GMT+0330 (Iran Standard Time)",
    title: "today is the day",
    description: "hello to you",
  },
  {
    id: 2,
    date: "Sun Feb 17 2021 11:40:08 GMT+0330 (Iran Standard Time)",
    title: "we can do it",
    description: "hello to you17",
  },
  {
    id: 3,
    date: "Sun Feb 16 2021 11:40:08 GMT+0330 (Iran Standard Time)",
    title: "dental appointment",
    description: "hello to you16",
  },
  {
    id: 4,
    date: "Sun Feb 18 2021 11:40:08 GMT+0330 (Iran Standard Time)",
    title: "visit ben",
    description: "hello to you18",
  },
  {
    id: 5,
    date: "Sun Feb 18 2021 10:35:08 GMT+0330 (Iran Standard Time)",
    title: "this is my day",
    description: "hello to you182",
  },
  {
    id: 6,
    date: "Sun Feb 18 2021 12:40:08 GMT+0330 (Iran Standard Time)",
    title: "fine fine fine",
    description: "hello to you183",
  },
];

export default function eventsReducer(state = events, action) {
  switch (action.type) {
    case "NEW_EVENT":
      return [...state, action.payload];
    case "DELETE_EVENT":
      return (state = action.payload);
    default:
      return state;
  }
}
