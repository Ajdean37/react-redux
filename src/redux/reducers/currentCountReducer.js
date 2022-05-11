// an integer

const currentCountReducer = (state = 0, action ) => {
  switch (action.type) {
    case 'SET_COUNT':
      return action.payload.nextCount;

    case 'RESET_COUNT':
      return 0;

    case 'INCREMENT_COUNT':
      return state + 1;
      
    case 'DECREMENT_COUNT':
      return state - 1;
  
    default:
      return state;
  }
}

export default currentCountReducer