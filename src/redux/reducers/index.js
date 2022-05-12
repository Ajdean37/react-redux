import {combineReducers} from "redux";
import currentCount from "./currentCountReducer";
import allLaunches from "./allLaunchesReducer";

const rootReducers = combineReducers({
// put all different reducers here
  currentCount,
  allLaunches,

});

export default rootReducers;