import React from "react";
import NavBar from "./NavBar";
import { Link } from "gatsby";
import SiteNavigation from "../paths.json";

const Header = ({ hideSubnav }) => {
  const pathName =
    typeof window !== "undefined" ? window.location.pathname : "/";

  const pathFirst = pathName.split("/").filter(Boolean)[0];

  const filteredSiteNavigation = SiteNavigation.paths.filter((item) => {
    const itemFirst = item.path.split("/").filter(Boolean)[0];
    return itemFirst === pathFirst;
  });

  return (
    <header className="header">
      <article className="header__info">
        <Link to={"/"}>
          <h1 className="header__title">Web3 Summit</h1>
        </Link>
        <p className="header__location">Funkhaus Berlin</p>
        <p className="header__date">22-24 Oct 18</p>
      </article>
      {/* <NavBar paths={SiteNavigation.paths} /> */}
      {!hideSubnav && filteredSiteNavigation.length > 0 && (
        <NavBar subNav paths={filteredSiteNavigation[0].pages} />
      )}
    </header>
  );
};

export default Header;
