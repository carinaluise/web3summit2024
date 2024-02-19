import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ title, children }) => {
  return (
    <div className="site">
      <Helmet>
        <title>{title} | Web3 Summit 2018</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
