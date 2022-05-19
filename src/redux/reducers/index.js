import {combineReducers} from "redux";
import currentCount from "./currentCountReducer";
import allLaunches from "./allLaunchesReducer";
import selectedLaunch from "./selectedLaunchReducer";

const rootReducers = combineReducers({
// put all different reducers here
  currentCount,
  allLaunches,
  selectedLaunch,
});

export default rootReducers;