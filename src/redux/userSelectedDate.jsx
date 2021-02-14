export function userSelectedDate(date) {
  return {
    type: "USER_SELECTED_DATE",
    payload: date,
  };
}

const selectedDate = {};

export default function userSelectedDateReducer(state = selectedDate, action) {
  switch (action.type) {
    case "USER_SELECTED_DATE":
      return (state = action.payload);
    default:
      return state;
  }
}
