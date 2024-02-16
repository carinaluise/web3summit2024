import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="header">
      <article className="header__info">
        <Link to={"/"}>
          <h1 className="header__title">
            Web3 <br />
            Summit <br />
            2024
          </h1>
        </Link>
        <p className="header__date">AUGUST 19-21</p>
        <p className="header__location">AMSTERDAM</p>
      </article>
      <article className="header__cta">
        <p>
          <a href="/">Sign up</a>
        </p>
        <a href="/">Submissions</a>
      </article>
    </header>
  );
};

export default Header;
