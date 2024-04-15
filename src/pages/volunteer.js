import React from "react";
import Layout from "../components/Layout";

import { urls } from "../config/site";

const VolunteerPage = () => {
  const { volunteerForm } = urls;

  return (
    <Layout page="volunteer">
      <p>
        Are you interested in actively participating and delving deeper into the
        world of Web3 at the Web3 Summit? If so, volunteering at this year's
        edition is the perfect fit for you!
      </p>

      <p>
        You’ll spend three days collaborating, coordinating, and gaining
        insights into the inner workings of organizing a congress.
      </p>

      <p>
        To volunteer, you must fulfil the following requirements: Commit to a
        minimum of 8 hours of volunteering Be available to attend the volunteer
        orientation in person on August 18, 2024 at the Funkhaus Berlin
        conference centre.
      </p>

      <p>
        In addition to an incredible experience, volunteers will benefit from:
        Free entry to the conference Complimentary food & drinks on the day of
        your assignment(s) A Web3 Summit T-shirt
      </p>

      <p>
        If you would like to volunteer at Web3 Summit, please fill out this{" "}
        <a href={volunteerForm} target="_blank" rel="noreferrer noopenner">
          form
        </a>
        .
      </p>

      <p>Deadline to submit the form: May 17, 2024</p>

      <p>
        We thank you in advance for your assistance at the Summit and are
        looking forward to seeing you there for three unforgettable days!{" "}
      </p>
    </Layout>
  );
};

export default VolunteerPage;
