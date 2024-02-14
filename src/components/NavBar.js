import React from "react";
import { Link } from "gatsby";

const NavBar = ({ paths, subNav }) => {
  return (
    <nav className={`nav ${subNav ? "nav--sub" : "nav--site"}`}>
      <ul>
        {paths &&
          paths.map((path, i) => {
            return (
              <li key={i}>
                <Link to={path.path}>{path.title}</Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default NavBar;
