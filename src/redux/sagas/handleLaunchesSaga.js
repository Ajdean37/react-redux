import axios from 'axios';
import { takeLatest, put } from "redux-saga/effects"



function* getAllLaunches( action ) {

  try {
    const response = yield axios.get('https://api.spacexdata.com/v5/launches');

    let reducerAction = {type: 'SET_ALL_LAUNCHES', payload: response.data}
    yield put( reducerAction );

  }catch ( error ) {
    console.error(error);
  }
}

function* selectLaunchById( action ) {


  try {
   
    console.log(action);

  }catch ( error ) {
    console.error(error);
  }
}




function* handleLaunchesSaga() {
  yield takeLatest('GET_ALL_LAUNCHES', getAllLaunches );
  yield takeLatest('SELECT_LAUNCH_BY_ID', selectLaunchById);
}

export default handleLaunchesSaga;
