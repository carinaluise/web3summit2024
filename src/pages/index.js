import * as React from "react";
import Layout from "../components/Layout";
import Lines from "../components/Lines";

const HomePage = () => {
  return (
    <Layout className="home" title="Homepage">
      <Lines />
      <div className="home__title-container">
        <h2 className="home__title">
          Web3 Summit exists to facilitate a fully functional and user-friendly
          <br />
          decentralized web.
        </h2>
      </div>
    </Layout>
  );
};

export default HomePage;
