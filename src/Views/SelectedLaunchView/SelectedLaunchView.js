import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { connect } from "react-redux"

const SelectedLaunchView = () => {

  const urlParams = useParams();

  //ERROR
  
  // useEffect(() => {
  //   let action = {type: 'SELECT_LAUNCH_BY_ID', payload: {urlParams.id} }; 
  //   dispatch(action);
  // }, [])

  return (
    <div>
      <h1>Hello view</h1>
    </div>
  )
}

export default connect()(SelectedLaunchView);
