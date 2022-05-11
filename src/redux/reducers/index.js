import {combineReducers} from "redux";
import currentCount from "./currentCountReducer";

const rootReducers = combineReducers({
// put all different reducers here
  currentCount,

});

export default rootReducers;