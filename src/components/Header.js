import React, { useState } from "react";
import { Link } from "gatsby";
import Modal from "./Modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

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
        <p className="header__location">BERLIN</p>
      </article>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/program">Program</Link>
        </li>
        <li>
          <Link href="/speakers">Speakers</Link>
        </li>
        <li>
          <Link href="/get-involved">Get Involved</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <button onClick={openModal}>Sign up</button>
        </li>
      </ul>
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
