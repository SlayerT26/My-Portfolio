import "./NavBar.css";

import { Link } from "react-scroll";

function NavBar() {
  return (
    <>
      <div className="NavBar">
        <div></div>
        <div></div>
        <div className="NavDivList">
          <ul className="NavTitleList">
            <li className="NavList">
              <Link
                className="NavLink"
                to="about"
                smooth={true}
                duration={1000}
              >
                About
              </Link>
            </li>
            <li className="NavList">
              <Link
                className="NavLink"
                to="projects"
                smooth={true}
                duration={1000}
              >
                Projects
              </Link>
            </li>
            <li className="NavList">
              <Link
                className="NavLink"
                to="contact"
                smooth={true}
                duration={1000}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
