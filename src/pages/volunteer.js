import React from "react";
import Layout from "../components/Layout";

import { urls } from "../config/site";

const VolunteerPage = () => {
  const { volunteerForm } = urls;

  return (
    <Layout page="volunteer">
      <div className="page-header">
        <h2>Volunteer</h2>
        <p>
          Are you interested in actively participating and delving deeper into
          the world of Web3 at the Web3 Summit? <br />
          If so, volunteering at this year's edition is the perfect fit for you!{" "}
          <br />
          You’ll spend three days collaborating, coordinating, and gaining
          insights into the inner workings of organizing a congress.
        </p>
      </div>

      <p>
        To volunteer, you must fulfil the following requirements:
        <br />
        <span className="text-dark">
          - Commit to a minimum of 8 hours of volunteering
          <br />- Be available to attend the volunteer orientation in person on
          August 18, 2024 at&nbsp;the Funkhaus Berlin conference centre
        </span>
      </p>

      <p>
        In addition to an incredible experience, volunteers will benefit from:
        <br />
        <span className="text-dark">
          - Free entry to the conference Complimentary food & drinks on the day
          of your assignment(s)
          <br />- A Web3 Summit T-shirt
        </span>
      </p>

      <p>
        Submission:
        <br />
        <span className="text-dark">
          If you would like to volunteer at Web3 Summit, please fill out this
        </span>{" "}
        <a href={volunteerForm} target="_blank" rel="noreferrer noopenner">
          form
        </a>
        .
      </p>

      <p>
        Deadline to submit the form:
        <br />
        <span className="text-dark">May 17, 2024</span>
      </p>

      <p className="text-dark">
        We thank you in advance for your assistance at the Summit and are
        looking forward to seeing you there for three unforgettable days!{" "}
      </p>
    </Layout>
  );
};

export default VolunteerPage;
