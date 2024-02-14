import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Header from "./Header";
import Animation from "./Animation";

const Layout = ({ title, children }) => {
  return (
    <div className="site">
      <Helmet>
        <title>{title} | Web3 Summit 2018</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Animation />
      <footer>
        <Link to="/imprint/">Imprint</Link>
      </footer>
    </div>
  );
};

export default Layout;
