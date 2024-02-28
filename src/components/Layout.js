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
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
