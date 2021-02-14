import userSelectedDateReducer from "./userSelectedDate";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  selectedDate: userSelectedDateReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
