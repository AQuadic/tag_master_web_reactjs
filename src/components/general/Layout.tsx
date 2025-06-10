import React from "react";
import Header from "./header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default Layout;
