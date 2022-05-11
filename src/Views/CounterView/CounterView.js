import {connect} from "react-redux";

const CounterView = ( {currentCount, dispatch} ) => {

  const handleIncrementCount = (e) => {
    let action = {type: 'INCREMENT_COUNT'};
    dispatch( action );
  }
  const handleDecrement = (e) => {
    let action = {type: 'DECREMENT_COUNT'};
    dispatch( action );
  }
  const handleReset = (e) => {
    let action = {type: 'RESET_COUNT'};
    dispatch( action );
  }

  return (
    <div>
      <h1>Counter</h1>

      <h2>Current Count: {currentCount}</h2>

      <div>
        <button onClick={handleIncrementCount}>Increment Count</button>
      </div>
      <div>
        <button onClick={handleDecrement}>Decrement Count</button>
      </div>
      <div>
        <button onClick={handleReset}>Reset Count</button>
      </div>
    </div>
  )
}

const mapeStateToProps = ({currentCount}) => ({currentCount});

export default connect(mapeStateToProps)(CounterView);