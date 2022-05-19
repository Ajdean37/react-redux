import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { connect } from "react-redux"

const SelectedLaunchView = ( {dispatch, selectedLaunch} ) => {

  const urlParams = useParams();
  
  useEffect(() => {
    let action = {type: 'SELECT_LAUNCH_BY_ID', payload: {id: urlParams.id} }; 
    dispatch(action);
  }, []);

  console.log(selectedLaunch);

  return (
    <div>
      <h1>{selectedLaunch.name} <span>{selectedLaunch.success ? '😀' : '☹️'}</span></h1>
      <details>
        <summary>Open Summary</summary>
        <p>Flight # {selectedLaunch.flight_number}</p>
        <p>ID: {selectedLaunch.id}</p>
        <p>Had Net: {selectedLaunch.net ? 'Yes' : 'No'}</p>
      </details>

      <h2>Description</h2>
      <p>{selectedLaunch.details}</p>
    </div>
  )
}

const mapStateToProps = ({ selectedLaunch }) => ({ selectedLaunch });

export default connect(mapStateToProps)(SelectedLaunchView);
