import React from "react";
import Layout from "../components/Layout";

import { urls } from "../config/site";

const GetInvolvedPage = () => {
  const { volunteerForm } = urls;

  return (
    <Layout page="get-involved">
      <p>
        <a href={volunteerForm} target="_blank" rel="noreferrer noopenner">
          Volunteer at the Web3 Summit
        </a>
      </p>
    </Layout>
  );
};

export default GetInvolvedPage;
