export function noEventModal(status) {
  return {
    type: "NO_EVENT_MODAL",
    payload: status,
  };
}

const modalStatus = {
  noEvent: true,
  addEvent: false,
  withEvent: false,
};

export default function modalStatusReducer(state = modalStatus, action) {
  switch (action.type) {
    case "NO_EVENT_MODAL":
      return {
        ...state,
        noEvent: action.payload,
      };
    default:
      return state;
  }
}
