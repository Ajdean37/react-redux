import { Link } from "react-router-dom";
import './Navbar.css';
import {connect} from "react-redux";

const Navbar = ( {currentCount} ) => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/counter">Counter</Link></li>
      </ul>
      {/* <span>Current Count: {props.currentCount}</span> */}
      <span>Current Count: {currentCount}</span>

    </div>
  );
}

const mapeStateToProps = ({currentCount}) => ({currentCount});

export default connect(mapeStateToProps)(Navbar);
