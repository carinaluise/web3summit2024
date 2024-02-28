import React, { useState } from "react";
import Layout from "../components/Layout";
import Lines from "../components/Lines";
import Modal from "../components/Modal";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <Layout className="home">
      <div className="home__hero">
        <Lines />
        <div className="home__title-container">
          <h2 className="home__title">
            Advancing a fully functional and user-friendly decentralized web
          </h2>
        </div>
      </div>
      <article className="home__cta">
        <p>
          <button onClick={openModal}>Sign up</button>
          for updates
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer noopenner"
            href="https://docs.google.com/forms/d/e/1FAIpQLSe5X9pYNbSKFBJ-Rpis9Li4xqLnlIN1-iHNDOWAwb03qhx6_w/viewform?usp=sf_link"
          >
            Submit
          </a>
          a proposal
        </p>
      </article>
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </Layout>
  );
};

export default HomePage;
