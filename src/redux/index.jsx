import userSelectedDateReducer from "./userSelectedDate";
import modalStatusReducer from "./modalsStatus";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  selectedDate: userSelectedDateReducer,
  modalStatus: modalStatusReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
