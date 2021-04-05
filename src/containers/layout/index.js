import React from "react";
import { useLocation } from "react-router";
import Header from "../../components/Header";

function Layout({ children }) {
  const location = useLocation();

  return (
    <div>
      {!location.pathname.includes("/login") && <Header />}
      {children}
    </div>
  );
}

export default Layout;
