import * as React from "react";

const Container = ({ children, page }) => {
  return <div className={`grid-container ${page ? page : ""}`}>{children}</div>;
};

export default Container;
