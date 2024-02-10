import React from "react";

const Layout = ({ children, className = "" }) => {
  return <div className={`w-full ${className}`}>{children}</div>;
};

export default Layout;
