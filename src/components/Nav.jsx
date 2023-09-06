import { Link } from "react-router-dom";

function Nav() {
  return (
    <div id="navbar">
      <Link to={"/"}> Home</Link>
      <Link to={"/blue"}> blue</Link>
      <Link to={"/red"}> red</Link>
    </div>
  );
}

export default Nav;
