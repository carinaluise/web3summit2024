import * as React from "react";
import Layout from "../components/Layout";
import Lines from "../components/Lines";

const HomePage = () => {
  return (
    <Layout className="home" title="Homepage">
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
          <a href="/">Sign up</a>
          for updates
        </p>
        <p>
          <a href="/">Submit</a>a proposal
        </p>
      </article>
    </Layout>
  );
};

export default HomePage;
