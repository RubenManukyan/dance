import { Link } from "react-router-dom";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/">
        <span>Dance Styles</span>
      </Link>
      <Link to="/choreography">
        <span>Choreography</span>
      </Link>
      <Link to="/tutorials">
        <span>Tutorials</span>
      </Link>
      <Link to="/fitness">
        <span>Fitness</span>
      </Link>
    </div>
  );
};

export default Menu;
