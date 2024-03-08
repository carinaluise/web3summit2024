import React from "react";
import Layout from "../components/Layout";

import { urls } from "../config/site";

const SpeakersPage = () => {
  const { submitForm } = urls;
  return (
    <Layout page="speakers">
      <p>
        <a href={submitForm} target="_blank" rel="noreferrer noopenner">
          Apply to speak
        </a>{" "}
        at Web3 Summit 2024
      </p>
    </Layout>
  );
};

export default SpeakersPage;
