import React from "react";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";

function Layout({ children }) {
  return (
    <div className="layout">
      <Topbar bodyClass={"topbar"} />
      <Sidebar bodyClass={"sidebar"} />
      <div className="content">{children}</div>
    </div>
  );
}

export default Layout;
