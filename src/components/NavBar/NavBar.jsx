import "./NavBar.css"
import Name from "./Name";
import Links from "./Links";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Name/>
      <Links/>
    </nav>
  );
};

export default NavBar;
