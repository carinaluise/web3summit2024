import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="site">
      <Helmet>
        <title>
          Web3 Summit 2024: Leading the Charge in Blockchain Evolution -
          Connect, Innovate, Transform
        </title>
        <meta
          name="description"
          content="Web3 Summit is an open and collaborative space where developers from all around the world gather with one goal in mind; to advance a fully functional and user-friendly decentralized web, web3."
        />

        <meta property="og:url" content="https://web3summit.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Web3 Summit 2024: Leading the Charge in Blockchain Evolution -   Connect, Innovate, Transform"
        />
        <meta
          property="og:description"
          content="Web3 Summit is an open and collaborative space where developers from all around the world gather with one goal in mind; to advance a fully functional and user-friendly decentralized web, web3."
        />
        <meta
          property="og:image"
          content="https://web3summit.com/meta/web3summit_2024_berlin.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="web3summit.com" />
        <meta property="twitter:url" content="https://web3summit.com" />
        <meta
          name="twitter:title"
          content="Web3 Summit 2024: Leading the Charge in Blockchain Evolution -   Connect, Innovate, Transform"
        />
        <meta
          name="twitter:description"
          content="Web3 Summit is an open and collaborative space where developers from all around the world gather with one goal in mind; to advance a fully functional and user-friendly decentralized web, web3."
        />
        <meta
          name="twitter:image"
          content="https://web3summit.com/meta/web3summit_2024_berlin.png"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
