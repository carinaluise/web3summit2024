import React from "react";
import Layout from "../components/Layout";

const ContactPage = () => {
  return (
    <Layout page="contact">
      <h4>General</h4>
      <p>
        <a href="#">contact@web3summit.com</a>
      </p>

      <h4>Press</h4>
      <p>
        <a href="#">press@web3summit.com</a>
      </p>

      <p>
        Follow{" "}
        <a
          href="https://x.com/web3summit"
          target="_blank"
          rel="noopener noreferrer"
        >
          @web3summit
        </a>
         on X for updates or subscribe to r/web3
      </p>
    </Layout>
  );
};

export default ContactPage;
