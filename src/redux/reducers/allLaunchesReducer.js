// an array of objects
const allLaunchesReducer = (state= [], action) => {

  switch (action.type) {
    case 'SET_ALL_LAUNCHES':
      return action.payload;

    case 'UNSET_LAUNCHES':
      return [];

    default:
      return state;
  }
}

export default allLaunchesReducer;