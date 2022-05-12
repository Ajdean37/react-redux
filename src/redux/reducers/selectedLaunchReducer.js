const initialState = {id: null, rocket: null, success: null, flight_number: null, cores: []};

// an object
const selectedLaunchReducer = (state= initialState, action) => {

  switch (action.type) {
    case 'SET_SELECTED_LAUNCHES':
      return action.payload;

    case 'UNSET_SELECTED_LAUNCHES':
      return {};

    case 'RESET_SELECTED_LAUNCHES':
      return initialState;

    default:
      return state;
  }
}

export default selectedLaunchReducer;