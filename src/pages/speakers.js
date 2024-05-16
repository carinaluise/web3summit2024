import React from "react";
import Layout from "../components/Layout";
import { speakers } from "../../content/speakers.json";
import { urls } from "../config/site";

const sortedSpeakers = speakers.sort((a, b) => a.name.localeCompare(b.name));

const SpeakersPage = () => {
  const { submitForm } = urls;

  return (
    <Layout page="speakers">
      <div className="speakers-page-header">
        <h2>Speakers</h2>
        <p>
          Check back for new speakers, added weekly, or follow @web3summit for
          new announcements.
        </p>
        <p>
          <a href={submitForm} target="_blank" rel="noopener noreferrer">
            Apply to speak
          </a>{" "}
          at Web3 Summit 2024
        </p>
      </div>
      <ul className="speakers">
        {sortedSpeakers.map((item, index) => (
          <li key={index} className="speaker">
            <div className="speaker__name">{item.name}</div>
            <div className="speaker__company">{item.company}</div>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default SpeakersPage;
