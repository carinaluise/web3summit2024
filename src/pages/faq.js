import React from "react";
import Layout from "../components/Layout";
import FAQ from "../components/FAQ";

const FAQPage = () => {
  return (
    <Layout>
      <div className="faq">
        <h2>FAQ</h2>
        <FAQ />
      </div>
    </Layout>
  );
};

export default FAQPage;
