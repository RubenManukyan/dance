import "./header.scss";
import logo from "../../logo.png";
import search from "../../images/search.png";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Menu />
      <img src={search} alt="search" />
    </div>
  );
};

export default Header;
