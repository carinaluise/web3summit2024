import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Modal from "./Modal";
import { urls } from "../config/site";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { tickets } = urls;

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <header className="header">
      <div className="header__title">
        <Link to={"/"}>
          <h1>
            Web3
            <br />
            Summit
            <br />
            2024
          </h1>
        </Link>
      </div>
      <div className="header__info">
        <p className="header__info__date">AUGUST 19-21</p>
        <p className="header__info__location">FUNKHAUS BERLIN</p>
      </div>
      <nav class="header__nav">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/volunteer">Volunteer</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button onClick={openModal}>Sign up</button>
          </li>
          <li>
            <a
              href={tickets}
              target="_blank"
              rel="noreferrer noopenner"
              className="external-link"
            >
              Tickets
            </a>
          </li>
        </ul>
      </nav>
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
