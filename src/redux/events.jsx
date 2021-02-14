// export function noEventModal(status) {
//     return {
//       type: "NO_EVENT_MODAL",
//       payload: status,
//     };
//   }

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
];

export default function eventsReducer(state = events, action) {
  switch (action.type) {
    case "":
      return (state = action.payload);
    default:
      return state;
  }
}
