import React from "react";
import Layout from "../components/Layout";

import { urls } from "../config/site";

const VolunteerPage = () => {
  const { volunteerForm } = urls;

  return (
    <Layout page="volunteer">
      <p>
        <a href={volunteerForm} target="_blank" rel="noreferrer noopenner">
          Volunteer
        </a>{" "}
        at the Web3 Summit
      </p>
    </Layout>
  );
};

export default VolunteerPage;
