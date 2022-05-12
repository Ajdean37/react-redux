import { Link, useNavigate } from "react-router-dom";

const HomeView = () => {

  let navigate = useNavigate();

  const handleNavigateUser = (e) => {
    navigate('/about');
  }

  return (
    <div>
      <h1>Welcome To The Home View</h1>

      <Link to='/about'>Link To About Page</Link>

      <div>
        <button onClick={handleNavigateUser} >Programatically Route User to About Page</button>
      </div>

      <br></br>
      <Link to='launches'>Go To Launches</Link>

    </div>
  );
}

export default HomeView;
