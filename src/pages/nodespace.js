import React from "react";
import Layout from "../components/Layout";

import { urls } from "../config/site";

const NodespacePage = () => {
  const { nodespaceForm } = urls;

  return (
    <Layout page="nodespace">
      <p>
        The Nodespace is your dedicated hub for in-depth discussions and
        immersive experiences centered around the decentralized web. Groups,
        individuals, and companies have the opportunity to program their own
        mini-conferences within the Nodespace.
        <br />
      </p>
      <p className="text-dark">
        Showcase your projects, host discussions, and engage with the Web3
        community in your own dedicated space. Whether you are a developer,
        researcher, or enthusiast, the Nodespace is where you connect with
        individuals, share ideas, and dive deep into shaping the future of Web3.
      </p>
      <p className="text-dark">
        The Nodespace will be open daily from August 19 to August 21 from 9:00 -
        18:00 or until the end of the conference on August 21.
      </p>
      <p className="text-dark">
        Ready to be part of the Nodespace experience? Complete the application
        form by June 24, 2024, to secure your spot. We can't wait to see your
        ideas come to life in the Nodespace! Thank you for your contribution to
        the Web3 Summit.
      </p>
      <p className="text-dark">
        We can't wait to see your ideas come to life in the Nodespace! Thank you
        for your contribution to the Web3 Summit.
      </p>
      <p>
        <a
          href={nodespaceForm}
          target="_blank"
          rel="noreferrer noopenner"
          className="link-cta external-link"
        >
          Apply to NodeSpace
        </a>
      </p>
    </Layout>
  );
};

export default NodespacePage;
