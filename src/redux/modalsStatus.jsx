export function modalOpen(status) {
  return {
    type: "MODAL_OPEN",
    payload: status,
  };
}

export function noEventModal(status) {
  return {
    type: "NO_EVENT_MODAL",
    payload: status,
  };
}

export function withEventModal(status) {
  return {
    type: "WITH_EVENT_MODAL",
    payload: status,
  };
}

export function addEventModal(status) {
  return {
    type: "ADD_EVENT_MODAL",
    payload: status,
  };
}

export function editEventModal(status) {
  return {
    type: "EDIT_EVENT_MODAL",
    payload: status,
  };
}

const modalStatus = {
  modalOpen: false,
  noEvent: false,
  addEvent: false,
  editEvent: false,
  withEvent: false,
};

export default function modalStatusReducer(state = modalStatus, action) {
  switch (action.type) {
    case "MODAL_OPEN":
      return {
        ...state,
        modalOpen: action.payload,
      };
    case "NO_EVENT_MODAL":
      return {
        ...state,
        noEvent: action.payload,
      };
    case "WITH_EVENT_MODAL":
      return {
        ...state,
        withEvent: action.payload,
      };
      case "EDIT_EVENT_MODAL":
        return  {
          ...state,
          editEvent: action.payload,
        };
      case "ADD_EVENT_MODAL":
        return {
          ...state,
          addEvent: action.payload,
        };
    default:
      return state;
  }
}
