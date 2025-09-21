import { combineReducers, createStore } from "redux";
import counterReducer from "../reducers/counter.reducer";
import infoReducer from "../reducers/info.reducer";
import randomReducer from "../reducers/randome.reducer";
import changeReducer from "../reducers/change.reducer";
import changeColor from "../reducers/changeColor";

const rootReducer = combineReducers({
  counter: counterReducer,
  info: infoReducer,
  random: randomReducer,
  change:changeReducer,
  changeColor:changeColor,
 
});

const store = createStore(rootReducer);

export default store;
