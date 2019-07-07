import React from "react";
import "./layout.css";

const Layout = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0px 1.0875rem 1.45rem`,
      paddingTop: 0
    }}
  >
    {children}
  </div>
);

export default Layout;
