import { createStore } from "redux";
import { StudentReducer } from "./StudentReducer";
const store = createStore(StudentReducer);
export default store;
