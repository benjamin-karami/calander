export function newEvent(event) {
  return {
    type: "NEW_EVENT",
    payload: event,
  };
}

const events = [
  {
    id: 1,
    date: "Sun Feb 14 2021 11:40:08 GMT+0330 (Iran Standard Time)",
    title: "hello",
    description: "hello to you",
  },
  {
    id: 2,
    date: "Sun Feb 17 2021 11:40:08 GMT+0330 (Iran Standard Time)",
    title: "hello17",
    description: "hello to you17",
  },
  {
    id: 3,
    date: "Sun Feb 16 2021 11:40:08 GMT+0330 (Iran Standard Time)",
    title: "hello16",
    description: "hello to you16",
  },
  {
    id: 4,
    date: "Sun Feb 18 2021 11:40:08 GMT+0330 (Iran Standard Time)",
    title: "hello18",
    description: "hello to you18",
  },
  {
    id: 5,
    date: "Sun Feb 18 2021 10:35:08 GMT+0330 (Iran Standard Time)",
    title: "hello182",
    description: "hello to you182",
  },
  {
    id: 6,
    date: "Sun Feb 18 2021 12:40:08 GMT+0330 (Iran Standard Time)",
    title: "hello183",
    description: "hello to you183",
  },
];

export default function eventsReducer(state = events, action) {
  switch (action.type) {
    case "NEW_EVENT":
      return [...state, action.payload];
    default:
      return state;
  }
}
