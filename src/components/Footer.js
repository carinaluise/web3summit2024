import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__primary">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://2019.web3summit.com/"
        >
          Web3 Summit 2019
        </a>
        <span>,</span>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://2018.web3summit.com/"
        >
          2018
        </a>
      </div>
      <div className="footer__secondary">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://web3.foundation/legal-disclosures/"
        >
          Legal Disclosures
        </a>
        <span>&mdash;</span>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://web3.foundation/privacy-and-cookies/"
        >
          Privacy and Cookies
        </a>
      </div>
    </footer>
  );
};

export default Footer;
