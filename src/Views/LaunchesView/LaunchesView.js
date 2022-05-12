import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const LaunchesView = ( {dispatch, allLaunches} ) => {

  useEffect(() => {
    let action = {type: 'GET_ALL_LAUNCHES'};
    dispatch(action);
  }, []);


  return (
    <table>
      <thead>
        <tr>
          <th>Flight</th>
          <th>Name</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {
          allLaunches.map( item => (
            <tr style={{textAlign: 'center'}} key={item.id}>
              <td>{item.flight_number}</td>
              <td>{item.name}</td>
              <td><Link to={`/Launches/${item.id}`}>View Rocket</Link></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

const mapStateToProps = ({ allLaunches }) => ({ allLaunches });

export default connect(mapStateToProps)(LaunchesView);