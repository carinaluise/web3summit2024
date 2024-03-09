import React, { useState } from "react";
import Layout from "../components/Layout";
import Lines from "../components/Lines";

const HomePage = () => {
  return (
    <Layout className="home" page="home">
      <div className="home__hero">
        <Lines />
        <div className="home__title-container">
          <h2 className="home__title">
            Advancing a fully functional and user-friendly decentralized web
          </h2>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
